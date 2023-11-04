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
import Image from 'next/image'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Photos } from '@/components/Photos'

const incentives = [
	{
		name: 'Швидка Доставка',
		description:
			"It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
		imageSrc: '/how-step-1.webp',
	},
	{
		name: 'Постіна Підтримка',
		description:
			'Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.',
		imageSrc: '/how-step-2.webp',
	},
	{
		name: 'Найкращий вибір',
		description:
			"Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
		imageSrc: '/how-step-3.webp',
	},
	{
		name: 'Знижки для улюблених клієнтів',
		description:
			"Buy them for your friends, especially if they don't like our store. Free money for us, it's great.",
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
		name: 'Push to deploy.',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
		icon: CloudArrowUpIcon,
	},
	{
		name: 'SSL certificates.',
		description:
			'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
		icon: LockClosedIcon,
	},
	{
		name: 'Database backups.',
		description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
		icon: ServerIcon,
	},
]

const navigation = {
	main: [
		{ name: 'About', href: '#' },
		{ name: 'Blog', href: '#' },
		{ name: 'Jobs', href: '#' },
		{ name: 'Press', href: '#' },
		{ name: 'Accessibility', href: '#' },
		{ name: 'Partners', href: '#' },
	],
	social: [
		{
			name: 'Facebook',
			href: '#',
			icon: (props: any) => (
				<svg fill='currentColor' viewBox='0 0 24 24' {...props}>
					<path
						fillRule='evenodd'
						d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
						clipRule='evenodd'
					/>
				</svg>
			),
		},
		{
			name: 'Instagram',
			href: '#',
			icon: (props: any) => (
				<svg fill='currentColor' viewBox='0 0 24 24' {...props}>
					<path
						fillRule='evenodd'
						d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
						clipRule='evenodd'
					/>
				</svg>
			),
		},
		{
			name: 'Twitter',
			href: '#',
			icon: (props: any) => (
				<svg fill='currentColor' viewBox='0 0 24 24' {...props}>
					<path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
				</svg>
			),
		},
		{
			name: 'GitHub',
			href: '#',
			icon: (props: any) => (
				<svg fill='currentColor' viewBox='0 0 24 24' {...props}>
					<path
						fillRule='evenodd'
						d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
						clipRule='evenodd'
					/>
				</svg>
			),
		},
		{
			name: 'YouTube',
			href: '#',
			icon: (props: any) => (
				<svg fill='currentColor' viewBox='0 0 24 24' {...props}>
					<path
						fillRule='evenodd'
						d='M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z'
						clipRule='evenodd'
					/>
				</svg>
			),
		},
	],
}

