import Vue from "vue";

const buttons = {
  template: "#review-btn"
}

const titleBtn = {
  template: "#review-title-btn",
  components: {
    buttons
  }
}

const slide = {
  template: "#review-slider-items"
}

const slider = {
  template: "#review-slider-container",
  components: {
    slide
  },
  props: ["slider"]
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
      slides: []
    }
  },
  
  created() {
    const data = require("../data/review.json");
    this.slides = data;
  }
});