'use client'

import { useState, useRef, useEffect } from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { Bars3Icon } from '@heroicons/react/24/outline'
import {
	ArrowPathIcon,
	ChevronRightIcon,
	CloudArrowUpIcon,
	LockClosedIcon,
	ServerIcon,
} from '@heroicons/react/20/solid'
import socksImage from '/socks.avif'
import { GrayscaleTransitionImage } from '@/components/GrayScaleTransitionImage'
import { Newsletter } from '@/components/Newsletter'
import Image from 'next/image'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Photos } from '@/components/Photos'
import { Testimonial } from '@/components/Testimonial'
import { Pricing } from '@/components/Pricing'
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

const trendingProducts = [
	{
		id: 1,
		name: 'Leather Long Wallet',
		color: 'Natural',
		price: '$75',
		href: '#',
		imageSrc:
			'https://thesockbutler.co.uk/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fthesockbutler%2Fb3b84933-544e-4734-ad98-aa5cb79fbeed_Mens-Classic-Box-Nov2022.png%3Fauto%3Dcompress%2Cformat%26rect%3D200%2C0%2C800%2C1200%26w%3D300%26h%3D450&w=2048&q=75',
		imageAlt: 'Hand stitched, orange leather long wallet.',
	},
	{
		id: 1,
		name: 'Leather Long Wallet',
		color: 'Natural',
		price: '$75',
		href: '#',
		imageSrc:
			'https://thesockbutler.co.uk/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fthesockbutler%2Fb3b84933-544e-4734-ad98-aa5cb79fbeed_Mens-Classic-Box-Nov2022.png%3Fauto%3Dcompress%2Cformat%26rect%3D200%2C0%2C800%2C1200%26w%3D300%26h%3D450&w=2048&q=75',
		imageAlt: 'Hand stitched, orange leather long wallet.',
	},
	{
		id: 1,
		name: 'Leather Long Wallet',
		color: 'Natural',
		price: '$75',
		href: '#',
		imageSrc:
			'https://thesockbutler.co.uk/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fthesockbutler%2Fb3b84933-544e-4734-ad98-aa5cb79fbeed_Mens-Classic-Box-Nov2022.png%3Fauto%3Dcompress%2Cformat%26rect%3D200%2C0%2C800%2C1200%26w%3D300%26h%3D450&w=2048&q=75',
		imageAlt: 'Hand stitched, orange leather long wallet.',
	},
	{
		id: 1,
		name: 'Leather Long Wallet',
		color: 'Natural',
		price: '$75',
		href: '#',
		imageSrc:
			'https://thesockbutler.co.uk/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fthesockbutler%2Fb3b84933-544e-4734-ad98-aa5cb79fbeed_Mens-Classic-Box-Nov2022.png%3Fauto%3Dcompress%2Cformat%26rect%3D200%2C0%2C800%2C1200%26w%3D300%26h%3D450&w=2048&q=75',
		imageAlt: 'Hand stitched, orange leather long wallet.',
	},
	// More products...
]

const primaryFeatures = [
	{
		name: 'Ексклюзивні та якісні українські бренди.',
		description:
			'Ми єдина служба підписки на шкарпетки, яка пропонує вам найпопулярніші бренди шкарпеток.			.',
		icon: CloudArrowUpIcon,
	},
	{
		name: 'Гнучкі та доступні підписки.',
		description:
			'Ціни на нашу підписку на шкарпетки дуже привабливі, і ви можете скасувати підписку в будь-який час.',
		icon: LockClosedIcon,
	},
	{
		name: 'Повний контроль.',
		description:
			'Обирай, скільки пар тобі потрібно та які стилі шкарпеток ти хочеш! Ми створюємо кожну коробку індивідуально для тебе, виходячи з тих шкарпеток, які ХОЧЕШ ТИ.',
		icon: ServerIcon,
	},
]

export default function Home() {
	return (
		<>
			{/* Hero section */}
			<div id='hero'>
				<div className=' pb-32 sm:pb-48 lg:pb-48 '>
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
				{/* Incentives section */}
				<div id='incentives' className='bg-gray-50'>
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
				</div>

				{/* CTA Section */}
				<CTA />

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
				<div className='mx-auto mt-48 sm:mt-32  lg:mt-48  '>
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
														{/* <feature.icon
															className='absolute left-1 top-1 h-5 w-5 text-indigo-500'
															aria-hidden='true'
														/> */}
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
				</div>
				{/* Customize Section */}
				<Customize />
				{/* Photos Section */}
				<Photos />
				{/* Testimonial section */}
				<Testimonial />
				{/* Pricing section */}
				<Pricing />

				{/* Newsletter section */}
				<Newsletter />
				{/* <Faqs /> */}
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

// <svg viewBox='0 0 500 100' width='40rem' className='hidden md:block'>
// <path
// 	id='curve'
// 	d='M 0 50 Q 100 100 200 50 Q 300 0 400 50 Q 500 100 600 50 Z'
// 	style={{ fill: 'transparent' }}
// ></path>
// <text x='25'>
// 	<textPath
// 		href='#curve' // Note: React 18 and earlier use xlinkHref, React 18.1.0+ uses href
// 		className='font-gopher text-sb-blue text-4xl font-bold'
// 		style={{ fill: 'rgb(31, 54, 70)' }}
// 	>
// 		Sock content for your inbox
// 	</textPath>
// </text>
// </svg>
