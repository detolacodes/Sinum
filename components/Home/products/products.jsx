import React, {useState, useEffect, useRef} from 'react'
import styles from '../../../styles/home/Products.module.css'
import ProductsPreview from './productspreview'


const Products = () =>{

	const [data, setData] = useState()

	return(

		<>

			<div className='container mt-120'>
				<div className='row justify-content-center bold fos48 text-default'>
					Our Products
				</div>
			</div>


			<div className='container-fluid flex-v text-default px-5'>
				<div className='row justify-content-center'>
					<div className={`${styles.productsheader} flex-h-new91 mt-5 mb-n`}>
						<div className={`${styles.productsheaderflow} flex-h-new91  w-78`}>
							<div  className={`${styles.active} flex-h-new9`}>
								Fashion
								<i className='bi-chevron-down ml-1'></i>
							</div>
							<div>Cologne</div>
							<div>Grocery</div>
							<div>Health</div>
							<div>Health</div>
							<div>Health</div>
							<div>Beauty</div>
							<div>Gadget</div>
							<div>Stationary</div>
							<div>Electronics</div>
							<div>Home Decor</div>
							<div>Home Decor</div>
							<div>Home Decor</div>
						</div>
					</div>

					<div className='flex-v-new2'>
						<div className='col-lg-1  mt-120'>
							<div className={`${styles.productsidebar} w-100 flex-v`}>
								<div>MALE</div>
								<div className={`${styles}`}>All</div>
								<div>Tshirt</div>
								<div>Hoodie</div>
								<div>Denim</div>
								<div>Short</div>
								<div>Underwear</div>
								<div>Joggers</div>
								<div>Jean</div>
								<div>Sneakers</div>
								<div>Sandal</div>
								<div>Crocs</div>
								<div>Stud</div>
								<div>Wristwatch</div>
								<div>Chain</div>
								<input placeholder='Search' />
							</div>
						</div>


						<div className='col-lg-11 flex-v-new1'>
							<ProductsPreview/>
						</div>
					</div>

					<div className={`${styles.buttwrap}`}>
						<button className={`${styles} text-center primarybtn mt-40`}>
							<a href=''>
								Explore Shop
							</a>
						</button>
					</div>
				</div>
			</div>

		</>

	)


}


export default Products