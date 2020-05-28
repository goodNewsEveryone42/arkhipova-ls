import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import About from "./components/pages/about/about.vue";
import Works from "./components/pages/works/works.vue";
import Reviews from "./components/pages/reviews/reviews.vue";


const router = new VueRouter({
  routes: [
    {path: "/about", component: About},
    {path: "/works", component: Works},
    {path: "/reviews", component: Reviews}
  ]
});

Vue.use(VueRouter);

new Vue({
  el: "#app-root",
  router,
  render: h => h(App)
});