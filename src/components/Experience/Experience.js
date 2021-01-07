import React, { useState } from 'react';
import './Experience.css';
import NumberHeading from './../NumberHeading/NumberHeading';
import TabPanel from './TabPanel/TabPanel';

function Experience() {
	const experiences = [
		{
			position: 'Full Stack Software Developer',
			company: 'CoinSeason Inc.',
			url: 'https://www.coinseason.io/',
			startDate: 'April 2018',
			endDate: 'April 2019',
			items: [
				'Created, delivered and maintained scalable system architecture to support high-availability Internet site with various internal applications',
				'Trusted by CTO to lead team of 3 to build and beautify a responsive front-end interface using Angular framework',
				'Planned and engineered RESTful web services to manipulate dynamic datasets using AWS API Gateway + Lambda and Serverless framework',
				'Utilized MySQL and Amazon RDS for processing data requests, optimizing database schemas and data migration',
				'Implementation of referral program and admin portal increased user registration rate by 22% and reduced cost for user KYC and transaction verifications by 53% respectively',
				'Mentored new developers by helping with onboarding and explaining different parts of the system',
			],
		},
		{
			position: 'Junior Software Developer',
			company: 'Ensemble Systems Inc.',
			url: 'https://www.ensemble.com/',
			startDate: 'April 2016',
			endDate: 'February 2018',
			items: [
				'Improved match results of a bot capable of image comparisons, using Microsoft Cognitive Services, by 40%',
				'Worked in Scrum Agile-driven environment to effectively maintain project timelines and utilize available resources',
				'Evaluated project requirements and specifications to develop software applications that surpassed client expectations',
				'Designed and updated layouts to meet usability and performance requirements for web, mobile, AEM and DMS applications',
				'Participated in more than 4 projects per year from initial research and conceptual design through testing and implementation phases',
				'Carefully documented technical workflows and knowledge in private wiki for education of newly hired employees',
			],
		},
	];

	return (
		<div className="experience section">
			<NumberHeading number="02">Where I've Worked</NumberHeading>
			<div className="experience__container">
				<ul className="experience__tablist">
					<li>
						<button>Coinseason</button>
					</li>
					<li>
						<button>Ensemble Systems</button>
					</li>
					<div className="experience__styledHighlight"></div>
				</ul>
				{experiences.map(exp => (
					<TabPanel {...exp} />
				))}
			</div>
		</div>
	);
}

export default Experience;
