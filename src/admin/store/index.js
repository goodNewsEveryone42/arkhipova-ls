import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import categories from "../store/modules/categories.js";
import skills from "../store/modules/skills.js";

export const store = new Vuex.Store({
  modules: {
    categories,
    skills,
  },
});
