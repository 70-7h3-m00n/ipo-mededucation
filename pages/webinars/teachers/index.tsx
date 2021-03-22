import Head from 'next/head'

import { useEffect } from 'react'
import loadJs from 'loadjs'

const teachers = () => {

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
        <title>Спикеры</title>
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
              <span>Спикеры</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='page-main-title'>
        <div className='container'>
          <h1>Спикеры</h1>
        </div>
      </div>

      {/* teachers-main-section */}
      <section className='simple-section-small pt10'>
        <div className='container'>
          <div className='teachers-main-list'>
            <div className='teachers-main-block'>
              <div className='image'>
                <img src='/images/teacher-pic-1.jpg' alt='' />
              </div>
              <div className='info'>
                <div className='name'>Спивак Игорь Маратович</div>
                <p>
                  В 2009 году закончил военно-медицинскую академию им. С.М.
                  Кирова, с 2010 года ведет практическую деятельность,
                  специализируется на приеме пациентов с головокружениями и
                  головными болями, ведет медицинский блог в инстаграм для
                  коллег и пациентов.
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
                <a href='' className='button gradient-button'>
                  Страница спикера
                </a>
              </div>
            </div>
            <div className='teachers-main-block'>
              <div className='image'>
                <img src='/images/teacher-pic-2.jpg' alt='' />
              </div>
              <div className='info'>
                <div className='name'>Габай Полина Георгиевна</div>
                <p>
                  В 2009 году закончил военно-медицинскую академию им. С.М.
                  Кирова, с 2010 года ведет практическую деятельность,
                  специализируется на приеме пациентов с головокружениями и
                  головными болями, ведет медицинский блог в инстаграм для
                  коллег и пациентов.
                </p>
                <ul className='teacher-socials'>
                  <li>
                    <a href=''>
                      <img src='/images/instagram-small.svg' alt='' />
                    </a>
                  </li>
                  <li>
                    <a href='mailto:@dr.spivak'>@dr.gabay</a>
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
                <a href='' className='button gradient-button'>
                  Страница спикера
                </a>
              </div>
            </div>
            <div className='teachers-main-block'>
              <div className='image'>
                <img src='/images/teacher-pic-3.jpg' alt='' />
              </div>
              <div className='info'>
                <div className='name'>Луговой Артем Олегович</div>
                <p>
                  В 2009 году закончил военно-медицинскую академию им. С.М.
                  Кирова, с 2010 года ведет практическую деятельность,
                  специализируется на приеме пациентов с головокружениями и
                  головными болями, ведет медицинский блог в инстаграм для
                  коллег и пациентов.
                </p>
                <ul className='teacher-socials'>
                  <li>
                    <a href=''>
                      <img src='/images/instagram-small.svg' alt='' />
                    </a>
                  </li>
                  <li>
                    <a href='mailto:@dr.spivak'>@dr.artrm_lugovoy</a>
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
                <a href='' className='button gradient-button'>
                  Страница спикера
                </a>
              </div>
            </div>
            <div className='teachers-main-block'>
              <div className='image'>
                <img src='/images/teacher-pic-4.jpg' alt='' />
              </div>
              <div className='info'>
                <div className='name'>Ирышкин Олег Евгеньевич</div>
                <p>
                  В 2009 году закончил военно-медицинскую академию им. С.М.
                  Кирова, с 2010 года ведет практическую деятельность,
                  специализируется на приеме пациентов с головокружениями и
                  головными болями, ведет медицинский блог в инстаграм для
                  коллег и пациентов.
                </p>
                <ul className='teacher-socials'>
                  <li>
                    <a href=''>
                      <img src='/images/instagram-small.svg' alt='' />
                    </a>
                  </li>
                  <li>
                    <a href='mailto:@dr.spivak'>@dr.o_mishkin</a>
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
                <a href='' className='button gradient-button'>
                  Страница спикера
                </a>
              </div>
            </div>
            <div className='teachers-main-block'>
              <div className='image'>
                <img src='/images/teacher-pic-1.jpg' alt='' />
              </div>
              <div className='info'>
                <div className='name'>Спивак Игорь Маратович</div>
                <p>
                  В 2009 году закончил военно-медицинскую академию им. С.М.
                  Кирова, с 2010 года ведет практическую деятельность,
                  специализируется на приеме пациентов с головокружениями и
                  головными болями, ведет медицинский блог в инстаграм для
                  коллег и пациентов.
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
                <a href='' className='button gradient-button'>
                  Страница спикера
                </a>
              </div>
            </div>
            <div className='teachers-main-block'>
              <div className='image'>
                <img src='/images/teacher-pic-2.jpg' alt='' />
              </div>
              <div className='info'>
                <div className='name'>Габай Полина Георгиевна</div>
                <p>
                  В 2009 году закончил военно-медицинскую академию им. С.М.
                  Кирова, с 2010 года ведет практическую деятельность,
                  специализируется на приеме пациентов с головокружениями и
                  головными болями, ведет медицинский блог в инстаграм для
                  коллег и пациентов.
                </p>
                <ul className='teacher-socials'>
                  <li>
                    <a href=''>
                      <img src='/images/instagram-small.svg' alt='' />
                    </a>
                  </li>
                  <li>
                    <a href='mailto:@dr.spivak'>@dr.gabay</a>
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
                <a href='' className='button gradient-button'>
                  Страница спикера
                </a>
              </div>
            </div>
            <div className='teachers-main-block'>
              <div className='image'>
                <img src='/images/teacher-pic-3.jpg' alt='' />
              </div>
              <div className='info'>
                <div className='name'>Луговой Артем Олегович</div>
                <p>
                  В 2009 году закончил военно-медицинскую академию им. С.М.
                  Кирова, с 2010 года ведет практическую деятельность,
                  специализируется на приеме пациентов с головокружениями и
                  головными болями, ведет медицинский блог в инстаграм для
                  коллег и пациентов.
                </p>
                <ul className='teacher-socials'>
                  <li>
                    <a href=''>
                      <img src='/images/instagram-small.svg' alt='' />
                    </a>
                  </li>
                  <li>
                    <a href='mailto:@dr.spivak'>@dr.artrm_lugovoy</a>
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
                <a href='' className='button gradient-button'>
                  Страница спикера
                </a>
              </div>
            </div>
          </div>

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

export default teachers
