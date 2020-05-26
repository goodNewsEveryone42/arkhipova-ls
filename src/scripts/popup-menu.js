import Vue from "vue";

new Vue({
  el: "#header-component",
  template: "#header",

  methods: {
    close() {
      let menuPopup = this.getSelectorMainMenu();
      menuPopup.style.display = 'none';
    },

    open() {
      let menuPopup = this.getSelectorMainMenu();
      menuPopup.style.display = 'flex';
    },

    getSelectorMainMenu() {
      let menuPopup = document.querySelector(".header__menu-popup");
      return menuPopup;
    }
  }
});