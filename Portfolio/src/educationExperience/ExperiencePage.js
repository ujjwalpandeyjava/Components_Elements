import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { SiNextra } from "react-icons/si";
import useDocumentTitle from "../assets/useDocumentTitle";
import ContactMe from "../contact/contactMe";
import workingImg from '../images/working_on_laptop.png';
import Skills from "../skills/Skills";
import EducationExperience from "./EducationExperience";


function ExperiencePage() {
	useDocumentTitle("Experience");

	return (
		<>
			<div className="experienceTxt">
				<img src={workingImg} alt="I got experience" />
				<div className="journey">
					<span className="journeyHeading">Embarking on my journey as an SDE-II, Full-stack web developer</span>
					<p className="journeyText">
						<RiDoubleQuotesL />
						I started with a strong foundation in Java, HTML, CSS, JavaScript, and MySQL. As I progressed, I expanded my skill set to include Spring, Spring-Boot, MongoDB, SCSS, Nodejs, and ReactJs. My educational background provided me with the theoretical knowledge, while my work experience allowed me to apply this knowledge in real-world scenarios.
						<RiDoubleQuotesR />
					</p>
				</div>
				<p className="journeyOtherTxt">
					<div className="projectExperience">Project Experience</div>
					Each project, I undertook was a new learning experience, pushing me to explore new technologies and frameworks. I embraced challenges, viewing them as opportunities to grow and refine my skills. Today, I stand as a proficient developer, ready to take on new challenges and create innovative solutions. Over time, I accumulated a wealth of experience that has shaped me into I am today.<br />
					<SiNextra size="0.8rem" />My journey is a testament to my dedication and passion for web development. And I believe that every step I took, every challenge I overcame, has led me to where I am now. And I'm excited for what the future holds!
				</p>
			</div>
			<EducationExperience />
			<Skills />
			<ContactMe />
		</ >
	)
}

export default ExperiencePage;