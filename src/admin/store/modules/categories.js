export default {
  namespaced: true,
  state: {
    categories: [],
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
  },
  actions: {
    async addCategory(store, title) {
      try {
        const response = await this.$axios.post(`/categories?token=${localStorage.getItem("tokenLoft")}`, { title });
      } catch (error) {
        throw new Error(error.response.data.error || error.response.data.message);
      }
    },

    async fetchCategories({ commit }) {
      try {
        const {data} = await this.$axios.get(`/categories/341?token=${localStorage.getItem("tokenLoft")}`);
        commit("SET_CATEGORIES", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};