import React, {useState, useEffect, useRef} from 'react'
import styles from '../../styles/home/Testimonials.module.css'



const Testimonials = () =>{

	return(


		<>

			<div className='container-fluid mt-60 text-default'>
				<div className='row justify-content-center'>
					<div className={`${styles.testi}`}>
						<div className='text-l'>
							<div className='main-text  px-5'>
								What People Say
							</div>

							<div className='px-5'>
								<span className='sp1 p-0'>About Us</span>
							</div>

							<div className='min-text px-5 w-33 mt-3'>
								We ensure a seamless and secure experience while shopping, and we’ve received several positive feedbacks from our esteemed customers!
							</div>
						</div>

						<div className={`${styles.testi2} mt-5`}>
							<div className='col-lg-1'></div>
							<div className='col-lg-1'></div>
							<div className='col-lg-4'>
								<div className='fb'>
									ARCHITECT & DESIGNER
								</div>
								<div>Tito Omoniyi</div>
							</div>
							<div className='col-lg-1'></div>
							<div className='col-lg-1'></div>
						</div>
					</div>
				</div>
			</div>

		</>


	)

}


export default Testimonials