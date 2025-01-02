import { useState } from "react";
import EmailService from "./EmailService/EmailService";
import contactPic from './images/contact.png';


export default function ContactMe() {
	const [emailModal, setEmailModal] = useState(false)
	const toggleEmailModal = () => setEmailModal(previous => !previous)


	return (
		<div id="contactMeSection">
			<h1 className="sectionHeading">Get In Touch <br /><sub><em>Let's talk about work</em></sub></h1>
			<div id="firstInContactMe">
				<div><img src={contactPic} alt="That's me with certificate" /></div>
				<div id="connect">
					<div className="connect-title">Contact through</div>
					<div className="connect-ways">
						<div>
							<div>
								<i className="fas fa-envelope"> </i>
								<a href="mailto:ujjwalpandey.aps@gamil.com"
									target="_blank" rel="noopener noreferrer"> Ujjwalpandey.aps@gmail.com</a>
							</div>
							<div>
								<i className="fas fa-phone-square-alt"></i>
								<a href="tel:+918375990500"> +91-8375-990-500</a>
							</div>
						</div>
						<div>
							<div><i className="fas fa-map-marker-alt"></i> Devli, South Delhi, New Delhi</div>
							<div>
								<i className="fab fa-linkedin"></i>
								<a href="https://www.linkedin.com/in/ujjwal-pandey-8bb562138/" target="_blank" rel="noopener noreferrer"> Ujjwal Pandey</a>
							</div>
						</div>
					</div>
					<div className="connect-directMail">
						<button className="contact-me" onClick={toggleEmailModal}>DIRECT MESSAGE</button>
						{emailModal && <EmailService person={{ name: 'Ujjwal Pandey', message: 'Contact me' }} emailModal={emailModal} onClick={() => toggleEmailModal} />}
					</div>
				</div>
			</div>
		</div>
	)
}