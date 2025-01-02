import { useState } from "react";
import { CgGym } from "react-icons/cg";
import { FaCode, FaDownload, FaHeadphones } from "react-icons/fa";
import { GiDistraction, GiTakeMyMoney } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";
import { MdMovieCreation } from "react-icons/md";
import PreviewPDFs from "../contact/resume/previewPDFs";
import aboutAvatar from "../images/ujjwalAvatar3.png";
import aboutMeCSS from './AboutMe.module.css';


export default function AboutMe() {
	const [viewPreview, setViewPreview] = useState(false);
	const toggleViewPreview = () => setViewPreview(old => !old)

	return (
		<div className={aboutMeCSS.aboutMeCSS}>
			<div className={aboutMeCSS.aboutMeHeading}>About Me</div>
			<div className={aboutMeCSS.paperIcon}><img src={aboutAvatar} alt="Me telling details" /></div>
			<div className={aboutMeCSS.someDetails}>
				<span>Hello! I'm Ujjwal,</span> I am an SDE-II - Full Stack Developer (Java & JavaScript) at Safety Labs. <b>I hold 3-year Specialization certificate</b> in cloud and mobile software engineering with full stack web development <i>(GNIIT from NIIT)</i>, Graduate in BCA, and pursuing MCA from <i>(Amity University online)</i>.<br />
				I am proficient in Java and JavaScript technologies with over 3 years of hands-on experience.
			</div>
			<div className={aboutMeCSS.otherDetails}>
				<div className={aboutMeCSS.personalDetails}>
					<h2 >Personal Details</h2>
					<table>
						<thead>
							<tr>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Phone</td>
								<td>+91 8375990500</td>
							</tr>
							<tr>
								<td>Email</td>
								<td>ujjwapandey.aps@gmail.com</td>
							</tr>
							<tr>
								<td>BirthDate</td>
								<td>31 May 1999</td>
							</tr>
							<tr>
								<td>Address</td>
								<td>Devoli, New Delhi, India, 110080</td>
							</tr>
							<tr>
								<td>Languages</td>
								<td>Hindi | English</td>
							</tr>
							<tr>
								<td>Job Status</td>
								<td>Working at Safety Labs</td>
							</tr>
							<tr>
								<td>Job Profile</td>
								<td>SDE II, Full Stack Developer <u style={{ textDecoration: "underline dotted", fontStyle: 'italic' }}>Java & JavaScript</u></td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className={aboutMeCSS.myInterest}>
					<h2>My Interests</h2>
					<div className={aboutMeCSS.myInterestBlocks}>
						<div className={aboutMeCSS.eachInterest}>
							<FaCode size="2em" />
							<div>Code</div>
						</div>
						<div className={aboutMeCSS.eachInterest}>
							<IoGameController size="2em" />
							<div>Game</div>
						</div>
						<div className={aboutMeCSS.eachInterest}>
							<FaHeadphones size="2em" />
							<div>Music</div>
						</div>
						<div className={aboutMeCSS.eachInterest}>
							<MdMovieCreation size="2em" />
							<div>Cinema</div>
						</div>
						<div className={aboutMeCSS.eachInterest}>
							<GiTakeMyMoney size="2em" />
							<div>Money</div>
						</div>
						<div className={aboutMeCSS.eachInterest}>
							<GiDistraction size="2em" />
							<div>Anime</div>
						</div>
						<div className={aboutMeCSS.eachInterest}>
							<CgGym size="2em" />
							<div>Gym</div>
						</div>
					</div>
				</div>
			</div>

			<button className={aboutMeCSS.resumeDownload} onClick={toggleViewPreview}>Download CV <FaDownload /></button>
			{viewPreview && <PreviewPDFs close={toggleViewPreview} />}
		</div>
	)
}