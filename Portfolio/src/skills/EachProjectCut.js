import { FaLink } from 'react-icons/fa6';
import projectsCSS from './ProjectsByMe.module.css';

function EachProjectCut({ imageSrc, alt, projectLink, projectName }) {
	return (
		<div className={projectsCSS.eachProject}>
			<img src={imageSrc} alt={alt} />
			<a href={projectLink} target="_blank" className={projectsCSS.projectNavLink} rel="noreferrer"><FaLink /></a>
			<span>{projectName}</span>
		</div>
	)
}

export default EachProjectCut