import Vue from "vue";

const buttons = {
    template: "#slider-btn",
};

const previews = {
    template: "#slider-preview",
    props: ["works", "currentWork"]
};

const display = {
    template: "#slider-display",
    components: {
        buttons,
        previews
    },
    props: ["currentWork", "works", "currentIndex"],
    computed: {
        rewersedWorks() {
            const works = [...this.works];
            return works.reverse();
        }
    }
};

const tags = {
    template: "#slider-tags",
    props: ["currentWork", "tags"]
};

const info = {
    template: "#slider-info",
    components: {
        tags
    },
    props: ["currentWork"],
    computed: {
        tagsArray() {
            return this.currentWork.skills.split(",");
        }
    }
};

new Vue({
    el: "#slider-component",
    template: "#slider-container",
    components: {
        display,
        info
    },
    data() {
        return {
            works: [],
            currentIndex: 0
        };
    },
    computed: {
        currentWork() {
            return this.works[this.currentIndex];
        }
    },
    watch: {
        currentIndex(value) {
            this.makeInfiniteLoopForIndex(value);
        }
    },
    methods: {
        makeInfiniteLoopForIndex(value) {
            const worksAmountZero = this.works.length - 1;
            if (value > worksAmountZero) {
                this.currentIndex = 0;
            } else if (value < 0) {
                this.currentIndex = worksAmountZero;
            }
        },
        handleSlide(direction) {
            switch(direction) {
                case "next" :
                    this.currentIndex++;
                    break;
                case "prev":
                    this.currentIndex--;
                    break;
            }
        },
        makeArrWithRequareImages(array) {
            return array.map((item) => {
                const requiredPic = require(`../images/content/${item.photo}`);
                item.photo = requiredPic;
                return item;
            });
        }
    },
    created() {
        const data = require("../data/works.json");
        this.works = this.makeArrWithRequareImages(data);
    }
});