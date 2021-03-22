import Head from 'next/head'
import { useEffect } from 'react'
import loadJs from 'loadjs'

const webinar = () => {

  useEffect(() => {
    loadJs([
      '/js/slick.min.js',
      '/js/stickykit.js',
      '/js/myjs.js'
    ], {
      async: false
    })
  }, [])

  return (
    <>
      <Head>
        <title>Вебинар</title>
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
              <span>
                Научно-практическая онлайн конференция «Актуальные вопросы
                дерматовенерологии»
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* vebinar-detail-section */}
      <div className='vebinar-detail-intro'>
        <div className='container'>
          <div className='vebinar-detail-content'>
            <div className='date'>08.07 — 12:00</div>
            <h1>
              Научно-практическая онлайн конференция «Актуальные вопросы
              дерматовенерологии»
            </h1>
            <a href='' className='button white-button big-button'>
              Принять участие
            </a>
          </div>
        </div>
        <div className='image'>
          <img src='/images/vebinar-intro-bg.jpg' alt='' />
        </div>
      </div>

      <section className='simple-section-small'>
        <div className='container'>
          <div className='section-title'>
            <h3>Описание</h3>
          </div>
          <div className='floating-image'>
            <img alt='' src='/images/floating-image-2.jpg' />
          </div>
          <div className='simple-text'>
            <p>
              Для того, чтобы стать квалифицированным специалистом в сфере
              акушерства и гинекологии, нужно пройти долгий путь обучения — как
              минимум, 6 лет пребывания в медицинском институте. После того, как
              базовая подготовка на высшем уровне будет завершена, практикующие
              врачи должны регулярно посещать курсы, направленные на повышение
              квалификации — не реже одного раза в пять лет.
            </p>
            <p>
              Акушеры-гинекологи, искренне любящие свою профессию, хотят и любят
              учиться. Каждые пять лет они получают сертификаты и удостоверения.
              Такая система будет существовать до 2021 года, пока система НМО
              полностью не вступит в силу.
            </p>
            <p>
              Сейчас в российском здравоохранении практикуют систему присвоения
              медикам категорий. Если врач отработал в ЛПУ от 2 до 3 лет, он
              становится специалистом второй категории. После 5-7 лет трудовой
              деятельности категория повышается до первой, а высшую присваивают
              тем, кто непрерывно работал 10 лет и более.
            </p>
          </div>
        </div>
      </section>

      <section className='simple-section-small blue-bg'>
        <div className='container'>
          <ul className='vebinar-detail-info'>
            <li>
              <div className='vebinar-info-block'>
                <h3>Программа вебинара</h3>
                <div className='vebinar-info-number'>
                  <div className='number'>
                    <img alt='' src='/images/number-1.png' />
                  </div>
                  <div className='detail'>
                    <p>Анатомия наружного носа — 3 часа</p>
                  </div>
                </div>
                <div className='vebinar-info-number'>
                  <div className='number'>
                    <img alt='' src='/images/number-2.png' />
                  </div>
                  <div className='detail'>
                    <p>
                      Основы ринопластики, открытая и закрытая ринопластика,
                      структурная и сохраняющая ринопластика — 3 часа
                    </p>
                  </div>
                </div>
                <div className='vebinar-info-number'>
                  <div className='number'>
                    <img alt='' src='/images/number-3.png' />
                  </div>
                  <div className='detail'>
                    <p>Базовая ринопластическая операция — 3 часа</p>
                  </div>
                </div>
                <div className='vebinar-info-number'>
                  <div className='number'>
                    <img alt='' src='/images/number-4.png' />
                  </div>
                  <div className='detail'>
                    <p>Демонстрация диссекции на голове барана — 3 часа</p>
                    <p className='pre-list'>Программа диссекционного курса:</p>
                    <ul className='simple-list'>
                      <li>Открытый ринопластический доступ</li>
                      <li>
                        Доступ к перегородке носа, септопластика, забор
                        хрящевого трансплантата
                      </li>
                      <li>Коррекция хрящевой горбинки</li>
                      <li>
                        Удлиняющий перегородочный графт, расширяющий графт,
                        колумеллярный страт
                      </li>
                      <li>
                        Коррекция кончика носа швами, хирургия кончика носа
                      </li>
                      <li>Латеропозиция нижних носовых раковин</li>
                      <li>
                        Приготовление мелкоизмельченного хряща для оконтуривания
                      </li>
                      <li>Пластика ноздрей</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className='vebinar-info-block'>
                <h3>Вы получите</h3>
                <div className='vebinar-info-contains'>
                  <div className='title'>
                    <div className='pic'>
                      <img src='/images/vebinar-graduate.svg' alt='' />
                    </div>
                    Курс включает в себя
                  </div>
                  <ul className='dotted-list'>
                    <li>
                      Отработка навыков риносептопластики на биологической
                      модели (голове барана)
                    </li>
                    <li>
                      Освоение оперативных навыков риносептопластики на
                      биологической модели (голове барана)
                    </li>
                    <li>
                      Базовая оперативная техника риносептопластики с отработкой
                      на биологической модели (голове барана)
                    </li>
                  </ul>
                </div>
                <div className='vebinar-info-contains'>
                  <div className='title'>
                    <div className='pic'>
                      <img src='/images/vebinar-clock.svg' alt='' />
                    </div>
                    Режим занятий
                  </div>
                  <ul className='dotted-list'>
                    <li>Дистанционная часть – 12 часов</li>
                    <li>Очная часть – 6 часов</li>
                  </ul>
                </div>
                <div className='vebinar-info-contains'>
                  <div className='title'>
                    <div className='pic'>
                      <img src='/images/vebinar-md.svg' alt='' />
                    </div>
                    Для кого предназначен курс
                  </div>
                  <ul className='dotted-list'>
                    <li>Челюстно-лицевые хирурги</li>
                    <li>Оториноларингологи</li>
                    <li>Пластические хирурги</li>
                    <li>Ординаторы по вышеуказанным специальностям</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className='simple-section-small'>
        <div className='container'>
          <div className='section-title'>
            <h3>Cпикеры</h3>
          </div>
          <div className='teachers-slider js-slick vebinar-teachers-slider'>
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

      <section className='support-section'>
        <div className='container'>
          <form
            action='#'
            method='post'
            className='application-form support-form simple-form'
          >
            <div className='title'>Оставить заявку</div>
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

export default webinar
