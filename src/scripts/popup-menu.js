import Vue from "vue";

new Vue({
  el: "#header-component",
  template: "#header",

  methods: {
    close(event) {
      console.log(event);
      // this.getSelectorMainMenu.style.display = 'none';
    },

    getSelectorMainMenu() {
      let menuPopup = document.querySelector(".header__menu-popup");
      return menuPopup;
    }
  }
});