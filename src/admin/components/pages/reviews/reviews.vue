<template lang="pug">
  section.add-review
    h1.add-review__title.content-container__title Блок «Отзывы»
    .add-review__edit-review
      .edit-review
        .edit-review__container
          .edit-review__title-wrap
            h2.edit-review__title.content-container__block-title Новый отзыв
          .edit-review__form-wrap
            form(action="").edit-review__form.form-review
              .form-review__foto
                .edit-review__foto-block
                  .edit-review__foto-container
                    img(src="/src/admin/images/icons/man-user.svg")
                label(for="review-file") Добавить фото
                input(type="file" id="review-file" name="review-file")
              .form-review__input-container
                .form-review__input-wrap
                  .form-review__input-column
                    label(for="new-autor") Имя автора#[br]
                    input(type="text" id="name-autor" name="new-autor")
                  .form-review__input-column
                    label(for="autor") Титул автора#[br]
                    input(type="text" id="autor" name="autor")
                label(for="review-description") Отзыв#[br]
                textarea(type="text" id="review-escription" name="review-description")
                .form-review__btn-container
                  button(type="button").form-review__btn Отмена
                  button(type="button").form-review__btn Сохранить
      .edit-review__new-review
        .edit-review__btn-wrap
          button(type="button").edit-review__btn-block
            span.edit-review__btn-circle +
            span Добавить#[br]отзыв
        ul.new-review__list
          li.new-review__item
            .new-review__item-wrap
              .new-review__img-position
                .new-review__text-wrap
                  .new-review__img
                    //- img(src="../admin/images/contents/preview-img.jpg", "new-review__image", "фотография автора отзыва")
                  .new-review__name-position
                    p.new-review__name Имя фамилия
                    p.new-review__position Программист
              .new-review__review-wrap
                .new-review__review-btn
                  p.new-review__review Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                  .new-review__buttons-wrap
                    button(type="button").new-review__btn
                      span Править
                      svg(x="0px" y="0px" width="528.899px" height="528.899px" viewBox="0 0 528.899 528.899" style="enable-background:new 0 0 528.899 528.899;" xml:space="preserve").svg-pencil
                        path(d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981 c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611 C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069 L27.473,390.597L0.3,512.69z")
                  
                    button(type="button").new-review__btn
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

.add-review__title {
  margin-bottom: 54px;
}

.edit-review {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
}

.edit-review__form-wrap {
  margin-top: 40px;
}

.edit-review__container {
  width: 95%;
}

.edit-review__title-wrap {
  border-bottom: 1px solid #d9dbe0;
}

.edit-review__title {
  padding-top: 20px;
  padding-bottom: 20px;
}

.form-review {
  display: flex;
}

.form-review__input-container {
  width: 59.5%;
  display: flex;
  flex-direction: column;
  margin-left: 30px;

  label {
    margin-bottom: 10px;
  }

  textarea {
    height: 117px;
    border: 1px solid #d9dbe0;
  }
}

.form-review__input-wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.form-review__foto {
  width: 205px;
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    color: #383bcf;
    opacity: 1;
  }

  input {
    display: none;
  }
}

.edit-review__foto-block {
  width: 100%;
  height: 205px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #dee4ed;
  border-radius: 50%;
  margin-bottom: 17px;
}

.edit-review__foto-container {
  width: 110px;
  height: 130px;
}

.form-review__input-column {
  width: 47%;

  input {
    width: 100%;
    height: 47px;
    border: none;
    border-bottom: 1px solid #000000;
  }
}

.form-review__btn-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  margin-bottom: 50px;

  .form-review__btn {
    font-family: 'Open Sans', Helvetica, sans-serif;
    font-size: 16px;
    line-height: 33px;
    font-weight: 600;
  }

  .form-review__btn:nth-of-type(1) {
    color: #383bcf;
    margin-right: 55px;
  }

  .form-review__btn:nth-of-type(2) {
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    text-transform: uppercase;
    width: 180px;
    height: 60px;
    background: linear-gradient(to right, #2664e4, #443acc);
    border-radius: 40px;
  }
}

.edit-review__new-review {
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
}

.edit-review__btn-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: 380px;
  margin-right: 30px;
  background: linear-gradient(to right, #2664e4, #443acc);

  .edit-review__btn-circle {
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

.new-review__item {
  width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;

  p {
    font-size: 16px;
    line-height: 30px;
    font-weight: 600;
    opacity: 0.7;
  }
}

.new-review__item-wrap {
  width: 88%;
  display: flex;
  flex-direction: column;
}

.new-review__img-position {
  display: flex;
  justify-content: center;
  padding-top: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid #d9dbe0;
}

.new-review__text-wrap {
  width: 92%;
  display: flex;
}

.new-review__name-position .new-review__name {
  font-size: 18px;
  opacity: 1;
  font-weight: 700;
}

.new-review__img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
}

.new-review__review-wrap {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.new-review__review-btn {
  width: 92%;
}

.new-review__buttons-wrap {
  display: flex;
  justify-content: space-between;
  margin-top: 72px;
  margin-bottom: 25px;
}

.new-review__btn {
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
    top: 9px;
    right: -17px;
    width: 15px;
    height: 15px;
  }
}

.new-review__btn:nth-of-type(2) {
  margin-right: 15px;
}

</style>