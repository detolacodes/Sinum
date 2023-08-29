import Head from 'next/head'



const Meta = ({title, keywords, description}) => {

	return (

		<Head>
			<meta charSet = 'utf-8' />
			<meta name='viewport' content ='width=device-width,initial-scale=1' />
			<meta name='keywords' content ={keywords} />
			<meta name='description' content ={description} />
			<link rel = 'icon' href='/favicon.ico' />
			<title>{title}</title>
		</Head>

	)

}

Meta.defaultProps = {
	title: 'SINUM',
	keywords: 'Job opportunity, internships, resume builder',
	description: 'Showcasing you and your skills and abilities to the world'

}

export default Meta