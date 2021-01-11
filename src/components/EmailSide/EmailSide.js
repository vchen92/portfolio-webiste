import React from 'react';
import SideLinks from '../SideLinks/SideLinks';
import { email } from '../../content/socialMedia';
import './EmailSide.css';

function EmailSide() {
	return (
		<div className="email-side">
			<SideLinks side="right">
				<a href={`mailto:${email}`}>{email}</a>
			</SideLinks>
		</div>
	);
}

export default EmailSide;
