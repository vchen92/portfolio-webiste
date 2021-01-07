import React from 'react';
import HyperLink from './../UI/HyperLink/HyperLink';
import './ProjectCard.css';

function ProjectCard({ title, description, technologies, url, githubUrl }) {
	return (
		<div className="project">
			<p className="project__featured">Featured Project</p>
			<h2 className="project__title">{title}</h2>
			<div className="project__description">{description}</div>
			<div className="project__technologies">
				{technologies.map(tech => (
					<span>{tech}</span>
				))}
			</div>
			<div className="project__links">
				<span>
					<HyperLink url={url}>Website</HyperLink>
				</span>
				<span>
					<HyperLink url={githubUrl}>GitHub</HyperLink>
				</span>
			</div>
		</div>
	);
}

export default ProjectCard;
