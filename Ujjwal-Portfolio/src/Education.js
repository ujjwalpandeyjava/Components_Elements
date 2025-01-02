import { useState } from "react";
import educationPic from './images/ujjwalAvatarEducation.png';
import PreviewPDFs from "./previewPDFs";


export default function Education() {
	const [viewPreview, setViewPreview] = useState(false);


	return (
		<div id="experience">
			<h1 className="sectionHeading">Education Journey</h1>
			<div id="firstInEducation">
				<div><img src={educationPic} alt="That's me with certificate" /></div>
				<div id="aboutEducation">
					<div><h1>ACADEMIC</h1></div>
					<div><p><span>June, 2023 <span style={{ color: "yellow", fontWeight: "bolder", fontSize: "1.15em" }}>(PG)</span></span> <br />MCA<i> from Amity University</i></p></div>
					<div><p><span>Jan, 2019 - Oct, 2021 <span style={{ color: "yellow", fontWeight: "bolder", fontSize: "1.15em" }}>(Specialization)</span></span> <br />In Web Development,<br />GNIIT in Cloud and Mobile Web Software Engineering <i>from NIIT</i></p></div>
					<div><p><span>July, 2018 - June, 2021 <span style={{ color: "yellow", fontWeight: "bolder", fontSize: "1.15em" }}>(UG)</span></span> <br />BCA <i>from IGNOU</i> <sub>(Offline exams)</sub></p></div>
					<div><p><span>2017</span> <br />12th from CBSE</p></div>
					<div><p><span>2015</span> <br />10th from CBSE</p></div>
					<div><h1>Experience <sub>&</sub> Skills</h1></div>
					<div><p>Projects and Work demo<i> <sub><a style={{ "textDecoration": "none", "color": "white" }} title="Some are private, Contact me to check them out" href="https://github.com/ujjwalpandeyjava" target="_blank" rel="noopener noreferrer">(Chekout github)</a></sub></i></p></div>
					<div><p><span>Aug, 2021 - Sept, 2021</span> <br />Daily Brief Ambassador</p></div>
					<div><p><span>Oct, 2021 - Jan, 2022</span> <br />NetCreativeMind Solutions<i>(as Java Developer)</i></p></div>
					<div title="Works as Java and JavaScript Full-Stack developer"><p><span>Feb/2022-Present</span><br />Safety labs <i>(as SDE-II, Java and JavaScript Developer)</i></p></div>
					<div id="downloadCV" onClick={() => !viewPreview && setViewPreview(true)}>
						Download Resume <i className="fa-solid fa-download"></i>
					</div>
					{viewPreview ? < PreviewPDFs viewPreview={(x) => setViewPreview(x)} /> : ""}
				</div>
			</div>
		</div>
	)
}