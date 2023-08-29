import React, {useState, useEffect, useRef} from 'react'
import styles from '../../../styles/home/Bestseller.module.css'


const Bestseller = () =>{


	return(

		<>

			<div className={`${styles.bestseller} container-fluid p-5 mt-60 text-default`}>
				<div className='row'>
					<div className='col-lg-3 mt-100'>
						<div className={`${styles.bestseller_text}`}>
							<span className={`${styles.sp1} p-0`}>Best Seller</span> Products
						</div>

						<div className={`${styles.bestseller_mintext} w-82`}>
							Explore from our best seller products across all categories rated by returning customer’s demand. 
						</div>

						<div className='w-100'>
							<button className={`${styles} primarybtn rounded mt-40 shadow-lg`}>
								<a href=''>
									See More
								</a>
							</button>
						</div>
					</div>


					<div className='col-lg-9 mt-5 flex-v-new'>
						<div className='col-lg-4 col-md-6 col-sm-8 col-10'>
							<div className='shadow-sm card card-hover rounded-sm'>
								<div className={`${styles.productscard} flex-2`}>
									<img src='/images/9.png' width='100%' />
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
										Kimi Nude Heels
									</div>

									<div className='ml-2'>
										#10,0000
									</div>
								</div>
							</div>
						</div>

						<div className='col-lg-4 col-md-6 col-sm-8 col-10'>
							<div className='shadow-sm card card-hover rounded-sm'>
								<div className={`${styles.productscard} flex-2`}>
									<img src='/images/7.png' width='100%' />
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
										Gray rolex
									</div>

									<div className='ml-2'>
										#10,0000
									</div>
								</div>
							</div>
						</div>

						<div className='col-lg-4 col-md-6 col-sm-8 col-10'>
							<div className='shadow-sm card card-hover rounded-sm'>
								<div className={`${styles.productscard} flex-2`}>
									<img src='/images/8.png' width='100%' />
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
										Nike Air force 1
									</div>

									<div className='ml-2'>
										#10,0000
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className={`${styles.icons} flex-v-new mt-2 w-20`}>
						<div>
							<i className='bi-circle-fill mx-2 ri-xs'></i>
							<i className='bi-circle mx-2 ri-xs'></i>
							<i className='bi-circle mx-2 ri-xs'></i>
							<i className='bi-circle mx-2 ri-xs'></i>
							<i className='bi-circle mx-2 ri-xs'></i>
						</div>
					</div>
				</div>
			</div>


		</>

	)


}

export default Bestseller