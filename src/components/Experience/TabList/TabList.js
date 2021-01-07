import React from 'react';
import './TabList.css';

function TabList({ tabs, onSelectTabItem, activeTab, tabSlider }) {
	return (
		<ul className="tabList">
			{tabs.map(({ name }, idx) => (
				<li key={idx} id={idx} onClick={() => onSelectTabItem(idx)}>
					<button className={activeTab == idx && 'active'}>
						{name}
					</button>
				</li>
			))}
			<div className="tabList__styledHighlight" style={tabSlider}></div>
		</ul>
	);
}

export default TabList;
