<template lang="pug">
  .root
    .root-container
      template
        headline(
          userpic="https://picsum.photos/200"
          username="Анна Архипова"
        )
        tabs(
          @tabChanged="handleChange"
        )
      .container
        main.content-container
          router-view
</template>

<script>
  import headline from "./components/headline";
  import tabs from "./components/tabs";
  

  export default {
    components: {
      headline,
      tabs,
    },
    methods: {
     handleChange(tab) {
      this.$router.push(tab.href);
    }
  }
  }
</script>

<style lang="postcss">
@import "./style.pcss";
</style>