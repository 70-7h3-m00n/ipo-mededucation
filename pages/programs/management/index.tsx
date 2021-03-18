import Head from 'next/head'

const managementPrograms = () => {
  return (
    <>
      <Head>
        <title>Дистанционные программы</title>
      </Head>

      {/* breadcrumbs */}
      <div className='breadcrumbs-outer'>
        <div className='container'>
          <ul className='breadcrumbs'>
            <li>
              <a href=''>Главная</a>
            </li>
            <li>
              <a href=''>Дистанционные программы</a>
            </li>
            <li>
              <span>Высший медицинский персонал</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='page-main-title'>
        <div className='container'>
          <h1>Дистанционные программы</h1>
        </div>
      </div>

      {/* programs-tabs-section */}
      <section className='programs-tabs-section'>
        <div className='programs-tabs-top'>
          <div className='programs-tabs-info'>
            <div className='container'>
              <div className='programs-tabs-flex'>
                <ul className='programs-tabs-links'>
                  <li>
                    <a href='' className='active-tab'>
                      Высший <br />
                      медперсонал
                    </a>
                  </li>
                  <li>
                    <a href=''>
                      Средний <br />
                      медперсонал
                    </a>
                  </li>
                  <li>
                    <a href=''>
                      Управление в <br />
                      медицине
                    </a>
                  </li>
                  <li>
                    <a href=''>
                      Программы <br />
                      НМО
                    </a>
                  </li>
                  <li>
                    <a href=''>
                      Тематическое <br />
                      усовершенствование
                    </a>
                  </li>
                </ul>
                <div className='programs-search-outer'>
                  <form
                    action='#'
                    method='post'
                    className='search-form programs-search'
                  >
                    <input type='text' placeholder='Поиск по названию' />
                    <button type='submit'>
                      <img src='/images/search.svg' alt='' />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='programs-options-outer'>
              <ul className='programs-options-list'>
                <li className='options-radio'>
                  <label>
                    <input type='radio' defaultChecked name='radio-programs' />
                    <i></i>
                    <span>Группировать по категориям</span>
                  </label>
                </li>
                <li className='options-radio'>
                  <label>
                    <input type='radio' name='radio-programs' />
                    <i></i>
                    <span>По алфавиту</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='programs-tabs-content'>
            <div className='programs-tabs-list programs-masonry'>
              <div className='programs-tabs-block'>
                <div className='title'>
                  <div className='image'>
                    <img src='/images/programs/programs-pic-1.svg' alt='' />
                  </div>
                  <span>Сестринское дело в терапии</span>
                </div>
                <ul className='programs-tabs-names'>
                  <li>
                    <a href=''>Авиационная и космическая медицина</a>
                  </li>
                  <li>
                    <a href=''>Акушерство и гинекология</a>
                  </li>
                  <li>
                    <a href=''>Аллергология и иммунология</a>
                  </li>
                  <li>
                    <a href=''>Анестезиология - реаниматология</a>
                  </li>
                  <li>
                    <a href=''>Бактериология</a>
                  </li>
                  <li>
                    <a href=''>Вирусология</a>
                  </li>
                  <li>
                    <a href=''>Водолазная медицина</a>
                  </li>
                </ul>
              </div>
              <div className='programs-tabs-block'>
                <div className='title'>
                  <div className='image'>
                    <img src='/images/programs/programs-pic-4.svg' alt='' />
                  </div>
                  <span>Фтизиатрия</span>
                </div>
                <ul className='programs-tabs-names'>
                  <li>
                    <a href=''>Инфекционные болезни</a>
                  </li>
                  <li>
                    <a href=''>Кардиология</a>
                  </li>
                  <li>
                    <a href=''>Клиническая лабораторная диагностика</a>
                  </li>
                  <li>
                    <a href=''>Колопроктология</a>
                  </li>
                  <li>
                    <a href=''>Коммунальная гигиена</a>
                  </li>
                  <li>
                    <a href=''>Косметология</a>
                  </li>
                </ul>
              </div>
              <div className='programs-tabs-block'>
                <div className='title'>
                  <div className='image'>
                    <img src='/images/programs/programs-pic-2.svg' alt='' />
                  </div>
                  <span>Сестринское дело в онкологии</span>
                </div>
                <ul className='programs-tabs-names'>
                  <li>
                    <a href=''>Гастроэнтерология</a>
                  </li>
                  <li>
                    <a href=''>Гематология</a>
                  </li>
                  <li>
                    <a href=''>Генетика</a>
                  </li>
                  <li>
                    <a href=''>Гастроэнтерология</a>
                  </li>
                  <li>
                    <a href=''>Гематология</a>
                  </li>
                  <li>
                    <a href=''>Генетика</a>
                  </li>
                  <li>
                    <a href=''>Гастроэнтерология</a>
                  </li>
                  <li>
                    <a href=''>Гематология</a>
                  </li>
                </ul>
              </div>
              <div className='programs-tabs-block'>
                <div className='title'>
                  <div className='image'>
                    <img src='/images/programs/programs-pic-5.svg' alt='' />
                  </div>
                  <span>Судебно-медицинская экспертиза</span>
                </div>
                <ul className='programs-tabs-names'>
                  <li>
                    <a href=''>Лечебная физкультура и спортивная медицина</a>
                  </li>
                  <li>
                    <a href=''>Мануальная терапия</a>
                  </li>
                  <li>
                    <a href=''>Медико-социальная экспертиза</a>
                  </li>
                  <li>
                    <a href=''>Лечебная физкультура и спортивная медицина</a>
                  </li>
                  <li>
                    <a href=''>Мануальная терапия</a>
                  </li>
                  <li>
                    <a href=''>Медико-социальная экспертиза</a>
                  </li>
                  <li>
                    <a href=''>Нефрология</a>
                  </li>
                </ul>
              </div>
              <div className='programs-tabs-block'>
                <div className='title'>
                  <div className='image'>
                    <img src='/images/programs/programs-pic-2.svg' alt='' />
                  </div>
                  <span>Сестринское дело в онкологии</span>
                </div>
                <ul className='programs-tabs-names'>
                  <li>
                    <a href=''>Гастроэнтерология</a>
                  </li>
                  <li>
                    <a href=''>Гематология</a>
                  </li>
                  <li>
                    <a href=''>Генетика</a>
                  </li>
                  <li>
                    <a href=''>Гастроэнтерология</a>
                  </li>
                  <li>
                    <a href=''>Гематология</a>
                  </li>
                  <li>
                    <a href=''>Генетика</a>
                  </li>
                  <li>
                    <a href=''>Гастроэнтерология</a>
                  </li>
                  <li>
                    <a href=''>Гематология</a>
                  </li>
                </ul>
              </div>
              <div className='programs-tabs-block'>
                <div className='title'>
                  <div className='image'>
                    <img src='/images/programs/programs-pic-1.svg' alt='' />
                  </div>
                  <span>Сестринское дело в терапии</span>
                </div>
                <ul className='programs-tabs-names'>
                  <li>
                    <a href=''>Авиационная и космическая медицина</a>
                  </li>
                  <li>
                    <a href=''>Акушерство и гинекология</a>
                  </li>
                  <li>
                    <a href=''>Аллергология и иммунология</a>
                  </li>
                  <li>
                    <a href=''>Анестезиология - реаниматология</a>
                  </li>
                  <li>
                    <a href=''>Бактериология</a>
                  </li>
                  <li>
                    <a href=''>Вирусология</a>
                  </li>
                  <li>
                    <a href=''>Водолазная медицина</a>
                  </li>
                </ul>
              </div>
              <div className='programs-tabs-block'>
                <div className='title'>
                  <div className='image'>
                    <img src='/images/programs/programs-pic-3.svg' alt='' />
                  </div>
                  <span>Сестринское дело</span>
                </div>
                <ul className='programs-tabs-names'>
                  <li>
                    <a href=''>Дезинфектология</a>
                  </li>
                  <li>
                    <a href=''>Дерматовенерология</a>
                  </li>
                  <li>
                    <a href=''>Детская кардиология</a>
                  </li>
                  <li>
                    <a href=''>Дезинфектология</a>
                  </li>
                  <li>
                    <a href=''>Дерматовенерология</a>
                  </li>
                  <li>
                    <a href=''>Детская кардиология</a>
                  </li>
                  <li>
                    <a href=''>Дезинфектология</a>
                  </li>
                  <li>
                    <a href=''>Дерматовенерология</a>
                  </li>
                </ul>
              </div>
              <div className='programs-tabs-block'>
                <div className='title'>
                  <div className='image'>
                    <img src='/images/programs/programs-pic-4.svg' alt='' />
                  </div>
                  <span>Фтизиатрия</span>
                </div>
                <ul className='programs-tabs-names'>
                  <li>
                    <a href=''>Инфекционные болезни</a>
                  </li>
                  <li>
                    <a href=''>Кардиология</a>
                  </li>
                  <li>
                    <a href=''>Клиническая лабораторная диагностика</a>
                  </li>
                  <li>
                    <a href=''>Колопроктология</a>
                  </li>
                  <li>
                    <a href=''>Коммунальная гигиена</a>
                  </li>
                  <li>
                    <a href=''>Косметология</a>
                  </li>
                </ul>
              </div>
              <div className='programs-tabs-block'>
                <div className='title'>
                  <div className='image'>
                    <img src='/images/programs/programs-pic-6.svg' alt='' />
                  </div>
                  <span>Стоматология</span>
                </div>
                <ul className='programs-tabs-names'>
                  <li>
                    <a href=''>Лечебная физкультура и спортивная медицина</a>
                  </li>
                  <li>
                    <a href=''>Мануальная терапия</a>
                  </li>
                  <li>
                    <a href=''>Медико-социальная экспертиза</a>
                  </li>
                  <li>
                    <a href=''>Лечебная физкультура и спортивная медицина</a>
                  </li>
                  <li>
                    <a href=''>Мануальная терапия</a>
                  </li>
                  <li>
                    <a href=''>Медико-социальная экспертиза</a>
                  </li>
                  <li>
                    <a href=''>Нефрология</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* proff-quiz-section */}
      <section className='simple-section-small blue-bg'>
        <div className='container'>
          <div className='section-title'>
            <h3>Узнайте на какую профессию Вы можете переучиться</h3>
          </div>
          <div className='proff-quiz-block'>
            <div className='proff-quiz-options'>
              <div className='options-block'>
                <div className='number'>
                  <img src='/images/number-1.png' alt='' />
                </div>
                <div className='detail'>
                  <div className='options-radio circled'>
                    <label>
                      <input type='radio' defaultChecked name='quiz-radio-1' />
                      <i></i>
                      <span>Специальности, доступные с Вашим образованием</span>
                    </label>
                  </div>
                  <div className='options-radio circled'>
                    <label>
                      <input type='radio' defaultChecked name='quiz-radio-1' />
                      <i></i>
                      <span>Образовательные требования к специальности</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className='options-block'>
                <div className='number'>
                  <img src='/images/number-2.png' alt='' />
                </div>
                <div className='detail'>
                  <div className='options-radio'>
                    <label>
                      <input type='radio' defaultChecked name='quiz-radio-2' />
                      <i></i>
                      <span>Высший медицинский персонал</span>
                    </label>
                  </div>
                  <div className='options-radio'>
                    <label>
                      <input type='radio' defaultChecked name='quiz-radio-2' />
                      <i></i>
                      <span>Средний медицинский персонал</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className='options-block'>
                <div className='number'>
                  <img src='/images/number-3.png' alt='' />
                </div>
                <div className='detail'>
                  <select className='my-select'>
                    <option value='' disabled selected hidden>
                      Выберите специальность
                    </option>
                    <option value='1'>
                      Авиационная и космическая медицина
                    </option>
                    <option value='2'>Акушерство и гинекология</option>
                    <option value='3'>Аллергология и иммунология</option>
                    <option value='4'>Анестезиология - реаниматология</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='proff-quiz-content'>
              <h4>Ваши возможности:</h4>
              <p>
                Введите название программы Вашей ординатуры (интернатуры) или
                выберете из выпадающего списка, чтобы увидеть доступные варианты
                обучения
              </p>
              <ul className='proff-quiz-programs'>
                <li>
                  <a href=''>Лечебная физкультура и спортивная медицина</a>
                </li>
                <li>
                  <a href=''>Мануальная терапия</a>
                </li>
                <li>
                  <a href=''>Медико-социальная экспертиза</a>
                </li>
                <li>
                  <a href=''>
                    Организация здравоохранения и общественное здоровье
                  </a>
                </li>
                <li>
                  <a href=''>Мануальная терапия</a>
                </li>
                <li>
                  <a href=''>Медико-социальная экспертиза</a>
                </li>
                <li>
                  <a href=''>Нефрология</a>
                </li>
                <li>
                  <a href=''>Лечебная физкультура и спортивная медицина</a>
                </li>
                <li>
                  <a href=''>Мануальная терапия</a>
                </li>
                <li>
                  <a href=''>Медико-социальная экспертиза</a>
                </li>
                <li>
                  <a href=''>Лечебная физкультура и спортивная медицина</a>
                </li>
              </ul>
              <a href='' className='button'>
                Получить консультацию специалиста
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* advantages-section */}
      <section className='simple-section-small'>
        <div className='container'>
          <div className='section-title'>
            <h3>Преимущества университета</h3>
            <a href='' className='all-link'>
              Об академии
            </a>
          </div>
          <ul className='advantages-list'>
            <li>
              <div className='pic'>
                <img src='/images/advantages/advantages-pic-1.jpg' alt='' />
              </div>
              <span>
                Консультируем сотрудников по вопросам нормативно-правовых
                аспектов дополнительного профессионального медицинского
                образования
              </span>
            </li>
            <li>
              <div className='pic'>
                <img src='/images/advantages/advantages-pic-2.jpg' alt='' />
              </div>
              <span>
                Выдаем официальные документы установленного образца. Документы
                вносятся в систему ФИС ФРДО
              </span>
            </li>
            <li>
              <div className='pic'>
                <img src='/images/advantages/advantages-pic-3.jpg' alt='' />
              </div>
              <span>Проводим очные мероприятия с выдачей баллов НМО</span>
            </li>
            <li>
              <div className='pic'>
                <img src='/images/advantages/advantages-pic-4.jpg' alt='' />
              </div>
              <span>
                Состоим в реестре оператора персональных данных. Проверить
              </span>
            </li>
            <li>
              <div className='pic'>
                <img src='/images/advantages/advantages-pic-5.jpg' alt='' />
              </div>
              <span>
                Индивидуальная стоимость при групповой заявке от 5 человек
              </span>
            </li>
            <li>
              <div className='pic'>
                <img src='/images/advantages/advantages-pic-6.jpg' alt='' />
              </div>
              <span>Оплата обучения за счет средств ТФОМС</span>
            </li>
            <li>
              <div className='pic'>
                <img src='/images/advantages/advantages-pic-7.jpg' alt='' />
              </div>
              <span>Обучение в рассрочку до 12 месяцев.</span>
            </li>
            <li>
              <div className='pic'>
                <img src='/images/advantages/advantages-pic-8.jpg' alt='' />
              </div>
              <span>Дарим премиальные таблички об завершении курса.</span>
            </li>
            <li>
              <div className='pic'>
                <img src='/images/advantages/advantages-pic-9.jpg' alt='' />
              </div>
              <span>Круглосуточная поддержка</span>
            </li>
            <li>
              <div className='pic'>
                <img src='/images/advantages/advantages-pic-10.jpg' alt='' />
              </div>
              <span>Доставка документов по всей России</span>
            </li>
          </ul>
        </div>
      </section>

      {/* news-small-section */}
      <section className='simple-section-small blue-bg'>
        <div className='container'>
          <div className='section-title'>
            <h3>Новости</h3>
            <a href='' className='all-link'>
              Все новости
            </a>
          </div>
          <div className='news-small-slider js-slick'>
            <a href='' className='news-slider-block'>
              <div className='date'>12.05.2020</div>
              <h4>
                Кремль планирует начать массовую вакцинацию россиян от COVID-19
                до Нового года
              </h4>
              <div className='image'>
                <img src='/images/news-pic-3.jpg' alt='' />
              </div>
            </a>
            <a href='' className='news-slider-block'>
              <div className='date'>12.05.2020</div>
              <h4>
                Достоверный – значит, этичный. В гонке клинических исследований
                ученые призывают не забывать о медицинской этике
              </h4>
              <div className='image'>
                <img src='/images/news-pic-4.jpg' alt='' />
              </div>
            </a>
            <a href='' className='news-slider-block'>
              <div className='date'>12.05.2020</div>
              <h4>
                PharmaDATA: в октябре 2020 отмечены незначительные колебания
                объема закупок в сравнении с сентябрем этого года
              </h4>
              <div className='image'>
                <img src='/images/news-pic-5.jpg' alt='' />
              </div>
            </a>
            <a href='' className='news-slider-block'>
              <div className='date'>12.05.2020</div>
              <h4>
                Кремль планирует начать массовую вакцинацию россиян от COVID-19
                до Нового года
              </h4>
              <div className='image'>
                <img src='/images/news-pic-3.jpg' alt='' />
              </div>
            </a>
            <a href='' className='news-slider-block'>
              <div className='date'>12.05.2020</div>
              <h4>
                Достоверный – значит, этичный. В гонке клинических исследований
                ученые призывают не забывать о медицинской этике
              </h4>
              <div className='image'>
                <img src='/images/news-pic-4.jpg' alt='' />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* teachers-section */}
      <section className='simple-section-small'>
        <div className='container'>
          <div className='section-title'>
            <h3>Наши спикеры</h3>
            <a href='' className='all-link'>
              Все спикеры
            </a>
          </div>
          <div className='teachers-slider js-slick'>
            <div className='teachers-slider-block'>
              <div className='image'>
                <img src='/images/teacher-pic-1.jpg' alt='' />
              </div>
              <div className='name'>Спивак Игорь Маратович</div>
            </div>
            <div className='teachers-slider-block'>
              <div className='image'>
                <img src='/images/teacher-pic-2.jpg' alt='' />
              </div>
              <div className='name'>Габай Полина Георгиевна</div>
            </div>
            <div className='teachers-slider-block'>
              <div className='image'>
                <img src='/images/teacher-pic-3.jpg' alt='' />
              </div>
              <div className='name'>Луговой Артем Олегович</div>
            </div>
            <div className='teachers-slider-block'>
              <div className='image'>
                <img src='/images/teacher-pic-4.jpg' alt='' />
              </div>
              <div className='name'>Ирышкин Олег Евгеньевич</div>
            </div>
            <div className='teachers-slider-block'>
              <div className='image'>
                <img src='/images/teacher-pic-1.jpg' alt='' />
              </div>
              <div className='name'>Спивак Игорь Маратович</div>
            </div>
            <div className='teachers-slider-block'>
              <div className='image'>
                <img src='/images/teacher-pic-2.jpg' alt='' />
              </div>
              <div className='name'>Габай Полина Георгиевна</div>
            </div>
          </div>
        </div>
      </section>

      {/* reviews-section */}
      <section className='simple-section-small blue-bg'>
        <div className='container'>
          <div className='section-title'>
            <h3>Отзывы о вебинарах</h3>
            <a href='' className='all-link'>
              Все отзывы о вебинарах
            </a>
          </div>
          <div className='reviews-slider js-slick'>
            <div className='reviews-slider-block'>
              <div className='author'>
                <div className='image'>
                  <img src='/images/avatar-pic.jpg' alt='' />
                </div>
                <div className='detail'>
                  <div className='info'>
                    <div className='date'>24/03/2020</div>
                    <div className='name'>Леонов Василий</div>
                  </div>
                  <a href='' className='all-link'>
                    Читать полностью
                  </a>
                </div>
              </div>
              <div className='text'>
                <p>
                  Понравилась подача и содержание материала! Я учился с
                  поддержкой преподавателя, спасибо Елене Александровне за
                  подробный разбор домашнего задания! Преподаватель отличный!
                  Спасибо большое за знания!
                </p>
                <p>
                  Было бы очень хорошо, если бы доступ к курсу был открыт на
                  неделю-полторы дольше. Да, курс небольшой, но в условиях
                  существенно возросшей нагрузки по основной деятельности это
                  было бы хорошим подспорьем для более равномерного изучения,
                  без ...
                </p>
              </div>
            </div>
            <div className='reviews-slider-block'>
              <div className='author'>
                <div className='image'>
                  <img src='/images/avatar-pic.jpg' alt='' />
                </div>
                <div className='detail'>
                  <div className='info'>
                    <div className='date'>24/03/2020</div>
                    <div className='name'>Леонов Василий</div>
                  </div>
                  <a href='' className='all-link'>
                    Читать полностью
                  </a>
                </div>
              </div>
              <div className='text'>
                <p>
                  Понравилась подача и содержание материала! Я учился с
                  поддержкой преподавателя, спасибо Елене Александровне за
                  подробный разбор домашнего задания! Преподаватель отличный!
                  Спасибо большое за знания!
                </p>
              </div>
            </div>
            <div className='reviews-slider-block'>
              <div className='author'>
                <div className='image'>
                  <img src='/images/avatar-pic.jpg' alt='' />
                </div>
                <div className='detail'>
                  <div className='info'>
                    <div className='date'>24/03/2020</div>
                    <div className='name'>Леонов Василий</div>
                  </div>
                  <a href='' className='all-link'>
                    Читать полностью
                  </a>
                </div>
              </div>
              <div className='text'>
                <p>
                  Понравилась подача и содержание материала! Я учился с
                  поддержкой преподавателя, спасибо Елене Александровне за
                  подробный разбор домашнего задания! Преподаватель отличный!
                  Спасибо большое за знания!
                </p>
                <p>
                  Было бы очень хорошо, если бы доступ к курсу был открыт на
                  неделю-полторы дольше. Да, курс небольшой, но в условиях
                  существенно возросшей нагрузки по основной деятельности это
                  было бы хорошим подспорьем для более равномерного изучения,
                  без ...
                </p>
              </div>
            </div>
            <div className='reviews-slider-block'>
              <div className='author'>
                <div className='image'>
                  <img src='/images/avatar-pic.jpg' alt='' />
                </div>
                <div className='detail'>
                  <div className='info'>
                    <div className='date'>24/03/2020</div>
                    <div className='name'>Леонов Василий</div>
                  </div>
                  <a href='' className='all-link'>
                    Читать полностью
                  </a>
                </div>
              </div>
              <div className='text'>
                <p>
                  Понравилась подача и содержание материала! Я учился с
                  поддержкой преподавателя, спасибо Елене Александровне за
                  подробный разбор домашнего задания! Преподаватель отличный!
                  Спасибо большое за знания!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* diploms-section */}
      <section className='simple-section-small'>
        <div className='container'>
          <div className='section-title'>
            <h3>Наши лицензии</h3>
          </div>
          <div className='diploms-slider diploms-slider-6 js-slick'>
            <div className='diploms-slider-block'>
              <a
                className='image'
                href='images/diploms/diplom-1-big.jpg'
                data-fancybox='diploms-gallery'
              >
                <img src='/images/diploms/diplom-1-small.jpg' alt='' />
              </a>
              <div className='name'>Письмо о внесении в список ФРДО</div>
            </div>
            <div className='diploms-slider-block'>
              <a
                className='image'
                href='images/diploms/diplom-2-big.jpg'
                data-fancybox='diploms-gallery'
              >
                <img src='/images/diploms/diplom-2-small.jpg' alt='' />
              </a>
              <div className='name'>Лицензия 1 стр</div>
            </div>
            <div className='diploms-slider-block'>
              <a
                className='image'
                href='images/diploms/diplom-3-big.jpg'
                data-fancybox='diploms-gallery'
              >
                <img src='/images/diploms/diplom-3-small.jpg' alt='' />
              </a>
              <div className='name'>Лицензия 2 стр</div>
            </div>
            <div className='diploms-slider-block'>
              <a
                className='image'
                href='images/diploms/diplom-4-big.jpg'
                data-fancybox='diploms-gallery'
              >
                <img src='/images/diploms/diplom-4-small.jpg' alt='' />
              </a>
              <div className='name'>Приложение 1.1</div>
            </div>
            <div className='diploms-slider-block'>
              <a
                className='image'
                href='images/diploms/diplom-5-big.jpg'
                data-fancybox='diploms-gallery'
              >
                <img src='/images/diploms/diplom-5-small.jpg' alt='' />
              </a>
              <div className='name'>Заключение о пож. безопасности</div>
            </div>
            <div className='diploms-slider-block'>
              <a
                className='image'
                href='images/diploms/diplom-6-big.jpg'
                data-fancybox='diploms-gallery'
              >
                <img src='/images/diploms/diplom-6-small.jpg' alt='' />
              </a>
              <div className='name'>
                Санитарно-эпидемиологическое заключение
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default managementPrograms
