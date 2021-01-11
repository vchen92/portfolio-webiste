import React from 'react';
import './ProjectCard.css';
import Icon from './../../icons/icons';

function ProjectCard({
	title,
	description,
	technologies,
	externalUrl,
  githubUrl,
  screenshotPath,
}) {
	return (
		<div className="projectCard">
			<div className="projectCard__image-container">
				<a href={externalUrl} target="_blank" rel="noreferrer">
					<img className="projectCard__image" src={screenshotPath} />
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
						<a href={githubUrl} target="_blank" rel="noreferrer">
							<Icon name="Github" />
						</a>
					</span>
					<span>
						<a href={externalUrl} target="_blank" rel="noreferrer">
							<Icon name="External" />
						</a>
					</span>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
