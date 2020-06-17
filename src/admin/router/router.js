import Vue from "vue";
import VueRouter from "vue-router";
import About from "../components/pages/about/about.vue";
import Works from "../components/pages/works/works.vue";
import Reviews from "../components/pages/reviews/reviews.vue";
import Login from "../components/login/login.vue";
import Headline from "../components/headline/headline.vue";
import Tabs from "../components/tabs/tabs.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {path: "/", components: {
      default: About,
      headline: Headline,
      tabs: Tabs,
  }},
    {path: "/about", components: {
      default: About,
      headline: Headline,
      tabs: Tabs,
    }},
    {path: "/works", components: {
      default: Works,
      headline: Headline,
      tabs: Tabs,
    }},
    {path: "/reviews", components: {
      default: Reviews,
      headline: Headline,
      tabs: Tabs,
    }},
    {path: "/login", components: {
      login: Login,
    }},
  ]
});