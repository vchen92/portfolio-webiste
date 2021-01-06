import React from 'react';
import './Picture.css';

function Picture({ url }) {
	return (
		<div className="picture">
			<div className="picture__wrapper"></div>
			<img src={url} alt="" />
		</div>
	);
}

export default Picture;
