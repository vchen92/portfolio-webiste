import React, { useState, useEffect } from 'react';
import TabPanel from '../../components/Tabs/TabPanel/TabPanel';
import TabList from './../../components/Tabs/TabList/TabList';
import NumberHeading from '../../components/UI/NumberHeading/NumberHeading';
import Jobs from '../../content/jobs';
import './Experience.css';

function Experience() {
	const [activeTab, setActiveTab] = useState(0);
	const [isVerticalTab, setIsVerticalTab] = useState(true);
	const [tabSliderStyle, setTabSliderStyle] = useState({});

	useEffect(() => {
		const width = window.innerWidth;
		setIsVerticalTab(width >= 600);
		setTabSliderStyle({
			transform: getTransform(0),
		});
	}, [window.innerWidth]);

	const getTransform = tab =>
		isVerticalTab
			? `translateY(calc(${tab} * var(--tab-height)))`
			: `translateX(calc(${tab} * var(--tab-width)))`;

	const onSelectTabItem = tab => {
		setActiveTab(tab);
		setTabSliderStyle({
			transform: getTransform(tab),
		});
	};

	return (
		<div className="experience section">
			<NumberHeading number="02">Where I've Worked</NumberHeading>
			<div className="experience__container">
				<TabList
					tabs={Jobs}
					onSelectTabItem={onSelectTabItem}
					tabSlider={tabSliderStyle}
					active={activeTab}
				/>
				{Jobs.map(
					(exp, idx) =>
						idx === activeTab && (
							<TabPanel
								activeTab={activeTab}
								key={idx}
								id={idx}
								{...exp}
							/>
						)
				)}
			</div>
		</div>
	);
}

export default Experience;
