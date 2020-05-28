<template lang="pug">
  .login-container
    .login-img-wrapper
      img(:src="background")
    .login
      .container
        .login__btn-close
          button(type="button").btn-close
            <svg x="0px" y="0px" viewBox="0 0 174.239 174.239" style="enable-background:new 0 0 174.239 174.239;" xml:space="preserve">
              <path d="M146.537,1.047c-1.396-1.396-3.681-1.396-5.077,0L89.658,52.849c-1.396,1.396-3.681,1.396-5.077,0L32.78,1.047 c-1.396-1.396-3.681-1.396-5.077,0L1.047,27.702c-1.396,1.396-1.396,3.681,0,5.077l51.802,51.802c1.396,1.396,1.396,3.681,0,5.077 L1.047,141.46c-1.396,1.396-1.396,3.681,0,5.077l26.655,26.655c1.396,1.396,3.681,1.396,5.077,0l51.802-51.802 c1.396-1.396,3.681-1.396,5.077,0l51.801,51.801c1.396,1.396,3.681,1.396,5.077,0l26.655-26.655c1.396-1.396,1.396-3.681,0-5.077 l-51.801-51.801c-1.396-1.396-1.396-3.681,0-5.077l51.801-51.801c1.396-1.396,1.396-3.681,0-5.077L146.537,1.047z"/>
            </svg>
        .login-wrapper-center
          .login-wrapper
            h1.login-title Авторизация
            form(
              action="" 
              id="login-form"
              @submit="checkForm"
              ).login-form
              .login-form__input
                label Логин
                input(type="text" name="login" id="login" required placeholder="terminator")
              .login-form__input
                label(for="password") Пароль
                input(type="password" name="password" id="password" required placeholder="terminator")
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
export default {
  props: ["background"],
  data() {
    return {
      login: null,
      password: null
  }
},
  methods: {
    checkForm(event) {
      if (this.login && this.password) {
        return true;
      }

      else if (!this.login) {
        console.log("укажи имя")
      }
    }
  }

}
</script>

<style lang="postcss" scoped>


.login-title {
  font-size: 36px;
  line-height: 60px;
  flex-wrap: 600;
  text-align: center;
  margin-bottom: 30px;
}

.login-form label {
  font-size: 16px;
  line-height: 30px;
  font-weight: 600;
  opacity: 0.3;
  margin-left: 40px;
}

.login__btn-close{
display: flex;
justify-content: flex-end;
}

.btn-close {
  width: 25px;
  height: 25px;
  margin-top: 30px;
}

.login-container {
  position: relative;
  width: 1800px;
  height: 100vh;
  background-color: #ffffff;
}

.login-img-wrapper {
  width: 100%;
  height: auto;
  position: absolute;
}

.login {
  position: absolute;
  display: flex;
  justify-content: center;
  width: 31.4%;
  z-index: 2;
  top: 325px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
}


.container {
  width: 95%;
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
  margin-bottom: 65px;
}

.login-error {
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


</style>