export default function Example() {
	return (
		<>
			{/* Superheader section */}
			<div className='sticky isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1'>
				<div
					className='absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl'
					aria-hidden='true'
				>
					<div
						className='aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30'
						style={{
							clipPath:
								'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
						}}
					/>
				</div>
				<div
					className='absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl'
					aria-hidden='true'
				>
					<div
						className='aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30'
						style={{
							clipPath:
								'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
						}}
					/>
				</div>
				<div className='flex flex-wrap items-center gap-x-4 gap-y-2'>
					<p className='text-sm leading-6 text-gray-900'>
						<strong className='font-semibold'>GeneriCon 2023</strong>
						<svg
							viewBox='0 0 2 2'
							className='mx-2 inline h-0.5 w-0.5 fill-current'
							aria-hidden='true'
						>
							<circle cx={1} cy={1} r={1} />
						</svg>
						Join us in Denver from June 7 – 9 to see what’s coming next.
					</p>

					<a
						href='#'
						className='flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900'
					>
						Register now <span aria-hidden='true'>&rarr;</span>
					</a>
				</div>
				<div className='flex flex-1 justify-end'>
					<button
						type='button'
						className='-m-3 p-3 focus-visible:outline-offset-[-4px]'
					>
						<span className='sr-only'>Dismiss</span>
						<XMarkIcon className='h-5 w-5 text-gray-900' aria-hidden='true' />
					</button>
				</div>
			</div>
			{/* Hero section */}
			<div>
				<div className=' pb-32 sm:pb-48 lg:pb-56 '>
					<div className='relative isolate overflow-hidden pt-14'>
						<img
							src='/hero.png'
							alt=''
							className='absolute inset-0 -z-10 h-full w-full contrast-[.70]  object-cover'
						/>
						<div
							className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
							aria-hidden='true'
						>
							<div
								className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
								style={{
									clipPath:
										'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
								}}
							/>
						</div>
						<div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
							<div className='hidden sm:mb-8 sm:flex sm:justify-center'></div>
							<div className='text-center'>
								<FadeIn>
									<h1 className='text-4xl font-bold font-serif tracking-tight text-white sm:text-6xl'>
										Підписка на шкарпетки
									</h1>
								</FadeIn>

								<p className='mt-6 text-lg leading-8 text-gray-100'>
									Отримуй улюблені марки шкарпеток поштою. Швидко
								</p>
								<div className='mt-10 flex items-center justify-center gap-x-6'>
									<a
										href='#'
										className='rounded-md bg-amber-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400'
									>
										Get started
									</a>
									<a href='#' className='text-sm font-semibold leading-6 text-white'>
										Learn more <span aria-hidden='true'>→</span>
									</a>
								</div>
							</div>
						</div>
						<div
							className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
							aria-hidden='true'
						>
							<div
								className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
								style={{
									clipPath:
										'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
								}}
							/>
						</div>
					</div>
				</div>
				{/* Incentives section */}
				<div className='bg-gray-50'>
					<div className='mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8'>
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

				{/* Products section */}
				<section aria-labelledby='  trending-heading'>
					<div className='  mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:pt-32'>
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
				</section>

				{/* Feature section */}
				<div className='mx-auto py-24 sm:py-32  lg:pt-32  '>
					<div className='relative isolate overflow-hidden bg-gray-900 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24'>
						<div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0'>
							<div className='lg:row-start-2 lg:max-w-md'>
								<h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
									Будь особистістю.
									<br />
									Start using our app today.
								</h2>
								<p className='mt-6 text-lg leading-8 text-gray-300'>
									Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
									Malesuada adipiscing sagittis vel nulla. Ac euismod vel sit maecenas.
								</p>
							</div>
							<Image
								src='/socks.avif'
								alt='Product screenshot'
								className='relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none'
								width={2432}
								height={1442}
							/>
							<div className='max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10'>
								<dl className='max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none'>
									{primaryFeatures.map((feature) => (
										<div key={feature.name} className='relative'>
											<dt className='ml-9 inline-block font-semibold text-white'>
												<feature.icon
													className='absolute left-1 top-1 h-5 w-5 text-indigo-500'
													aria-hidden='true'
												/>
												{feature.name}
											</dt>{' '}
											<dd className='inline'>{feature.description}</dd>
										</div>
									))}
								</dl>
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
				{/* Photos Section */}
				<Photos />
				{/* Newsletter section */}
				<div className='bg-white py-16 sm:py-24 lg:py-32'>
					<div className='mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8'>
						<div className='max-w-xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7'>
							<h2 className='inline sm:block lg:inline xl:block'>
								Want product news and updates?
							</h2>{' '}
							<p className='inline sm:block lg:inline xl:block'>
								Sign up for our newsletter.
							</p>
						</div>
						<form className='w-full max-w-md lg:col-span-5 lg:pt-2'>
							<div className='flex gap-x-4'>
								<label htmlFor='email-address' className='sr-only'>
									Email address
								</label>
								<input
									id='email-address'
									name='email'
									type='email'
									autoComplete='email'
									required
									className='min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									placeholder='Enter your email'
								/>
								<button
									type='submit'
									className='flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
								>
									Subscribe
								</button>
							</div>
							<p className='mt-4 text-sm leading-6 text-gray-900'>
								We care about your data. Read our{' '}
								<a
									href='#'
									className='font-semibold text-indigo-600 hover:text-indigo-500'
								>
									privacy&nbsp;policy
								</a>
								.
							</p>
						</form>
					</div>
				</div>
				{/* Footer Section */}
				<footer className='bg-white'>
					<div className='mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8'>
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
				</footer>
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
