import { NavLink } from 'react-router-dom';
import ContactMe from '../contact/contactMe';
import projectsCSS from './ProjectsByMe.module.css';
import Certificates from "../imageCarousel/certificate/Certificates";
import reactImg from '../images/ReactJS.jpg';
import EachProjectCut from "./EachProjectCut";

export default function ProjectsByMe() {
	return (
		<div className={projectsCSS.projectsByMe}>
			<h2><u style={{ textDecorationStyle: "double" }}>FEATURED PROJECTS</u></h2>
			<div><i>Personal projects created during my learnings</i></div>
			<div className={projectsCSS.projectsCategories}>
				<div className={projectsCSS.projectsCategories_1}>
					<div className={projectsCSS.projectsCategories_}>
						<div className={projectsCSS.projectSectionDetails}>
							<span>Frontend Projects</span>
							<p>Frontend projects with HTML, CSS, JavaScript, ReactJS.<br />
								From static pages to dynamic applications, each reflecting a commitment to engaging and responsive user experiences. Dive into the code.</p>
							<NavLink to="/contact" className={projectsCSS.button}><span>Create something</span></NavLink>
						</div>
						<div className={projectsCSS.projects}>
							<EachProjectCut projectName="My Portfolio 1" alt="My first portfolio build on reactJs"
								projectLink="https://ujjwalpandeyjava.github.io/Ujjwal-Portfolio/"
								imageSrc="https://i.pinimg.com/originals/7d/92/07/7d920792c0ab7efa9fee3464e8c696a3.jpg" />
							<EachProjectCut projectName="Ping Pong with physics" alt="JS canvas game ping pong"
								projectLink="https://ujjwalpandeyjava.github.io/PingPongGameLoaded/"
								imageSrc="https://i.pinimg.com/originals/67/6e/f2/676ef21bf17b9ae9f0f0511871096904.jpg" />
							<EachProjectCut projectName="ReactJs projects repo" alt="My projects on reactjs"
								projectLink="https://github.com/ujjwalpandeyjava/React_Projects"
								imageSrc={reactImg} />
							<EachProjectCut projectName="My UI Element for rapid development" alt="UI elements I created over time"
								projectLink="https://github.com/ujjwalpandeyjava/Components_Elements"
								imageSrc="https://i.pinimg.com/originals/40/43/9f/40439f509e514e15364bd07f1054877d.jpg" />
						</div>
					</div>
					<div className={projectsCSS.projectsCategories_}>
						<div className={projectsCSS.projectSectionDetails}>
							<span>Back-end Featured</span>
							<p>Backend Development projects featuring Java, Advanced Java, Hibernate, Spring, Spring Boot, Spring Security, JPA, and more.<br />
								Engage in robust, secure, and efficient backend solutions. Dive into the code.</p>
							{/* <NavLink to="/skills_projects/backEndProjects" className={projectsCSS.button} ><span>Check more</span></NavLink> */}
							<NavLink to="/contact" className={projectsCSS.button}><span>Build more</span></NavLink>
						</div>
						<div className={projectsCSS.projects}>
							<EachProjectCut projectName="Some WARs, JARS, and DB Backups" alt="To show case WARS and JARS"
								projectLink="https://github.com/ujjwalpandeyjava/WARs-JARs-DBs"
								imageSrc="https://i.pinimg.com/originals/46/d9/6d/46d96d028c678d81a3594bb4ef5fe003.jpg" />
							<EachProjectCut projectName="JavaScript with server sides" alt="Nodes server side code repo"
								projectLink="https://github.com/ujjwalpandeyjava/NodeProjects"
								imageSrc="https://i.pinimg.com/originals/61/4e/7f/614e7fcd7c07198989c22699c1f8df33.jpg" />
							<EachProjectCut projectName="Java and framework server sides" alt="Java server side code repo"
								projectLink="https://github.com/ujjwalpandeyjava/JavaTestedProjects"
								imageSrc="https://i.pinimg.com/originals/40/43/9f/40439f509e514e15364bd07f1054877d.jpg" />

						</div>
					</div>
				</div>
				<div className={projectsCSS.projectsCategories_}>
					<div className={projectsCSS.projectSectionDetails}>
						<span>Full Stack Featured</span>
						<p>Full Stack projects, seamlessly integrating Frontend (HTML, CSS, JS, React.js) and Backend (Java, Advanced Java, Hibernate, Spring, Spring Boot, Security, JPA). Engaging, responsive, and efficient. Dive into the code.</p>
						{/* <NavLink to="/skills_projects/fullStackProjects" className={projectsCSS.button}><span>Check more</span></NavLink> */}
						<NavLink to="/contact" className={projectsCSS.button}><span>Connect</span></NavLink>
					</div>
					<div className={projectsCSS.projects}>
						<EachProjectCut projectName="Computer institute management system" alt="management system"
							projectLink="https://github.com/ujjwalpandeyjava/User-Faculty_Institute_Workspace"
							imageSrc="https://ujjwalpandeyjava.github.io/Links/examplesPreviewImages/ComputerInstitute.png" />
						<EachProjectCut projectName="ToDo - Spring and Hibernate" alt="Java server side code repo"
							projectLink="https://github.com/ujjwalpandeyjava/SimpleToDo_withHibernate"
							imageSrc="https://ujjwalpandeyjava.github.io/Links/examplesPreviewImages/noImageFound.jpg" />
						<EachProjectCut projectName="Explore projects" alt="Full resp to explore"
							projectLink="https://github.com/ujjwalpandeyjava?tab=repositories"
							imageSrc="https://ujjwalpandeyjava.github.io/Links/examplesPreviewImages/deploy.jpeg" />

					</div>
				</div>
			</div>
			{/* <ImageCarousel /> */}
			<Certificates />
			<div className={projectsCSS.contactMeContainer}><ContactMe /></div>
			<div id={projectsCSS.twoSectionBackground}></div>
		</div>
	)
}