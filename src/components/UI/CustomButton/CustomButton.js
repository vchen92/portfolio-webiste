import React from 'react';
import './CustomButton.css';

function CustomButton({ onClick, large, ...props }) {
	return (
		<button
			className={`custom_button roboto-font ${
				large && 'custom_button__large'
			} ${props.styleName}`}
			onClick={onClick}
		>
			{props.children}
		</button>
	);
}

export default CustomButton;
