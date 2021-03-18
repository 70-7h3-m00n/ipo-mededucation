import Head from 'next/head'

const careers = () => {
  return (
    <>
      <Head>
        <title>Вакансии</title>
      </Head>

      {/* <!--breadcrumbs--> */}
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
              <span>Вакансии</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='page-main-title'>
        <div className='container'>
          <h1>Вакансии</h1>
        </div>
      </div>

      {/* <!-- about-vacancies-section --> */}
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
                  <a href='' className='active'>
                    Вакансии
                  </a>
                </li>
                <li>
                  <a href=''>Отзывы</a>
                </li>
              </ul>
            </div>
            <div className='about-detail-content'>
              <div className='section-title'>
                <h3>Менеджер по работе с клиентами</h3>
              </div>
              <div className='simple-text'>
                <p>
                  У нас открыта позиция для проактивных людей, которые хотят
                  работать в стабильной организации с высоким и постоянно
                  растущим доходом, иметь возможности профессионально расти и и
                  развиваться среди таких же амбициозных и по-настоящему дружных
                  коллег!
                </p>
                <p>
                  <strong>Задачи: </strong>телефонные продажи дополнительного
                  профессионального образования в сегменте B2B/B2C;
                </p>
                <p className='pre-list'>
                  <strong>От тебя: </strong>
                </p>
                <ul className='dotted-list'>
                  <li>Хорошие коммуникативные навыки;</li>
                  <li>Нацеленность на результат;</li>
                  <li>Ответственность;</li>
                  <li>Высокий уровень обучаемости;</li>
                  <li>
                    Готовность реально много звонить и совершать достойные
                    сделки, ведь Наш Университет предоставляет Вам возможность
                    продавать уникальный и востребованный продукт. <br />
                    Спрос на услуги нашей компании есть всегда, так как наши
                    продукты необходимы клиентам в соответствии с
                    законодательством. <br />
                    Наши услуги принципиально важны для ведения и
                    совершенствования трудовой деятельности наших клиентов;
                  </li>
                  <li>Опыт в продажах, как преимущество;</li>
                </ul>
                <p className='pre-list'>
                  <strong>От нас: </strong>
                </p>
                <ul className='dotted-list'>
                  <li>
                    Своевременные выплаты 3 раза в месяц по системе fix + % c
                    продаж без верхней планки (средний уровень дохода менеджера
                    в компании 80 000 руб.);
                  </li>
                  <li>Оформление по ТК РФ;</li>
                  <li>Реальные возможности карьерного роста;</li>
                  <li>Постоянное обучение у ведущих тренеров;</li>
                  <li>Доп. бонусы и подарки;</li>
                  <li>Развитая корпоративная жизнь;</li>
                </ul>
                <p>
                  <strong>Адрес: </strong>ВДНХ, Москва, улица Кондратюка, 3
                </p>
                <p>
                  <strong>По всем вопросам обращаться: </strong>
                  <a href='mailto:hh@mededucation.info' className='mail-link'>
                    hh@mededucation.info
                  </a>
                </p>
                <p>
                  <strong>Телефон: </strong>
                  <a href='tel:8-499-116-69-63'>+7 (499) 116-69-63</a>
                </p>
                <div className='about-hh'>
                  <a href='' className='about-hh-link'>
                    <span>Все наши вакансии на HeadHunter</span>
                    <div className=' pic'>
                      <img src='/images/hh-logo.svg' alt='' />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default careers
