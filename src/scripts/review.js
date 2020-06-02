import Vue from "vue";
import { Carousel, Slide } from 'vue-carousel';


const titleBtn = {
  template: "#review-title-btn"
}

const slider = {
  template: "#review-slider-container",
  components: {
    Slide,
    Carousel
  },
  props: ["slides"]
}

new Vue({
  el: "#review-component",
  template: "#review",
  components: {
    titleBtn,
    slider,
    Carousel,
    Slide
  },

  data() {
    return {
      slides: [],
    }
  },

  created() {
    const data = require("../data/review.json");
    this.slides = data;
  }
});