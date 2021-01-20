import React, { useEffect, useLayoutEffect, useState } from 'react';

import './NavBar.css';
import NavLink from '../NavLinks/NavLink/NavLink';
import HamBox from '../HamBox/HamBox';
import NavLinks from './../NavLinks/NavLinks';
import SideDrawer from './../SideDrawer/SideDrawer';

function NavBar() {
	const [position, setPosition] = useState(0);
	const [background, setBackground] = useState('navbar__top');
	const [showDrawer, setShowDrawer] = useState(false);

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

	useEffect(() => {
		document.body.style.overflow = showDrawer ? 'hidden' : 'unset';
	}, [showDrawer]);

	const toggleSideDrawer = () => {
		setShowDrawer(!showDrawer);
	};

	const hideDrawer = () => {
		setShowDrawer(false);
	};

	return (
		<nav className={`navbar ${background}`}>
			<div className="navbar__container">
				<NavLink to="landing">
					<div className="navbar__logo">
						<img src="/logo.png" alt="" />
					</div>
				</NavLink>
				<div className="navbar__navlinks">
					<NavLinks orientation="horizontal" />
				</div>
				<button
					className="navbar__hambox"
					onClick={() => toggleSideDrawer()}
				>
					<HamBox active={showDrawer} />
				</button>
			</div>
			<div
				onClick={hideDrawer}
				className={`navbar__sideDrawer ${showDrawer && 'show'}`}
			>
				<SideDrawer hideDrawer={hideDrawer} show={showDrawer} />
			</div>
		</nav>
	);
}

export default NavBar;
