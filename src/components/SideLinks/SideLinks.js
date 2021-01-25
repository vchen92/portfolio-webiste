import React from 'react';
import './SideLinks.css';

function SideLinks({ side, children }) {
	return (
		<div className={`sideLinks ${side}`}>
			<div className="sideLinks__container">{children}</div>
		</div>
	);
}

export default SideLinks;
