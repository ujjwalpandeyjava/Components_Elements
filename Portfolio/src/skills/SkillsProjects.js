import useDocumentTitle from '../assets/useDocumentTitle';
import ContactMe from '../contact/contactMe';
import ProjectsByMe from './ProjectsByMe';
import Skills from './Skills';


function SkillsProjects() {
	useDocumentTitle("Project and Skills")


	return (
		<>
			<ProjectsByMe />
			<Skills />
			<ContactMe />
		</>
	)
}

export default SkillsProjects