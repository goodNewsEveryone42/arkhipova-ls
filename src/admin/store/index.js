import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import categories from "../store/modules/categories.js";
import skill from "../store/modules/skill.js";

export const store = new Vuex.Store({
  modules: {
    categories,
    skill
  }
});