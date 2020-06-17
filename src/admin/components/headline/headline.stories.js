import headline from "./headline.vue";
import "../../default.pcss";

export default {
  title: "Header"
}

export const defaultView = () => ({
  components: {headline},
  template: `
    <headline
      userpic="https://picsum.photos/200"
      username="Анна Архипова"
      />
  `
});