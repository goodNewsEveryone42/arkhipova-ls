<template lang="pug">
  section.about-me
    .about-me__wrap-title
      h1.about-me__title.content-container__title Блок «Обо мне»
      button(type="button").about-me__bth-add-group Добавить группу
    .about-me__wrappers
      .group-skills
        .group-skills__item.skill-item
          .skill-item__wrapper
            form(
              @submit.prevent="createNewCategory"
            ).skill-item__form-new-group.form-group
              .form-group__name-group
                .form-group__input-wrap
                  .form-group__input-container
                    label(for="new-group")
                      <svg x="0px" y="0px" width="528.899px" height="528.899px" viewBox="0 0 528.899 528.899" style="enable-background:new 0 0 528.899 528.899;"xml:space="preserve">
                        <path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981 c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611 C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069 L27.473,390.597L0.3,512.69z"/>
                      </svg>
                    input(type="text" id="new-group" name="new-group" placeholder="Название новой группы" v-model="category.title")
                    .form-group__btn
                      button(type="button")
                        <svg x="0px" y="0px" viewBox="0 0 342.357 342.357" style="enable-background:new 0 0 342.357 342.357;" xml:space="preserve">
                          <polygon points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606 "/>
                        </svg>
                      button(type="button")
                        <svg x="0px" y="0px" viewBox="0 0 174.239 174.239" style="enable-background:new 0 0 174.239 174.239;" xml:space="preserve">
                          <path d="M146.537,1.047c-1.396-1.396-3.681-1.396-5.077,0L89.658,52.849c-1.396,1.396-3.681,1.396-5.077,0L32.78,1.047 c-1.396-1.396-3.681-1.396-5.077,0L1.047,27.702c-1.396,1.396-1.396,3.681,0,5.077l51.802,51.802c1.396,1.396,1.396,3.681,0,5.077 L1.047,141.46c-1.396,1.396-1.396,3.681,0,5.077l26.655,26.655c1.396,1.396,3.681,1.396,5.077,0l51.802-51.802 c1.396-1.396,3.681-1.396,5.077,0l51.801,51.801c1.396,1.396,3.681,1.396,5.077,0l26.655-26.655c1.396-1.396,1.396-3.681,0-5.077 l-51.801-51.801c-1.396-1.396-1.396-3.681,0-5.077l51.801-51.801c1.396-1.396,1.396-3.681,0-5.077L146.537,1.047z"/>
                        </svg>
              .form-group__input-wrap
                table.form-group__table
                  tr
                    td Git
                    td 100&nbsp;&nbsp;%
                    td
                      button(type="botton").btn-pencil
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="528.899px" height="528.899px" viewBox="0 0 528.899 528.899" style="enable-background:new 0 0 528.899 528.899;"xml:space="preserve">
                          <path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981 c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611 C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069 L27.473,390.597L0.3,512.69z"/>
                        </svg>
                    td
                      button(type="botton").btn-trash
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="459px" height="459px" viewBox="0 0 459 459" style="enable-background:new 0 0 459 459;" xml:space="preserve">
                          <g id="delete">
                            <path d="M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5 H51v51h357V25.5z"/>
                          </g>
                        </svg>
                  
                .form-group__skills
                  .form-group__skills-wrap
                    label(for="new-skill")
                    input(type="text" id="new-skill" name="new-skill" placeholder="Новый навык")
                    label(for="percent")
                    input(type="text" id="percent" name="percent" placeholder="100 %")
                    button(type="button") +
        
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
       category: {
         title: "",
    }
    }
  },
  methods: {
    ...mapActions("categories", ["addCategory"]),
    createNewCategory() {
      this.addCategory(this.category.title);
      this.category.title = "";
    }
  }
}
</script>

<style lang="postcss" scoped>
.about-me {
  padding-top: 50px;
}

.about-me__wrap-title {
  width: 411px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}

.about-me__bth-add-group {
  position: relative;
  font-size: 16px;
  line-height: 34px;
  font-weight: 600;
  color: #383bcf;
}

