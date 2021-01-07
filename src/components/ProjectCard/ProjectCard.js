import React from 'react';
import HyperLink from './../UI/HyperLink/HyperLink';

function ProjectCard({ title, description, technologies, url, githubUrl }) {
	return (
		<div className="project">
			<p className="project__featured">Featured Project</p>
			<h2 className="project__title">{title}</h2>
			<p className="project__description">{description}</p>
			<div className="project__technologies">
				{technologies.map(tech => (
					<span>{tech}</span>
				))}
			</div>
			<div className="project__links">
				<HyperLink url={url}>{url}</HyperLink>
				<HyperLink url={githubUrl}>{githubUrl}</HyperLink>
			</div>
		</div>
	);
}

export default ProjectCard;
