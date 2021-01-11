import React from 'react';
import IconExternal from './external';
import IconGitHub from './github';
import IconLinkedin from './linkedin';
import IconLogo from './logo';

const Icon = ({ name }) => {
	switch (name) {
		case 'Logo':
			return <IconLogo />;
		case 'External':
			return <IconExternal />;
		case 'Github':
			return <IconGitHub />;
		case 'Linkedin':
			return <IconLinkedin />;
		default:
			return <IconExternal />;
	}
};

export default Icon;
