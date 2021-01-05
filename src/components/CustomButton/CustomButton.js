import React from 'react';
import './CustomButton.css';

function CustomButton({ onClick, ...props }) {
	return (
		<button className="custom_button" onClick={onClick}>
			{props.children}
		</button>
	);
}

export default CustomButton;
