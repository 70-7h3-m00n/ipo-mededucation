import Head from 'next/head'
import { useEffect } from 'react'
import loadJs from 'loadjs'

const seniorProgram = () => {

  useEffect(() => {
    loadJs([
      '/js/slick.min.js',
      '/js/jquery.fancybox.min.js',
      '/js/stickykit.js',
      '/js/jquery.autocolumnlist.min.js',
      '/js/myjs.js'
    ], {
      async: false
    })
  }, [])

  
  return (
    <>
      <Head>
        <title>Программа</title>
      </Head>

      {/* breadcrumbs */}
      <div className='breadcrumbs-outer'>
        <div className='container'>
          <ul className='breadcrumbs'>
            <li>
              <a href=''>Главная</a>
            </li>
            <li>
              <a href=''>Дистанционные программы</a>
            </li>
            <li>
              <a href=''>Высший медицинский персонал</a>
            </li>
            <li>
              <span>Название программы обучения</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='container'>
        <div className='program-intro'>
          <div className='program-intro-left'>
            <h1>Название программы обучения</h1>
            <div className='image'>
              <img src='/images/program-intro-bg.jpg' alt='' />
            </div>
          </div>
          <div className='program-intro-right'>
            <div className='price'>
              50 000 <small>руб.</small>
            </div>
            <p>
              Программа дополнительного профессионального образования
              разработана с учетом ФГОС ординатуры по данной специальности. Она
              включает изучение:
            </p>
            <ul className='program-intro-list'>
              <li>основ авиационной и космической медицины</li>
              <li>нормальной и патологической физиологии</li>
              <li>авиационной физиологии и патофизиологии</li>
              <li>врачебно-летной экспертизы</li>
              <li>авиационной медицинской авариологии</li>
              <li>
                основ клиники, ранней диагностики и терапии инфекционных
                заболеваний
              </li>
              <li>принципов и методов формирования здорового образа жизни</li>
            </ul>
            <a className='button padding-button' href=''>
              Узнать подробности
            </a>
          </div>
        </div>
        <div className='program-detail-flex clearfix'>
          <div className='program-detail-content'>
            {/* program-detail-information */}
            <div className='program-detail-information'>
              <div className='top-block'>
                <ul className='program-info-list'>
                  <li>
                    <div className='pic'>
                      <img src='/images/calendar.svg' alt='' />
                    </div>
                    <div>
                      <div className='type'>Время обучения:</div>
                      <p>от 500 ч.</p>
                    </div>
                  </li>
                  <li>
                    <div className='pic'>
                      <img src='/images/chalkboard.svg' alt='' />
                    </div>
                    <div>
                      <div className='type'>Тип обучения:</div>
                      <p>
                        Очно-заочная форма с применением дистанционных
                        образовательных технологий
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='pic'>
                      <img src='/images/certificate.svg' alt='' />
                    </div>
                    <div>
                      <div className='type'>Получаемый документ:</div>
                      <p>Диплом о профессиональной переподготовке</p>
                      <p>Сертификат специалиста медицины</p>
                    </div>
                  </li>
                  <li>
                    <div className='pic'>
                      <img src='/images/graduate.svg' alt='' />
                    </div>
                    <div>
                      <div className='type'>Уровень образования:</div>
                      <p>Высшее образование</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='bottom-block'>
                <h3>Возможно обучение в рассрочку на 12 месяцев!</h3>
                <a href='' className='button padding-button'>
                  Узнать об условиях
                </a>
              </div>
            </div>

            <div className='program-detail-section'>
              <div className='floating-image'>
                <img src='/images/floating-image-1.jpg' alt='' />
              </div>
              <div className='simple-text'>
                <p>
                  <strong>Авиационная и космическая медицина</strong> — раздел
                  медицины, который изучает состояния, в которых пребывает
                  человеческий организм в условиях космических или авиационных
                  полетов. Работа врача авиационной и космической медицины
                  заключается в выполнении многих задач, куда входит медицинское
                  сопровождение пассажиров и экипажа воздушного судна в течение
                  или после полета, проведение комиссий по допуску к полетам,
                  диагностика и наблюдение профессиональных заболеваний
                  летчиков. В связи с развитием авиации, возрастает и уровень
                  требований к квалификации специалистов медицинских служб,
                  занятых в данной сфере. Врачи авиационной и космической
                  медицины, как и другие специалисты, проходят курсы повышения
                  квалификации не реже одного раза в пять лет.
                </p>
                <p>
                  Помимо программ профессионального совершенствования,
                  дополнительное образование врачей предполагает также
                  профессиональную переподготовку.
                  <strong>Пройти переподготовку </strong>по авиационной
                  и космической медицине могут врачи с высшим образованием
                  по направлениям «Лечебное дело» или «Педиатрия».
                  <strong>Обучение на курсах </strong>позволит врачу перейти
                  из одной специальности в другую или совмещать практику
                  по нескольким направлениям деятельности.
                </p>
                <p>
                  Медицинский университет инноваций и развития (МУИР) предлагает
                  специалистам
                  <strong>
                    курсы повышения квалификации или профессиональной
                    переподготовки{' '}
                  </strong>
                  по программе «Авиационная и космическая медицина». Прием на
                  курсы осуществляется на основании документов об оконченном
                  профильном (медицинском) высшем образовании. Программы
                  регулярно обновляются, содержат только актуальную информацию
                  правового и научного характера. Сразу после обучения слушатели
                  курсов получают документы, которые позволяют преступить к
                  работе по выбранной специальности.
                </p>
              </div>
            </div>

            <section className='program-detail-section blue-bg'>
              <div className='section-title'>
                <h3>Цели обучения</h3>
              </div>
              <div className='simple-text'>
                <p>
                  Получение теоретических знаний и практических навыков,
                  соответствующих современному представлению о развитии
                  авиационной и космической медицины как области медицинских
                  знаний.
                </p>
                <p>
                  Программа дополнительного профессионального образования
                  разработана с учетом ФГОС ординатуры по данной специальности.
                  Она включает изучение:
                </p>
                <ul className='simple-list'>
                  <li>основ авиационной и космической медицины;</li>
                  <li>нормальной и патологической физиологии;</li>
                  <li>авиационной физиологии и патофизиологии;</li>
                  <li>врачебно-летной экспертизы;</li>
                  <li>авиационной медицинской авариологии;</li>
                  <li>
                    основ клиники, ранней диагностики и терапии инфекционных
                    заболеваний;
                  </li>
                  <li>
                    принципов и методов формирования здорового образа жизни.
                  </li>
                </ul>
                <p>
                  Программа курса полностью соответствует требованиям,
                  предъявляемым к работникам данного направления. Она позволяет
                  подготовить слушателя к прохождению аккредитации. С 1 января
                  2020 года такая процедура оценки квалификации обязательна для
                  всех медицинских работников, прошедших переподготовку по
                  специальности «Авиационная и космическая медицина».
                </p>
              </div>
            </section>

            <section className='program-detail-section'>
              <div className='section-title'>
                <h3>Для кого этот курс?</h3>
              </div>
              <div className='simple-text'>
                <p>
                  Профессиональная переподготовка ориентирована на следующих
                  работников:
                </p>
                <ul className='simple-list'>
                  <li>врачи по авиационной и космической медицине;</li>
                  <li>врачи общей врачебной практики (семейные врачи);</li>
                  <li>врачи-терапевты всех категорий;</li>
                  <li>судовые врачи;</li>
                  <li>врачи здравпунктов;</li>
                  <li>
                    врачи приемного отделения терапевтических медицинских
                    организаций или специализированных структурных
                    подразделений;
                  </li>
                  <li>
                    руководители структурных подразделений медицинских
                    организаций, специализирующихся на авиационной и космической
                    медицине, общей врачебной практике и терапии;
                  </li>
                  <li>
                    работавшие ранее в области авиационной и космической
                    медицины и желающие продолжить работу по данному
                    направлению;
                  </li>
                  <li>
                    иные работники, соответствующие требованиям к слушателям.
                  </li>
                </ul>
              </div>
              <div className='program-help-outer'>
                <div className='program-help-block'>
                  <div className='top-info flexing'>
                    <div className='pic'>
                      <img src='/images/certificate.svg' alt='' />
                    </div>
                    <div>
                      <h3>Не нашли нужную информацию? Не беда!</h3>
                      <p>
                        Мы работаем круглосуточно и всегда готовы перезвонить
                        Вам!
                      </p>
                    </div>
                  </div>
                  <form action='#' method='post' className='program-help-form'>
                    <div className='input-block'>
                      <input type='text' placeholder='Телефон' required />
                      <div className='input-pic phone'>
                        <img src='/images/phone.svg' alt='' />
                      </div>
                    </div>
                    <div className='input-block'>
                      <button type='submit' className='button gradient-button'>
                        Получить консультацию
                      </button>
                    </div>
                  </form>
                  <div className='image'>
                    <img src='/images/help-block-bg-1.jpg' alt='' />
                  </div>
                </div>
              </div>
            </section>

            <section className='program-detail-section blue-bg'>
              <div className='section-title'>
                <h3>Формат обучения</h3>
              </div>
              <div className='simple-text'>
                <p>
                  Обучение проводится по очно-заочной форме и основано на
                  применении дистанционных образовательных технологий. Это
                  позволяет слушателю успешно совмещать получение новых знаний и
                  основную работу.
                </p>
                <p>
                  Все взаимодействие между слушателем и академией реализуется на
                  образовательном портале. Для каждого слушателя создается
                  личный кабинет. В нем также размещаются необходимые учебные
                  материалы. Проверка знаний осуществляется в формате
                  онлайн-тестирования.
                </p>
              </div>
            </section>

            <section className='program-detail-section'>
              <div className='section-title'>
                <h3>Требования к слушателям</h3>
              </div>
              <div className='simple-text'>
                <p className='pre-list'>
                  Курс могут пройти лица, завершившие подготовку в интернатуре
                  или ординатуре по одной из следующих специальностей:
                </p>
                <ul className='simple-list'>
                  <li>«Авиационная и космическая медицина»;</li>
                  <li>«Общая врачебная практика (семейная медицина)»;</li>
                  <li>«Терапия».</li>
                </ul>
                <p>
                  Приказом Минздрава России от 03.08.2012 № 66н также
                  допускается обучение по программам профессиональной
                  переподготовки с нормативным сроком обучения свыше 500 часов
                  сотрудников с иным высшим медицинским или фармацевтическим
                  образованием, если их непрерывный стаж работы по первичной
                  специализации превышает 5 лет.
                </p>
                <p className='pre-list'>Для начала обучения необходимо:</p>
                <ul className='simple-list'>
                  <li>подать заявку;</li>
                  <li>подтвердить право обучаться на данном курсе;</li>
                  <li>подписать договор;</li>
                  <li>оплатить счет.</li>
                </ul>
                <p>Вступительные испытания не предусмотрены.</p>
                <p className='pre-list'>
                  Для подтверждения права на обучение необходимо предоставить:
                </p>
                <ul className='simple-list'>
                  <li>диплом о высшем образовании;</li>
                  <li>диплом об окончании интернатуры или ординатуры;</li>
                  <li>
                    копию трудовой книжки (при несоответствии специальности
                    требованиям приказа Минздрава России от 08.10.2015 № 707н).
                  </li>
                </ul>
              </div>
            </section>

            <section className='program-detail-section blue-bg'>
              <div className='section-title'>
                <h3>Занимаемая должность</h3>
              </div>
              <div className='simple-text'>
                <p>
                  После обучения на курсе слушатель может претендовать на
                  занятие должности врача по авиационной и космической медицине.
                </p>
                <p>
                  При наличии стажа работы по данному направлению не менее 5 лет
                  врач, прошедший обучение в рамках ДПО, также получает право
                  занять должность заведующего или начальника профильного
                  структурного подразделения медицинской организации.
                </p>
              </div>
            </section>

            <section className='program-detail-section'>
              <div className='section-title'>
                <h3>Учебный план</h3>
              </div>
              <div className='simple-text'>
                <p>
                  Типовой учебной программы профессиональной переподготовки по
                  курсу
                </p>
                <p>«Авиационная и космическая медицина»</p>
              </div>
              <div className='program-example-table'>
                <img src='/images/program-example-table.jpg' alt='' />
              </div>
              <div className='program-help-outer'>
                <div className='program-help-block'>
                  <div className='top-info'>
                    <div>
                      <h3>
                        Хотите чтобы этот учебный план был всегда под рукой?
                      </h3>
                      <p>Введите ваш e-mail и мы пришлем вам его на почту!</p>
                    </div>
                  </div>
                  <form action='#' method='post' className='program-help-form'>
                    <div className='input-block'>
                      <input type='text' placeholder='Ваш email' required />
                      <div className='input-pic mail'>
                        <img src='/images/mail.svg' alt='' />
                      </div>
                    </div>
                    <div className='input-block'>
                      <button type='submit' className='button gradient-button'>
                        учебный план
                      </button>
                    </div>
                  </form>
                  <div className='image'>
                    <img src='/images/help-block-bg-2.jpg' alt='' />
                  </div>
                </div>
              </div>
            </section>

            <section className='program-detail-section blue-bg'>
              <div className='section-title'>
                <h3>Выдаваемые документы</h3>
              </div>
              <ul className='program-documents-list'>
                <li>
                  <div className='image'>
                    <img src='/images/program-documents-1.jpg' alt='' />
                  </div>
                  <div>
                    <div className='name'>
                      Диплом о профессиональной переподготовке
                    </div>
                    <a href='' className='button big-button gradient-button'>
                      Пример документа
                    </a>
                  </div>
                </li>
                <li>
                  <div className='image'>
                    <img src='/images/program-documents-2.jpg' alt='' />
                  </div>
                  <div>
                    <div className='name'>Сертификат специалиста медицины</div>
                    <p>
                      <a href='' className='link'>
                        Что изменилось с мед сертификатом в 2020г
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </section>

            <section className='program-detail-section'>
              <div className='section-title'>
                <h3>Условия поступления</h3>
              </div>
              <ul className='program-conditions-list'>
                <li>
                  Иметь диплом о среднем профессиональном или высшем образовании
                  по специальности
                </li>
                <li>
                  Подайте заявку на обучение: <br />- по электронной почте,
                  <br />- по форме обратной связи на сайте, <br />- или
                  позвоните по бесплатному круглосуточному телефону;
                </li>
                <li>
                  Предоставить документы, подтверждающие личность и имеющийся
                  уровень образования;
                </li>
                <li>
                  После подписания договора пройти курс обучения в дистанционном
                  форме;
                </li>
                <li>
                  Сдать итоговое тестирование, по результатам которого выдаются
                  документы об образовании - удостоверение о повышении
                  квалификации или диплом о профессиональной переподготовке по
                  программе «Авиационная и космическая медицина ».
                </li>
              </ul>
            </section>

            <section className='program-detail-section blue-bg'>
              <div className='section-title'>
                <h3>У нас обучаются</h3>
              </div>
              <div className='clients-slider-outer'>
                <div className='clients-slider js-slick'>
                  <div className='clients-slider-block'>
                    <div className='image'>
                      <img src='/images/clients/client-1.png' alt='' />
                    </div>
                  </div>
                  <div className='clients-slider-block'>
                    <div className='image'>
                      <img src='/images/clients/client-2.png' alt='' />
                    </div>
                  </div>
                  <div className='clients-slider-block'>
                    <div className='image'>
                      <img src='/images/clients/client-3.png' alt='' />
                    </div>
                  </div>
                  <div className='clients-slider-block'>
                    <div className='image'>
                      <img src='/images/clients/client-4.png' alt='' />
                    </div>
                  </div>
                  <div className='clients-slider-block'>
                    <div className='image'>
                      <img src='/images/clients/client-5.png' alt='' />
                    </div>
                  </div>
                  <div className='clients-slider-block'>
                    <div className='image'>
                      <img src='/images/clients/client-1.png' alt='' />
                    </div>
                  </div>
                  <div className='clients-slider-block'>
                    <div className='image'>
                      <img src='/images/clients/client-2.png' alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* diploms-section */}
            <section className='program-detail-section'>
              <div className='section-title'>
                <h3>Наши лицензии</h3>
              </div>
              <div className='diploms-slider diploms-slider-5 js-slick'>
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
              <div className='program-diploms-note'>
                <p>
                  Датой создания Автономной некоммерческой организации
                  дополнительного профессионального образования «Академия
                  медицинского образования», сокращенное название АНО ДПО «АМО»,
                  является 05 июля 2017 года.
                </p>
                <a href='' className='button padding-button'>
                  Проверить в росеестре
                </a>
              </div>
            </section>
          </div>
          <div className='program-detail-sidebar sticky-block'>
            <div className='program-sidebar-info'>
              <div className='price'>
                50 000 <small>руб.</small>
              </div>
              <p>
                Программа дополнительного профессионального образования
                разработана с учетом ФГОС ординатуры. Она включает изучение:
              </p>
              <ol>
                <li>Практика общение с преподавателями на вебинарах.</li>
                <li>Возможно обучение эстерном.</li>
                <li>
                  Выдаваемые документы об образовании вносятся в федеральный
                  реестр ФИС-ФРДО
                </li>
                <li>
                  Образовательный контент 2020 года
                  <span className='more'>и многое другое ...</span>
                </li>
              </ol>
              <a href='' className='button padding-button'>
                Узнать подробности
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default seniorProgram
