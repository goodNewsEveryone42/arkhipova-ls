import login from "./login.vue";
import "../../default.pcss";

export default {
title: "Login",
};

export const defaultView = () => ({
  components: {login},
  template: `
    <login
    />
  `
});