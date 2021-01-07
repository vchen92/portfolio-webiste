import React, { useState } from 'react';
import TabPanel from '../../components/VerticalTab/TabPanel/TabPanel';
import TabList from './../../components/VerticalTab/TabList/TabList';
import NumberHeading from '../../components/NumberHeading/NumberHeading';
import WorkExperiences from '../../workExperience';
import './Experience.css';

function Experience() {
	const [activeTab, setActiveTab] = useState(0);
	const [tabSliderStyle, setTabSliderStyle] = useState({
		transform: `translateY(calc(0 * var(--tab-height)))`,
	});

	const onClickTabItem = tab => {
		setActiveTab(tab);
		setTabSliderStyle({
			transform: `translateY(calc(${tab} * var(--tab-height)))`,
		});
	};

	return (
		<div className="experience section">
			<NumberHeading number="02">Where I've Worked</NumberHeading>
			<div className="experience__container">
				<TabList
					tabs={WorkExperiences}
					onSelectTabItem={onClickTabItem}
					tabSlider={tabSliderStyle}
				/>
				{WorkExperiences.map(
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