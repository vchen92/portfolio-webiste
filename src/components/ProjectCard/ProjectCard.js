import React from 'react';
import HyperLink from './../UI/HyperLink/HyperLink';
import './ProjectCard.css';

function ProjectCard({ title, description, technologies, url, githubUrl }) {
	return (
		<div className="projectCard">
			<div className="projectCard__image-container">
				<a href="www.google.com">
					<img
						className="projectCard__image"
						src="https://www.scnsoft.com/blog-pictures/web-apps/web-application-vs-website-01.png"
					/>
				</a>
			</div>

			<div className="projectCard__content">
				<p className="projectCard__featured">Featured Project</p>
				<h2 className="projectCard__title">{title}</h2>
				<div className="projectCard__description">{description}</div>
				<div className="projectCard__technologies">
					{technologies.map(tech => (
						<span>{tech}</span>
					))}
				</div>
				<div className="projectCard__links">
					<span>
						<HyperLink url={url}>Website</HyperLink>
					</span>
					<span>
						<HyperLink url={githubUrl}>GitHub</HyperLink>
					</span>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
