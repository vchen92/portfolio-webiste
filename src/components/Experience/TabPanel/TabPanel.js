import React from 'react';
import './TabPanel.css';
import HyperLink from './../../HyperLink/HyperLink';

function TabPanel({ position, name, url, startDate, endDate, items }) {
	return (
		<div className="tabPanel">
			<p className="tabPanel__heading">
				<span className="tabPanel__position">{position}</span>{' '}
				<span className="tabPanel__company">
					@ <HyperLink url={url}>{name}</HyperLink>
				</span>
			</p>
			<p className="tabPanel__date">
				{startDate} - {endDate}
			</p>
			<ul className="tabPanel__list">
				{items.map(item => (
					<li>{item}</li>
				))}
			</ul>
		</div>
	);
}

export default TabPanel;
