import Vue from "vue";


const titleBtn = {
  template: "#review-title-btn"
}

const slide = {
  template: "#review-slider-items",
  props: ["slide", "slides", "currentIndex"]
}

const slider = {
  template: "#review-slider-container",
  components: {
    slide
  },
  props: ["slides", "currentIndex"]
}

new Vue({
  el: "#review-component",
  template: "#review",
  components: {
    titleBtn,
    slider
  },

  data() {
    return {
      slides: [],
      currentIndex: 0
    }
  },

  watch: {
    currentIndex(value) {
      this.makeInfiniteLoop(value);
    }
},

  methods: {
    handleClick(event) {
      if (event==="next") {
        let arrayMake = this.makeArraySlides();
        let counter = this.currentIndex++;
        console.log(counter);
        for (let i = 0; i < arrayMake.length; i++) {
          if (counter === i) {
            arrayMake[counter].style.display = 'none';
        }
      }
      } else if (event==="prev") {
        this.currentIndex--;
        console.log(this.currentIndex)
      }
    },

    makeInfiniteLoop(value) {
      let arrayMake = this.makeArraySlides();
      const worksAmountZero = arrayMake.length - 1;
        if (value > worksAmountZero) {
            this.currentIndex = 0;
        } else if (value < 0) {
            this.currentIndex = worksAmountZero;
        }
    },

    makeArraySlides() {
      let arraySlides = this.$el.querySelectorAll('.slider-review__container');
      return arraySlides;
    }
  },
  
  created() {
    const data = require("../data/review.json");
    this.slides = data;
  }
});