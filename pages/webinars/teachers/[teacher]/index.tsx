import Head from 'next/head'

const teacher = () => {
  return (
    <>
      <Head>
        <title>Спикер</title>
      </Head>

      {/* breadcrumbs */}
      <div className='breadcrumbs-outer'>
        <div className='container'>
          <ul className='breadcrumbs'>
            <li>
              <a href=''>Главная</a>
            </li>
            <li>
              <a href=''>Вебинары</a>
            </li>
            <li>
              <a href=''>Спикеры</a>
            </li>
            <li>
              <span>Спивак Игорь Маратович</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='page-main-title desctop-hidden sm-visible'>
        <div className='container'>
          <h1>Спивак Игорь Маратович</h1>
        </div>
      </div>

      {/* teachers-main-section */}
      <section className='simple-section-small pt10'>
        <div className='container'>
          <div className='teacher-detail-block'>
            <div className='image'>
              <img src='/images/teacher-big-1.jpg' alt='' />
            </div>
            <div className='info'>
              <div className='name'>Спивак Игорь Маратович</div>
              <p>
                В 2009 году закончил военно-медицинскую академию им. С.М.
                Кирова, с 2010 года ведет практическую деятельность,
                специализируется на приеме пациентов с головокружениями и
                головными болями, ведет медицинский блог в инстаграм для коллег
                и пациентов.
              </p>
              <ul className='teacher-socials'>
                <li>
                  <a href=''>
                    <img src='/images/instagram-small.svg' alt='' />
                  </a>
                </li>
                <li>
                  <a href='mailto:@dr.spivak'>@dr.spivak</a>
                </li>
                <li>
                  <a href=''>
                    <img src='/images/facebook-small.svg' alt='' />
                  </a>
                </li>
                <li>
                  <a href=''>
                    <img src='/images/vk-small.svg' alt='' />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='section-title'>
            <h3>Ближайшие вебинары с участием спикера</h3>
          </div>
          <div className='vebinars-small-slider js-slick'>
            <a href='' className='vebinars-slider-block'>
              <h4>
                Очный курс «Диагностическая эндоскопия в оториноларингологии»
              </h4>
              <div className='bottom'>
                <div className='info'>
                  <div className='date'>12.07</div>
                  <span className='detail'>Подробнее</span>
                </div>
                <span className='button white-button'>Принять участие</span>
              </div>
              <div className='image'>
                <img alt='' src='/images/vebinar-pic-1.jpg' />
              </div>
            </a>
            <a href='' className='vebinars-slider-block'>
              <h4>
                Симуляционно-тренинговый курс «Практические возможности
                диагностики и лечения патологии шейки матки, влагалища и вульвы»
              </h4>
              <div className='bottom'>
                <div className='info'>
                  <div className='date'>15.07</div>
                  <span className='detail'>Подробнее</span>
                </div>
                <span className='button white-button'>Принять участие</span>
              </div>
              <div className='image'>
                <img alt='' src='/images/vebinar-pic-2.jpg' />
              </div>
            </a>
            <a href='' className='vebinars-slider-block'>
              <h4>
                Очный курс «Диагностическая эндоскопия в оториноларингологии»
              </h4>
              <div className='bottom'>
                <div className='info'>
                  <div className='date'>12.07</div>
                  <span className='detail'>Подробнее</span>
                </div>
                <span className='button white-button'>Принять участие</span>
              </div>
              <div className='image'>
                <img alt='' src='/images/vebinar-pic-3.jpg' />
              </div>
            </a>
            <a href='' className='vebinars-slider-block'>
              <h4>
                Симуляционно-тренинговый курс «Практические возможности
                диагностики и лечения патологии шейки матки, влагалища и вульвы»
              </h4>
              <div className='bottom'>
                <div className='info'>
                  <div className='date'>15.07</div>
                  <span className='detail'>Подробнее</span>
                </div>
                <span className='button white-button'>Принять участие</span>
              </div>
              <div className='image'>
                <img alt='' src='/images/vebinar-pic-4.jpg' />
              </div>
            </a>
            <a href='' className='vebinars-slider-block'>
              <h4>
                Очный курс «Диагностическая эндоскопия в оториноларингологии»
              </h4>
              <div className='bottom'>
                <div className='info'>
                  <div className='date'>12.07</div>
                  <span className='detail'>Подробнее</span>
                </div>
                <span className='button white-button'>Принять участие</span>
              </div>
              <div className='image'>
                <img alt='' src='/images/vebinar-pic-1.jpg' />
              </div>
            </a>
            <a href='' className='vebinars-slider-block'>
              <h4>
                Симуляционно-тренинговый курс «Практические возможности
                диагностики и лечения патологии шейки матки, влагалища и вульвы»
              </h4>
              <div className='bottom'>
                <div className='info'>
                  <div className='date'>15.07</div>
                  <span className='detail'>Подробнее</span>
                </div>
                <span className='button white-button'>Принять участие</span>
              </div>
              <div className='image'>
                <img alt='' src='/images/vebinar-pic-2.jpg' />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* diploms-section */}
      <section className='simple-section-small blue-bg'>
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

      {/* teachers-section */}
      <section className='simple-section-small'>
        <div className='container'>
          <div className='section-title'>
            <h3>Другие спикеры</h3>
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
    </>
  )
}

export default teacher
