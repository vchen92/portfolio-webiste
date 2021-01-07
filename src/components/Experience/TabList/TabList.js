import React from 'react';
import './TabList.css';

function TabList({ tabs, onSelectTabItem, tabSlider }) {
	return (
		<ul className="tabList">
			{tabs.map((tab, idx) => (
				<li key={idx} id={idx} onClick={() => onSelectTabItem(idx)}>
					<button>{tab.name}</button>
				</li>
			))}
			<div className="tabList__styledHighlight" style={tabSlider}></div>
		</ul>
	);
}

export default TabList;
