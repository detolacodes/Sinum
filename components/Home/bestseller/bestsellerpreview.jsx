import React, {useState, useEffect, useRef} from 'react'
import styles from '../../../styles/home/Bestseller.module.css'
import ProductsData from './bestsellerData'



const Bestsellerpreview = () =>{

	return(


		<>

			<div className='col-lg-4 col-md-6 col-sm-8 col-10'>
				<div className='shadow-sm card card-hover rounded-sm'>
					<div className={`${styles.productscard} flex-2`}>
						<img src='/images/apk1.png' width='100%' />
					</div>

					<div className={`${styles.productsdeets} ml-4`}>
						<div className=''>
							<i className='bi-star-fill'></i>
							<i className='bi-star-fill'></i>
							<i className='bi-star-fill'></i>
							<i className='bi-star-fill'></i>
							<i className='bi-star-fill'></i>
						</div>

						<div className='ml-2'>
							Han Denim
						</div>

						<div className='ml-2'>
							#10,0000
						</div>
					</div>
				</div>
			</div>


		</>


	)
}