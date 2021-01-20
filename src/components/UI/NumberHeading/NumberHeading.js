import React from 'react';

import './NumberHeading.css';

function NumberHeading({ number, ...props }) {
	return (
		<h2 className="number-heading">
			<span>{number}.</span>
			{props.children}
		</h2>
	);
}

export default NumberHeading;
