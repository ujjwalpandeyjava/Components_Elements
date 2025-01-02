import { useState } from "react";
import { FaRegAddressCard } from "react-icons/fa";
import { IoCall, IoLogoLinkedin, IoMail } from "react-icons/io5";
import EmailService from "../EmailService/EmailService";
import contactPic from '../images/contact.png';
import './contactMe.scss';
import { RxOpenInNewWindow } from "react-icons/rx";



export default function ContactMe() {
	const [emailModal, setEmailModal] = useState(false);
	const toggleEmailModal = () => { setEmailModal(previous => !previous); }

	return (
		<div id="contactMeSection">
			<h2 className="sectionHeading">Let's Discuss Your Needs</h2>
			<div id="firstInContactMe">
				<div><img src={contactPic} alt="That's me with certificate" /></div>
				<div id="connect">
					<div className="connect-title">Contact through</div>
					<div className="connect-ways">
						<div>
							<div>
								<div>
									<IoMail />
									<a href="mailto:ujjwalpandey.aps@gamil.com" target="_blank" rel="noopener noreferrer"> Ujjwalpandey.aps@gmail.com</a>
								</div>
								<a href="mailto:ujjwalpandey.aps@gamil.com" target="_blank" rel="noopener noreferrer"><RxOpenInNewWindow /></a>
							</div>
							<div>
								<div>
									<IoCall />
									<a href="tel:+918375990500"> +91-8375-990-500</a>
								</div>
								<a href="tel:+918375990500"><RxOpenInNewWindow /></a>

							</div>
						</div>
						<div>
							<div>
								<div>
									<IoLogoLinkedin />
									<a href="https://www.linkedin.com/in/ujjwal-pandey-8bb562138/" target="_blank" rel="noopener noreferrer"> Ujjwal Pandey</a>
								</div>
								<a href="https://www.linkedin.com/in/ujjwal-pandey-8bb562138/" target="_blank" rel="noopener noreferrer"> <RxOpenInNewWindow /></a>
							</div>
							<address>
								<div>
									<FaRegAddressCard /> <span>Devli, South Delhi, New Delhi</span>
								</div>
								{/* <RxOpenInNewWindow /> */}
							</address>
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