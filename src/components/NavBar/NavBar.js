import React, { useLayoutEffect, useState } from 'react';

import './NavBar.css';
import NavLink from './NavLink/NavLink';
import CustomButton from './../CustomButton/CustomButton';

function NavBar() {
	const [position, setPosition] = useState(0);
	const [background, setBackground] = useState('navbar__top');

	useLayoutEffect(() => {
		const listener = document.addEventListener('scroll', () => {
			const currPosition = window.scrollY;
			const bkg =
				currPosition > 0
					? currPosition > position
						? 'navbar__hidden'
						: 'navbar__scroll'
					: 'navbar__top';

			setPosition(currPosition);
			setBackground(bkg);
		});

		return () => {
			document.removeEventListener('scroll', listener);
		};
	}, [position]);

	return (
		<>
			<nav className={`navbar ${background}`}>
				<div className="navbar__container">
					<NavLink to="landing">
						<div className="navbar__logo">TRVL</div>
					</NavLink>
					<div className="navbar__links">
						<NavLink to="about" number="01">
							About
						</NavLink>
						<NavLink to="experience" number="02">
							Experience
						</NavLink>
						<NavLink to="projects" number="03">
							Projects
						</NavLink>
						<NavLink to="contact" number="04">
							Contact
						</NavLink>
						<CustomButton>Resume</CustomButton>
					</div>
				</div>
			</nav>
		</>
	);
}

export default NavBar;
