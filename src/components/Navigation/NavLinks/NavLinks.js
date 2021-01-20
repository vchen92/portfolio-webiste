import React from 'react';
import NavLink from './NavLink/NavLink';
import Resume from '../../../content/resume2020.pdf';
import CustomButton from './../../UI/CustomButton/CustomButton';
import './NavLinks.css';

const Links = [
	{ to: 'about', number: '01', text: 'About' },
	{ to: 'experience', number: '02', text: 'Experience' },
	{ to: 'projects', number: '03', text: 'Projects' },
	{ to: 'contact', number: '04', text: 'Contact' },
];

function NavLinks({ orientation, onClick }) {
	return (
		<div className={`navLinks ${orientation}`}>
			{Links.map(({ to, number, text }) => (
				<NavLink to={to} number={number} onClick={onClick}>
					{text}
				</NavLink>
			))}
			<a
				href={Resume}
				className="navLinks__button"
				target="_blank"
				rel="noreferrer"
			>
				<CustomButton>Resume</CustomButton>
			</a>
		</div>
	);
}

export default NavLinks;
