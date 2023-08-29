import React, {useState, useEffect, useRef} from 'react'
import styles from '../../../styles/home/Products.module.css'
import ProductsData from './productsdata'


const ProductsPreview = (props) =>{

	// const {name, rating, image, price} = props.item;

	return(

		<>

			<div className={`${styles.products}`}>
				<div className={`${styles.productscard}`}>
					 <img src='/images/20.png' width='100%' />
				</div>

				<div className='flex-v-new'>
					<i className='bi-star-fill'></i>
					<i className='bi-star-fill'></i>
					<i className='bi-star-fill'></i>
					<i className='bi-star-fill'></i>
					<i className='bi-star-fill'></i>
				</div>

				<div className='flex-v-new'>
					Rolex Watch
				</div>

				<div className='flex-v-new mt-2'>
					#128,000
				</div>
			</div>



			<div className={`${styles.products}`}>
				<div className={`${styles.productscard}`}>
					 <img width='100%' src='/images/14.png' />
				</div>

				<div className='flex-v-new'>
					<i className='bi-star-fill'></i>
					<i className='bi-star-fill'></i>
					<i className='bi-star-fill'></i>
					<i className='bi-star-fill'></i>
					<i className='bi-star-fill'></i>
				</div>

				<div className='flex-v-new'>
					B Hoodie
				</div>

				<div className='flex-v-new mt-2'>
					#18,000
				</div>
			</div>


		<div className={`${styles.products}`}>
				<div className={`${styles.productscard}`}>
					 <img src='/images/sinum3.png' width='100%' />
				</div>

				<div className='flex-v-new'>
					<i className='bi-star-fill'></i>
					<i className='bi-star-fill'></i>
					<i className='bi-star-fill'></i>
					<i className='bi-star-fill'></i>
					<i className='bi-star-fill'></i>
				</div>

				<div className='flex-v-new'>
					Rolex Watch
				</div>

				<div className='flex-v-new mt-2'>
					#128,000
				</div>
			</div>

			<div className={`${styles.products}`}>
				<div className={`${styles.productscard}`}>
					 <img width='100%' src='/images/15.png' />
				</div>

				<div className='flex-v-new'>
					<i className='bi-star-fill'></i>
					<i className='bi-star-fill'></i>
					<i className='bi-star-fill'></i>
					<i className='bi-star-fill'></i>
					<i className='bi-star-fill'></i>
				</div>

				<div className='flex-v-new'>
					Nike Air force 1
				</div>

				<div className='flex-v-new mt-2'>
					#49,000
				</div>
			</div>
		</>

	)

}

export default ProductsPreview