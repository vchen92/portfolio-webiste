import React from 'react';
import './HyperLink.css';

function HyperLink({ url, ...props }) {
	return (
		<a className="hyperlink" href={url} target="_blank">
			{props.children}
		</a>
	);
}

export default HyperLink;
