import React from 'react';
import './SideLinks.css';

function SideLinks({ side, children }) {
	return (
		<div className={`side-links ${side}`}>
			<div className="side-links__container">{children}</div>
		</div>
	);
}

export default SideLinks;
