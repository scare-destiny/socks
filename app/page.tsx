'use client'

import { useState, useRef, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Photos } from '@/components/Photos'
import { Testimonial } from '@/components/Testimonial'
const Pricing = dynamic(() => import('@/components/Pricing'), { ssr: false })
import { Faqs } from '@/components/Faq'
import { CTA } from '@/components/CTA'
import { Customize } from '@/components/Customize'

const incentives = [
	{
		name: 'Швидка Доставка',
		description:
			'Ми забезпечуємо тебе найкрутішими шкарпетками від українських брендів. І робимо це регулярно — рахуй це як Netflix для твоїх шкарпеток.',
		imageSrc: '/how-step-1.webp',
	},
	{
		name: 'Постійна Підтримка',
		description:
			"Якщо це питання з доставкою чи вибір пари шкарпеток, яка підходить саме тобі — ми завжди на зв'язку.",
		imageSrc: '/how-step-2.webp',
	},
	{
		name: 'Найкращий вибір',
		description:
			'Тільки найкращі бренди, які вже зарекомендували себе і які роками носять українці.',
		imageSrc: '/how-step-3.webp',
	},
	{
		name: 'Знижки для улюблених клієнтів',
		description: 'Логіка просто — чим більше носиш, тим більшу знижку маєш.',
		imageSrc: '/how-step-4.webp',
	},
]

const collections = [
	{
		name: 'Зеконом до 30%',
		href: '#',
		imageSrc:
			'https://cms-cdn.sockittome.com/2022/09/12/19/44/31/4ab115f1-d14d-4210-97e6-42bf3c3bebae/subscription-save-2.jpg',
		imageAlt:
			'Brown leather key ring with brass metal loops and rivets on wood table.',
		description:
			'Обирай підписку на 1, 3, 6 або 12 місяців шкарпеток. Чим довший термін підписки, тим більша вигода! Плюс БЕЗКОШТОВНА ДОСТАВКА щомісяця та несподіваний сюрприз у кожній коробці!	',
	},
	{
		name: 'Легке Налаштування		',
		href: '#',
		imageSrc:
			'https://cms-cdn.sockittome.com/2022/09/12/19/44/23/f354136d-ffe1-4ca6-8ac2-88f36508a43b/subscription-easy-2.jpg',
		imageAlt:
			'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
		description:
			'Все що тобі потрібно зробити це оформити підписку для розміру, який тобі потрібен. Потім просто відпочивай та розслабляйся, поки ми щомісяця доставляємо чудові зручні шкарпеткиІ!',
	},
]

