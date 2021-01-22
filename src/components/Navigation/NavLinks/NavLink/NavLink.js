import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './NavLink.css';

function NavLink({ to, number, onClick, ...props }) {
	const [offset, setOffset] = useState(-100);

	useEffect(() => {
		function handleResize() {
			const isVertical = window.innerWidth >= 600;
			setOffset(isVertical ? -100 : -20);
		}

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<Link
			className="navlink"
			to={to}
			offset={offset}
			spy={true}
			smooth={true}
			duration={500}
			onClick={onClick}
		>
			{number && <span className="navlink__number">{number}.</span>}
			{props.children}
		</Link>
	);
}

export default NavLink;
