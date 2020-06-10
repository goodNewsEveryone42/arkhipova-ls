import Vue from "vue";
import { Carousel, Slide } from 'vue-carousel';


const titleBtn = {
  template: "#review-title-btn",

}

const slider = {
  template: "#review-slider-container",
  components: {
    Slide,
    Carousel
  },
  props: ["slides", "nextLabel", "prevLabel"]
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

  // computed: {
  //   nextLabel: function() { return `<div class=".slider-about-me__btn-left"> < </div>` },
  //   prevLabel: function() { return `<div class="slider-about-me__btn-right"> > </div>` },
  // },

  created() {
    const data = require("../data/review.json");
    this.slides = data;
  }
});