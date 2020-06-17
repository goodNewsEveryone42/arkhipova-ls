export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    
  },
  actions: {
    async addCategory(store, title) {
      try {
        const response = await this.$axios.post(`/categories?token=${localStorage.getItem("tokenLoft")}`, { title });
      } catch (error) {
        throw new Error(error.response.data.error || error.response.data.message);
      }
    },
    async fetchCategories(store) {
      try {
        const {data} = await this.$axios.get("/categories/1");

      } catch (error) {

      }
    }
  },
};