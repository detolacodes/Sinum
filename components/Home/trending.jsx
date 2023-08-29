import React, {useState, useEffect, useRef} from 'react'
import styles from '../../styles/home/Trending.module.css'



const Trending = () =>{

	return(


		<>

			<div className='container mt-60'>
				<div className='row justify-content-center'>
					<div className='flex-v-new'>
						<div className={`${styles.trd1} col-lg-4 flex-1 p-5`}></div>

						<div className={`${styles.trd2} col-lg-4 flex-1 p-5`}>
							<div className='text-center'>
								Trending
							</div>

							<div className='ml-50'>
								Now
								<div></div>
							</div>

							<div className={`${styles.trd22} p-5 flex-1`}>
								
							</div>
						</div>

						<div className={`${styles.trd12} col-lg-4 flex-1 p-5`}></div>
					</div>
				</div>
			</div>

		</>

	)


}

export default Trending