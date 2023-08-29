import React, {useState, useEffect, useRef} from 'react'
import styles from '../styles/home/Dotd.module.css'



const Footer = () =>{

	const date = new Date()
	const year = date.getFullYear()

	return(


		<>

			<div className='container mt-60 p-5 text-default'>
				<div className='row justify-content-center flex-h-new'>
					<div className='bg-default2 w-70 fb p-5 fos16 flex-h-new3'>

						Follow Us

						<div className='mx-5'>
							<img src='/images/21.svg' width='15%' className='mx-2' />
							<img src='/images/22.svg' width='15%' className='mx-2' />
							<img src='/images/23.svg' width='15%' className='mx-2' />
							<img src='/images/24.svg' width='15%' className='mx-2' />
						</div>
					</div>

					<div className='flex-h-new4 w-60 mt-50 fb fos13'>
						<div>
							<a href=''>Privacy Policy</a>
						</div>

						<div>
							<a href=''>Terms Of Service</a>
						</div>

						<div>
							<a href=''>Shop</a>
						</div>

						<div>
							<a href=''>Contact Us</a>
						</div>
					</div>

					<div className='text-center mt-70 fb fos11'>
						<i className='ri-copyright-line'></i>Sinum {year}. All Rights Reserved
					</div>
				</div>
			</div>


		</>

	)

}


export default Footer