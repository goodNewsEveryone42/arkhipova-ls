import reviews from "./reviews.vue";
import "../../../default.pcss";

export default {
  title: "Reviews",
};

export const defaultView = () => ({
  components: {reviews},
  template: `
    <reviews
    />
  `
});