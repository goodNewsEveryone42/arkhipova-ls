import Vue from "vue";
import Vue from "vue-carousel";
import VueRouter from "vue-router";
import App from "./App.vue";
import About from "./components/pages/about/about.vue";
import Works from "./components/pages/works/works.vue";
import Reviews from "./components/pages/reviews/reviews.vue";
import Login from "./components/login/login.vue";
import Headline from "./components/headline";
import Tabs from "./components/tabs";


const router = new VueRouter({
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

Vue.use(VueRouter);

new Vue({
  el: "#app-root",
  router,
  render: h => h(App)
});