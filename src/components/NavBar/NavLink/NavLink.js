import React from 'react';
import { Link } from 'react-scroll';
import './NavLink.css';

function NavLink({ to, ...props }) {
	return (
		<Link
			className="navlink roboto-font"
			to={to}
			offset={-100}
			spy={true}
			smooth={true}
			duration={500}
		>
			{props.children}
		</Link>
	);
}

export default NavLink;
