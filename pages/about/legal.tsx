import Head from 'next/head'
import { useEffect } from 'react'
import loadJs from 'loadjs'

const legal = () => {

  useEffect(() => {
    loadJs(
      [
        '/js/stickykit.js',
        '/js/myjs.js',
      ],
      {
        async: false,
      }
    )
  }, [])

  return (
    <>
      <Head>
        <title>Документы</title>
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
              <span>Документы</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='page-main-title'>
        <div className='container'>
          <h1>Документы</h1>
        </div>
      </div>

      {/* about-docs-section  */}
      <section className='simple-section-small pt10'>
        <div className='container'>
          <div className='about-detail-flex clearfix'>
            <div className='about-detail-sidebar sticky-block'>
              <ul className='about-sidebar-list'>
                <li>
                  <a href=''>Сведения об образовательной организации</a>
                </li>
                <li>
                  <a href='' className='active'>
                    Документы
                  </a>
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
                  <a href=''>Отзывы</a>
                </li>
              </ul>
            </div>
            <div className='about-detail-content'>
              <ul className='about-docs-list'>
                <li>
                  <div className='pic'>
                    <img src='/images/file-list.svg' alt='' />
                  </div>
                  <a href=''>
                    Согласование программ по пожарно-техническому минимуму МУИР
                  </a>
                </li>
                <li>
                  <div className='pic'>
                    <img src='/images/file-list.svg' alt='' />
                  </div>
                  <a href=''>
                    Уведомление о внесении в реестр аккредитованных организаций,
                    оказывающих услуги по охране труда
                  </a>
                </li>
                <li>
                  <div className='pic'>
                    <img src='/images/file-list.svg' alt='' />
                  </div>
                  <a href=''>Политика конфиденциальности МУИР</a>
                </li>
                <li>
                  <div className='pic'>
                    <img src='images/file-list.svg' alt='' />
                  </div>
                  <a href=''>
                    Положение о реализации дополнительных профессиональных
                    программ в Автономной некоммерческой организации
                    дополнительного профессионального образования «Медицинский
                    университет инноваций и развития»
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default legal
