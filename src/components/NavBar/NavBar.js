import React from 'react';

import './NavBar.css';
import NavLink from './NavLink/NavLink';
import CustomButton from './../CustomButton/CustomButton';

function NavBar() {
	return (
		<>
			<nav className="navbar">
				<div className="navbar__container">
					<NavLink to="landing">
						<div className="navbar__logo">TRVL</div>
					</NavLink>
					<div className="navbar__links">
						<NavLink to="about">
							<span className="navbar__number">01.</span>About
						</NavLink>
						<NavLink to="experience">
							<span className="navbar__number">02.</span>
							Experience
						</NavLink>
						<NavLink to="work">
							<span className="navbar__number">03.</span>Work
						</NavLink>
						<NavLink to="contact">
							<span className="navbar__number">04.</span>Contact
						</NavLink>
						<CustomButton>Resume</CustomButton>
					</div>
				</div>
			</nav>
		</>
	);
}

export default NavBar;
