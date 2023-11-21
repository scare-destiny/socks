import socks from '@/public/socks.webp'

export default function Example() {
	const names = [
		{
			name: 'Клуб Шкарпеток',
		},
		{
			name: 'Socks Club',
		},
		{
			name: 'Socks Box',
		},
		{
			name: 'Socks In Box',
		},
		{
			name: 'Твої Панчохи',
		},
	]

	return (
		<div className='bg-gray-300 py-24 sm:py-32'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<h2 className='text-center text-lg font-semibold leading-8 text-white'>
					Trusted by the world’s most innovative teams
				</h2>
				<div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
					<img
						className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
						src='https://dewey.tailorbrands.com/production/brand_version_mockup_image/709/8703896709_d04b9cd2-ec7f-40e6-bdb7-2e834f2d7813.png?cb=1700241417'
						alt='Transistor'
						width={158}
						height={48}
					/>
					<img
						className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
						src='https://dewey.tailorbrands.com/production/brand_version_mockup_image/712/8703896712_1367c6aa-51bf-4a0f-9194-0733184330dc.png?cb=1700241417'
						alt='Reform'
						width={158}
						height={48}
					/>
					<img
						className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
						src='https://dewey.tailorbrands.com/production/brand_version_mockup_image/329/8703900329_a71ba850-2030-443a-8aa4-6fa0744fdaf8.png?cb=1700241546'
						alt='Tuple'
						width={158}
						height={48}
					/>
					<img
						className='col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1'
						src='https://files.oaiusercontent.com/file-fq9eXTG27MUbNMQbNQZ3O11e?se=2023-11-17T18%3A58%3A35Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da766e8ca-0ae6-441d-b919-e0450e17b868.webp&sig=9jMCDpdY9/33tbhmhOsX2n8lyN2%2BwtNok3VNinQ8Vwk%3D'
						alt='SavvyCal'
						width={158}
						height={48}
					/>
					<svg
						className='col-span-2 max-h-12 object-contain sm:col-start-2 lg:col-span-1 my-4'
						width={158}
						height={48}
						viewBox='0 0 350 199.95413580318072'
					>
						<defs id='SvgjsDefs1211'></defs>
						<g
							id='SvgjsG1212'
							feature-key='1p4tPl-0'
							transform='matrix(1.604492489434004,0,0,1.604492489434004,102.20256888401607,-16.018977915634316)'
							fill='#f8b500'
						>
							<path
								xmlns='http://www.w3.org/2000/svg'
								d='M60.934,86.575c-0.001,0-0.001,0-0.002,0c-11.478-0.008-32.403-3.509-34.208-4.221c-3.189-1.265-5.693-3.691-7.054-6.838  c-1.361-3.145-1.416-6.632-0.153-9.817c2.601-6.568,5.685-7.293,13.928-9.229c0.542-0.121,11.686-2.604,17.127-3.207  c2.299-6.058,6.164-16.787,7.019-19.803c0.463-1.633,1.871-6.598,7.025-6.598c2.139,0,4.528,0.848,7.296,1.831  c0.609,0.215,1.242,0.44,1.903,0.667c2.477,0.85,4.548,1.445,6.376,1.97c6.278,1.804,10.425,2.996,8.2,10.856  c-2.527,8.921-11.732,32.237-12.643,34.462c-2.133,5.188-6.9,8.922-12.443,9.75C62.502,86.517,61.707,86.575,60.934,86.575z   M64.616,31.407c-0.684,0-1.718,0-2.651,3.291c-1.031,3.644-5.649,16.319-7.66,21.532c-0.327,0.847-1.127,1.418-2.034,1.453  c-3.369,0.127-13.999,2.366-17.81,3.217c-8.098,1.903-9.046,2.254-10.718,6.474c-0.814,2.057-0.779,4.308,0.1,6.338  c0.879,2.031,2.496,3.599,4.554,4.415c1.396,0.425,21.23,3.895,32.539,3.902c0.553,0,1.128-0.044,1.706-0.128  c3.962-0.592,7.375-3.266,8.9-6.978c0.783-1.913,10.03-25.345,12.474-33.977c0.992-3.502,0.992-3.502-5.079-5.248  c-1.787-0.513-4.011-1.152-6.596-2.04c-0.677-0.232-1.326-0.462-1.949-0.684C68.02,32.135,65.972,31.407,64.616,31.407z'
							></path>
							<path
								xmlns='http://www.w3.org/2000/svg'
								d='M84.692,45.641c-0.086,0-0.175-0.013-0.263-0.039l-25.815-7.743c-0.485-0.146-0.76-0.656-0.615-1.141  c0.144-0.483,0.653-0.76,1.14-0.614l25.816,7.744c0.485,0.146,0.76,0.657,0.615,1.14C85.45,45.385,85.087,45.641,84.692,45.641z'
							></path>
							<path
								xmlns='http://www.w3.org/2000/svg'
								d='M27.999,81.323c-0.11,0-0.221-0.021-0.326-0.06l-0.43-0.164c-2.871-1.139-5.11-3.309-6.328-6.122  c-1.216-2.812-1.265-5.93-0.137-8.777c1.728-4.363,5.88-7.207,10.579-7.245c0.207,0.006,0.406,0.065,0.568,0.19  c2.62,2.028,4.33,4.94,4.814,8.199c0.907,6.07-2.644,11.929-8.443,13.928C28.201,81.306,28.1,81.323,27.999,81.323z M31.054,60.793  c-3.818,0.154-7.161,2.514-8.573,6.081c-0.949,2.394-0.907,5.013,0.115,7.377c1.023,2.364,2.905,4.188,5.3,5.138l0.111,0.043  c4.783-1.811,7.682-6.727,6.922-11.816C34.53,64.929,33.158,62.52,31.054,60.793z'
							></path>
							<path
								xmlns='http://www.w3.org/2000/svg'
								d='M65.169,39.595c-0.089,0-0.18-0.013-0.269-0.041c-0.483-0.148-0.755-0.662-0.605-1.145l2.796-9.076  c0.148-0.483,0.662-0.755,1.145-0.605c0.483,0.149,0.754,0.662,0.606,1.145l-2.797,9.076C65.924,39.342,65.562,39.595,65.169,39.595  z'
							></path>
							<path
								xmlns='http://www.w3.org/2000/svg'
								d='M70.027,41.16c-0.089,0-0.181-0.013-0.27-0.041c-0.483-0.148-0.754-0.661-0.605-1.144l2.796-9.076  c0.148-0.484,0.662-0.755,1.145-0.605c0.483,0.148,0.754,0.661,0.605,1.144l-2.796,9.076C70.78,40.907,70.419,41.16,70.027,41.16z'
							></path>
							<path
								xmlns='http://www.w3.org/2000/svg'
								d='M74.658,42.508c-0.089,0-0.18-0.013-0.27-0.041c-0.482-0.149-0.754-0.661-0.605-1.144l2.798-9.076  c0.15-0.483,0.659-0.757,1.146-0.605c0.481,0.148,0.753,0.661,0.604,1.144l-2.799,9.076C75.412,42.255,75.05,42.508,74.658,42.508z'
							></path>
							<path
								xmlns='http://www.w3.org/2000/svg'
								d='M79.074,43.462c-0.089,0-0.179-0.013-0.269-0.041c-0.483-0.149-0.755-0.662-0.605-1.145l2.797-9.077  c0.148-0.482,0.66-0.755,1.146-0.605c0.482,0.149,0.753,0.662,0.605,1.145l-2.798,9.076C79.829,43.209,79.467,43.462,79.074,43.462z  '
							></path>
							<path
								xmlns='http://www.w3.org/2000/svg'
								d='M60.483,85.06c-1.496,0-3.076-0.216-4.693-0.643c-0.244-0.063-0.449-0.227-0.57-0.447c-0.121-0.222-0.146-0.483-0.066-0.723  l4.009-12.255c0.135-0.412,0.546-0.67,0.973-0.624l14.488,1.626c0.271,0.029,0.514,0.18,0.664,0.408  c0.149,0.228,0.189,0.511,0.108,0.771C75.358,73.292,71.597,85.06,60.483,85.06z M57.203,82.871c1.132,0.236,2.231,0.357,3.28,0.357  c7.915,0,11.619-6.871,12.761-9.548l-12.572-1.41L57.203,82.871z'
							></path>
							<path
								xmlns='http://www.w3.org/2000/svg'
								d='M30.867,61.168c-0.36,0-0.724-0.086-1.064-0.266C19.657,55.519,6.512,46.458,5.297,45.187  c-2.369-2.479-3.629-5.731-3.55-9.158c0.078-3.427,1.487-6.618,3.965-8.984c5.11-4.877,8.215-4.246,16.512-2.562  c0.544,0.117,11.704,2.521,16.899,4.249c4.617-4.537,12.613-12.665,14.656-15.054c2.07-2.422,4.016-3.594,6.122-3.689  c3.279-0.132,5.736,2.28,8.887,5.352c0.461,0.449,0.94,0.917,1.443,1.398c1.893,1.806,3.526,3.212,4.967,4.453  c4.472,3.851,7.702,6.633,4.088,11.791c-0.723,1.028-2.139,1.278-3.167,0.557c-1.027-0.72-1.276-2.138-0.557-3.166  c1.183-1.688,1.254-1.789-3.331-5.737c-1.408-1.213-3.16-2.723-5.139-4.61c-0.517-0.492-1.007-0.971-1.479-1.431  c-2.268-2.211-4.222-4.128-5.507-4.066c-0.923,0.042-2.071,1.167-2.871,2.103c-2.469,2.887-11.96,12.467-15.962,16.356  c-0.652,0.632-1.618,0.817-2.455,0.469c-3.116-1.292-13.706-3.703-17.523-4.523c-8.155-1.656-9.162-1.733-12.443,1.399  c-1.601,1.528-2.509,3.587-2.56,5.799c-0.051,2.213,0.764,4.313,2.292,5.914c1.083,0.976,13.299,9.507,23.35,14.839  c1.109,0.589,1.531,1.965,0.942,3.073C32.468,60.729,31.681,61.168,30.867,61.168z'
							></path>
							<path
								xmlns='http://www.w3.org/2000/svg'
								d='M67.229,30.461c-0.216,0-0.432-0.075-0.605-0.229L52.868,18.1c-0.38-0.335-0.416-0.914-0.082-1.292  c0.335-0.379,0.914-0.415,1.292-0.082l13.756,12.133c0.38,0.334,0.416,0.913,0.082,1.292C67.734,30.356,67.482,30.461,67.229,30.461  z'
							></path>
							<path
								xmlns='http://www.w3.org/2000/svg'
								d='M8.431,44.927C8.431,44.927,8.431,44.927,8.431,44.927c-0.416,0-0.835-0.02-1.254-0.061  c-0.215-0.021-0.416-0.119-0.566-0.273l-0.329-0.34c-2.121-2.221-3.248-5.128-3.178-8.192c0.071-3.065,1.33-5.917,3.546-8.033  c2.141-2.044,4.952-3.171,7.915-3.171c1.62,0,3.254,0.35,4.725,1.013c0.188,0.084,0.341,0.229,0.436,0.412  c1.531,2.938,1.868,6.297,0.947,9.461C19.097,41.15,14.063,44.927,8.431,44.927z M7.686,43.071c5.096,0.344,9.81-2.971,11.228-7.84  c0.758-2.607,0.52-5.37-0.669-7.818c-1.158-0.476-2.424-0.726-3.681-0.726c-2.49,0-4.851,0.946-6.65,2.665  c-1.862,1.778-2.921,4.175-2.979,6.75c-0.059,2.576,0.888,5.02,2.667,6.882L7.686,43.071z'
							></path>
							<path
								xmlns='http://www.w3.org/2000/svg'
								d='M58.481,22.504c-0.219,0-0.437-0.077-0.611-0.234c-0.376-0.337-0.408-0.916-0.071-1.292l6.335-7.075  c0.339-0.377,0.918-0.407,1.293-0.071c0.377,0.337,0.408,0.917,0.071,1.293l-6.335,7.075C58.981,22.401,58.731,22.504,58.481,22.504  z'
							></path>
							<path
								xmlns='http://www.w3.org/2000/svg'
								d='M62.239,25.955c-0.219,0-0.438-0.077-0.611-0.233c-0.377-0.337-0.408-0.916-0.071-1.292l6.335-7.075  c0.339-0.377,0.918-0.407,1.293-0.071c0.377,0.337,0.408,0.916,0.071,1.292l-6.335,7.075C62.74,25.852,62.489,25.955,62.239,25.955z  '
							></path>
							<path
								xmlns='http://www.w3.org/2000/svg'
								d='M65.883,29.117c-0.219,0-0.437-0.077-0.611-0.233c-0.376-0.337-0.408-0.916-0.071-1.293l6.336-7.074  c0.338-0.378,0.917-0.407,1.292-0.072c0.377,0.337,0.409,0.916,0.071,1.293l-6.335,7.075C66.383,29.015,66.133,29.117,65.883,29.117  z'
							></path>
							<path
								xmlns='http://www.w3.org/2000/svg'
								d='M69.496,31.829c-0.218,0-0.436-0.077-0.61-0.233c-0.377-0.337-0.408-0.916-0.071-1.293l6.336-7.073  c0.337-0.377,0.918-0.407,1.293-0.071c0.377,0.337,0.408,0.917,0.071,1.292l-6.336,7.074C69.998,31.726,69.746,31.829,69.496,31.829  z'
							></path>
							<path
								xmlns='http://www.w3.org/2000/svg'
								d='M31.421,59.422c-0.223,0-0.446-0.08-0.622-0.243c-0.371-0.345-0.393-0.923-0.049-1.295l8.763-9.455  c0.294-0.317,0.773-0.384,1.144-0.161l10.71,6.463c0.432,0.261,0.571,0.823,0.311,1.257c-0.262,0.433-0.822,0.572-1.258,0.312  L40.35,50.22l-8.257,8.91C31.913,59.323,31.667,59.422,31.421,59.422z'
							></path>
						</g>
						<g
							id='SvgjsG1213'
							feature-key='dYASrj-0'
							transform='matrix(3.7505210851127897,0,0,3.7505210851127897,-3.62600279503555,124.24739457443604)'
							fill='#393e46'
						>
							<path d='M6.4258 20.18555 c-2.8809 0 -4.9902 -1.377 -5.459 -3.7207 l1.9824 -0.46875 c0.3125 1.6113 1.709 2.5391 3.5449 2.5391 c1.4746 0 2.8906 -0.60547 2.8613 -2.2656 c-0.019531 -1.6406 -1.7969 -2.0898 -3.6816 -2.6074 c-2.1387 -0.58594 -4.2773 -1.2598 -4.2773 -3.7988 c0 -2.5684 2.1191 -3.8574 4.6289 -3.8574 c2.4316 0 4.6191 1.0254 5.1367 3.3984 l-1.8848 0.47852 c-0.3418 -1.5332 -1.6211 -2.2168 -3.1641 -2.2168 c-1.3867 0 -2.7637 0.60547 -2.7637 2.1777 c0 1.4258 1.543 1.8457 3.291 2.3145 c2.1973 0.5957 4.7168 1.2793 4.7168 4.0527 c0 2.793 -2.3438 3.9746 -4.9316 3.9746 z M18.281271875 20.18555 c-2.8223 0 -4.9512 -1.9238 -4.9512 -5.0293 c0 -3.0957 2.1094 -5.0195 4.9512 -5.0195 s4.9414 1.9238 4.9414 5.0195 c0 3.1055 -2.1094 5.0293 -4.9414 5.0293 z M18.261671875 18.6426 c1.7676 0 3.1055 -1.3672 3.1055 -3.4863 c0 -2.1094 -1.3379 -3.4766 -3.1055 -3.4766 c-1.748 0 -3.0664 1.3672 -3.0664 3.4766 c0 2.1191 1.3184 3.4863 3.0664 3.4863 z M29.8535625 20.17578 c-2.8125 0 -4.8926 -2.002 -4.8926 -5.0195 s2.0801 -5.0195 4.8926 -5.0195 c2.1875 0 3.9063 1.1914 4.4824 3.2617 l-1.748 0.26367 c-0.42969 -1.2891 -1.4746 -1.9824 -2.7539 -1.9824 c-1.7188 0 -2.998 1.3672 -2.998 3.4766 c0 2.0996 1.2793 3.4766 2.998 3.4766 c1.2793 0 2.3242 -0.69336 2.7539 -1.9824 l1.748 0.26367 c-0.57617 2.0605 -2.3242 3.2617 -4.4824 3.2617 z M42.939459375 20 l-3.5547 -4.4043 l-0.75195 0 l0 4.4043 l-1.8848 0 l0 -15 l1.8848 0 l0 9.1992 l0.69336 0 l3.3008 -3.8672 l2.1973 0 l-3.877 4.4238 l4.3652 5.2441 l-2.373 0 z M50.253884375 20.18555 c-2.0703 0 -3.623 -0.91797 -3.9258 -2.6855 l1.6113 -0.45898 c0.23438 1.1523 1.1133 1.7578 2.3047 1.7578 c0.89844 0 1.8652 -0.3418 1.8359 -1.4063 c-0.029297 -1.1426 -1.3379 -1.3281 -2.8906 -1.8066 c-1.3184 -0.40039 -2.5977 -0.94727 -2.5977 -2.666 c0 -1.9141 1.5723 -2.7637 3.4766 -2.7637 c1.7773 0 3.2715 0.75195 3.584 2.5293 l-1.5137 0.37109 c-0.23438 -1.1035 -1.0938 -1.5625 -2.0605 -1.5625 c-0.85938 0 -1.748 0.35156 -1.748 1.2891 c0 1.0156 1.1426 1.25 2.3828 1.5723 c1.5137 0.38086 3.1836 0.91797 3.1836 2.959 c0 2.0801 -1.7285 2.8711 -3.6426 2.8711 z M68.7500375 12.773399999999999 c1.6309 0.41016 2.7246 1.5332 2.7246 3.457 c0 2.2168 -1.5039 3.7695 -3.9844 3.7695 l-5.4297 0 l0 -13.809 l4.2383 0 c2.5488 0 4.1602 1.4844 4.1602 3.6719 c0 1.3086 -0.5957 2.3828 -1.709 2.9102 z M68.6425375 9.99 c0 -1.1914 -0.85938 -2.1191 -2.3535 -2.1191 l-2.3438 0 l0 4.2969 l2.6465 0 c1.25 0 2.0508 -0.97656 2.0508 -2.1777 z M67.1582375 18.291 c1.5723 0 2.4219 -1.0547 2.4219 -2.2559 c0 -1.2695 -0.88867 -2.2852 -2.5391 -2.2852 l-3.0957 0 l0 4.541 l3.2129 0 z M78.339865625 20.18555 c-2.8223 0 -4.9512 -1.9238 -4.9512 -5.0293 c0 -3.0957 2.1094 -5.0195 4.9512 -5.0195 s4.9414 1.9238 4.9414 5.0195 c0 3.1055 -2.1094 5.0293 -4.9414 5.0293 z M78.320265625 18.6426 c1.7676 0 3.1055 -1.3672 3.1055 -3.4863 c0 -2.1094 -1.3379 -3.4766 -3.1055 -3.4766 c-1.748 0 -3.0664 1.3672 -3.0664 3.4766 c0 2.1191 1.3184 3.4863 3.0664 3.4863 z M84.47265625 20 l3.7695 -4.8438 l-3.7695 -4.8242 l2.3242 0 l2.5977 3.584 l2.5977 -3.584 l2.2949 0 l-3.7793 4.834 l3.7793 4.834 l-2.3047 0 l-2.5879 -3.5742 l-2.6074 3.5742 l-2.3145 0 z'></path>
						</g>
					</svg>
					<svg
						className='col-span-2 max-h-12  object-contain sm:col-start-2 lg:col-span-1 my-2'
						width={158}
						height={48}
						viewBox='0 0 403.3636363636364 83'
						// class='css-1j8o68f'
					>
						<defs id='SvgjsDefs1988'>
							<linearGradient id='SvgjsLinearGradient1995'>
								<stop id='SvgjsStop1996' stop-color='#ef4136' offset='0'></stop>
								<stop id='SvgjsStop1997' stop-color='#fbb040' offset='1'></stop>
							</linearGradient>
							<linearGradient id='SvgjsLinearGradient1998'>
								<stop id='SvgjsStop1999' stop-color='#ef4136' offset='0'></stop>
								<stop id='SvgjsStop2000' stop-color='#fbb040' offset='1'></stop>
							</linearGradient>
						</defs>
						<g
							id='SvgjsG1989'
							feature-key='symbolContainer'
							transform='matrix(1,0,0,1,0,0)'
							fill='url(#SvgjsLinearGradient1995)'
						>
							{' '}
							<path
								xmlns='http://www.w3.org/2000/svg'
								fill-rule='nonzero'
								d='             M0,0             H97             V83             H0,0             z             M4,4             v75             h89             v-75             z     '
							></path>
						</g>
						<g
							id='SvgjsG1990'
							feature-key='symbolFeature-0'
							transform='matrix(0.662878787878788,0,0,0.662878787878788,15.674242424242424,7.8779833641919215)'
							fill='url(#SvgjsLinearGradient1998)'
						>
							<g xmlns='http://www.w3.org/2000/svg'>
								<path d='M14.506,38.733c0.074-0.14,0.023-0.312-0.116-0.386l-6.111-3.282c-0.138-0.074-0.311-0.022-0.385,0.115   c-0.075,0.139-0.023,0.312,0.115,0.386l6.112,3.282c0.043,0.023,0.089,0.034,0.134,0.034   C14.357,38.883,14.456,38.828,14.506,38.733 M15.813,40.867c0.073-0.139,0.021-0.311-0.117-0.385l-7.418-3.972   c-0.137-0.072-0.311-0.021-0.385,0.116c-0.074,0.139-0.022,0.312,0.117,0.385l7.418,3.973c0.042,0.022,0.088,0.033,0.133,0.033   C15.664,41.018,15.761,40.963,15.813,40.867 M11.092,60.79c-0.183,0.346-0.05,0.775,0.297,0.957l9.704,5.106   c0.106,0.057,0.219,0.082,0.33,0.082c0.255,0,0.501-0.138,0.628-0.379c0.182-0.347,0.049-0.774-0.297-0.958l-9.705-5.106   C11.704,60.309,11.274,60.443,11.092,60.79 M11.092,57.245c-0.183,0.347-0.05,0.776,0.297,0.958l12.144,6.39   c0.105,0.057,0.218,0.083,0.329,0.083c0.255,0,0.501-0.139,0.628-0.38c0.183-0.346,0.049-0.774-0.297-0.957l-12.144-6.391   C11.704,56.765,11.274,56.899,11.092,57.245 M11.092,53.7c-0.183,0.347-0.05,0.775,0.297,0.958l17.835,9.387   c0.105,0.055,0.218,0.082,0.329,0.082c0.255,0,0.501-0.139,0.628-0.38c0.183-0.346,0.049-0.775-0.297-0.957l-17.835-9.387   C11.704,53.221,11.274,53.353,11.092,53.7 M11.092,50.156c-0.183,0.346-0.05,0.774,0.297,0.957l14.631,7.701   c0.105,0.055,0.218,0.082,0.329,0.082c0.255,0,0.501-0.14,0.628-0.381c0.183-0.346,0.049-0.774-0.297-0.957l-14.631-7.699   C11.704,49.677,11.274,49.81,11.092,50.156 M7.895,39.519c-0.075,0.139-0.024,0.312,0.114,0.386l4.101,2.225   c0.043,0.024,0.09,0.035,0.135,0.035c0.102,0,0.199-0.054,0.251-0.149c0.075-0.138,0.023-0.311-0.115-0.386l-4.101-2.225   C8.144,39.329,7.969,39.381,7.895,39.519 M7.895,38.073c-0.075,0.138-0.024,0.31,0.115,0.385l5.096,2.749   c0.043,0.023,0.089,0.035,0.135,0.035c0.101,0,0.199-0.056,0.251-0.15c0.074-0.138,0.023-0.311-0.116-0.385l-5.096-2.75   C8.142,37.884,7.969,37.934,7.895,38.073 M67.442,28.984l-13.81,7.268L23.196,20.233l13.809-7.269L67.442,28.984z M21.317,21.222   l30.437,16.02l-14.749,7.763L6.568,28.984L21.317,21.222z M36.13,87.311L5.5,71.19V30.4l30.63,16.121V87.311z M68.512,30.4V48.64   H53.018v15.928h15.494v6.623l-30.63,16.12V46.521l1.107-0.583L68.512,30.4z M82.248,40.851v7.789H72.012V28.49   c0-0.65-0.36-1.247-0.936-1.549L37.821,9.438c-0.511-0.27-1.121-0.27-1.631,0L2.936,26.941C2.36,27.243,2,27.84,2,28.49v43.757   c0,0.649,0.36,1.246,0.935,1.548L36.19,91.298c0.255,0.135,0.536,0.202,0.815,0.202c0.28,0,0.561-0.067,0.816-0.202l33.255-17.503   c0.575-0.302,0.936-0.898,0.936-1.548v-7.68h10.236v7.789L98,56.604L82.248,40.851z'></path>
							</g>
						</g>
						<g
							id='SvgjsG1991'
							feature-key='nameFeature-0'
							transform='matrix(1.3068803523342298,0,0,1.3068803523342298,114.90899187248361,10.283595069847454)'
							fill='#111111'
						>
							<path d='M14.88 40.6 c-3.88 0 -7.04 -0.84 -9.52 -2.56 s-3.72 -4.04 -3.72 -7.04 l0 -0.36 l-0.04 -1.6 l7.84 0 l0 1.8 c0 0.68 0.48 1.32 1.4 1.92 s2.2 0.92 3.88 0.92 c1.4 0 2.4 -0.2 3.04 -0.56 c0.6 -0.36 0.92 -0.84 0.92 -1.36 c0 -0.64 -0.4 -1.2 -1.16 -1.68 c-0.8 -0.48 -2.2 -1.04 -4.16 -1.72 c-1.24 -0.44 -2.28 -0.8 -3.12 -1.12 s-1.84 -0.8 -3 -1.44 c-1.16 -0.6 -2.12 -1.28 -2.8 -1.96 s-1.28 -1.52 -1.8 -2.56 s-0.76 -2.16 -0.76 -3.4 c0 -2.92 1.12 -5.28 3.4 -7.04 s5.2 -2.64 8.8 -2.64 c3.72 0 6.76 0.92 9.16 2.76 s3.6 4.28 3.6 7.32 l0 1.96 l-7.8 0 l0 -1.8 c0 -0.84 -0.4 -1.64 -1.24 -2.32 s-2.04 -1 -3.56 -1 c-1.24 0 -2.2 0.2 -2.84 0.6 c-0.64 0.44 -0.96 0.92 -0.96 1.52 s0.36 1.08 1.08 1.48 c0.72 0.44 2.08 1 4.08 1.68 l2.04 0.72 l2.16 0.88 c0.92 0.44 1.68 0.8 2.24 1.16 s1.2 0.84 1.96 1.44 s1.32 1.24 1.76 1.84 c0.4 0.6 0.76 1.36 1.08 2.2 c0.28 0.84 0.44 1.76 0.44 2.68 c0 2.96 -1.16 5.24 -3.44 6.84 c-2.28 1.64 -5.28 2.44 -8.96 2.44 z M30.48 28.36 c0 6.2 5.24 11.56 11.96 11.56 c6.68 0 11.92 -5.36 11.92 -11.56 c0 -6.16 -5.24 -11.52 -11.92 -11.52 c-6.72 0 -11.96 5.36 -11.96 11.52 z M47.959999999999994 28.36 c0 3 -2.32 5.52 -5.52 5.52 s-5.56 -2.56 -5.56 -5.52 c0 -2.92 2.36 -5.48 5.56 -5.48 s5.52 2.52 5.52 5.48 z M61.160000000000004 36.48 c2.32 2.2 5.08 3.44 8.4 3.44 c6.16 0 11.24 -4.4 11.96 -10.08 l0.04 -0.44 l-6.52 0 l-0.08 0.32 c-0.56 2.44 -2.72 4.08 -5.4 4.08 c-3.2 0 -5.52 -2.52 -5.52 -5.52 c0 -2.96 2.32 -5.48 5.52 -5.48 c2.4 0 4.36 1.28 5.2 3.36 l0.08 0.24 l6.64 0 l-0.08 -0.44 c-1 -5.32 -6.12 -9.28 -11.84 -9.28 c-6.68 0 -12 5.44 -12 11.6 c0 3.2 1.2 5.96 3.6 8.2 z  M84.75999999999999 40.04 l6.48 0 l0 -6.8 l1.04 -1.16 l5.84 7.92 l7.92 0 l-9.4 -12.68 l9.88 -10.52 l-8.24 0 l-7.12 7.72 l0 -15.72 l-6.36 0 z M105.96 32.96 c0 5.6 7.08 7.04 11.4 7.04 c4.28 0 10.68 -1.4 10.68 -6.8 c0 -1.64 -0.48 -2.44 -1.44 -3.64 c-0.8 -1.04 -2 -1.8 -3.12 -2.36 c-0.84 -0.44 -1.76 -0.8 -2.68 -1.08 c-0.92 -0.32 -1.84 -0.56 -2.72 -0.88 c-0.48 -0.16 -1.08 -0.32 -1.72 -0.56 c-0.6 -0.2 -1.2 -0.4 -1.56 -0.6 c-0.2 -0.12 -0.4 -0.24 -0.56 -0.36 s-0.2 -0.24 -0.2 -0.36 c0 -0.32 0.32 -0.6 0.96 -0.84 c0.64 -0.2 1.36 -0.28 1.8 -0.28 c0.68 0 1.6 0.16 2.36 0.48 c0.76 0.36 1.24 0.84 1.24 1.48 l0 1.04 l7.28 -0.04 l0 -1.12 c0 -2.36 -1.28 -4.08 -3.2 -5.36 c-2.36 -1.52 -5.04 -2 -7.8 -2 c-4.32 0 -10.52 1.8 -10.52 7.08 c0 0.92 0.24 1.8 0.72 2.6 c0.4 0.64 0.92 1.36 1.56 1.88 c1.32 1.04 3.32 1.88 4.92 2.4 c0.84 0.28 1.76 0.48 2.6 0.8 c0.48 0.16 1.12 0.32 1.76 0.52 c0.64 0.24 1.2 0.44 1.64 0.64 c0.44 0.24 0.72 0.52 0.72 0.84 c0 0.36 -0.28 0.6 -1 0.8 c-0.64 0.16 -1.4 0.16 -1.84 0.16 c-1 0 -2.28 -0.12 -3.04 -0.56 c-0.24 -0.12 -0.48 -0.32 -0.68 -0.52 s-0.32 -0.36 -0.32 -0.52 l-0.04 -1.4 l-7.24 0 l0 0.16 c0.04 0.44 0.04 0.88 0.04 1.36 z M145.23999999999998 40 l0 -31.2 l15.52 0 c3.24 0 5.76 0.8 7.52 2.4 c1.72 1.6 2.6 3.72 2.6 6.4 c0 3.04 -1.28 5.28 -3.8 6.68 c2.52 1.44 3.8 3.88 3.8 6.92 c0 2.68 -0.88 4.8 -2.6 6.4 c-1.76 1.64 -4.28 2.4 -7.52 2.4 l-15.52 0 z M153.23999999999998 21.32 l6.6 0 c1.96 0 2.96 -0.88 2.96 -2.56 c0 -0.76 -0.2 -1.4 -0.64 -1.88 c-0.44 -0.44 -1.04 -0.64 -1.88 -0.64 l-7.04 0 l0 5.08 z M153.23999999999998 32.56 l7.04 0 c0.84 0 1.44 -0.2 1.88 -0.64 c0.44 -0.48 0.64 -1.08 0.64 -1.88 c0 -1.68 -1 -2.56 -2.96 -2.56 l-6.6 0 l0 5.08 z M174.07999999999998 28.36 c0 6.2 5.24 11.56 11.96 11.56 c6.68 0 11.92 -5.36 11.92 -11.56 c0 -6.16 -5.24 -11.52 -11.92 -11.52 c-6.72 0 -11.96 5.36 -11.96 11.52 z M191.56 28.36 c0 3 -2.32 5.52 -5.52 5.52 s-5.56 -2.56 -5.56 -5.52 c0 -2.92 2.36 -5.48 5.56 -5.48 s5.52 2.52 5.52 5.48 z M204.96 28.439999999999998 l-7.96 11.52 l7.96 0 l3.88 -5.72 l3.92 5.72 l7.96 0 l-7.96 -11.52 l7.8 -11.6 l-7.76 0 l-3.96 5.96 l-3.92 -5.96 l-7.76 0 z'></path>
						</g>
					</svg>
					<svg
						className='col-span-2 max-h-12  object-contain sm:col-start-2 lg:col-span-1 my-2'
						width={158}
						height={48}
						viewBox='0 0 369.91304347826093 93.89760666483346'
					>
						<defs id='SvgjsDefs2317'></defs>
						<g
							id='SvgjsG2318'
							feature-key='G09qjj-0'
							transform='matrix(1.0463891877107407,0,0,1.0463891877107407,-13.126545290551142,-5.680974529353644)'
							fill='#ff9999'
						>
							<path
								xmlns='http://www.w3.org/2000/svg'
								fill='#ff9999'
								d='M81.96,46.857c-0.416-0.195-0.849-0.415-1.292-0.649c-0.002-0.001-0.003-0.004-0.006-0.005  c-0.001-0.001-0.004,0-0.005-0.001c-6.151-3.263-14.455-9.988-15.066-11.191c-0.374-0.923-0.267-6.984,0.049-12.358l0.486,0.03  c0.022,0.002,0.045,0.002,0.067,0.002c0.27,0,0.529-0.097,0.732-0.276c0.22-0.194,0.354-0.468,0.371-0.762l0.81-13.152  c0.037-0.609-0.425-1.133-1.036-1.17L36.314,5.431c-0.289-0.017-0.578,0.082-0.799,0.274c-0.22,0.194-0.354,0.468-0.371,0.762  l-0.81,13.153c-0.037,0.609,0.425,1.133,1.036,1.17l0.958,0.059c-0.158,1.517-0.432,4.384-0.632,7.681l-10.422-4.315  c-0.272-0.112-0.574-0.112-0.846,0c-0.27,0.112-0.486,0.328-0.598,0.598l-5.04,12.177c-0.233,0.563,0.035,1.211,0.598,1.444  l0.885,0.366c-1.019,2.164-2.845,6.19-4.476,10.469c-0.001,0.001-0.003,0.002-0.004,0.003c-0.092,0.138-0.142,0.288-0.166,0.442  c-2.122,5.64-3.822,11.582-2.754,14.097c0.725,1.708,2.65,4.919,5.336,8.703c0.034,0.049,0.06,0.101,0.101,0.145  c4.678,6.566,11.637,14.825,18.726,20.053c0.254,0.187,0.505,0.316,0.758,0.48c0.1,0.093,0.213,0.166,0.343,0.217  c1.987,1.207,3.94,1.755,5.777,1.755c3.769,0,7.061-2.122,9.204-4.652c3.221-3.806,4.797-9.44,1.859-12.285  c-0.346-0.335-0.7-0.702-1.059-1.087c-0.001-0.002-0.002-0.004-0.003-0.005c0,0-0.002-0.001-0.002-0.001  c-4.746-5.093-10.378-14.096-10.564-15.429c-0.04-0.747,1.115-4.133,2.553-7.872c4.512,3.193,14.188,9.533,23.795,12.55  c0.437,0.137,0.849,0.211,1.268,0.302c0.019,0.001,0.032,0.017,0.051,0.017c0.004,0,0.009-0.002,0.013-0.002  c0.901,0.192,1.775,0.321,2.592,0.321c5.44,0,9.021-3.961,10.573-7.948C86.003,54.432,85.662,48.593,81.96,46.857z M37.283,7.705  l28.55,1.759L65.157,20.41l-28.55-1.759L37.283,7.705z M25.45,26.681l26.428,10.94l-4.194,10.135l-26.428-10.94L25.45,26.681z   M17.23,51.825c2.023,2.127,5.669,7.746,1.637,17.802c-1.969-2.894-3.373-5.298-3.96-6.679C14.225,61.34,15.414,56.847,17.23,51.825  z M51.431,89.084c-1.305,1.54-5.798,5.992-11.7,2.73c0.398-4.261,1.846-7.561,4.38-9.752c3.273-2.828,7.316-3.055,8.535-3.053  c0.271,0.285,0.538,0.56,0.794,0.808C55.148,81.471,54.209,85.801,51.431,89.084z M50.8,76.929c-1.319,0.18-2.774,0.53-3.825,0.924  c-3.725,1.406-8.215,4.726-9.334,12.529c-6.546-5.023-12.906-12.529-17.281-18.618c5.92-13.201-0.095-20.209-2.292-22.186  c1.339-3.473,2.877-7.016,4.249-9.931l23.048,9.541c-1.322,3.215-4.38,10.888-4.219,12.708C41.311,63.767,46.384,71.666,50.8,76.929  z M47.413,50.036l0.445,0.184c0.136,0.056,0.278,0.084,0.423,0.084c0.145,0,0.287-0.028,0.423-0.084  c0.27-0.112,0.486-0.328,0.598-0.598l5.04-12.177c0.233-0.563-0.035-1.211-0.598-1.444l-15.887-6.577  c0.204-3.638,0.515-6.862,0.681-8.44l24.896,1.532c-0.205,3.468-0.604,11.722,0.137,13.389c0.762,1.716,8.131,7.54,14.021,11.083  c-1.143,0.576-2.291,1.306-2.923,1.796c-3.282,2.542-6.688,7.203-5.154,15.208c-9.375-3.138-18.714-9.368-22.781-12.281  C46.959,51.147,47.185,50.591,47.413,50.036z M82.135,58.274c-0.735,1.885-3.548,7.553-10.206,6.381  c-1.011-4.166-0.684-7.752,1.006-10.648c2.18-3.74,5.927-5.262,7.073-5.653c0.349,0.181,0.692,0.355,1.015,0.507  C83.175,49.869,83.693,54.268,82.135,58.274z'
							></path>
						</g>
						<g
							id='SvgjsG2319'
							feature-key='0yvIkK-0'
							transform='matrix(3.081830017357784,0,0,3.081830017357784,92.73326035794447,7.960669162606557)'
							fill='#444f5a'
						>
							<path d='M5.98 5.48 q2.46 0 3.86 1.78 l-1.14 0.82 q-1.04 -1.4 -2.76 -1.4 q-1.4 0 -2.27 0.72 t-0.91 1.96 q0 1.08 0.66 1.75 t2.3 1.13 q2.16 0.64 2.88 1.13 t1.09 1.21 t0.37 1.8 q0 1.72 -1.23 2.83 t-3.17 1.15 q-3.06 0 -4.6 -2.14 l1.26 -0.84 q1.06 1.76 3.24 1.78 q1.42 0 2.3 -0.79 t0.88 -1.99 q0 -0.7 -0.25 -1.15 t-0.76 -0.78 t-1.3 -0.6 t-1.85 -0.63 q-1.6 -0.52 -2.37 -1.46 t-0.77 -2.4 q0 -1.72 1.29 -2.8 t3.25 -1.08 z M13.4 15.379999999999999 q0 1.66 1.04 2.72 t2.62 1.06 q1.64 0 2.65 -1.08 t1.01 -2.7 q0 -1.6 -1 -2.68 t-2.68 -1.1 q-1.62 0 -2.62 1.08 t-1.02 2.7 z M17.060000000000002 10.52 q2.12 0 3.48 1.38 t1.38 3.48 q0 2.14 -1.39 3.49 t-3.47 1.37 q-2.18 -0.02 -3.51 -1.4 t-1.35 -3.46 q0 -2.14 1.37 -3.49 t3.49 -1.37 z M28.94 10.52 q2 0 3.44 1.6 l-0.96 0.72 q-1.16 -1.24 -2.5 -1.24 q-1.56 0 -2.59 1.06 t-1.05 2.72 q0 1.66 1.04 2.71 t2.6 1.07 q1.48 0 2.5 -1.28 l0.92 0.76 q-1.34 1.58 -3.4 1.6 q-2.1 0 -3.46 -1.36 t-1.4 -3.5 q0 -2.06 1.35 -3.44 t3.51 -1.42 z M34.220000000000006 4.880000000000001 l1.2 0 l0 10.08 l4.58 -4.2 l1.76 0 l-4.78 4.24 l5.32 5 l-1.82 0 l-5.06 -4.88 l0 4.88 l-1.2 0 l0 -15.12 z M46.36000000000001 10.52 q2.34 0 3.24 1.74 l-1.08 0.64 q-0.68 -1.3 -2.16 -1.3 q-0.8 0 -1.39 0.43 t-0.59 1.05 t0.5 0.99 t1.74 0.59 q1.84 0.32 2.54 0.95 t0.7 1.77 q0 1.3 -0.93 2.08 t-2.43 0.78 q-2.64 -0.02 -3.7 -1.88 l1.06 -0.72 q0.34 0.7 1.11 1.11 t1.57 0.41 q0.92 0 1.52 -0.51 t0.6 -1.19 q0 -0.62 -0.49 -1.02 t-2.13 -0.72 q-1.42 -0.28 -2.14 -0.86 t-0.72 -1.68 q0 -1.18 0.9 -1.92 t2.28 -0.74 z M62.34000000000001 18.8 q1.7 0 2.6 -0.73 t0.9 -1.99 q0 -1.36 -0.93 -2.14 t-2.43 -0.78 l-3.26 0 l0 5.64 l3.12 0 z M62.040000000000006 11.96 q1.44 0 2.31 -0.62 t0.87 -1.76 q0 -2.48 -3 -2.54 l-3 0 l0 4.92 l2.82 0 z M62.080000000000005 5.84 q2.22 0 3.33 0.9 t1.13 2.84 q0 1.12 -0.66 1.91 t-1.88 1.03 l0 0.04 q1.38 0.08 2.26 1.04 t0.9 2.44 q0 1.88 -1.25 2.91 t-3.45 1.05 l-4.56 0 l0 -14.16 l4.18 0 z M70.84 15.379999999999999 q0 1.66 1.04 2.72 t2.62 1.06 q1.64 0 2.65 -1.08 t1.01 -2.7 q0 -1.6 -1 -2.68 t-2.68 -1.1 q-1.62 0 -2.62 1.08 t-1.02 2.7 z M74.5 10.52 q2.12 0 3.48 1.38 t1.38 3.48 q0 2.14 -1.39 3.49 t-3.47 1.37 q-2.18 -0.02 -3.51 -1.4 t-1.35 -3.46 q0 -2.14 1.37 -3.49 t3.49 -1.37 z M82.64 10.76 l2.56 3.5 l2.54 -3.5 l1.5 0 l-3.26 4.24 l3.96 5 l-1.56 0 l-3.22 -4.18 l-3.16 4.18 l-1.44 0 l3.84 -5 l-3.3 -4.24 l1.54 0 z'></path>
						</g>
					</svg>
				</div>
			</div>
			<ul
				role='list'
				className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
			>
				{names.map((name) => (
					<li
						key={name.name}
						className='col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow'
					>
						<div className='flex w-full items-center justify-between space-x-6 p-6'>
							<div className='flex-1 truncate'>
								<div className='flex items-center space-x-3'>
									<h3 className='truncate text-sm font-medium text-gray-900'>
										{name.name}
									</h3>
									{/* <span className='inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'>
										{name.role}
									</span> */}
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}