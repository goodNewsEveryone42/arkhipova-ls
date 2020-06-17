import about from "./about.vue";
import "../../../default.pcss";

export default {
  title: "About",
  };

export const defaultView = () => ({
  components: {about},
  template: `
    <about
    />
  `
});