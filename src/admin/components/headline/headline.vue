<template lang="pug">
  header.header-container
    .container
      .header
        .header__img-container
          img(:src="userpic", "header__img", "фотография разработчика")
        .header__description
          .header__name-panel
            p.header__name-develops {{username}}
            p.header__name-page Панель администрирования
          a(@click="").header__link-out Выйти
</template>
<script>
export default {
  props: ["userpic", "username"]
}
</script>

<style lang="postcss" scoped>
  .header-container {
  background-color: #424267;
}

.header {
  padding-top: 15px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p,
  a {
    color: #ffffff;
  }
}

  .header__name-develops {
    font-size: 18px;
    line-height: 34px;
    font-weight: 600;
  }

  .header__name-page {
    font-size: 14px;
    line-height: 34px;
    opacity: 0.5;
  }

  .header__link-out {
    line-height: 34px;
    text-decoration: underline;
  }

  .header__img-container {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
  }

  .header__description {
    width: 100%;
    margin-left: 23px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .header__name-panel {
    width: 415px;
    display: flex;
    justify-content: space-between;
    align-items: inherit;
  }


</style>