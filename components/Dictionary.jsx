import { useState } from 'react';

const axios = require('axios');
const Dictionary = ({ setGif, setDefinition }) => {
	const gifApiKey = process.env.NEXT_PUBLIC_GIF_API_KEY;
	const [keyword, setKeyword] = useState(null);
	const submitHandler = (e) => {
		e.preventDefault();
		const giphUrl = `https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${gifApiKey}&limit=5`;
		const dictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios
			.get(giphUrl)
			.then((res) => {
				const dataRes = res.data.data[0];
				setGif(dataRes.images.downsized_large.url);
			})
			.catch((err) => console.log(err));
		axios
			.get(dictionaryUrl)
			.then((res) => {
				const data = res.data[0].meanings[0].definitions[0].definition;
				setDefinition(data);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className='controller'>
			<form onSubmit={(e) => submitHandler(e)}>
				<input
					type='text'
					name='keyword'
					onChange={(e) => setKeyword(e.target.value)}
					placeholder='search dictionary'
				/>
				<button type='submit'>Search</button>
			</form>
		</div>
	);
};

export default Dictionary;
