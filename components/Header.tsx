'use client'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '@/public/logo.png'

const navigation = []

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	const handleRegisterClick = () => {
		// Send event to Google Analytics 4
		//@ts-ignore
		window.gtag('event', 'register_click', {
			event_category: 'user_engagement',
			event_label: 'register',
		})
		console.log('Regsiter')
	}

	const handleLoginClick = () => {
		// Send event to Google Analytics 4
		//@ts-ignore
		window.gtag('event', 'login_click', {
			event_category: 'user_engagement',
			event_label: 'login',
		})
		console.log('Login')
	}

	return (
		<header className='absolute inset-x-0 top-0 z-50 '>
			<nav
				className='flex items-center justify-between p-6 lg:px-8 '
				aria-label='Global'
			>
				<div className='flex lg:flex-1'>
					<a href='#' className='-m-1.5 p-1.5'>
						<span className='sr-only'>Socks Box</span>
						<img className='h-16 w-auto hidden lg:block ' src={logo.src} alt='' />
					</a>
				</div>
				<div className='flex lg:hidden'>
					<button
						type='button'
						className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className='sr-only'>Open main menu</span>
						<Bars3Icon className='h-6 w-6' aria-hidden='true' />
					</button>
				</div>
				{/* <div className='hidden lg:flex lg:gap-x-12'>
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className='text-sm font-semibold leading-6 text-gray-900'
						>
							{item.name}
						</a>
					))}
				</div> */}
				<div className='hidden lg:flex lg:flex-1 lg:justify-end gap-4'>
					<a
						href='#'
						onClick={handleRegisterClick}
						className='leading-6 text-gray-900 inline-flex  rounded-md  px-3.5 py-2.5   text-sm font-semibold   hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white '
					>
						Зареєструватись <span aria-hidden='true'></span>
					</a>
					<a
						href='#'
						onClick={handleLoginClick}
						className=' leading-6 text-gray-900 inline-flex  rounded-md bg-custom-blue px-5 py-2.5   text-sm font-semibold  shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
					>
						Увійти <span aria-hidden='true'></span>
					</a>
				</div>
			</nav>
			<Dialog
				as='div'
				className='lg:hidden'
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className='fixed inset-0 z-50' />
				<Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
					<div className='flex items-center justify-between'>
						<a href='#' className='-m-5 p-1.5'>
							<span className='sr-only'>Your Company</span>
							<img className='h-16 w-auto lg:hidden' src={logo.src} alt='' />
						</a>
						<button
							type='button'
							className='-m-2.5 rounded-md p-2.5 text-gray-700'
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className='sr-only'>Close menu</span>
							<XMarkIcon className='h-6 w-6' aria-hidden='true' />
						</button>
					</div>
					<div className='mt-6 flow-root'>
						<div className='-my-6 divide-y divide-gray-500/10'>
							<div className='space-y-2 py-6'>
								{/* {navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
									>
										{item.name}
									</a>
								))} */}
							</div>
							<div className='py-6'>
								<a
									href='#'
									onClick={handleRegisterClick}
									className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
								>
									Зареєструватись
								</a>
								<a
									href='#'
									onClick={handleLoginClick}
									className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
								>
									Увійти
								</a>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	)
}
