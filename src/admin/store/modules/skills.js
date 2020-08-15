export default {
  namespaced: true,
  actions: {
    async addSkill({ commit }, skill) {
      try {
        const { data } = await this.$axios.post(
          `/skills?token=${localStorage.getItem("tokenLoft")}`,
          skill
        );
      } catch (err) {
        console.log(err);
      }
    },

    async fetchSkills({ commit }) {
      try {
        const { data } = await this.$axios.get(
          `/skills/341?token=${localStorage.getItem("tokenLoft")}`
        );
      } catch (err) {
        console.log(err);
      }
    },
  },
};
