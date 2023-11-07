import image1 from '@/public/customize-1.webp'
import image2 from '@/public/customize-2.webp'
import image3 from '@/public/customize-3.webp'
import { FadeIn, FadeInStagger } from './FadeIn'

const posts = [
	{
		id: 1,
		title: 'Boost your conversion rate',
		href: '#',
		description:
			'Обери для персоналізації один з улюблених дизайнів шкарпеток за допомогою власних кольорів. Налаштуйте дизайн, змінивши будь-яку з конфігурованих областей та варіанти кольорової палітри, що надаються.',
		imageUrl:
			'https://cms-cdn.sockittome.com/2023/04/19/04/18/29/aefdf790-333c-4781-9c24-c9cc6e0eecf1/SITM-CScolor-Hero1M-1080x1080-Socks.jpg',
	},
	{
		id: 2,
		title: 'Boost your conversion rate',
		href: '#',
		description:
			'Додай до шкарпеток індивідуальності за допомогою наших ексклюзивних тем. Чи то святкування когось, кого ти любиш, свята чи події, або просто демонстрація певного моменту в часі, завантаж фотографію, щоб згенерувати шаблон.		',
		imageUrl:
			'https://cms-cdn.sockittome.com/2023/04/19/04/22/22/fde011b6-7c3b-42ae-a08e-b48b7fa18c05/SITM-CSupload-Hero1M-1080x1080-Socks-Child.jpg',
	},
	{
		id: 3,
		title: 'Boost your conversion rate',
		href: '#',
		description:
			'Завантаж своє унікальне зображення для повністю персоналізованої пари шкарпеток. Використовуй рекомендації шаблону, щоб переконатися, що твоє мистецтво виглядає так, як ти цього хочеш.			',
		imageUrl:
			'https://cms-cdn.sockittome.com/2023/04/19/04/21/00/ce514147-2797-4a25-8a0e-0cd1088e686d/SITM-CSdesign-Hero1M-1080x1080-Sock-Gray.jpg',
	},
	// More posts...
]

export function Customize() {
	return (
		<div className='sm:mt-32 mt-48  lg:mt-48'>
			<FadeIn>
				<h2 className='mt-2 text-4xl text-center font-bold font-serif tracking-tight text-gray-900 sm:text-6xl '>
					3 способи зробити шкарпетки унікальними
				</h2>
			</FadeIn>
			<FadeInStagger>
				<div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 px-8 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
					{posts.map((post) => (
						<FadeIn key={post.id}>
							<article className='flex flex-col items-start justify-between'>
								<div className='relative w-full'>
									<img
										src={post.imageUrl}
										alt=''
										className='aspect-[16/9] w-full rounded-2xl bg-gray-100 object-contain sm:aspect-[2/1] lg:aspect-[3/2]'
									/>
									<div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10' />
								</div>
								<div className='max-w-xl'>
									{/* <div className='mt-8 flex items-center gap-x-4 text-xs'>
										<time dateTime={post.datetime} className='text-gray-500'>
											{post.date}
										</time>
										<a
											href={post.category.href}
											className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'
										>
											{post.category.title}
										</a>
									</div> */}
									<div className='group relative'>
										{/* <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
											<a href={post.href}>
												<span className='absolute inset-0' />
												{post.title}
											</a>
										</h3> */}
										<p className='mt-5 text-sm leading-6 text-gray-600'>
											{post.description}
										</p>
									</div>
									{/* <div className='relative mt-8 flex items-center gap-x-4'>
										<img
											src={post.author.imageUrl}
											alt=''
											className='h-10 w-10 rounded-full bg-gray-100'
										/>
										<div className='text-sm leading-6'>
											<p className='font-semibold text-gray-900'>
												<a href={post.author.href}>
													<span className='absolute inset-0' />
													{post.author.name}
												</a>
											</p>
											<p className='text-gray-600'>{post.author.role}</p>
										</div>
									</div> */}
								</div>
							</article>
						</FadeIn>
					))}
				</div>
			</FadeInStagger>
		</div>
	)
}
