import React, {useState, useEffect, useRef} from 'react'
import styles from '../../../styles/home/Hero.module.css'
// import Heroafter from '../heroafter/heroafter'


const Hero = () =>{

	return(

		<>

			<div className='container-fluid px10 mt-60'>
				<div className='row justify-content-center'>
					<div className='col-lg-6'>
						<div className={`${styles.hero} w-90`}>
							<div className={`${styles.hero_text}`}>
								Find all items on your <span className={`${styles.sp1} p-0`}>shopping list</span> here.
							</div>

							<div className={`${styles.hero_mintext} w-68`}>
								<b>Welcome to Sinum - </b> where student buyers and sellers meet! Are you an undergraduate of any university? Sign up to start your journey as a buyer or seller. 
							</div>

							<div className='w-40'>
								<button className={`${styles} primarybtn rounded mt-40 shadow-lg`}>
									<a href=''>
										Start Shopping
									</a>
								</button>
							</div>
						</div>
					</div>

					<div className='col-lg-6 hero-img'>
						<div className={`${styles.herounder} h-100 w-100 flex-h-new3`}>

							<div className={`${styles} flex-1 flex-h-new9 mx-4 mt-10`}>
								<div className={`${styles.circle1} mr-30`}>
									<img src='/images/5.png' width='100%' />
								</div>
								<div className={`${styles.circle2}`}>
									<img src='/images/sinum1.png' width='100%' />
								</div>
							</div>

							<div className={`${styles} flex-1  flex-h-new9 mr-100 mb-20`}>
								<div className={`${styles.circle2} mt-10`}>
									<img src='/images/sinum2.png' width='100%' />
								</div>
								<div className={`${styles.circle1} ml-30`}>
									<img src='/images/6.png' width='100%' />
								</div>
							</div>
						</div>

						<div>
							
						</div>
					</div>
				</div>
			</div>

		</>
	)
}

export default Hero