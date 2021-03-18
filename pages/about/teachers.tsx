import Head from 'next/head'

const teachers = () => {
  return (
    <>
      <Head>
        <title>Руководство и педагогический состав</title>
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
              <span>Руководство и педагогический состав</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='page-main-title'>
        <div className='container'>
          <h1>Руководство и педагогический состав</h1>
        </div>
      </div>

      {/*  about-teachers-section */}
      <section className='simple-section-small pt10'>
        <div className='container'>
          <div className='about-detail-flex clearfix'>
            <div className='about-detail-sidebar sticky-block'>
              <ul className='about-sidebar-list'>
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
                  <a href='' className='active'>
                    Руководство и педагогический состав
                  </a>
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
              <ul className='about-teachers-list'>
                <li>
                  <div className='about-teachers-block'>
                    <div className='image'>
                      <img alt='' src='/images/teacher-pic-1.jpg' />
                    </div>
                    <div className='name'>Спивак Игорь Маратович</div>
                    <p>
                      Кандидат медицинских наук, доцент, врач-гинеколог,
                      начальник отдела по производственной практике РНИМУ им. Н.
                      И. Пирогова.
                    </p>
                  </div>
                </li>
                <li>
                  <div className='about-teachers-block'>
                    <div className='image'>
                      <img alt='' src='/images/teacher-pic-2.jpg' />
                    </div>
                    <div className='name'>Габай Полина Георгиевна</div>
                    <p>
                      Клинический психолог, гипнолог, коуч, преподаватель и
                      автор серии курсов и тренингов по применению методик
                      прикладной психологии для установления эффективной
                      коммуникации.
                    </p>
                  </div>
                </li>
                <li>
                  <div className='about-teachers-block'>
                    <div className='image'>
                      <img alt='' src='/images/teacher-pic-3.jpg' />
                    </div>
                    <div className='name'>Луговой Артем Олегович</div>
                    <p>
                      Врач-нейрохирург с 15-летним опытом. Член Европейской
                      ассоциации клинической гипертермии. Эксперт по
                      радиохирургическим методам лечения.
                    </p>
                  </div>
                </li>
                <li>
                  <div className='about-teachers-block'>
                    <div className='image'>
                      <img alt='' src='/images/teacher-pic-4.jpg' />
                    </div>
                    <div className='name'>Ирышкин Олег Евгеньевич</div>
                    <p>
                      Доктор медицинских наук. Профессор.
                      Врач-оториноларинголог. Заместитель главного врача по
                      хирургии ГКБ 29 им. Н. Э. Баумана. Основоположник
                      радиохирургии в России.
                    </p>
                  </div>
                </li>
                <li>
                  <div className='about-teachers-block'>
                    <div className='image'>
                      <img alt='' src='/images/teacher-pic-1.jpg' />
                    </div>
                    <div className='name'>Спивак Игорь Маратович</div>
                    <p>
                      Кандидат медицинских наук, доцент, врач-гинеколог,
                      начальник отдела по производственной практике РНИМУ им. Н.
                      И. Пирогова.
                    </p>
                  </div>
                </li>
                <li>
                  <div className='about-teachers-block'>
                    <div className='image'>
                      <img alt='' src='/images/teacher-pic-2.jpg' />
                    </div>
                    <div className='name'>Габай Полина Георгиевна</div>
                    <p>
                      Клинический психолог, гипнолог, коуч, преподаватель и
                      автор серии курсов и тренингов по применению методик
                      прикладной психологии для установления эффективной
                      коммуникации.
                    </p>
                  </div>
                </li>
                <li>
                  <div className='about-teachers-block'>
                    <div className='image'>
                      <img alt='' src='/images/teacher-pic-3.jpg' />
                    </div>
                    <div className='name'>Луговой Артем Олегович</div>
                    <p>
                      Врач-нейрохирург с 15-летним опытом. Член Европейской
                      ассоциации клинической гипертермии. Эксперт по
                      радиохирургическим методам лечения.
                    </p>
                  </div>
                </li>
                <li>
                  <div className='about-teachers-block'>
                    <div className='image'>
                      <img alt='' src='/images/teacher-pic-4.jpg' />
                    </div>
                    <div className='name'>Ирышкин Олег Евгеньевич</div>
                    <p>
                      Доктор медицинских наук. Профессор.
                      Врач-оториноларинголог. Заместитель главного врача по
                      хирургии ГКБ 29 им. Н. Э. Баумана. Основоположник
                      радиохирургии в России.
                    </p>
                  </div>
                </li>
                <li>
                  <div className='about-teachers-block'>
                    <div className='image'>
                      <img alt='' src='/images/teacher-pic-1.jpg' />
                    </div>
                    <div className='name'>Спивак Игорь Маратович</div>
                    <p>
                      Кандидат медицинских наук, доцент, врач-гинеколог,
                      начальник отдела по производственной практике РНИМУ им. Н.
                      И. Пирогова.
                    </p>
                  </div>
                </li>
                <li>
                  <div className='about-teachers-block'>
                    <div className='image'>
                      <img alt='' src='/images/teacher-pic-2.jpg' />
                    </div>
                    <div className='name'>Габай Полина Георгиевна</div>
                    <p>
                      Клинический психолог, гипнолог, коуч, преподаватель и
                      автор серии курсов и тренингов по применению методик
                      прикладной психологии для установления эффективной
                      коммуникации.
                    </p>
                  </div>
                </li>
                <li>
                  <div className='about-teachers-block'>
                    <div className='image'>
                      <img alt='' src='/images/teacher-pic-3.jpg' />
                    </div>
                    <div className='name'>Луговой Артем Олегович</div>
                    <p>
                      Врач-нейрохирург с 15-летним опытом. Член Европейской
                      ассоциации клинической гипертермии. Эксперт по
                      радиохирургическим методам лечения.
                    </p>
                  </div>
                </li>
                <li>
                  <div className='about-teachers-block'>
                    <div className='image'>
                      <img alt='' src='/images/teacher-pic-4.jpg' />
                    </div>
                    <div className='name'>Ирышкин Олег Евгеньевич</div>
                    <p>
                      Доктор медицинских наук. Профессор.
                      Врач-оториноларинголог. Заместитель главного врача по
                      хирургии ГКБ 29 им. Н. Э. Баумана. Основоположник
                      радиохирургии в России.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default teachers
