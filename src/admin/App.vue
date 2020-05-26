<template lang="pug">
  .root
    .root-container
      header.header-container
        .container
          .header
            .header__img-container
              img(src="../images/content/user.jpg", "header__img", "фотография разработчика")
            .header__description
              .header__name-panel
                p.header__name-develops Анна Архипова
                p.header__name-page Панель администрирования
              a.header__link-out Выйти
      section.tabs-container
        .container
          .tabs__wrapper
            ul.tabs
              li.tabs__item
                a.tabs__link.tabs__link--active Обо мне
              li.tabs__item
                a.tabs__link Работы
              li.tabs__item
                a.tabs__link Отзывы
      .container
        main.content-container
          section.about-me
            .about-me__wrap-title
              h1.about-me__title.content-container__title Блок «Обо мне»
              button(type="button").about-me__bth-add-group Добавить группу
            .about-me__wrapper
              .group-skills
                .group-skills__item.skill-item
                  .skill-item__wrapper
                    form(action="").skill-item__form-new-group.form-group
                      .form-group__name-group
                        .form-group__input-wrap
                          .form-group__input-container
                            label(for="new-group")
                              <svg x="0px" y="0px" width="528.899px" height="528.899px" viewBox="0 0 528.899 528.899" style="enable-background:new 0 0 528.899 528.899;"xml:space="preserve">
                                <path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981 c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611 C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069 L27.473,390.597L0.3,512.69z"/>
                              </svg>
                            input(type="text" id="new-group" name="new-group" placeholder="Название новой группы")
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
                          tr
                            td Terminal
                            td 90&nbsp;&nbsp;&nbsp;&nbsp;%
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
                          tr
                            td Gulp
                            td 80&nbsp;&nbsp;&nbsp;&nbsp;%
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
                          tr
                            td Webpack
                            td 85&nbsp;&nbsp;&nbsp;&nbsp;%
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
                .group-skills__item.skill-item
                  .skill-item__wrapper
                    form(action="").skill-item__form-new-group.form-group
                      .form-group__name-group
                        .form-group__input-wrap
                          .form-group__input-container
                            label(for="new-group-clone")
                              <svg x="0px" y="0px" width="528.899px" height="528.899px" viewBox="0 0 528.899 528.899" style="enable-background:new 0 0 528.899 528.899;"xml:space="preserve">
                                <path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981 c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611 C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069 L27.473,390.597L0.3,512.69z"/>
                              </svg>
                            input(type="text" id="new-group-clone" name="new-group-clone" placeholder="Название новой группы")
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
                            td 100&nbsp;&nbsp;&nbsp;%
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
                          tr
                            td Terminal
                            td 90&nbsp;&nbsp;&nbsp;&nbsp;%
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
                          tr
                            td Gulp
                            td 80&nbsp;&nbsp;&nbsp;&nbsp;%
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
                          tr
                            td Webpack
                            td 85&nbsp;&nbsp;&nbsp;&nbsp;%
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
                        img(src="../admin/images/contents/preview-img.jpg", "new-work__image", "фотография работы")
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
                            img(src="../admin/images/contents/preview-img.jpg", "new-review__image", "фотография автора отзыва")
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

<style lang="postcss">
@import "./style.pcss";
</style>