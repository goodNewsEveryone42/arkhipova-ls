<template lang="pug">
section.tabs-container
  .container
    .tabs__wrapper
      ul.tabs
        li.tabs__item(
          v-for="tab in tabs",
          :key="tabs.id",
          :class="{ 'tabs__link--active': activeTabId === tab.id }"
        )
          a.tabs__link(@click="handleChange(tab)") {{ tab.title }}
</template>

<script>
const tabs = [
  { id: 0, title: "Обо мне", href: "/about" },
  { id: 1, title: "Работы", href: "/works" },
  { id: 2, title: "Отзывы", href: "/reviews" },
];
export default {
  data() {
    return {
      tabs,
      activeTabId: 0,
    };
  },
  methods: {
    handleChange(tab) {
      this.activeTabId = tab.id;
      // this.$emit("tabChanged", tab);
      this.$router.push(tab.href);
    },
  },
};
</script>

<style lang="postcss" scoped>
.tabs-container {
  background-color: #ffffff;
}

.tabs {
  display: flex;
}

.tabs__link {
  line-height: 36px;
  display: block;
  padding-top: 20px;
  padding-bottom: 17px;
  padding-left: 27px;
  padding-right: 32px;
}

.tabs__link--active {
  color: #383bcf;
  border-bottom: 3px solid #383bcf;
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  .container {
    margin: 0 auto;
    min-width: 320px;
    width: 100%;
  }

  .tabs__link {
    line-height: 36px;
    display: block;
    padding-top: 20px;
    padding-bottom: 17px;
    padding-left: 10px;
    padding-right: 10px;
    white-space: nowrap;
  }
}
</style>