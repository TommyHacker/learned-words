import { useState } from 'react';
import Dictionary from '../components/Dictionary';
const Index = () => {
	const [gif, setGif] = useState(false);
	const [definition, setDefinition] = useState(null);

	return (
		<>
			<h1 className='title'>Learned Words</h1>
			<div className='container'>
				{gif ? <img className='gif' src={gif} alt='gif' /> : ''}
				<p
					className={
						definition && definition.length > 130
							? 'definition small-text'
							: 'definition large-text'
					}
				>
					{definition}
				</p>
			</div>
			<Dictionary setGif={setGif} setDefinition={setDefinition} />
		</>
	);
};

export default Index;
