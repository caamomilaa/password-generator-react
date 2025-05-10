// import styles from './password-generator-container.module.css';

import { useState } from 'react';

const PasswordGeneratorContainer = () => {
	const [range, setRange] = useState(4);

	return (
		<>
			<div>
				{/* password container   */}
				<input type='text' placeholder='P4$5W0RD !' readOnly='' />
			</div>
			<div>
				{/* length */}
				<span>LENGTH:</span>
				<span>{range}</span>
			</div>
			<div>
				{/* range */}
				<span>4</span>
				<input
					type='range'
					min={4}
					max={32}
					value={range}
					onChange={event => setRange(event.target.value)}
				/>
				<span>32</span>
			</div>
			<button>Generate Password</button>
		</>
	);
};

//1. Conseguir que el texto del length se modifique cuando muevo el range

export default PasswordGeneratorContainer;
