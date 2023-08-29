import React, {useState, useEffect, useRef} from 'react'
import { Fragment } from 'react'


const inputField = () =>{
	
	return(

		<>

			<div className='flex-h-new91'>
				<div>
					<div className='bg-danger'>
						<input className='w-100 bg-danger' placeholder='search for products here' />
						<i className='bi-search'></i>
						lorem
					</div>
				</div>

				<button className={`${styles} text-center primarybtn mt-40`}>
					<a href=''>
						Explore Shop
					</a>
				</button>
			</div>

		</>

	)
}

export default inputField