export default function Home() {
	const pricingRef = useRef(null)
	const scrollToPricing = () => {
		//@ts-ignore
		pricingRef.current.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<>
			<div id='root'>
				{/* CTA Section */}
				<CTA scrollToPricing={scrollToPricing} />

				{/* Hero section */}
				{/* <div className=' pb-32 sm:pb-48 lg:pb-48 '>
					<div className='relative isolate overflow-hidden pt-14'>
						<img
							src='/image3.jpeg'
							alt=''
							className='absolute inset-0 -z-10 h-full w-full object-cover'
						/>
						<div
							aria-hidden='true'
							className='absolute inset-0 bg-gray-900 opacity-50'
						/>

						<div className='relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0'>
							<FadeIn>
								<h1 className='text-4xl font-bold tracking-tight text-white lg:text-6xl'>
									Підписка на шкарпетки
								</h1>
							</FadeIn>
							<p className='mt-4 text-xl text-white'>
								Отримуй улюблені шкарпетки поштою. Швидко і регулярно. Запуск зовсім
								скоро!
							</p>
							<div className='mt-10 flex items-center justify-center gap-x-6'>
								<a
									href='#'
									className='rounded-md bg-custom-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400'
								>
									Зареєструватись
								</a>
								<a
									href='#incentives'
									className='text-sm  font-semibold leading-6 text-white'
								>
									Дізнатись більше <span aria-hidden='true'>→</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				
				*/}
				{/* Benefits section */}
				<section
					aria-labelledby='collection-heading'
					className='mx-auto max-w-xl px-4  sm:px-6  lg:max-w-7xl lg:px-8 mt-48 sm:mt-32  lg:mt-48'
				>
					<div className='mt-10 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:space-y-0'>
						{collections.map((collection) => (
							<p key={collection.name} className='group block'>
								<div
									aria-hidden='true'
									className='aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75'
								>
									<img
										src={collection.imageSrc}
										alt={collection.imageAlt}
										width={240}
										height={240}
										className='h-full w-full object-cover object-center'
									/>
								</div>
								<h3 className='mt-4 text-base font-semibold text-gray-900'>
									{collection.name}
								</h3>
								<p className='mt-2 text-sm text-gray-500'>{collection.description}</p>
							</p>
						))}
					</div>
				</section>

				{/* Pricing section */}
				<div ref={pricingRef}>
					<Pricing />
				</div>
				{/* Testimonial section */}
				<Testimonial />
				<Faqs />
				<Pricing />

				{/* Incentives section */}
				{/* <div id='incentives' className='bg-gray-50'>
					<div className='mx-auto max-w-2xl text-center'>
						<h2 className='mt-2 text-4xl font-bold font-serif tracking-tight text-gray-900 sm:text-6xl'>
							Чому варто скористатись доставкою шкарпеток?
						</h2>
						<p className='mt-6 text-lg leading-8 text-gray-600'>
							Ця послуга стає все більш і більш популярною по всьому світу. Це зручно,
							швидко і вивільняє справу для інших речей.
						</p>
					</div>
					<div className='mx-auto max-w-2xl px-4 mt-48 sm:px-6 sm:mt-32 lg:max-w-7xl lg:px-8'>
						<FadeInStagger>
							<div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8'>
								{incentives.map((incentive) => (
									<FadeIn key={incentive.name}>
										<div>
											<Image
												src={incentive.imageSrc}
												alt=''
												className='h-24 w-auto'
												width={240}
												height={240}
											/>
											<h3 className='mt-6 text-md  font-serif text-gray-900'>
												{incentive.name}
											</h3>
											<p className='mt-2 text-sm text-gray-500'>{incentive.description}</p>
										</div>
									</FadeIn>
								))}
							</div>
						</FadeInStagger>
					</div>
				</div> */}

				{/* Products section */}
				{/* <section aria-labelledby='  trending-heading'>
					<div className='  mx-auto max-w-7xl px-4  sm:px-6 sm:mt-32 mt-48  lg:mt-48 lg:px-8'>
						<div className='md:flex md:items-center md:justify-between'>
							<h2
								id='favorites-heading'
								className='text-2xl font-bold tracking-tight text-gray-900'
							>
								Trending Products
							</h2>
							<a
								href='#'
								className='hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block'
							>
								Shop the collection
								<span aria-hidden='true'> &rarr;</span>
							</a>
						</div>

						<div className='mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8'>
							{trendingProducts.map((product) => (
								<div key={product.id} className='group relative'>
									<div className='h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80'>
										<img
											src={product.imageSrc}
											alt={product.imageAlt}
											className='h-full w-full object-cover object-center'
										/>
									</div>
									<h3 className='mt-4 text-sm text-gray-700'>
										<a href={product.href}>
											<span className='absolute inset-0' />
											{product.name}
										</a>
									</h3>
									<p className='mt-1 text-sm text-gray-500'>{product.color}</p>
									<p className='mt-1 text-sm font-medium text-gray-900'>
										{product.price}
									</p>
								</div>
							))}
						</div>

						<div className='mt-8 text-sm md:hidden'>
							<a
								href='#'
								className='font-medium text-indigo-600 hover:text-indigo-500'
							>
								Shop the collection
								<span aria-hidden='true'> &rarr;</span>
							</a>
						</div>
					</div>
				</section> */}

				{/* Feature section */}
				{/* <div className='mx-auto mt-48 sm:mt-32  lg:mt-48  '>
					<div className='relative isolate overflow-hidden bg-gray-900 px-6 py-20 sm:rounded-3xl sm:px-10 sm:mt-48 lg:mt-48 xl:px-24'>
						<div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0'>
							<div className='lg:row-start-2 lg:max-w-md'>
								<FadeIn>
									<h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
										Унікальний дизайн.
										<br />
										Підбери те що підходить саме тобі.
									</h2>
									<p className='mt-6 text-lg leading-8 text-gray-300'>
										Роби свої шкарпетки унікальними. Ми плануємо дати можливість
										персоналізувати кожну пару спеціально для тебе або для того, кому ти
										їх подаруєш, всього за 1,50 фунта стерлінгів за пару. Буде доступна
										опція персоналізації.
									</p>
								</FadeIn>
							</div>
							<img
								src='https://cms-cdn.sockittome.com/2022/09/12/19/53/15/fbc270cd-595b-49c6-b9c9-9c426e91835b/subscription-FAQ.jpg'
								alt='Product screenshot'
								className='relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none'
								width={2432}
								height={1442}
							/>
							<div className='max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10'>
								<FadeInStagger>
									<dl className='max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none'>
										{primaryFeatures.map((feature) => (
											<FadeIn key={feature.name}>
												<div className='relative'>
													<dt className='ml-9 inline-block font-semibold text-white'>
														<feature.icon
															className='absolute left-1 top-1 h-5 w-5 text-indigo-500'
															aria-hidden='true'
														/>
														{feature.name}
													</dt>{' '}
													<dd className='inline'>{feature.description}</dd>
												</div>
											</FadeIn>
										))}
									</dl>
								</FadeInStagger>
							</div>
						</div>
						<div
							className='pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu'
							aria-hidden='true'
						>
							<div
								className='aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-25'
								style={{
									clipPath:
										'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
								}}
							/>
						</div>
					</div>
				</div> */}
				{/* Customize Section */}
				{/* <Customize /> */}
				{/* Photos Section */}
				<Photos />

				{/* Newsletter section */}
				{/* <Newsletter /> */}

				{/* Footer Section */}
				{/* <footer className='bg-white'>
					<div className='mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:mt-32 lg:px-8'>
						<nav
							className='-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12'
							aria-label='Footer'
						>
							{navigation.main.map((item) => (
								<div key={item.name} className='pb-6'>
									<a
										href={item.href}
										className='text-sm leading-6 text-gray-600 hover:text-gray-900'
									>
										{item.name}
									</a>
								</div>
							))}
						</nav>
						<div className='mt-10 flex justify-center space-x-10'>
							{navigation.social.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className='text-gray-400 hover:text-gray-500'
								>
									<span className='sr-only'>{item.name}</span>
									<item.icon className='h-6 w-6' aria-hidden='true' />
								</a>
							))}
						</div>
						<p className='mt-10 text-center text-xs leading-5 text-gray-500'>
							&copy; 2020 Your Company, Inc. All rights reserved.
						</p>
					</div>
				</footer> */}
			</div>
		</>
	)
}
