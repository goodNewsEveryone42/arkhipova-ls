<template lang="pug">
  section.add-work
    h1.add-work__title.content-container__title Блок «Работы»
    .add-work__edit-work
      .edit-work
        .edit-work__container
          .edit-work__title-wrap
            .edit-work__content-container
              h2.edit-work__title.content-container__block-title Редактирование работы
          form(action="").edit-work__form
            .edit-work__input-img-container
              .edit-work__upload-img
                p Перетащите или загрузите #[br]для загрузки изображения
                label(for="file")
                  span Загрузить
                input(type="file" id="file" name="file")
              button(type="button").edit-work__btn-edit-preview Изменить превью
              .edit-work__form-text
                label(for="new-group") Название
                input(type="text" id="name-site" name="new-site")
                label(for="link-site") Ссылка
                input(type="text" id="link-site" name="link-site")
                label(for="description") Описание
                textarea(type="text" id="description" name="description")
                label(for="tag") Добавление тега
                input(type="text" id="tag" name="tag")
                ul.edit-work__list-tag.list-tag
                  li.list-tag__item HTML
                    button(type="button") X
                  li.list-tag__item CSS
                    button(type="button") X
                  li.list-tag__item javascript
                    button(type="button") X
                .edit-work__btn-wrap
                  button(type="button") Отмена
                  button(type="button") Сохранить
    .add-work__new-work
      .new-work
        .new-work__btn-wrap
          button(type="button").new-work__btn-block
            span.new-work__btn-circle +
            span Добавить#[br]работу
        .new-work__list-wrap
          ul.new-work__list
            li.new-work__item
              .new-work__img
                //- img(src="../admin/images/contents/preview-img.jpg", "new-work__image", "фотография работы")
              .new-work__text-container
                p.new-work__title Новая работа
                p.new-work__desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href="").new-work__link http://google.com
                .new-work__btn-container
                  button(type="button").new-work__btn
                    span Править
                    svg(x="0px" y="0px" width="528.899px" height="528.899px" viewBox="0 0 528.899 528.899" style="enable-background:new 0 0 528.899 528.899;" xml:space="preserve").svg-pencil
                      path(d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981 c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611 C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069 L27.473,390.597L0.3,512.69z")
                  
                  button(type="button").new-work__btn 
                    span Удалить
                    svg(x="0px" y="0px" viewBox="0 0 174.239 174.239" style="enable-background:new 0 0 174.239 174.239;" xml:space="preserve").svg-cross
                      path(d="M146.537,1.047c-1.396-1.396-3.681-1.396-5.077,0L89.658,52.849c-1.396,1.396-3.681,1.396-5.077,0L32.78,1.047 c-1.396-1.396-3.681-1.396-5.077,0L1.047,27.702c-1.396,1.396-1.396,3.681,0,5.077l51.802,51.802c1.396,1.396,1.396,3.681,0,5.077 L1.047,141.46c-1.396,1.396-1.396,3.681,0,5.077l26.655,26.655c1.396,1.396,3.681,1.396,5.077,0l51.802-51.802 c1.396-1.396,3.681-1.396,5.077,0l51.801,51.801c1.396,1.396,3.681,1.396,5.077,0l26.655-26.655c1.396-1.396,1.396-3.681,0-5.077 l-51.801-51.801c-1.396-1.396-1.396-3.681,0-5.077l51.801-51.801c1.396-1.396,1.396-3.681,0-5.077L146.537,1.047z")

</template>

<script>
export default {
  
}
</script>

<style lang="postcss" scoped>
  .edit-review__form {
  label {
    font-size: 16px;
    line-height: 30px;
    font-weight: 600;
    opacity: 0.5;
  }

}

.add-work {
  .add-work__title {
    margin-bottom: 52px;
  }
}

.edit-work {
  label {
    font-size: 16px;
    // line-height: 30px;
    font-weight: 600;
    opacity: 0.5;
  }
}

.edit-work {
  display: flex;
  justify-content: center;
  background-color: #ffffff;

  .edit-work__title {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .edit-work__container {
    width: 96.3%;
  }
}

.edit-work__title-wrap {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #d9dbe0;
}

.edit-work__content-container {
  width: 98%;
  display: flex;
  flex-direction: row;
}

.edit-work__input-img-container {
  width: 98%;
  display: flex;
  flex-direction: row;
}

.edit-work__form {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.edit-work__btn-edit-preview {
  display: none;
  font-family: 'Open Sans', Helvetica, sans-serif;
  font-size: 16px;
  line-height: 33px;
  font-weight: 600;
  color: #383bcf;
  margin-top: 20px;
}

.edit-work__upload-img {
  width: 48.7%;
  height: 277px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #dee4ed;
  border: 1px dashed #000000;

  p {
    line-height: 30px;
    font-weight: 600;
    opacity: 0.5;
    text-align: center;
    margin-bottom: 32px;
  }

  input {
    display: none;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 182px;
    height: 52px;
    background: linear-gradient(to right, #2664e4, #443acc);
    border-radius: 40px;
    opacity: 1;

    span {
      font-size: 16px;
      line-height: 48px;
      text-transform: uppercase;
      color: #ffffff;
    }
  }
}

.edit-work__form-text {
  display: flex;
  flex-direction: column;
  width: 49%;

  label {
    margin-bottom: 10px;
  }

  input {
    height: 37px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #000000;
  }

  input:nth-of-type(1) {
    margin-bottom: 30px;
  }

  input:nth-of-type(2) {
    margin-bottom: 28px;
  }

  textarea {
    height: 146px;
    margin-bottom: 27px;
    border: 1px solid #d9dbe0;
  }

  input:nth-of-type(3) {
    margin-bottom: 20px;
  }
}

.list-tag {
  display: flex;

  li {
    font-size: 13px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 15px;
    padding-right: 10px;
    height: 30px;
    background-color: #f4f4f4;
    border-radius: 20px;
    margin-right: 5px;
  }

  button {
    font-weight: 600;
  }
}

.edit-work__btn-wrap {
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
  margin-bottom: 30px;

  button:nth-of-type(1) {
    font-size: 16px;
    line-height: 34px;
    font-weight: 600;
    color: #383bcf;
  }

  button:nth-of-type(2) {
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    text-transform: uppercase;
    width: 180px;
    height: 60px;
    background: linear-gradient(to right, #2664e4, #443acc);
    border-radius: 40px;
    margin-left: 53px;
  }
}

.add-work__new-work {
  margin-top: 33px;
}

.new-work {
  display: flex;
}

.new-work__btn-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: 556px;
  margin-right: 30px;
  background: linear-gradient(to right, #2664e4, #443acc);

  .new-work__btn-circle {
    font-family: 'Open Sans', Helvetica, sans-serif;
    font-size: 72px;
    line-height: 30px;
    font-weight: 400;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 151px;
    height: 151px;
    margin-bottom: 20px;
    border: 2px solid #ffffff;
    border-radius: 50%;
  }

  span {
    font-family: 'Open Sans', Helvetica, sans-serif;
    font-size: 18px;
    line-height: 30px;
    font-weight: 700;
    color: #ffffff;
    text-align: center;
  }
}

.new-work__list {
  display: flex;
  width: 340px;
}

.new-work__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
}

.new-work__text-container {
  width: 84%;
}

.new-work__img {
  width: 100%;
  height: 195px;
  margin-bottom: 30px;
}

.new-work__desc,
.new-work__link {
  font-size: 16px;
  line-height: 30px;
  font-weight: 600;
}

.new-work__title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 15px;
}

.new-work__desc {
  opacity: 0.7;
  margin-bottom: 15px;
}

.new-work__link {
  font-size: 17px;
  color: #383bcf;
  // margin-bottom: 40px;
}

.new-work__btn-container {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 34px;
}

.new-work__btn {
  position: relative;
  display: flex;

  span {
    font-family: 'Open Sans', Helvetica, sans-serif;
    font-size: 16px;
    line-height: 30px;
    font-weight: 600;
    opacity: 0.5;
  }

  svg {
    position: absolute;
    top: 8px;
    right: -20px;
    width: 15px;
    height: 15px;
    opacity: 1;
  }
}

.svg-pencil {
  width: 15px;
  height: 15px;
  fill: #383bcf;
  opacity: 1;
}

.svg-cross {
  width: 15px;
  height: 15px;
  fill: #c92e2e;
}

.new-work__btn:nth-of-type(2) {
  margin-right: 20px;
}


</style>