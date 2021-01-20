import React from 'react';
import NavLinks from '../NavLinks/NavLinks';
import './SideDrawer.css';

function SideDrawer({ show, hideDrawer }) {
	return (
		<div className={`sideDrawer ${!show && 'hidden'}`}>
			<NavLinks orientation="vertical" onClick={hideDrawer} />
		</div>
	);
}

export default SideDrawer;
