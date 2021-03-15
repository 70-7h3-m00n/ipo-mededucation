const Header = () => {
  return (
    <footer>
      <div className='footer-top'>
        <div className='container'>
          <div className='footer-top-content'>
            <ul className='footer-top-info'>
              <li>
                <a href='' className='main-logo'>
                  <div className='pic'>
                    <img src='images/main-logo.png' alt='' />
                  </div>
                  <span>Институт профессионального образования</span>
                </a>
              </li>
              <li>
                <p>
                  &copy; 2020. Все права защищены. Дополнительное
                  профессиональное образование - ДПО. НАНО ИПО - навигатор
                  карьерного роста.
                </p>
              </li>
              <li>
                <p>Лицензия на образовательную деятельность № 039703</p>
              </li>
            </ul>
            <div className='footer-top-links'>
              <div className='footer-top-links-flex'>
                <ul className='footer-menu'>
                  <li>
                    <a href=''>Главная</a>
                  </li>
                  <li>
                    <a href=''>Новости</a>
                  </li>
                  <li>
                    <a href=''>Контакты</a>
                  </li>
                </ul>
                <ul className='footer-menu'>
                  <li>
                    <a href=''>Вебинары</a>
                    <ul className='footer-podmenu'>
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
                </ul>
              </div>
              <ul className='footer-menu'>
                <li>
                  <a href=''>Дистанционные программы</a>
                  <ul className='footer-podmenu'>
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
              </ul>
              <ul className='footer-menu'>
                <li>
                  <a href=''>Об Университете</a>
                  <ul className='footer-podmenu'>
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
              </ul>
            </div>
            <div className='footer-top-contacts'>
              <div className='footer-phone'>
                <p>Консультация по обучению:</p>
                <a href='tel:8-499-116-69-63' className='tel'>
                  +7 (499) 116-69-63
                </a>
              </div>
              <div className='footer-socials'>
                <p>Социальные сети:</p>
                <ul className='socials-list'>
                  <li>
                    <a href='' className='youtube'>
                      <img src='images/youtube.svg' alt='' />
                    </a>
                  </li>
                  <li>
                    <a href='' className='vk'>
                      <img src='images/vk.svg' alt='' />
                    </a>
                  </li>
                  <li>
                    <a href='' className='facebook'>
                      <img src='images/facebook.svg' alt='' />
                    </a>
                  </li>
                  <li>
                    <a href='' className='instagram'>
                      <img src='images/instagram.svg' alt='' />
                    </a>
                  </li>
                </ul>
              </div>
              <form
                action='#'
                method='post'
                className='search-form footer-search'
              >
                <input type='text' />
                <button type='submit'>
                  <img src='images/search.svg' alt='' />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-middle'>
        <div className='container'>
          <ul className='footer-middle-list'>
            <li>
              <a href=''>Политика обработки конфеденциальных данных</a>
            </li>
            <li>
              <a href=''>Техническая страница</a>
            </li>
            <li>
              <a href=''>Другая техническая страница</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='container'>
          <ul className='footer-bottom-systems'>
            <li>
              <img src='images/footer-pay-systems-1.jpg' alt='' />
            </li>
            <li>
              <img src='images/footer-pay-systems-2.jpg' alt='' />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Header
