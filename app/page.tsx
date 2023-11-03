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
const secondaryFeatures = [
	{
		name: 'Push to deploy',
		description:
			'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
		href: '#',
		icon: CloudArrowUpIcon,
	},
	{
		name: 'SSL certificates',
		description:
			'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
		href: '#',
		icon: LockClosedIcon,
	},
	{
		name: 'Simple queues',
		description:
			'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
		href: '#',
		icon: ArrowPathIcon,
	},
]

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
				<div className='mx-auto mt-32  '>
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
