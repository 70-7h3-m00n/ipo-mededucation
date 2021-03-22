import Head from 'next/head'
import { useEffect } from 'react'
import loadJs from 'loadjs'

const reviews = () => {
  useEffect(() => {

    loadJs([
      '/js/jquery.fancybox.min.js',
      '/js/stickykit.js',
      '/js/myjs.js'
    ], {
      async: false
    })

  }, [])

  return (
    <>
      <Head>
        <title>Отзывы</title>
      </Head>

      {/* breadcrumbs */}
      <div className='breadcrumbs-outer'>
        <div className='container'>
          <ul className='breadcrumbs'>
            <li>
              <a href=''>Главная</a>
            </li>
            <li>
              <a href=''>Об университете</a>
            </li>
            <li>
              <span>Отзывы</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='page-main-title'>
        <div className='container'>
          <h1>Отзывы</h1>
        </div>
      </div>

      {/* about-reviews-section */}
      <section className='simple-section-small pt10'>
        <div className='container'>
          <div className='about-detail-flex clearfix'>
            <div className='about-detail-sidebar sticky-block'>
              <ul className='about-sidebar-list'>
                <li>
                  <a href=''>Сведения об образовательной организации</a>
                </li>
                <li>
                  <a href=''>Документы</a>
                </li>
                <li>
                  <a href=''>Образовательные стандарты</a>
                </li>
                <li>
                  <a href=''>Руководство и педагогический состав</a>
                </li>
                <li>
                  <a href=''>Вакансии</a>
                </li>
                <li>
                  <a href='' className='active'>
                    Отзывы
                  </a>
                </li>
              </ul>
            </div>
            <div className='about-detail-content'>
              <div className='about-reviews-list'>
                <div className='about-reviews-block sm-visible'>
                  <div className='name desctop-hidden'>Пансионат "Пестово"</div>
                  <a
                    className='image'
                    href='images/reviews/reviews-1-big.png'
                    data-fancybox='reviews-gallery'
                  >
                    <img src='/images/reviews/reviews-1-small.jpg' alt='' />
                  </a>
                  <div className='info'>
                    <div className='name'>Пансионат "Пестово"</div>
                    <p>
                      Уважаемый Михаил Валерьевич! Администрация пансионата
                      "Пестово" Банка России (далее - Пансионат) выражает
                      благодарность и признательность специалисту АНО ДПО "МУИР"
                      (Хильчук К.А. за профессионализм и оперативность решения
                      вопросов в обучении медицинских работников Пансионата.
                    </p>
                    <p>
                      За длительный период сотрудничества Пансионата с АНО ДПО
                      "МУИР" Хильчук К.А. зарекомендовал себя только с
                      положительной стороны, оказывая всестороннюю
                      методологическую, информационную поддержку и помощь в
                      периоды обучения работников.
                    </p>
                    <p>
                      Надеемся на дальнейшее плодотворное сотрудничество и
                      желаем успехов в профессиональной деятельности.
                    </p>
                  </div>
                </div>
                <div className='about-reviews-block'>
                  <div className='name desctop-hidden'>
                    Нижнекамское монтажное управление АО «Татэлектромонтаж»
                  </div>
                  <a
                    className='image'
                    href='images/reviews/reviews-2-big.png'
                    data-fancybox='reviews-gallery'
                  >
                    <img src='/images/reviews/reviews-2-small.jpg' alt='' />
                  </a>
                  <div className='info'>
                    <div className='name'>
                      Нижнекамское монтажное управление АО «Татэлектромонтаж»
                    </div>
                    <p>
                      Нижнекамское монтажное управление АО «ТАТЭЛЕКТРОМОНТАЖ»
                      выражает Вам благодарность за организованное и проведенное
                      обучение по курсу повышения квалификации «Скорая и
                      неотложная помощь» нашему сотруднику Перешитовой Нели
                      Эдмундовны.
                    </p>
                    <p>
                      Курс был проведен высококвалифицированным
                      преподавательским составом. Отдельная благодарность
                      заместителю руководителя департамента по работе с
                      ключевыми клиентами Истоминой Юлии и ведущему специалисту
                      по работе с документами Вербитской Екатерине за
                      внимательный и индивидуальный подход к обучающимся, за
                      профессиональную работу при организации учебного процесса.
                    </p>
                    <p>
                      Желаем Вам дальнейших успехов в работе и надеемся на
                      плодотворное сотрудничество.
                    </p>
                  </div>
                </div>
                <div className='about-reviews-block'>
                  <div className='name desctop-hidden'>
                    Многофункциональный медицинский центр банка России
                  </div>
                  <a
                    className='image'
                    href='images/reviews/reviews-3-big.png'
                    data-fancybox='reviews-gallery'
                  >
                    <img src='/images/reviews/reviews-3-small.jpg' alt='' />
                  </a>
                  <div className='info'>
                    <div className='name'>
                      Многофункциональный медицинский центр банка России
                    </div>
                    <p>
                      Уважаемый Михаил Валерьевич! Многофункциональный
                      медицинский центр Банка России выражает глубокую
                      благодарность и признательность специалисту АНО ДПО "МУИР"
                      Хильчуку Кириллу Анатольевичу за плодотворное
                      сотрудничество, оперативные и квалифицированные действия
                      при организации обучения сотрудников ММЦ, а также за
                      высокое качество исполнения своих обязанностей.
                      Убедительно просим Вас поощрить вышеназванного сотрудника.
                      Надеемся на дальнейшее сотрудничество.
                    </p>
                    <p>
                      Главный врач Многофункционального медицинского центра:
                      А.М. Черкашов
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default reviews
