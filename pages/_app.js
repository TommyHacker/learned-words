import '../public/styles/css/main.css';

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<link rel='preconnect' href='https://fonts.googleapis.com' />
			<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
			<link
				href='https://fonts.googleapis.com/css2?family=Comfortaa&family=Dancing+Script&display=swap'
				rel='stylesheet'
			/>

			<div className='app-container'>
				<Component {...pageProps} />
			</div>
		</>
	);
};

export default MyApp;
