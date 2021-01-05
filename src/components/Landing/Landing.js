import React from 'react';
import './Landing.css';
import CustomButton from './../CustomButton/CustomButton';

function Landing() {
	return (
		<div className="landing section">
			<div className="landing__container">
				<h1 className="landing__hi">Hi, my name is</h1>
				<h2 className="landing__name landing__heading">
					Vincent Chen.
				</h2>
				<h3 className="landing__subheader landing__heading">
					I build things for the web.
				</h3>
				<div className="landing__about">
					I'm a software engineer based in Vancouver, BC specializing
					in building (and occasionally designing) exceptional
					websites, applications and everything in between.
				</div>
				<CustomButton styleName="landing__button" large>
					Get In Touch
				</CustomButton>
			</div>
		</div>
	);
}

export default Landing;
