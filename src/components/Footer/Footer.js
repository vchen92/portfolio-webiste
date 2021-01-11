import React from 'react';
import './Footer.css';

const githubUrl = 'https://github.com/vchen92/portfolio-website';
const designUrl = 'https://github.com/bchiang7/v4';

function Footer() {
	return (
		<div className="footer">
			<a href={designUrl} target="_blank" rel="noreferrer">
				Designed by Brittany Chiang
			</a>
			<a href={githubUrl} target="_blank" rel="noreferrer">
				Built by Vincent Chen
			</a>
		</div>
	);
}

export default Footer;
