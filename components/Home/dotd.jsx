import React, {useState, useEffect, useRef} from 'react'
import styles from '../../styles/home/Dotd.module.css'




const Dotd = () =>{


	return(


		<>

			<div className='container-fluid mt-60 bg-default2 text-default'>
				<div className='row justify-content-center'>
					<div  className={`${styles.wrap} p-10 flex-h-new4`}>
						<div className={`${styles.des}`}>
							
						</div>

						<div className='col-lg-4'>
							<div className='main-text'>
								<span className='sp2'>Deal</span> Of The Day
							</div>

							<div className='min-text mt-4 w-82'>
								We have mouth watering flash sales on some of our products  just for today! Shop now to enjoy your own share of the deal.
							</div>


							<div className=''>
								
							</div>


							<div className='w-100'>
								<button className='primarybtn rounded mt-40 shadow-lg'>
									<a href=''>
										Shop Now
									</a>
								</button>
							</div>
						</div>

						<div className='col-lg-8 flex-h-new51'>
							{/*<img src='/images/apk.png' />*/}
						</div>
					</div>
				</div>
			</div>

		</>


	)

}



export default Dotd