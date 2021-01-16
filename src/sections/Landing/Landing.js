import React from 'react';
import './Landing.css';
import CustomButton from '../../components/UI/CustomButton/CustomButton';

function Landing() {
	return (
		<div className="landing section">
			<div className="landing__container">
				<h1 className="landing__hi">Hi, my name is</h1>
				<h2 className="landing__name landing__heading">
					Vincent Chen.
				</h2>
				<h3 className="landing__subheader landing__heading">
					I create apps for the internet.
				</h3>
				<div className="landing__about">
					I'm a software engineer based in Vancouver, BC specializing
					in building exceptional websites, applications and
					everything in between.
				</div>
				<a href="mailto:vince.chen92@gmail.com">
					<CustomButton styleName="landing__button" large>
						Get In Touch
					</CustomButton>
				</a>
			</div>
		</div>
	);
}

export default Landing;
