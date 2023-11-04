import Image from 'next/image'
import Link from 'next/link'
import { useId } from 'react'
import authorImage from '@/public/eugene-venger.webp'

export function GridPattern(
	props: Omit<React.ComponentPropsWithoutRef<'pattern'>, 'id'>
) {
	let patternId = useId()

	return (
		<svg aria-hidden='true' className='absolute inset-0 h-full w-full'>
			<defs>
				<pattern
					id={patternId}
					width='128'
					height='128'
					patternUnits='userSpaceOnUse'
					{...props}
				>
					<path d='M0 128V.5H128' fill='none' stroke='currentColor' />
				</pattern>
			</defs>
			<rect width='100%' height='100%' fill={`url(#${patternId})`} />
		</svg>
	)
}

export function Testimonial() {
	return (
		<section
			id='author'
			aria-labelledby='author-title'
			className='relative scroll-mt-14 pb-3 sm:scroll-mt-32 sm:mt-32 mt-48  lg:mt-48'
		>
			<div className='absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]'>
				<GridPattern x='50%' y='100%' />
			</div>
			<div className='relative mx-auto  pt-16 sm:px-6 md:px-0 2xl:px-6'>
				<div className='bg-slate-50 pt-px sm:rounded-6xl'>
					<div className='relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72'>
						<Image
							className='absolute inset-0 h-full w-full object-cover'
							src={authorImage}
							alt=''
							sizes='(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem'
						/>
					</div>
					<div className=' px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32'>
						{/* Author */}
						<p className='mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl'>
							<span className='block text-blue-600'>Що про це кажуть –</span> Думки від
							клієнта
						</p>
						<p className='mt-4 text-lg tracking-tight text-slate-700'>
							Дуже класна можливість носити шкарпетки і не паритись.Однозначно
							рекомендую кожному спробувати. Життя стає простіше на одну дрібницю!
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
