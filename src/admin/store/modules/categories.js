export default {
  namespaced: true,
  state: {
    categories: [],
    id: []
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },

    GET_ID(state, id) {
      state.id = id;
    }
  },
  actions: {
    async addCategory(store, title) {
      try {
        const response = await this.$axios.post(`/categories?token=${localStorage.getItem("tokenLoft")}`, { title });
      } catch (error) {
        throw new Error(error.response.data.error || error.response.data.message);
      }
    },

    async getIdUser({ commit }) {
      try {
        const response = await this.$axios.get(`/user?token=${localStorage.getItem("tokenLoft")}`);
        commit("GET_ID", response);
      } catch (error) {
        console.log(error);
      }
    },

    async fetchCategories({ commit }) {
      try {
        const {data} = await this.$axios.get(`/categories/341?token=${localStorage.getItem("tokenLoft")}`);
        commit("SET_CATEGORIES", data);
      } catch (error) {
        console.log(error);
      }
    }
  },
};