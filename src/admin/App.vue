<template lang="pug">
  .root
    .root-container
      router-view(name="headline")
      router-view(name="tabs")
    .container
      main.content-container
        router-view
    router-view(name="login")
</template>

<script>
  import headline from "./components/headline";
  import tabs from "./components/tabs";
  import login from "./components/login";

  export default {
    components: {
      headline,
      tabs,
    },
    methods: {
     handleChange(tab) {
      this.activeTabId = tab.id;
      this.$emit("tabChanged", tab);
      this.$router.push(tab.href);
    }
  }
  }
</script>

<style lang="postcss">
@import "./style.pcss";
</style>