import Link from 'next/link'
import Head from 'next/head'
import { useEffect } from 'react'
import loadJs from 'loadjs'

export default function Home() {
	useEffect(() => {
		loadJs(
			[
				'/js/slick.min.js',
				'/js/jquery.fancybox.min.js',
				'/js/stickykit.js',
				'/js/jquery.autocolumnlist.min.js',
				'/js/masonry.min.js',
				'/js/lazyYT.js',
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
				<title>Институт профессионального образования - Медицина</title>
			</Head>

			{/* introdution-section */}
			<section className='introdution-section'>
				<div className='container'>
					<div className='introdution-content'>
						<div className='introdution-text'>
							<h1>
								Центр профессиональных квалификаций медицинского персонала
							</h1>
							<p>Уважение традиций, акцент на инновациях</p>
							<a href='' className='button big-button white-button'>
								Все программы
							</a>
						</div>
						<form
							action='#'
							method='post'
							className='application-form simple-form'>
							<div className='title'>Оставить заявку</div>
							<div className='input-block'>
								<input type='text' placeholder='Ваше имя' />
							</div>
							<div className='input-block'>
								<input type='text' placeholder='Телефон' />
							</div>
							<div className='input-block'>
								<input type='text' placeholder='Эл. почта' />
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
							<button type='submit' className='button big-button'>
								Отправить
							</button>
						</form>
					</div>
				</div>
			</section>

			{/* programs-section */}
			<section className='simple-section'>
				<div className='container'>
					<div className='section-title'>
						<h2>Программы переподготовки и повышения квалификации</h2>
					</div>
					<ul className='programs-list'>
						<li>
							<a href=''>
								<div className='pic'>
									<img src='/images/programs/programs-pic-1.svg' alt='' />
								</div>
								<span>Сестринское дело в терапии</span>
							</a>
						</li>
						<li>
							<a href=''>
								<div className='pic'>
									<img src='/images/programs/programs-pic-2.svg' alt='' />
								</div>
								<span>Сестринское дело в онкологии</span>
							</a>
						</li>
						<li>
							<a href=''>
								<div className='pic'>
									<img src='/images/programs/programs-pic-3.svg' alt='' />
								</div>
								<span>Сестринское дело</span>
							</a>
						</li>
						<li>
							<a href=''>
								<div className='pic'>
									<img src='/images/programs/programs-pic-4.svg' alt='' />
								</div>
								<span>Фтизиатрия</span>
							</a>
						</li>
						<li>
							<a href=''>
								<div className='pic'>
									<img src='/images/programs/programs-pic-5.svg' alt='' />
								</div>
								<span>Судебно-медицинская экспертиза</span>
							</a>
						</li>
						<li>
							<a href=''>
								<div className='pic'>
									<img src='/images/programs/programs-pic-6.svg' alt='' />
								</div>
								<span>Стоматология</span>
							</a>
						</li>
						<li>
							<a href=''>
								<div className='pic'>
									<img src='/images/programs/programs-pic-1.svg' alt='' />
								</div>
								<span>Сестринское дело в терапии</span>
							</a>
						</li>
						<li>
							<a href=''>
								<div className='pic'>
									<img src='/images/programs/programs-pic-2.svg' alt='' />
								</div>
								<span>Сестринское дело в онкологии</span>
							</a>
						</li>
						<li>
							<a href=''>
								<div className='pic'>
									<img src='/images/programs/programs-pic-3.svg' alt='' />
								</div>
								<span>Сестринское дело</span>
							</a>
						</li>
					</ul>
					<div className='programs-toggle'>
						<div className='programs-toggle-link'>
							<span>Все категории</span>
							<i></i>
						</div>
					</div>
				</div>
			</section>

			{/* news-section */}
			<section className='simple-section blue-bg'>
				<div className='container'>
					<div className='section-title'>
						<h2>Новости</h2>
						<a href='' className='all-link'>
							Все новости
						</a>
					</div>
					<div className='news-slider js-slick'>
						<a href='' className='news-slider-block size-2'>
							<div className='date'>12.05.2020</div>
							<h4>Мурашко распорядился закупить противоопухолевый мелфалан</h4>
							<p>
								Уже в этом году в Россию поступят 2,5 тыс. упаковок лекарства и
								будут распределены по конкретным медицинским учреждениям.
							</p>
							<div className='image'>
								<img src='/images/news-pic-1.jpg' alt='' />
							</div>
						</a>
						<a href='' className='news-slider-block size-2'>
							<div className='date'>12.05.2020</div>
							<h4>Мурашко распорядился закупить противоопухолевый мелфалан</h4>
							<p>
								Уже в этом году в Россию поступят 2,5 тыс. упаковок лекарства и
								будут распределены по конкретным медицинским учреждениям.
							</p>
							<div className='image'>
								<img src='/images/news-pic-2.jpg' alt='' />
							</div>
						</a>
						<a href='' className='news-slider-block'>
							<div className='date'>12.05.2020</div>
							<h4>
								Кремль планирует начать массовую вакцинацию россиян от COVID-19
								до Нового года
							</h4>
							<div className='image'>
								<img src='/images/news-pic-3.jpg' alt='' />
							</div>
						</a>
						<a href='' className='news-slider-block'>
							<div className='date'>12.05.2020</div>
							<h4>
								Достоверный – значит, этичный. В гонке клинических исследований
								ученые призывают не забывать о медицинской этике
							</h4>
							<div className='image'>
								<img src='/images/news-pic-4.jpg' alt='' />
							</div>
						</a>
						<a href='' className='news-slider-block'>
							<div className='date'>12.05.2020</div>
							<h4>
								PharmaDATA: в октябре 2020 отмечены незначительные колебания
								объема закупок в сравнении с сентябрем этого года
							</h4>
							<div className='image'>
								<img src='/images/news-pic-5.jpg' alt='' />
							</div>
						</a>
					</div>
				</div>
			</section>

			{/* vebinars-section */}
			<section className='simple-section'>
				<div className='container'>
					<div className='section-title'>
						<h2>Ближайшие Вебинары</h2>
						<a href='' className='all-link'>
							Все вебинары
						</a>
					</div>
					<div className='vebinars-slider clearfix js-slick'>
						<a href='' className='vebinars-slider-block size-2'>
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
							<div className='image'>
								<img src='/images/vebinar-preview-1.jpg' alt='' />
							</div>
						</a>
						<a href='' className='vebinars-slider-block'>
							<h4>
								Очный курс «Диагностическая эндоскопия в оториноларингологии»
							</h4>
							<div className='bottom'>
								<div className='info'>
									<div className='date'>12.07</div>
									<span className='detail'>Подробнее</span>
								</div>
								<span className='button gradient-button'>Принять участие</span>
							</div>
						</a>
						<a href='' className='vebinars-slider-block'>
							<h4>
								Симуляционно-тренинговый курс «Практические возможности
								диагностики и лечения патологии шейки матки, влагалища и вульвы»
							</h4>
							<div className='bottom'>
								<div className='info'>
									<div className='date'>15.07</div>
									<span className='detail'>Подробнее</span>
								</div>
								<span className='button gradient-button'>Принять участие</span>
							</div>
						</a>
					</div>
				</div>
			</section>

			{/* video-section */}
			<section className='simple-section blue-bg'>
				<div className='container'>
					<div className='section-title'>
						<h2>Записи вебинаров</h2>
						<a href='' className='all-link'>
							Все записи вебинаров
						</a>
					</div>
					<div className='video-slider js-slick'>
						<div className='video-slider-block'>
							<a
								href='https://youtu.be/l6pDOwNeTrg'
								className='image'
								data-fancybox='video-gallery'>
								<img src='/images/video-preview-1.jpg' alt='' />
							</a>
							<ul className='video-info'>
								<li>
									<div className='pic'>
										<img src='/images/eye.svg' alt='' />
									</div>
									<span>177</span>
								</li>
								<li>
									<div className='pic'>
										<img src='/images/thumbs-up.svg' alt='' />
									</div>
									<span>6</span>
								</li>
								<li>
									<div className='pic'>
										<img src='/images/comments-alt.svg' alt='' />
									</div>
									<span>0</span>
								</li>
							</ul>
						</div>
						<div className='video-slider-block'>
							<a
								href='https://youtu.be/l6pDOwNeTrg'
								className='image'
								data-fancybox='video-gallery'>
								<img src='/images/video-preview-2.jpg' alt='' />
							</a>
							<ul className='video-info'>
								<li>
									<div className='pic'>
										<img src='/images/eye.svg' alt='' />
									</div>
									<span>250</span>
								</li>
								<li>
									<div className='pic'>
										<img src='/images/thumbs-up.svg' alt='' />
									</div>
									<span>25</span>
								</li>
								<li>
									<div className='pic'>
										<img src='/images/comments-alt.svg' alt='' />
									</div>
									<span>15</span>
								</li>
							</ul>
						</div>
						<div className='video-slider-block'>
							<a
								href='https://youtu.be/l6pDOwNeTrg'
								className='image'
								data-fancybox='video-gallery'>
								<img src='/images/video-preview-3.jpg' alt='' />
							</a>
							<ul className='video-info'>
								<li>
									<div className='pic'>
										<img src='/images/eye.svg' alt='' />
									</div>
									<span>342</span>
								</li>
								<li>
									<div className='pic'>
										<img src='/images/thumbs-up.svg' alt='' />
									</div>
									<span>154</span>
								</li>
								<li>
									<div className='pic'>
										<img src='/images/comments-alt.svg' alt='' />
									</div>
									<span>58</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* partners-section */}
			<section className='simple-section'>
				<div className='container'>
					<div className='section-title center'>
						<h2>Партнеры</h2>
					</div>
					<div className='partners-slider js-slick'>
						<div className='partners-slider-block'>
							<div className='image'>
								<img src='/images/partners/partners-pic-1.jpg' alt='' />
							</div>
							<div className='name'>ООО «БТЛ»</div>
						</div>
						<div className='partners-slider-block'>
							<div className='image'>
								<img src='/images/partners/partners-pic-2.jpg' alt='' />
							</div>
							<div className='name'>СЗГМУ им. И.И. Мечникова</div>
						</div>
						<div className='partners-slider-block'>
							<div className='image'>
								<img src='/images/partners/partners-pic-3.jpg' alt='' />
							</div>
							<div className='name'>
								Кировский Государственный Медицинский Университет
							</div>
						</div>
						<div className='partners-slider-block'>
							<div className='image'>
								<img src='/images/partners/partners-pic-4.jpg' alt='' />
							</div>
							<div className='name'>
								Центр аккредитации РНИМУ им. Н.И. Пирогова
							</div>
						</div>
						<div className='partners-slider-block'>
							<div className='image'>
								<img src='/images/partners/partners-pic-5.jpg' alt='' />
							</div>
							<div className='name'>Сколково</div>
						</div>
						<div className='partners-slider-block'>
							<div className='image'>
								<img src='/images/partners/partners-pic-2.jpg' alt='' />
							</div>
							<div className='name'>СЗГМУ им. И.И. Мечникова</div>
						</div>
						<div className='partners-slider-block'>
							<div className='image'>
								<img src='/images/partners/partners-pic-3.jpg' alt='' />
							</div>
							<div className='name'>
								Кировский Государственный Медицинский Университет
							</div>
						</div>
						<div className='partners-slider-block'>
							<div className='image'>
								<img src='/images/partners/partners-pic-4.jpg' alt='' />
							</div>
							<div className='name'>
								Центр аккредитации РНИМУ им. Н.И. Пирогова
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* resources-section */}
			<section className='simple-section blue-bg'>
				<div className='container'>
					<div className='section-title center'>
						<h2>Ресурсы</h2>
					</div>
					<ul className='resources-list'>
						<li>
							<div className='pic'>
								<img src='/images/resources/resources-pic-1.svg' alt='' />
							</div>
							<span>Электронно-библиотечная система</span>
						</li>
						<li>
							<div className='pic'>
								<img src='/images/resources/resources-pic-2.svg' alt='' />
							</div>
							<span>Электронная медицинская библиотека</span>
						</li>
						<li>
							<div className='pic'>
								<img src='/images/resources/resources-pic-3.svg' alt='' />
							</div>
							<span>Федеральное медико-биологическое агентство</span>
						</li>
						<li>
							<div className='pic'>
								<img src='/images/resources/resources-pic-4.svg' alt='' />
							</div>
							<span>Фундаментальная медицинская библиотека</span>
						</li>
						<li>
							<div className='pic'>
								<img src='/images/resources/resources-pic-5.svg' alt='' />
							</div>
							<span>Портал Непрерывного Медицинского Образования</span>
						</li>
						<li>
							<div className='pic'>
								<img src='/images/resources/resources-pic-6.svg' alt='' />
							</div>
							<span>Медицинская энциклопедия</span>
						</li>
						<li>
							<div className='pic'>
								<img src='/images/resources/resources-pic-7.svg' alt='' />
							</div>
							<span>Центральная Научная Медицинская Библиотека</span>
						</li>
						<li>
							<div className='pic'>
								<img src='/images/resources/resources-pic-8.svg' alt='' />
							</div>
							<span>Единое окно доступа к информационным ресурсам</span>
						</li>
					</ul>
				</div>
			</section>

			{/* contacts-section */}
			<section className='contacts-section'>
				<div className='container'>
					<div className='contacts-content-outer'>
						<div className='contacts-form-outer'>
							<form
								action='#'
								method='post'
								className='application-form simple-form'>
								<div className='title'>Оставить заявку</div>
								<div className='input-block'>
									<input type='text' placeholder='Ваше имя' />
								</div>
								<div className='input-block'>
									<input type='text' placeholder='Телефон' />
								</div>
								<div className='input-block'>
									<input type='text' placeholder='Эл. почта' />
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
								<button
									type='submit'
									className='button big-button gradient-button'>
									Отправить
								</button>
							</form>
						</div>
						<div className='contacts-content'>
							<div className='contacts-text'>
								<h2>Контакты</h2>
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
							<div className='contacts-map-frame'>
								<img src='/images/map.jpg' className='example-map' alt='' />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* <Link href='/'>Home</Link>
      <Link href='/about'>About</Link> */}
		</>
	)
}
