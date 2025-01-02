import Iframe from "react-iframe";
import projectsPic from './images/projectPic.png';
import WorkingLanguages from './workingTechs/workingLanguages';


export default function WorkExample() {
	return (
		<div id="skills">
			<h1 className="sectionHeading">Proficiencies & Talents</h1>
			<div id="firstInExamples">
				<div><img src={projectsPic} alt="Me with certificate" /></div>
				<WorkingLanguages />
				<div id="aboutExamples" className='container' >
					<h2 id="workH3">Work Examples</h2>
					<Iframe src="https://ujjwalpandeyjava.github.io/Links/examples.html" title="Projects by me" width="100%" height="600" ></Iframe>
				</div>
			</div>
		</div>
	)
}