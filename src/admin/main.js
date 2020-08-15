import Vue from "vue";
import App from "./App.vue";
import { router } from "../admin/router/router.js";
import { store } from "../admin/store/index.js";
import $axios from "../admin/requests.js";

store.$axios = $axios;

new Vue({
  el: "#app-root",
  router,
  store,
  render: (h) => h(App),
});
