import { useEffect, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import EmailService from "../EmailService/EmailService";
import '../frag.css';
import myPicture from '../images/1670752620885.jpg';
import '../tiltEffect/summaryTilt.css';


export default function SummaryTilt(props) {
	const [emailModal, setEmailModal] = useState(false);
	const toggleEmailModal = () => setEmailModal(!emailModal);

	useEffect(() => {
		const card = document.querySelector(".card");
		const buttons = document.querySelectorAll(".card-buttons button");
		const sections = document.querySelectorAll(".card-section");
		// https://micku7zu.github.io/vanilla-tilt.js/  <-- Documentation
		VanillaTilt.init(document.querySelectorAll(".card"), { max: 20, speed: 300 });

		const handleSectionChange = e => {
			const targetSection = e.target.getAttribute("data-section");
			const section = document.querySelector(targetSection);

			card.setAttribute("data-state", targetSection);
			sections.forEach(s => s.classList.remove("is-active"));
			buttons.forEach(b => b.classList.remove("is-active"));

			e.target.classList.add("is-active");
			section.classList.add("is-active");
		};
		buttons.forEach(innerButton => { innerButton.addEventListener("click", handleSectionChange) });
	});


	return (
		<>
			<div id="summarySection" className="parallelBackgroundImage bg-Image2">
				<h1 className="sectionHeading blueHeading">Quick Rundown</h1>
				<div className={"card"} data-state="#about" data-tilt >
					<div className="card-header">
						<div className="card-cover">
						</div>
						<img className="card-avatar"
							src={myPicture}
							alt="avatar" />
						<h1 className="card-fullname">Ujjwal Pandey</h1>
						<h2 className="card-jobtitle">Java and JavaScript Developer</h2>
					</div>
					<div className="card-main">
						<div className="card-section is-active" id="about">
							<div className="card-content">
								<div className="card-subtitle">ABOUT</div>
								<p className="card-desc">
									Committed to staying up-to-date with the latest technologies and trends to provide the best solutions, with a broad range of skills enabling me to handle everything.
									<br />
									<b>Expertise in both front-end and back-end development.</b>
								</p>
							</div>
							<div className="card-social">
								<a href="https://www.facebook.com/ujjwal.pandey.1656">
									<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" />
									</svg>
								</a>
								<a href="https://twitter.com/Ujjwalp13341664">
									<i className="fa-brands fa-x-twitter"></i>
								</a>
								<a href="https://www.instagram.com/pandey.ujjwalpandey/">
									<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
										<path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
										<path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
										<path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" />
									</svg>
								</a>
								<a href="https://www.linkedin.com/in/ujjwal-pandey-8bb562138/">
									<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
									</svg>
								</a>
							</div>
						</div>
						<div className="card-section" id="experience_card">
							<div className="card-content">
								<div className="card-subtitle">WORK EXPERIENCE</div>
								<div className="card-timeline">
									<div className="card-item" data-year="2014">
										<div className="card-timeline-item-date">
											Aug-21 <br />
											Sept-21
										</div>
										<div className="card-timeline-item-detail">
											<div className="card-item-title">App ambassador at <span>Daily Brief</span></div>
											<div className="card-item-desc">Internship</div>
										</div>
									</div>
									<div className="card-item" data-year="2014">
										<div className="card-timeline-item-date">
											Oct-21 <br />
											Jan-22
										</div>
										<div className="card-timeline-item-detail">
											<div className="card-item-title">Java Developer at <span>NetCreativeMind Sol.</span></div>
											<div className="card-item-desc">Backend, Frontend, Management</div>
										</div>
									</div>
									<div className="card-item" data-year="2014">
										<div className="card-timeline-item-date">
											Feb-22 <br />
											Present
										</div>
										<div className="card-timeline-item-detail">
											<div className="card-item-title">Full Stack Developer at <span>SafetyLabs</span></div>
											<div className="card-item-desc">Front-end, Back-end, Salesforce, and <br /> Team-lead (without promotion)</div>
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
										<a href="mailto:ujjwalpandey.aps@gamil.com" target="_blank" rel="noopener noreferrer">ujjwalpandey.aps@gmail.com</a>
									</div>
									<button className="contact-me" onClick={toggleEmailModal}>DIRECT MESSAGE</button>
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
			{emailModal && <EmailService person={{ name: 'Ujjwal Pandey', message: 'Contact me' }} emailModal={emailModal} onClick={() => toggleEmailModal} />}
		</>
	)
}