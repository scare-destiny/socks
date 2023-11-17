import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'

// @ts-ignore
export default function Modal({ isOpen, selectedTier, onClose }) {
	// const [open, setOpen] = useState(true)

	// @ts-ignore
	const handleSubmit = async (event) => {
		event.preventDefault()

		// Get the email value from the form
		const email = event.target.email.value

		// Data to send
		const data = {
			email: email,
			tierName: selectedTier,
		}

		console.log(data)

		try {
			const response = await fetch(
				'https://hook.eu1.make.com/q66nu565mlfeyuvtei7mbvoeig2gxctx',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				}
			)

			if (response.ok) {
				console.log('Form submitted successfully')
				onClose() // Close the modal after successful submission
			} else {
				console.log('Error in form submission')
				// You can handle errors here
			}
		} catch (error) {
			console.error('Error in form submission', error)
			// You can handle network errors here
		}
	}

	return (
		// @ts-ignore
		<Transition.Root show={isOpen} as={Fragment}>
			<Dialog as='div' className='relative z-10' onClose={onClose}>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
				</Transition.Child>

				<div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
					<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
							enterTo='opacity-100 translate-y-0 sm:scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 translate-y-0 sm:scale-100'
							leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
						>
							<Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6'>
								{/* <div>
									<div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100'>
										<CheckIcon className='h-6 w-6 text-green-600' aria-hidden='true' />
									</div>
									<div className='mt-3 text-center sm:mt-5'>
										<Dialog.Title
											as='h3'
											className='text-base font-semibold leading-6 text-gray-900'
										>
											Payment successful
										</Dialog.Title>
										<div className='mt-2'>
											<p className='text-sm text-gray-500'>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
												amet labore.
											</p>
										</div>
									</div>
								</div>
								<div className='mt-5 sm:mt-6'>
									<button
										type='button'
										className='inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
										onClick={onClose}
									>
										Go back to dashboard
									</button>
								</div> */}
								<div className=''>
									<div className='mx-auto max-w-7xl px-6 lg:px-8'>
										<div className='mt-3 text-center sm:mt-5'>
											<Dialog.Title
												as='h3'
												className='text-base font-semibold leading-6 text-gray-900'
											>
												Дякуюємо за інтерес до нашого сервісу!
											</Dialog.Title>
											<div className='mt-2'>
												<p className='text-sm text-gray-500'>
													Ми плануємо запускатись найближчим часом. Якщо цікаво, залиш будь
													ласка свою пошту. Ми будемо тримати у курсі прогресу.
												</p>
											</div>
										</div>
										<form onSubmit={handleSubmit} className='mt-10 max-w-md'>
											<div className='flex gap-x-4'>
												<label htmlFor='email-address' className='sr-only'>
													Електронна адреса
												</label>
												<input
													id='email-address'
													name='email'
													type='email'
													autoComplete='email'
													required
													className='min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:custom-blue sm:text-sm sm:leading-6'
													placeholder='Електронна адреса'
												/>
												<button
													type='submit'
													className='flex-none rounded-md bg-custom-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-custom-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-blue'
												>
													Надіслати
												</button>
											</div>
										</form>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
}
