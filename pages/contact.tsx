import Head from 'next/head'
import { useEffect } from 'react'
import loadJs from 'loadjs'

const contact = () => {

  useEffect(() => {

    loadJs([
      '/js/stickykit.js',
      '/js/myjs.js'
    ], {
      async: false
    })
  }, [])

  return (
    <>
      <Head>
        <title>Контакты</title>
      </Head>

      {/* breadcrumbs */}
      <div className='breadcrumbs-outer'>
        <div className='container'>
          <ul className='breadcrumbs'>
            <li>
              <a href=''>Главная</a>
            </li>
            <li>
              <span>Контакты</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='page-main-title'>
        <div className='container'>
          <h1>Контакты</h1>
        </div>
      </div>

      {/* contacts-detail-section */}
      <section className='simple-section-small pt10'>
        <div className='container'>
          <div className='contacts-detail-text'>
            <p>Москва, Ул. Дербеневская набережная 11</p>
            <ul className='contacts-list'>
              <li>
                <div className='type'>телефон:</div>
                <div className='info'>
                  <p>
                    <a href='tel:8-495-260-66-71'>+7 (495) 260-66-71</a>
                  </p>
                  <p>
                    <a href='tel:-800-555-12-94'>+7 (800) 555-12-94</a>
                  </p>
                </div>
              </li>
              <li>
                <div className='type'>e-mail:</div>
                <div className='info'>
                  <p>
                    <a href='mailto:orders@mededucation.ru'>
                      orders@mededucation.ru
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className='contacts-detail-map'>
            <div className='contacts-detail-map-frame'>
              <img alt='' className='example-map' src='/images/map.jpg' />
            </div>
          </div>
        </div>
      </section>

      <section className='support-section'>
        <div className='container'>
          <form
            action='#'
            method='post'
            className='application-form support-form simple-form'
          >
            <div className='title'>Связаться с нами</div>
            <div className='inputs-flex'>
              <div className='width-50'>
                <div className='input-block'>
                  <input type='text' placeholder='Ваше имя' />
                </div>
                <div className='input-block'>
                  <input type='text' placeholder='Телефон' />
                </div>
                <div className='input-block'>
                  <input type='text' placeholder='Эл. почта' />
                </div>
              </div>
              <div className='width-50'>
                <div className='input-block'>
                  <textarea placeholder='Сообщение'></textarea>
                </div>
              </div>
            </div>
            <div className='checkbox-block'>
              <label className='checkbox'>
                <input type='checkbox' />
                <i></i>
                <span>
                  Я согласен с
                  <a href=''>условиями и политикой конфиденциальности</a>
                </span>
              </label>
            </div>
            <button type='submit' className='button big-button gradient-button'>
              Отправить
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default contact
