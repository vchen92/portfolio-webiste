import React from 'react';
import { Link } from 'react-scroll';
import './NavLink.css';

function NavLink({ to, number, ...props }) {
	return (
		<Link
			className="navlink"
			to={to}
			offset={-100}
			spy={true}
			smooth={true}
			duration={500}
		>
			{number && <span className="navlink__number">{number}.</span>}
			{props.children}
		</Link>
	);
}

export default NavLink;
