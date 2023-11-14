import { CheckIcon } from '@heroicons/react/20/solid'
import { FadeIn, FadeInStagger } from './FadeIn'
import { send } from 'process'

const tiers = [
	{
		name: 'Маленькі/Середні Шкарпетки ',
		id: 'tier-small-medium',
		href: '#',
		priceMonthly: '₴380',
		// description: 'The essentials to provide your best work for clients.',
		features: [
			'2 пари S/M Шкарпеток',
			'Широкий асортимент розмірів - для чоловіків та дівчат ',
			'Доставка кожної пари шкарпеток БЕЗКОШТОВНО',
		],
		mostPopular: false,
	},
	{
		name: 'Середні/Великі Шкарпетки',
		id: 'tier-medium-large',
		href: '#',
		priceMonthly: '₴520',
		// description: 'A plan that scales with your rapidly growing business.',
		features: [
			'2 пари M/L Шкарпеток',
			'Широкий асортимент розмірів - для чоловіків та дівчат',
			'Доставка кожної пари шкарпеток БЕЗКОШТОВНО',
		],
		mostPopular: true,
	},
	{
		name: 'Шкарпетки до коліна',
		id: 'tier-knee-high',
		href: '#',
		priceMonthly: '₴560		',
		// description: 'Dedicated support and infrastructure for your company.',
		features: [
			'2 пари Шкарпеток До Коліна',
			'Широкий асортимент розмірів - для чоловіків та дівчат',
			'Доставка кожної пари шкарпеток БЕЗКОШТОВНО',
		],
		mostPopular: false,
	},
]

//@ts-ignore
const sendGAEvent = (action, category, label, value) => {
	//@ts-ignore
	window.gtag('event', action, {
		event_category: category,
		event_label: label,
		value: value,
	})
}
//@ts-ignore

const handleSubscribeClick = (tierName) => {
	//@ts-ignore

	sendGAEvent('subscribe_click', 'Subscription', tierName)
	console.log(tierName)
}

function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ')
}

export function Pricing() {
	return (
		<div className='bg-custom-yellow sm:mt-32 mt-48  lg:mt-48 pb-16'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto max-w-4xl text-center pt-4'>
					{/* <h2 className='text-base font-semibold leading-7 text-indigo-600'>
						Pricing
					</h2> */}
					<FadeIn>
						<p className='mt-4 text-4xl font-bold font-serif tracking-tight text-gray-900 sm:text-5xl'>
							Обери Свою Підписку
						</p>
					</FadeIn>
				</div>
				{/* <p className='mx-auto mt-6 max-w-2xl text-center text-lg leading-8 '>
					Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi
					iusto modi velit ut non voluptas in. Explicabo id ut laborum.
				</p> */}
				<FadeInStagger>
					<div className='isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
						{tiers.map((tier, tierIdx) => (
							<FadeIn key={tier.id}>
								<div
									className={classNames(
										tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
										tierIdx === 0 ? 'lg:rounded-r-none' : '',
										tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '',
										'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10'
									)}
								>
									<div>
										<div className='flex items-center justify-between gap-x-4'>
											<h3
												id={tier.id}
												className={classNames(
													tier.mostPopular ? 'text-custom-blue' : 'text-gray-900',
													'text-lg font-semibold leading-8'
												)}
											>
												{tier.name}
											</h3>
											{tier.mostPopular ? (
												<p className='rounded-full bg-custom-blue/10 px-2.5 py-1 text-xs font-semibold leading-5 text-custom-blue'>
													Найкраща опція
												</p>
											) : null}
										</div>
										{/* <p className='mt-4 text-sm leading-6 text-gray-600'>
											{tier.description}
										</p> */}
										<p className='mt-6 flex items-baseline gap-x-1'>
											<span className='text-4xl font-bold tracking-tight text-gray-900'>
												{tier.priceMonthly}
											</span>
											<span className='text-sm font-semibold leading-6 text-gray-600'>
												/в місяць
											</span>
										</p>
										<ul
											role='list'
											className='mt-8 space-y-3 text-sm leading-6 text-gray-600'
										>
											{tier.features.map((feature) => (
												<li key={feature} className='flex gap-x-3'>
													<CheckIcon
														className='h-6 w-5 flex-none text-custom-blue'
														aria-hidden='true'
													/>
													{feature}
												</li>
											))}
										</ul>
									</div>
									<a
										href={tier.href}
										aria-describedby={tier.id}
										onClick={() => handleSubscribeClick(tier.name)}
										className={classNames(
											tier.mostPopular
												? 'bg-custom-blue text-white shadow-sm hover:bg-custom-blue'
												: 'text-custom-blue ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
											'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-blue'
										)}
									>
										Оформити підписку
									</a>
								</div>
							</FadeIn>
						))}
					</div>
				</FadeInStagger>
			</div>
		</div>
	)
}
