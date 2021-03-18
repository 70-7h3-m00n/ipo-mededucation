import Head from 'next/head'

const article = () => {
  return (
    <>
      <Head>
        <title>Новость</title>
      </Head>

      {/* breadcrumbs */}
      <div className='breadcrumbs-outer'>
        <div className='container'>
          <ul className='breadcrumbs'>
            <li>
              <a href=''>Главная</a>
            </li>
            <li>
              <a href=''>Новости</a>
            </li>
            <li>
              <span>
                Разработан новый порядок оказания специализированной медпомощи
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* news-detail-section */}
      <div className='container'>
        <div className='news-detail-intro'>
          <div className='news-detail-content'>
            <div className='date'>08.07.2020</div>
            <h1>
              Разработан новый порядок оказания специализированной медпомощи
            </h1>
          </div>
          <div className='image'>
            <img src='/images/vebinar-intro-bg.jpg' alt='' />
          </div>
        </div>
      </div>

      <section className='simple-section-small'>
        <div className='container'>
          <div className='news-detail-info'>
            <div className='simple-text'>
              <p>
                Подготовлен новый порядок направления пациентов в федеральные
                медучреждения для оказания специализированной помощи. Он
                позволит медучреждениям получать финансирование напрямую из
                бюджета, минуя ФФОМС. Проект документа представлен для
                ознакомления на regulation.gov. Общественное обсуждение пройдет
                до 25 ноября. В случае одобрения он вступит в законную силу в
                январе 2021 года.
              </p>
              <div className='news-blue-block'>
                <p>
                  Специализированная медицинская помощь (СПЕ) – это лечебные и
                  диагностические манипуляции, которые могут быть выполнены в
                  специализированных лечебных учреждениях, имеющих специальное
                  оборудование.
                </p>
              </div>
              <p className='pre-list'>
                <strong>
                  Новый порядок предполагает следующий алгоритм действий:
                </strong>
              </p>
              <ul className='dotted-list'>
                <li>
                  Врачу необходимо направить документы в медучреждение,
                  оказывающие специализированную медицинскую помощь в рамках
                  ОМС;
                </li>
                <li>
                  Срок рассмотрения заявки врачебной комиссией – 3 рабочих дня,
                  в течение следующих 2 дней необходимо уведомить пациента и
                  врача о согласии или об отказе;
                </li>
                <li>Пациент может обжаловать решение.</li>
                <li>
                  Протокол решение врачебной комиссии будет храниться в виде
                  электронного и бумажного документа, то есть оказание медпомощи
                  осуществляется с применением ЕГИС.
                </li>
              </ul>
              <p>
                Представители Минздрава дополнительно поясняют, что пациенту не
                могут отказать в медицинской помощи в соответствии с программой
                госгарантий, также как учреждениям не могут отказать в
                финансировании, согласно Федеральному закону «Об Обязательном
                медицинском страховании»
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='blue-bg-line'></div>

      {/* news-small-section */}
      <section className='simple-section-small'>
        <div className='container'>
          <div className='section-title'>
            <h3>Другие новости</h3>
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
    </>
  )
}

export default article
