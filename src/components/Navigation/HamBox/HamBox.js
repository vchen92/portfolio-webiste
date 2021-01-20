import React from 'react';
import './HamBox.css';

function HamBox({ active }) {
	return (
		<div className={`hambox ${active && 'active'}`}>
			<div className="hambox__line"></div>
		</div>
	);
}

export default HamBox;
