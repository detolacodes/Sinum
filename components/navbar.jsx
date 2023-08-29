import React, {useState, useEffect, useRef} from 'react'
import styles from '../styles/Navbar.module.css'


const Navbar = () =>{

	const [sidebar, setSidebar] = useState(false);
	const openMenu = () => setSidebar(!sidebar);
	const closeMenu = () => setSidebar(!sidebar);



	const headerRef = useRef(null)
	const links = useRef(null)
	const menuRef = useRef(null)
	const [icon, setIcon] = useState(false)

	const clickicon = () =>{
		if(document.addEventListener('click')){
			links.current.classList.add(`${styles.textund}`)
		}
		else{
			links.current.classList.remove(`${styles.textund}`)	
		}
	}

	

	const headerFunc = () =>{
		if(document.documentElement.scrollTop > 80){
			headerRef.current.classList.add(`${styles.header_shrink}`)
		}
		else{
			headerRef.current.classList.remove(`${styles.header_shrink}`)	
		}
	}

	useEffect(() =>{

		window.addEventListener('scroll', headerFunc)

		return () => window.removeEventListener('scroll', headerFunc)

	}, [])

	return(

		<>

			{/*the desktop navbar starts here*/}

			<div className='navbar mt-4' ref={headerRef}>

				<div className={`${styles.logo}`}>
					<i className='bi-kanban ml-3 mr-1 fos20'></i>
					<div className='fos20 fb'>Sinum</div>
				</div>

				<div className={`${styles.links} flex-4 flex-h-new9  sm-none`}>

					<div>
						<a href=''  className='pr-25 pl-25' ref={links}>Home</a>
					</div>

					<div>
						<a href=''  className='pr-25 pl-25' ref={links}>FAQs</a>
					</div>

					<div>
						<a href=''  className='pr-25 pl-25' ref={links}>Shop</a>
					</div>

					<div>
						<a href=''  className='pr-25 pl-25' ref={links}>Contact</a>
					</div>
				</div>

				<div className='flex-h-new3 buttons sm-none mr-5'>
					<div  className={`${styles.icon}`}>
						<div></div>
						<i className='bi-cart3 mr-20'></i>
					</div>
					
					<button className='secondarybtn ml-4 rounded'>
						<a href='/signup'>
							Sign in
						</a>
					</button>
				</div>

				<div className=''>
					<i className={sidebar ? '' : 'bi-filter-right text-dark fa-2x d-md-none'} onClick={openMenu}></i>
				</div>
			</div>

		{/*the desktop navbar ends here*/}


		{/*the mobile navbar starts here*/}

			<div className={sidebar ? 'mobbg slideInRight zindex' : 'd-none'}>

				<div className='flex-h-new6 px-3 py-4'>

						<i className='bi-x text-white fa-2x d-md-none' onClick={closeMenu}></i>
						{/*<i className='bi-kanban ml-3 mr-1 fos20'></i>*/}
						<div className='fos20 fb'>Sinum</div>
				</div>

				<div className='py-4 px-3'>
					
					<div>
						<a href=''  className='pr-25 pl-25' ref={links}>Home</a>
					</div>

					<div>
						<a href=''  className='pr-25 pl-25' ref={links}>FAQs</a>
					</div>

					<div>
						<a href=''  className='pr-25 pl-25' ref={links}>Shop</a>
					</div>

					<div>
						<a href=''  className='pr-25 pl-25' ref={links}>Contact</a>
					</div>

				</div>

				<div className='flex-h-new1'>
					<button className='secondarybtn ml-4 rounded'>
						<a href='/signup'>
							Sign in
						</a>
					</button>
				</div>
			</div>

		{/*the mobile navbar ends here*/}

		</>
	)

}


export default Navbar