import works from "./works.vue";
import "../../../default.pcss";

export default {
  title: "Works",
};

export const defaultView = () => ({
  components: {works},
  template: `
    <works
    />
  `
});