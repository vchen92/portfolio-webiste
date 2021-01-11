import React from 'react';
import { socialMedia } from '../../content/socialMedia';
import SideLinks from '../SideLinks/SideLinks';
import Icon from './../../icons/icons';
import './SocialSide.css';

function SocialSide() {
	return (
		<div className="social-side">
			<SideLinks side="left">
				{socialMedia.map(({ name, url }) => (
					<a key={name} href={url} target="_blank" rel="noreferrer">
						<Icon name={name} />
					</a>
				))}
			</SideLinks>
		</div>
	);
}

export default SocialSide;
