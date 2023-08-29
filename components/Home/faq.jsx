import React, {useState, useEffect, useRef} from 'react'
import styles from '../../styles/home/Faq.module.css'


const Faq = () =>{


	return(

		<>

			<div className='container-fluid mt-60 pb-30 text-default'>
				<div className='row justify-content-center'>

					<div className='main-text text-center mb-80'>
						FAQs
					</div>

					<div className='col-lg-6'>
						<div className={`${styles.que1}`}>
							<div>
								<div>
									How long does it take to receive my goods?
								</div>


								<div className='mt-4'>
									
								</div>
							</div>

							<i className='bi-plus-circle'></i>
						</div>

						<div className={`${styles.que1}`}>
							<div>
								<div>
									Can vendors sell third party products?
								</div>


								<div className='mt-4'>
									Third party products are allowed, as long as customers get their order(s) within the timeframe stated during checkout and as long as “what they order is what they get”.
								</div>
							</div>

							<i className='bi-plus-circle activicon'></i>
						</div>

						<div className={`${styles.que1}`}>
							<div>
								<div>
									Can I make payment on delivery? 
								</div>


								<div className='mt-4'>
									
								</div>
							</div>

							<i className='bi-plus-circle'></i>
						</div>

						<div className={`${styles.que1}`}>
							<div>
								<div>
									How can I set up my profile as a vendor?
								</div>


								<div className='mt-4'>
									
								</div>
							</div>

							<i className='bi-plus-circle'></i>
						</div>
					</div>


					<div className='col-lg-4 flex-v-new'>
						<div className={`${styles.circle2} mt-10`}>
							<img src='/images/4.png' width='100%' />
						</div>
					</div>
				</div>
			</div>

		</>


	)


}


export default Faq