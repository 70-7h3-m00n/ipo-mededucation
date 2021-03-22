import Head from 'next/head'
import { useEffect } from 'react'
import loadJs from 'loadjs'

const webinars = () => {

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
        <title>Вебинары</title>
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
              <span>Расписание</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='page-main-title'>
        <div className='container'>
          <h1>Вебинары</h1>
        </div>
      </div>

      {/* vebinars-main-section */}
      <section className='simple-section-small pt10'>
        <div className='container'>
          <ul className='vebinars-main-list'>
            <li>
              <a href='' className='vebinars-main-block'>
                <div className='image'>
                  <img src='/images/vebinar-pic-1.jpg' alt='' />
                </div>
                <h4>
                  Научно-практическая онлайн конференция «Актуальные вопросы
                  дерматовенерологии»
                </h4>
                <div className='bottom'>
                  <div className='info'>
                    <div className='date'>08.07 — 12:00</div>
                    <span className='detail'>Подробнее</span>
                  </div>
                  <span className='button white-button'>Принять участие</span>
                </div>
              </a>
            </li>
            <li>
              <a href='' className='vebinars-main-block'>
                <div className='image'>
                  <img src='/images/vebinar-pic-2.jpg' alt='' />
                </div>
                <h4>
                  Очный курс «Диагностическая эндоскопия в оториноларингологии»
                </h4>
                <div className='bottom'>
                  <div className='info'>
                    <div className='date'>08.07 — 12:00</div>
                    <span className='detail'>Подробнее</span>
                  </div>
                  <span className='button white-button'>Принять участие</span>
                </div>
              </a>
            </li>
            <li>
              <a href='' className='vebinars-main-block'>
                <div className='image'>
                  <img src='/images/vebinar-pic-3.jpg' alt='' />
                </div>
                <h4>
                  Симуляционно-тренинговый курс «Практические возможности
                  диагностики и лечения патологии шейки матки, влагалища и
                  вульвы»
                </h4>
                <div className='bottom'>
                  <div className='info'>
                    <div className='date'>08.07 — 12:00</div>
                    <span className='detail'>Подробнее</span>
                  </div>
                  <span className='button white-button'>Принять участие</span>
                </div>
              </a>
            </li>
            <li>
              <a href='' className='vebinars-main-block'>
                <div className='image'>
                  <img src='/images/vebinar-pic-4.jpg' alt='' />
                </div>
                <h4>
                  Теоретические и практические основы гистерорезектоскопии (8
                  группа)
                </h4>
                <div className='bottom'>
                  <div className='info'>
                    <div className='date'>08.07 — 12:00</div>
                    <span className='detail'>Подробнее</span>
                  </div>
                  <span className='button white-button'>Принять участие</span>
                </div>
              </a>
            </li>
            <li>
              <a href='' className='vebinars-main-block'>
                <div className='image'>
                  <img src='/images/vebinar-pic-1.jpg' alt='' />
                </div>
                <h4>
                  Научно-практическая онлайн конференция «Актуальные вопросы
                  дерматовенерологии»
                </h4>
                <div className='bottom'>
                  <div className='info'>
                    <div className='date'>08.07 — 12:00</div>
                    <span className='detail'>Подробнее</span>
                  </div>
                  <span className='button white-button'>Принять участие</span>
                </div>
              </a>
            </li>
            <li>
              <a href='' className='vebinars-main-block'>
                <div className='image'>
                  <img src='/images/vebinar-pic-2.jpg' alt='' />
                </div>
                <h4>
                  Очный курс «Диагностическая эндоскопия в оториноларингологии»
                </h4>
                <div className='bottom'>
                  <div className='info'>
                    <div className='date'>08.07 — 12:00</div>
                    <span className='detail'>Подробнее</span>
                  </div>
                  <span className='button white-button'>Принять участие</span>
                </div>
              </a>
            </li>
            <li>
              <a href='' className='vebinars-main-block'>
                <div className='image'>
                  <img src='/images/vebinar-pic-3.jpg' alt='' />
                </div>
                <h4>
                  Симуляционно-тренинговый курс «Практические возможности
                  диагностики и лечения патологии шейки матки, влагалища и
                  вульвы»
                </h4>
                <div className='bottom'>
                  <div className='info'>
                    <div className='date'>08.07 — 12:00</div>
                    <span className='detail'>Подробнее</span>
                  </div>
                  <span className='button white-button'>Принять участие</span>
                </div>
              </a>
            </li>
            <li>
              <a href='' className='vebinars-main-block'>
                <div className='image'>
                  <img src='/images/vebinar-pic-4.jpg' alt='' />
                </div>
                <h4>
                  Теоретические и практические основы гистерорезектоскопии (8
                  группа)
                </h4>
                <div className='bottom'>
                  <div className='info'>
                    <div className='date'>08.07 — 12:00</div>
                    <span className='detail'>Подробнее</span>
                  </div>
                  <span className='button white-button'>Принять участие</span>
                </div>
              </a>
            </li>
            <li>
              <a href='' className='vebinars-main-block'>
                <div className='image'>
                  <img src='/images/vebinar-pic-1.jpg' alt='' />
                </div>
                <h4>
                  Научно-практическая онлайн конференция «Актуальные вопросы
                  дерматовенерологии»
                </h4>
                <div className='bottom'>
                  <div className='info'>
                    <div className='date'>08.07 — 12:00</div>
                    <span className='detail'>Подробнее</span>
                  </div>
                  <span className='button white-button'>Принять участие</span>
                </div>
              </a>
            </li>
            <li>
              <a href='' className='vebinars-main-block'>
                <div className='image'>
                  <img src='/images/vebinar-pic-2.jpg' alt='' />
                </div>
                <h4>
                  Очный курс «Диагностическая эндоскопия в оториноларингологии»
                </h4>
                <div className='bottom'>
                  <div className='info'>
                    <div className='date'>08.07 — 12:00</div>
                    <span className='detail'>Подробнее</span>
                  </div>
                  <span className='button white-button'>Принять участие</span>
                </div>
              </a>
            </li>
            <li>
              <a href='' className='vebinars-main-block'>
                <div className='image'>
                  <img src='/images/vebinar-pic-3.jpg' alt='' />
                </div>
                <h4>
                  Симуляционно-тренинговый курс «Практические возможности
                  диагностики и лечения патологии шейки матки, влагалища и
                  вульвы»
                </h4>
                <div className='bottom'>
                  <div className='info'>
                    <div className='date'>08.07 — 12:00</div>
                    <span className='detail'>Подробнее</span>
                  </div>
                  <span className='button white-button'>Принять участие</span>
                </div>
              </a>
            </li>
            <li>
              <a href='' className='vebinars-main-block'>
                <div className='image'>
                  <img src='/images/vebinar-pic-4.jpg' alt='' />
                </div>
                <h4>
                  Теоретические и практические основы гистерорезектоскопии (8
                  группа)
                </h4>
                <div className='bottom'>
                  <div className='info'>
                    <div className='date'>08.07 — 12:00</div>
                    <span className='detail'>Подробнее</span>
                  </div>
                  <span className='button white-button'>Принять участие</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default webinars
