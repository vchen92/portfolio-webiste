import React from 'react';
import NumberHeading from '../../components/NumberHeading/NumberHeading';
import featuredProjects from './../../store/featured';
import ProjectCard from './../../components/ProjectCard/ProjectCard';
import './Projects.css';

function Projects() {
	return (
		<div className="projects section">
			<NumberHeading number="03">Some Things I've Built</NumberHeading>
			<div className="projects__container">
				{featuredProjects.map((proj, idx) => (
					<ProjectCard key={idx} {...proj} />
				))}
			</div>
		</div>
	);
}

export default Projects;
