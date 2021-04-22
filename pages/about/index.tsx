import Head from 'next/head'
import { useEffect } from 'react'
import loadJs from 'loadjs'

const about = () => {
	useEffect(() => {
		loadJs(
			[
				'/js/slick.min.js',
				'/js/jquery.fancybox.min.js',
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
				<title>Сведения об образовательной организации</title>
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
							<span>Сведения об образовательной организации</span>
						</li>
					</ul>
				</div>
			</div>

			<div className='page-main-title'>
				<div className='container'>
					<h1>Сведения об образовательной организации</h1>
				</div>
			</div>

			{/* about-section */}
			<section className='simple-section-small pt10'>
				<div className='container'>
					<div className='about-detail-flex clearfix'>
						<div className='about-detail-sidebar sticky-block'>
							<ul className='about-sidebar-list'>
								<li>
									<a href='' className='active'>
										Сведения об образовательной организации
									</a>
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
						</div>
						<div className='about-detail-content'>
							<div className='section-title'>
								<h3>Лицензии</h3>
							</div>
							<div className='diploms-slider diploms-slider-6 js-slick about-diploms-slider'>
								<div className='diploms-slider-block'>
									<a
										className='image'
										href='images/diploms/diplom-1-big.jpg'
										data-fancybox='diploms-gallery'>
										<img src='/images/diploms/diplom-1-small.jpg' alt='' />
									</a>
									<div className='name'>Письмо о внесении в список ФРДО</div>
								</div>
								<div className='diploms-slider-block'>
									<a
										className='image'
										href='images/diploms/diplom-2-big.jpg'
										data-fancybox='diploms-gallery'>
										<img src='/images/diploms/diplom-2-small.jpg' alt='' />
									</a>
									<div className='name'>Лицензия 1 стр</div>
								</div>
								<div className='diploms-slider-block'>
									<a
										className='image'
										href='images/diploms/diplom-3-big.jpg'
										data-fancybox='diploms-gallery'>
										<img src='/images/diploms/diplom-3-small.jpg' alt='' />
									</a>
									<div className='name'>Лицензия 2 стр</div>
								</div>
								<div className='diploms-slider-block'>
									<a
										className='image'
										href='images/diploms/diplom-4-big.jpg'
										data-fancybox='diploms-gallery'>
										<img src='/images/diploms/diplom-4-small.jpg' alt='' />
									</a>
									<div className='name'>Приложение 1.1</div>
								</div>
								<div className='diploms-slider-block'>
									<a
										className='image'
										href='images/diploms/diplom-5-big.jpg'
										data-fancybox='diploms-gallery'>
										<img src='/images/diploms/diplom-5-small.jpg' alt='' />
									</a>
									<div className='name'>Заключение о пож. безопасности</div>
								</div>
								<div className='diploms-slider-block'>
									<a
										className='image'
										href='images/diploms/diplom-6-big.jpg'
										data-fancybox='diploms-gallery'>
										<img src='/images/diploms/diplom-6-small.jpg' alt='' />
									</a>
									<div className='name'>
										Санитарно-эпидемиологическое заключение
									</div>
								</div>
							</div>

							<div className='section-title'>
								<h3>Нормативные документы</h3>
							</div>
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
										<img src='/images/file-list.svg' alt='' />
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

export default about
