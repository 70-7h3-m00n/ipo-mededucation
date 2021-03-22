import Head from 'next/head'
import { useEffect } from 'react'
import loadJs from 'loadjs'

const news = () => {

  useEffect(() => {
    loadJs([
      '/js/myjs.js'
    ], {
      async: false
    })
  }, [])

  return (
    <>
      <Head>
        <title>Новости</title>
      </Head>

      {/* breadcrumbs */}
      <div className='breadcrumbs-outer'>
        <div className='container'>
          <ul className='breadcrumbs'>
            <li>
              <a href=''>Главная</a>
            </li>
            <li>
              <span>Новости</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='page-main-title'>
        <div className='container'>
          <h1>Новости</h1>
        </div>
      </div>

      {/* news-main-section */}
      <section className='simple-section-small pt10'>
        <div className='container'>
          <ul className='news-main-list'>
            <li>
              <a href='' className='news-main-block'>
                <div className='date'>12.05.2020</div>
                <h4>
                  Разработан новый порядок оказания специализированной медпомощи
                </h4>
                <p>
                  Уже в этом году в Россию поступят 2,5 тыс. упаковок лекарства
                  и будут распределены по конкретным медицинским учреждениям.
                </p>
                <div className='image'>
                  <img src='/images/news-pic-1.jpg' alt='' />
                </div>
              </a>
            </li>
            <li>
              <a href='' className='news-main-block'>
                <div className='date'>12.05.2020</div>
                <h4>Успехи в лечении муковисцидоза</h4>
                <p>
                  Уже в этом году в Россию поступят 2,5 тыс. упаковок лекарства
                  и будут распределены по конкретным медицинским учреждениям.
                </p>
                <div className='image'>
                  <img src='/images/news-pic-2.jpg' alt='' />
                </div>
              </a>
            </li>
            <li>
              <a href='' className='news-main-block'>
                <div className='date'>12.05.2020</div>
                <h4>
                  Уточнены требования к учреждениям, в которых проводится
                  аккредитация
                </h4>
                <p>
                  Уже в этом году в Россию поступят 2,5 тыс. упаковок лекарства
                  и будут распределены по конкретным медицинским учреждениям.
                </p>
                <div className='image'>
                  <img src='/images/vebinar-pic-4.jpg' alt='' />
                </div>
              </a>
            </li>
            <li>
              <a href='' className='news-main-block'>
                <div className='date'>12.05.2020</div>
                <h4>
                  Аккредитация врачей в 2021 году: сдайте репетиционный экзамен
                </h4>
                <p>
                  Уже в этом году в Россию поступят 2,5 тыс. упаковок лекарства
                  и будут распределены по конкретным медицинским учреждениям.
                </p>
                <div className='image'>
                  <img src='/images/vebinar-pic-2.jpg' alt='' />
                </div>
              </a>
            </li>
            <li>
              <a href='' className='news-main-block'>
                <div className='date'>12.05.2020</div>
                <h4>
                  Разработан новый порядок оказания специализированной медпомощи
                </h4>
                <p>
                  Уже в этом году в Россию поступят 2,5 тыс. упаковок лекарства
                  и будут распределены по конкретным медицинским учреждениям.
                </p>
                <div className='image'>
                  <img src='/images/news-pic-1.jpg' alt='' />
                </div>
              </a>
            </li>
            <li>
              <a href='' className='news-main-block'>
                <div className='date'>12.05.2020</div>
                <h4>Успехи в лечении муковисцидоза</h4>
                <p>
                  Уже в этом году в Россию поступят 2,5 тыс. упаковок лекарства
                  и будут распределены по конкретным медицинским учреждениям.
                </p>
                <div className='image'>
                  <img src='/images/news-pic-2.jpg' alt='' />
                </div>
              </a>
            </li>
            <li>
              <a href='' className='news-main-block'>
                <div className='date'>12.05.2020</div>
                <h4>
                  Уточнены требования к учреждениям, в которых проводится
                  аккредитация
                </h4>
                <p>
                  Уже в этом году в Россию поступят 2,5 тыс. упаковок лекарства
                  и будут распределены по конкретным медицинским учреждениям.
                </p>
                <div className='image'>
                  <img src='/images/vebinar-pic-4.jpg' alt='' />
                </div>
              </a>
            </li>
            <li>
              <a href='' className='news-main-block'>
                <div className='date'>12.05.2020</div>
                <h4>
                  Аккредитация врачей в 2021 году: сдайте репетиционный экзамен
                </h4>
                <p>
                  Уже в этом году в Россию поступят 2,5 тыс. упаковок лекарства
                  и будут распределены по конкретным медицинским учреждениям.
                </p>
                <div className='image'>
                  <img src='/images/vebinar-pic-2.jpg' alt='' />
                </div>
              </a>
            </li>
            <li>
              <a href='' className='news-main-block'>
                <div className='date'>12.05.2020</div>
                <h4>
                  Разработан новый порядок оказания специализированной медпомощи
                </h4>
                <p>
                  Уже в этом году в Россию поступят 2,5 тыс. упаковок лекарства
                  и будут распределены по конкретным медицинским учреждениям.
                </p>
                <div className='image'>
                  <img src='/images/news-pic-1.jpg' alt='' />
                </div>
              </a>
            </li>
            <li>
              <a href='' className='news-main-block'>
                <div className='date'>12.05.2020</div>
                <h4>Успехи в лечении муковисцидоза</h4>
                <p>
                  Уже в этом году в Россию поступят 2,5 тыс. упаковок лекарства
                  и будут распределены по конкретным медицинским учреждениям.
                </p>
                <div className='image'>
                  <img src='/images/news-pic-2.jpg' alt='' />
                </div>
              </a>
            </li>
            <li>
              <a href='' className='news-main-block'>
                <div className='date'>12.05.2020</div>
                <h4>
                  Уточнены требования к учреждениям, в которых проводится
                  аккредитация
                </h4>
                <p>
                  Уже в этом году в Россию поступят 2,5 тыс. упаковок лекарства
                  и будут распределены по конкретным медицинским учреждениям.
                </p>
                <div className='image'>
                  <img src='/images/vebinar-pic-4.jpg' alt='' />
                </div>
              </a>
            </li>
            <li>
              <a href='' className='news-main-block'>
                <div className='date'>12.05.2020</div>
                <h4>
                  Аккредитация врачей в 2021 году: сдайте репетиционный экзамен
                </h4>
                <p>
                  Уже в этом году в Россию поступят 2,5 тыс. упаковок лекарства
                  и будут распределены по конкретным медицинским учреждениям.
                </p>
                <div className='image'>
                  <img src='/images/vebinar-pic-2.jpg' alt='' />
                </div>
              </a>
            </li>
          </ul>

          {/* Пагинация */}
          <ul className='pagination'>
            <li className='side prev'>
              <a href='' className='disabled'>
                Назад
              </a>
            </li>
            <li>
              <a href='' className='active'>
                1
              </a>
            </li>
            <li>
              <a href=''>2</a>
            </li>
            <li>
              <a href=''>3</a>
            </li>
            <li>
              <a href=''>4</a>
            </li>
            <li>
              <a href=''>5</a>
            </li>
            <li>
              <a href=''>6</a>
            </li>
            <li>
              <a href=''>7</a>
            </li>
            <li>
              <a href=''>8</a>
            </li>
            <li className='side next'>
              <a href=''>Вперед</a>
            </li>
          </ul>
          {/* //Пагинация */}
        </div>
      </section>
    </>
  )
}

export default news
