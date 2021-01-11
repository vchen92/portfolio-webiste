import React from 'react';
import IconExternal from './external';
import IconGitHub from './github';
import IconLinkedin from './linkedin';

const Icon = ({ name }) => {
	switch (name) {
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
