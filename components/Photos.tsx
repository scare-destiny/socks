import clsx from 'clsx'
import Image from 'next/image'
import image1 from '@/public/image1.jpeg'
import image2 from '@/public/image2.jpeg'
import image3 from '@/public/image3.jpeg'
import image4 from '@/public/image4.jpeg'
import image5 from '@/public/image5.jpeg'
import { FadeIn, FadeInStagger } from './FadeIn'

export function Photos() {
	let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

	return (
		<div className='sm:mt-32 mt-48  lg:mt-48 '>
			<FadeInStagger>
				<div className='-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8'>
					{[image1, image2, image3, image4, image5].map((image, imageIndex) => (
						<FadeIn key={imageIndex}>
							<div
								key={image.src}
								className={clsx(
									'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl hover:scale-110',
									rotations[imageIndex % rotations.length]
								)}
							>
								<Image
									src={image}
									alt=''
									sizes='(min-width: 640px) 18rem, 11rem'
									className='absolute inset-0 h-full w-full object-cover'
								/>
							</div>
						</FadeIn>
					))}
				</div>
			</FadeInStagger>
		</div>
	)
}
