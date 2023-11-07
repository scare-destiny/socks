import { FadeIn } from './FadeIn'

export function CTA() {
	return (
		<div className='relative bg-custom-yellow sm:mt-32 mt-48  lg:mt-48'>
			<div className='relative  bg-custom-blue md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2 overflow-hidden'>
				<img
					className='h-full w-full object-cover'
					src='https://cms-cdn.sockittome.com/pictures/1023/c4d20aba36fb21e7d98c5825dc6aad5f446f0562/subscription_hero.png?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply'
					alt=''
				/>
				<svg
					viewBox='0 0 926 676'
					aria-hidden='true'
					className='absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]'
				>
					<path
						fill='url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)'
						fillOpacity='.4'
						d='m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z'
					/>
					<defs>
						<linearGradient
							id='60c3c621-93e0-4a09-a0e6-4c228a0116d8'
							x1='926.392'
							x2='-109.635'
							y1='.176'
							y2='321.024'
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#776FFF' />
							<stop offset={1} stopColor='#FF4694' />
						</linearGradient>
					</defs>
				</svg>
			</div>
			<div className='relative text-black mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40'>
				<div className='pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32'>
					<FadeIn>
						<p className='mt-2 text-3xl font-bold tracking-tight  sm:text-4xl'>
							Start Getting Awesome Monthly Socks Today!
						</p>
					</FadeIn>
					<p className='mt-6 text-base leading-7 '>
						When you purchase a Sock It To Me Subscription, you or your super lucky
						recipient will receive 2 pairs of our excellent socks every month, with
						FREE global shipping! Some boxes even include special styles exclusive to
						our subscribers and sneak peeks at new products!
					</p>
					<div className='mt-8'>
						<a
							href='#'
							className='inline-flex rounded-md bg-custom-blue px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
						>
							Обрати Підписку
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
