<template lang="pug">
  .login-container
    .login-img-wrapper
      img(src="src/admin/images/contents/baloon.jpg")
      .login-img-back
    .login
      .login__container
        .login__btn-close
          button(type="button").btn-close
            <svg x="0px" y="0px" viewBox="0 0 174.239 174.239" style="enable-background:new 0 0 174.239 174.239;" xml:space="preserve">
              <path d="M146.537,1.047c-1.396-1.396-3.681-1.396-5.077,0L89.658,52.849c-1.396,1.396-3.681,1.396-5.077,0L32.78,1.047 c-1.396-1.396-3.681-1.396-5.077,0L1.047,27.702c-1.396,1.396-1.396,3.681,0,5.077l51.802,51.802c1.396,1.396,1.396,3.681,0,5.077 L1.047,141.46c-1.396,1.396-1.396,3.681,0,5.077l26.655,26.655c1.396,1.396,3.681,1.396,5.077,0l51.802-51.802 c1.396-1.396,3.681-1.396,5.077,0l51.801,51.801c1.396,1.396,3.681,1.396,5.077,0l26.655-26.655c1.396-1.396,1.396-3.681,0-5.077 l-51.801-51.801c-1.396-1.396-1.396-3.681,0-5.077l51.801-51.801c1.396-1.396,1.396-3.681,0-5.077L146.537,1.047z"/>
            </svg>
        .login-wrapper-center
          .login-wrapper
            h1.login-title Авторизация
            form(
              id="login-form"
              @submit.prevent="login"
              ).login-form
              .login-form__input
                label(for="login-name") Логин
                input(type="text" name="login-name" id="login-name" v-model="user.name" required)
              .login-form__input
                label(for="password") Пароль
                input(type="password" name="password" id="password" v-model="user.password" required)
              .login-form__btn
                button(type="submit") Отправить

    .login-error
      .login-error__container
        .login-error__wrap
          p Неверное имя или пароль
          button(type="button")
            <svg x="0px" y="0px" viewBox="0 0 174.239 174.239" style="enable-background:new 0 0 174.239 174.239;" xml:space="preserve">
              <path d="M146.537,1.047c-1.396-1.396-3.681-1.396-5.077,0L89.658,52.849c-1.396,1.396-3.681,1.396-5.077,0L32.78,1.047 c-1.396-1.396-3.681-1.396-5.077,0L1.047,27.702c-1.396,1.396-1.396,3.681,0,5.077l51.802,51.802c1.396,1.396,1.396,3.681,0,5.077 L1.047,141.46c-1.396,1.396-1.396,3.681,0,5.077l26.655,26.655c1.396,1.396,3.681,1.396,5.077,0l51.802-51.802 c1.396-1.396,3.681-1.396,5.077,0l51.801,51.801c1.396,1.396,3.681,1.396,5.077,0l26.655-26.655c1.396-1.396,1.396-3.681,0-5.077 l-51.801-51.801c-1.396-1.396-1.396-3.681,0-5.077l51.801-51.801c1.396-1.396,1.396-3.681,0-5.077L146.537,1.047z"/>
            </svg>
</template>

<script>
import $axios from "../../requests.js";

export default {

  props: ["background"],
  data: () => ({
    user: {
      name: "",
      password: "",
    }
  }),
  methods: {

    async login() {
      try {
        const response = await $axios.post("/login", this.user);
        const token = response.data.token;
        localStorage.setItem("token", token);
        $axios.defaults.headers["Autorization"] = `Bearer ${token}`
        this.$router.replace("/");
      } catch (error) {
        console.error(error);
      }
    }
  }

}
</script>

<style lang="postcss" scoped>


.login-title {
  font-size: 36px;
  flex-wrap: 600;
  text-align: center;
  margin-bottom: 14px;
}

.login-form label {
  font-size: 16px;
  line-height: 30px;
  font-weight: 600;
  opacity: 0.3;
  margin-left: 47px;
}

.login__btn-close {
display: flex;
justify-content: flex-end;
margin-top: 20px;
}

.btn-close {
  width: 35px;
  height: 35px;
}

.login-container {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
}

.login-img-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #414c63;
  opacity: 0.9;
}

.login-img-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
}

.login-img-wrapper img {
  width: 100%;
  height: 100%;
}

.login {
  position: absolute;
  display: flex;
  justify-content: center;
  width: 565px;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
}


.login__container {
  width: 87%;
}

.login-wrapper-center {
  display: flex;
  justify-content: center;
}

.login-wrapper {
  width: 76%;
}

.login-form__input {
  display: flex;
  flex-direction: column;
}

.login-form input {
  font-size: 18px;
  font-weight: 700;
  height: 60px;
  padding-left: 40px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #000;
  margin-bottom: 40px;
}

.login-form__btn {
  display: flex;
  justify-content: center;
   margin-bottom: 60px;
}

.login-form button {
  font-size: 18px;
  line-height: 48px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
  width: 350px;
  height: 80px;
  background: linear-gradient(90deg, #8002f2, #4a00ed);
  border-radius: 40px 0 40px 0;
}

.login-error {
  display: none;
  position: absolute;
  z-index: 3;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 19.4%;
  background-color: #ca1d1d;

  p{
    font-size: 16px;
    line-height: 30px;
    font-weight: 600;
    color: #ffffff;
  }
}

.login-error__container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.login-error__wrap {
  width: 91.4%;
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
}

.login-error button {
  width: 25px;
  height: 25px;
  fill: #ffffff;
}

@media screen and (min-width: 768px) and (max-width: 1199px) {
  .login {
    width: 565px;
    z-index: 2;
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  .login-title {
  font-size: 30px;
  flex-wrap: 600;
  text-align: center;
  margin-bottom: 20px;
}

  .login {
    width: 100%;
    top: 0;
    left: 0;
    transform: unset;
  }

  .login-img-wrapper {
  display: none;
}

.login__btn-close {
  margin-top: 27px;
  margin-bottom: 102px;
}

.login-wrapper {
  width: 95%;
}

.login-form input {
  height: 65px;
  margin-bottom: 30px;
}

.login-form__btn {
  margin-top: 10px;
}
}


</style>
