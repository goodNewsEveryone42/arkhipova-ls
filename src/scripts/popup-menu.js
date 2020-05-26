import Vue from "vue";

new Vue({
  el: "#header-component",
  template: "#header",

  methods: {
    close() {
      this.$refs.menuPopup.style.display = 'none';
    },

    open() {
      this.$refs.menuPopup.style.display = 'flex';
    },

    getSelectorMainMenu() {
      let menuPopup = document.querySelector(".header__menu-popup");
      return menuPopup;
    }
  }
});