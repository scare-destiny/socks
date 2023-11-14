import Image from 'next/image'

import backgroundImage from '@/public/background-faqs.jpg'

const faqs = [
	[
		{
			question: 'Коли відбувається відправка?',
			answer:
				'Усі підписки відправляються 10-го числа кожного місяця. Якщо ти купуєш підписку після 9-го, перша партія буде відправлена наступного 10-го числа місяця.',
		},
		{
			question: 'Автоматичне поновлення?',
			answer:
				'Ні, ми не зберігаємо інформацію твоєї картки заради твоєї безпеки. Ми надішлемо тобі нагадування, коли твоя остання підписка закінчується, щоб ти міг поновити її, якщо захочеш!',
		},
		{
			question: 'Попередня оплата',
			answer: 'Сплачуй за повну підписку одразу (ми не стягуємо плату щомісяця).',
		},
		{
			question: 'Скільки коштує доставка? Міжнародна доставка?',
			answer:
				'Включено у вартість! Ми доставляємо по всьому світу. Просто вибери США або Міжнародну доставку, коли обираєш свій набір шкарпеток.',
		},
		{
			question: 'Опції для подарунків?',
			answer:
				'Так! Персоналізуй, щоб додати незабутніх емоцій до свого подарунку!',
		},
	],
]

const sockSizes = [
	{
		type: 'S/M Розмір',
		usWomens: '5-10',
		usMens: '3.5-8.5',
		eu: '36-42',
		aus: '5-10',
	},
	{
		type: 'M/L Розмір',
		usWomens: '8.5-14',
		usMens: '7-13',
		eu: '41-48',
		aus: '7.5-13.5',
	},
	{
		type: 'По Коліно',
		usWomens: '5-10',
		usMens: '3.5-8.5',
		eu: '36-42',
		aus: '5-10',
	},
	// Add more sizes as needed...
]

export function Faqs() {
	return (
		<section
			id='faq'
			aria-labelledby='faq-title'
			className='relative overflow-hidden  sm:mt-32 mt-48  lg:mt-48 py-4'
		>
			{/* <Image
				className='absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]'
				src={backgroundImage}
				alt=''
				width={1558}
				height={946}
				unoptimized
			/> */}
			<div className='relative mx-auto max-w-7xl px-4 '>
				<div className='mx-auto lg:mx-0'>
					<h2
						id='faq-title'
						className='font-display text-3xl tracking-tight text-slate-900 sm:text-4xl'
					>
						Поширені запитання
					</h2>
					{/* <p className='mt-4 text-lg tracking-tight text-slate-700'>
						If you can’t find what you’re looking for, email our support team and if
						you’re lucky someone will get back to you.
					</p> */}
				</div>
				<ul
					role='list'
					className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols2'
				>
					{faqs.map((column, columnIndex) => (
						<li key={columnIndex}>
							<ul role='list' className='flex flex-col gap-y-8'>
								{column.map((faq, faqIndex) => (
									<li key={faqIndex}>
										<h3 className='font-display text-lg leading-7 text-slate-900'>
											{faq.question}
										</h3>
										<p className='mt-4 text-sm text-slate-700'>{faq.answer}</p>
									</li>
								))}
								<table className='min-w-full divide-y divide-gray-300'>
									<thead className='bg-custom-yellow'>
										<tr>
											<th
												scope='col'
												className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0'
											></th>
											{/* <th
												scope='col'
												className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
											>
												US Women's
											</th>
											<th
												scope='col'
												className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
											>
												US Men's
											</th> */}
											<th
												scope='col'
												className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
											>
												EU
											</th>
											{/* <th
												scope='col'
												className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
											>
												AUS
											</th> */}
										</tr>
									</thead>
									<tbody className='divide-y divide-gray-200'>
										{sockSizes.map((size) => (
											<tr key={size.type}>
												<td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0'>
													{size.type}
												</td>
												{/* <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
													{size.usWomens}
												</td>
												<td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
													{size.usMens}
												</td> */}
												<td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
													{size.eu}
												</td>
												{/* <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
													{size.aus}
												</td> */}
												{/* Add or remove columns as needed */}
											</tr>
										))}
									</tbody>
								</table>
							</ul>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
