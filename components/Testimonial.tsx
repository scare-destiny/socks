const featuredTestimonial = {
	body:
		'З моменту, як я підписалась на цей сервіс доставки шкарпеток, кожен мій день став яскравішим. Кожна нова пара - це не лише комфорт та якість, а й чудовий дизайн, який відображає мій стиль. Це відмінний спосіб зробити повсякденний одяг особливим. Дякую за вашу працю та увагу до деталей!',
	author: {
		name: 'Олена Кравчук',
		handle: 'brennagoyette',
		imageUrl:
			'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
		logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg',
	},
}
const testimonials = [
	[
		[
			{
				body:
					'Ця підписка на шкарпетки покращила моє життя! Кожен місяць я отримую унікальні та стильні шкарпетки, які стали моєю улюбленою частиною гардеробу.',
				author: {
					name: 'Анна Коваленко',
					handle: 'annakovalenko',
					imageUrl:
						'https://images.unsplash.com/photo-1562158074-841db9b3a3c2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
				},
			},
			// More testimonials...
		],
		[
			{
				body:
					'Кожен раз, коли я отримую нову коробку з шкарпетками, це як маленьке свято для мене. Якість відмінна, а дизайни завжди оригінальні та веселі!',
				author: {
					name: 'Олексій Мельник',
					handle: 'oleksiymelnik',
					imageUrl:
						'https://images.unsplash.com/photo-1546525848-3ce03ca516f4?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
				},
			},
			// More testimonials...
		],
	],
	[
		[
			{
				body:
					'Сервіс клієнтської підтримки просто неймовірний, вони завжди готові допомогти! І звісно, шкарпетки - кожен дизайн кращий за попередній!',
				author: {
					name: 'Ірина Петренко',
					handle: 'irynapetrenko',
					imageUrl:
						'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
				},
			},
			// More testimonials...
		],
		[
			{
				body:
					'Я дарував підписку на шкарпетки своїм друзям, і всі вони були в захваті! Це не лише чудовий подарунок, а й чудовий спосіб освіжити свій стиль.',
				author: {
					name: 'Василь Іванчук',
					handle: 'vasylivanchuk',
					imageUrl:
						'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
				},
			},
			// More testimonials...
		],
	],
]

function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ')
}

export function Testimonial() {
	return (
		<div className='relative isolate bg-white mt-48 sm:mt-32  lg:mt-48'>
			<div
				className='absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl'
				aria-hidden='true'
			>
				<div
					className='ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]'
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
				/>
			</div>
			<div
				className='absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end'
				aria-hidden='true'
			>
				<div
					className='ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]'
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
				/>
			</div>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				{/* <div className='mx-auto max-w-xl text-center'>
					<h2 className='text-lg font-semibold leading-8 tracking-tight text-indigo-600'>
						Testimonials
					</h2>
					<p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
						We have worked with thousands of amazing people
					</p>
				</div> */}
				<div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4'>
					<figure className='rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1'>
						<blockquote className='p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8'>
							<p>{`“${featuredTestimonial.body}”`}</p>
						</blockquote>
						<figcaption className='flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap'>
							{/* <img
								className='h-10 w-10 flex-none rounded-full bg-gray-50'
								src={featuredTestimonial.author.imageUrl}
								alt=''
							/> */}
							<div className='flex-auto'>
								<div className='font-semibold'>{featuredTestimonial.author.name}</div>
								{/* <div className='text-gray-600'>{`@${featuredTestimonial.author.handle}`}</div> */}
							</div>
							{/* <img
								className='h-10 w-auto flex-none'
								src={featuredTestimonial.author.logoUrl}
								alt=''
							/> */}
						</figcaption>
					</figure>
					{testimonials.map((columnGroup, columnGroupIdx) => (
						<div key={columnGroupIdx} className='space-y-8 xl:contents xl:space-y-0'>
							{columnGroup.map((column, columnIdx) => (
								<div
									key={columnIdx}
									className={classNames(
										(columnGroupIdx === 0 && columnIdx === 0) ||
											(columnGroupIdx === testimonials.length - 1 &&
												columnIdx === columnGroup.length - 1)
											? 'xl:row-span-2'
											: 'xl:row-start-1',
										'space-y-8'
									)}
								>
									{column.map((testimonial) => (
										<figure
											key={testimonial.author.handle}
											className='rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5'
										>
											<blockquote className='text-gray-900'>
												<p>{`“${testimonial.body}”`}</p>
											</blockquote>
											<figcaption className='mt-6 flex items-center gap-x-4'>
												{/* <img
													className='h-10 w-10 rounded-full bg-gray-50'
													src={testimonial.author.imageUrl}
													alt=''
												/> */}
												<div>
													<div className='font-semibold'>{testimonial.author.name}</div>
													{/* <div className='text-gray-600'>{`@${testimonial.author.handle}`}</div> */}
												</div>
											</figcaption>
										</figure>
									))}
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
