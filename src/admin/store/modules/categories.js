export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {},
  actions: {
    addCategory(store, title) {
      console.log(title);
    }
  }
};