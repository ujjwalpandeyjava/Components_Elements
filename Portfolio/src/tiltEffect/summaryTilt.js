import { Fragment, useEffect, useState } from "react";
// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
// import { FiGithub } from "react-icons/fi";
// import { PiLinkSimpleBold } from "react-icons/pi";
import VanillaTilt from "vanilla-tilt";
import EmailService from "../EmailService/EmailService";
import myPicture from '../images/1670752620885.jpg';
import './summaryTilt.css';
import SocialIcons from "../utility/SocialIcons";

export default function SummaryTilt(props) {
	useEffect(() => {	// It will call every time the component is called or refreshed
		const card = document.querySelector(".card");
		const buttons = document.querySelectorAll(".card-buttons button");
		const sections = document.querySelectorAll(".card-section");
		VanillaTilt.init(document.querySelectorAll(".card"), {	// https://micku7zu.github.io/vanilla-tilt.js/  <-- Documentation
			max: 20,
			speed: 300
		});
		/* card.addEventListener("tiltChange", () => {
		});
		card.addEventListener("mouseenter", (event) => {
			event.currentTarget.style.opacity = 1;
		});
		card.addEventListener("mouseleave", (event) => {
			// event.currentTarget.style.opacity = 0.5;
		}); */
		const handleSectionChange = e => {
			const targetSection = e.target.getAttribute("data-section");
			const section = document.querySelector(targetSection);	// #about	#experience		#contact
			card.setAttribute("data-state", targetSection);
			sections.forEach(s => s.classList.remove("is-active"));
			buttons.forEach(b => b.classList.remove("is-active"));
			e.target.classList.add("is-active");
			section.classList.add("is-active");
		};
		buttons.forEach(innerButton => {
			innerButton.addEventListener("click", handleSectionChange);
		});
	});

	const classesListOfClassList = {
		mainFrameClasses: ["card"]
	}

	const [emailModal, setEmailModal] = useState(false);
	const toggleEmailModal = () => {
		setEmailModal(!emailModal);
	}

	return (
		<Fragment >
			<div id="summarySection" className="parallelBackgroundImage bg-Image2">
				<h1 className="sectionHeading blueHeading">Quick Rundown</h1>
				<div className={classesListOfClassList.mainFrameClasses.join(" ")} data-state="#about" data-tilt >
					<div className="card-header">
						<div className="card-cover">
						</div>
						<img className="card-avatar"
							// src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
							src={myPicture}
							alt="avatar" />
						<h1 className="card-fullname">Ujjwal Pandey</h1>
						<h2 className="card-jobtitle">Java + ReactJS Full Stack Developer</h2>
					</div>
					<div className="card-main">
						<div className="card-section is-active" id="about">
							<div className="card-content">
								<div className="card-subtitle">ABOUT</div>
								<p className="card-desc">
									Committed to staying up-to-date with the latest technologies and trends to provide the best solutions, with a broad range of skills enabling me to handle everything.
									<br />
									<b>Skilled in both front-end and back-end web development.</b>
								</p>
							</div>
							<div className="card-social"><SocialIcons /></div>
						</div>
						<div className="card-section" id="experience_card">
							<div className="card-content">
								<div className="card-subtitle">WORK EXPERIENCE</div>
								<div className="card-timeline">
									<div className="card-item" data-year="2014">
										<div className="card-timeline-item-date">
											Aug-21 <br />
											Oct-21
										</div>
										<div className="card-timeline-item-detail">
											<div className="card-item-title">Front end Developer at <span>NIIT Developers</span></div>
											<div className="card-item-desc">Part-time, frontend developer while being a student at NIIT</div>
										</div>
									</div>
									<div className="card-item" data-year="2014">
										<div className="card-timeline-item-date">
											Oct-21 <br />
											Jan-22
										</div>
										<div className="card-timeline-item-detail">
											<div className="card-item-title">Java Developer at <span>NetCreativeMind Sol.</span></div>
											<div className="card-item-desc">API management and UI development</div>
										</div>
									</div>
									<div className="card-item" data-year="2014">
										<div className="card-timeline-item-date">
											Feb-22 <br />
											Present
										</div>
										<div className="card-timeline-item-detail">
											<div className="card-item-title">Full Stack Developer at <span>SafetyLabs</span></div>
											<div className="card-item-desc">Working with java and javascript, MySQL and MongoDB</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="card-section" id="contact">
							<div className="card-content">
								<div className="card-subtitle">CONTACT</div>
								<div className="card-contact-wrapper">
									<div className="card-contact">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
											<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
											<circle cx="12" cy="10" r="3" />
										</svg>
										Devli, New Delhi, Delhi
									</div>
									<div className="card-contact">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
											<path
												d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
										</svg>+91 8375-990-500
									</div>
									<div className="card-contact">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
											<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
											<path d="M22 6l-10 7L2 6" />
										</svg>
										{/* ujjwalpandey.aps@gmail.com */}
										<a href="mailto:ujjwalpandey.aps@gamil.com" target="_blank" rel="noopener noreferrer">ujjwalpandey.aps@gmail.com</a>
									</div>
									<button className="contact-me" onClick={() => setEmailModal(!emailModal)}>DIRECT MESSAGE</button>
								</div>
							</div>
						</div>
						<div className="card-buttons button">
							<button data-section="#about" className="is-active">ABOUT</button>
							<button data-section="#experience_card">EXPERIENCE</button>
							<button data-section="#contact">CONTACT</button>
						</div>
					</div>
				</div>
			</div>
			{emailModal && <EmailService person={{ name: 'Ujjwal Pandey', message: 'Contact me' }} emailModal={emailModal} onClick={toggleEmailModal} />}
		</Fragment >
	)
}