.about-me__bth-add-group::before {
  content: "+";
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: 400;
  width: 20px;
  height: 20px;
  top: 9px;
  left: -31px;
  background: linear-gradient(to right, #2664e4, #443acc);
  border-radius: 50%;
}

.content-container__title {
  font-size: 21px;
  line-height: 34px;
  font-weight: 700;
}

.content-container__block-title {
  font-size: 18px;
  line-height: 34px;
  font-weight: 700;
}

.group-skills {
  display: flex;
  justify-content: space-between;
}

.form-group__name-group input::placeholder {
  font-size: 18px;
  line-height: 34px;
}

.form-group__skills input::placeholder {
  font-size: 16px;
}

.form-group__name-group input {
  width: 278px;
  height: 41px;
  margin-bottom: 13px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #000000;
}

.form-group__name-group {
  margin-bottom: 16px;
  border-bottom: 1px solid #d9dbe0;
}

.form-group__input-wrap {
  padding-left: 10px;
  padding-right: 10px;
}

.form-group__input-container {
  display: flex;
  justify-content: space-between;

  label {
    display: none;
  }
}

.form-group__btn {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;

  button:nth-of-type(1) {
    width: 30px;
    height: 30px;
    fill: #00d70a;
    margin-right: 5px;
  }

  button:nth-of-type(2) {
    width: 25px;
    height: 30px;
    fill: #bf2929;
    margin-right: -5px;
  }
}

.form-group__table {
  margin-bottom: 56px;
  tr {
    height: 39px;
  }

  td:nth-child(1) {
    width: 300px;
  }

  td:nth-child(2) {
    width: 100px;
  }

  button {
    background-color: transparent;
  }

  .btn-pencil {
    width: 25px;
    height: 25px;
    fill: #a0a5b1;
  }

  .btn-trash {
    width: 27px;
    height: 27px;
    fill: #a0a5b1;
  }
}

.form-group__skills {
  display: flex;
  justify-content: flex-end;
  padding-bottom: 35px;

  .form-group__skills-wrap {
    display: flex;
    justify-content: flex-end;
  }

  input::placeholder {
    padding-left: 20px;
  }

  input:nth-of-type(1) {
    width: 53%;
    height: 41px;
    margin-right: 12px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #000000;
  }

  input:nth-of-type(2) {
    width: 17%;
    margin-right: 30px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #000000;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    font-size: 32px;
    color: #ffffff;
    background: linear-gradient(to right, #2664e4, #443acc);
    border-radius: 50%;
  }
}

.skill-item {
  width: 48.5%;
  display: flex;
  justify-content: center;
  background-color: #ffffff;

  .skill-item__wrapper {
    width: 93%;
    padding-top: 20px;
  }

  .skill-item__table {
    line-height: 32px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1199px) {
  .container {
    margin: 0 auto;
    max-width: 768px;
    width: 92.2%;
  }

  .about-me {
    padding-top: 40px;
  }

  .about-me__wrap-title {
    width: 395px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  .about-me__bth-add-group {
    font-size: 14px;
  }

  .form-group__btn {

    button {
      display: none;
    }

    .btn-pencil {
      width: 27px;
      height: 27px;
      display: block;
      background-color: transparent;
    }
  }

  .form-group__name-group input {
    border: none;
  }

  .form-group__input-container {
    position: relative;
  
    label {
      position: absolute;
      display: block;
      top: 11px;
      right: 4px;
      width: 15px;
      height: 15px;
      opacity: 0.3;
    }
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  .container {
    margin: 0 auto;
    min-width: 320px;
    width: 100%;
  }

  .about-me__wrap-title {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 50px;
  }

  .about-me__bth-add-group {
    margin-left: -50px;
  }

  .about-me__bth-add-group::before {
    top: 9px;
    left: 50px;
  }

  .group-skills {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .skill-item {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #ffffff;
  }

}

</style>