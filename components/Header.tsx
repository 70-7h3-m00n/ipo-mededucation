import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <div className='container'>
        <div className='header-top'>
          <a href='' className='main-logo'>
            <div className='pic'>
              <img src='/images/main-logo.png' alt='' />
            </div>
            <span>Институт профессионального образования</span>
          </a>
          <div className='header-phone'>
            <p>Консультация по обучению:</p>
            <a href='tel:8-499-116-69-63' className='tel'>
              +7 (499) 116-69-63
            </a>
          </div>
          <a href='' className='button header-recall'>
            Заказать звонок
          </a>
          <ul className='socials-list'>
            <li>
              <a href='' className='youtube'>
                <img src='/images/youtube.svg' alt='' />
              </a>
            </li>
            <li>
              <a href='' className='vk'>
                <img src='/images/vk.svg' alt='' />
              </a>
            </li>
            <li>
              <a href='' className='facebook'>
                <img src='/images/facebook.svg' alt='' />
              </a>
            </li>
            <li>
              <a href='' className='instagram'>
                <img src='/images/instagram.svg' alt='' />
              </a>
            </li>
          </ul>
          <a href='' className='button header-lk'>
            Личный кабинет
          </a>
          <ul className='header-buter'>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className='header-bottom'>
          <ul className='header-menu'>
            <li>
              <a href='' className='active-page'>
                Главная
              </a>
            </li>
            <li className='order-3'>
              <a href='' className='has-podmenu'>
                Дистанционные программы
              </a>
              <ul className='header-podmenu'>
                <li>
                  <a href=''>Высший медперсонал</a>
                </li>
                <li>
                  <a href=''>Средний медперсонал</a>
                </li>
                <li>
                  <a href=''>Управление в медицине</a>
                </li>
                <li>
                  <a href=''>Программы НМО</a>
                </li>
                <li>
                  <a href=''>Тематическое усовершенствование</a>
                </li>
              </ul>
            </li>
            <li className='order-2'>
              <a href='' className='has-podmenu'>
                Вебинары
              </a>
              <ul className='header-podmenu'>
                <li>
                  <a href=''>Расписание</a>
                </li>
                <li>
                  <a href=''>Записи</a>
                </li>
                <li>
                  <a href=''>Спикеры</a>
                </li>
              </ul>
            </li>
            <li>
              <a href=''>Новости</a>
            </li>
            <li className='order-4'>
              <a href='' className='has-podmenu'>
                Об Университете
              </a>
              <ul className='header-podmenu'>
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
                  <a href=''>Отзывы</a>
                </li>
              </ul>
            </li>
            <li>
              <a href=''>Контакты</a>
            </li>
          </ul>
          <form action='#' method='post' className='search-form header-search'>
            <input type='text' />
            <button type='submit'>
              <img src='/images/search.svg' alt='' />
            </button>
          </form>
          <div className='header-bottom-mobile'>
            <a href='' className='button header-recall'>
              Заказать звонок
            </a>
            <ul className='socials-list'>
              <li>
                <a href='' className='youtube'>
                  <img src='/images/youtube.svg' alt='' />
                </a>
              </li>
              <li>
                <a href='' className='vk'>
                  <img src='/images/vk.svg' alt='' />
                </a>
              </li>
              <li>
                <a href='' className='facebook'>
                  <img src='/images/facebook.svg' alt='' />
                </a>
              </li>
              <li>
                <a href='' className='instagram'>
                  <img src='/images/instagram.svg' alt='' />
                </a>
              </li>
            </ul>
            <a href='' className='button header-lk'>
              Личный кабинет
            </a>
            <div className='header-phone'>
              <p>Консультация по обучению:</p>
              <a href='tel:8-499-116-69-63' className='tel'>
                +7 (499) 116-69-63
              </a>
            </div>
          </div>
          <div className='header-menu-close'>
            <img src='/images/close-menu.svg' alt='' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
