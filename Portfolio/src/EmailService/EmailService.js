import emailjs from '@emailjs/browser';
import { useRef } from "react";
import toast, { Toaster } from 'react-hot-toast';
import EmailServiceStyle from './EmailService.module.css';


export default function EmailService(props) {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		let notAcceptedValues = ['', undefined, " "];
		if (notAcceptedValues.includes(e.target.from_name.value)) {
			toast('Name cannot be empty',
				{
					icon: '🐼',
					style: {
						borderRadius: '10px',
						background: '#ff9966',
						color: 'black',
						padding: '1px'
					},
				}
			);
		} else if (notAcceptedValues.includes(e.target.user_email.value)) {
			toast("Please add email/contact number, to connect back",
				{
					icon: '🏢📧',
					style: {
						borderRadius: '10px',
						background: '#ff9966',
						color: 'white',
						padding: '1px'
					},
				}
			);
		} else if (notAcceptedValues.includes(e.target.message.value)) {
			toast('Please add discussion topic',
				{
					icon: '💬',
					style: {
						borderRadius: '10px',
						background: '#ff9966',
						color: 'black',
						padding: '1px'
					},
				}
			);
		} else {
			toast.promise(
				emailjs.send("service_xgcf3lg", "template_wsittxt", {
					from_name: e.target.from_name.value,
					user_email: e.target.user_email.value,
					company_name: e.target.company_name.value,
					message: e.target.message.value
				}, "fuTN9NgqZc0mVDzjh")
					.then(result => {
						setTimeout(() => {
							props.onClick()();	// bcz the function returns function.
						}, 200);
					}, (error) => {
						throw Error("Error: " + error.text);
					}),
				{
					loading: 'Sending message...',
					success: <b>Message sent successfully!</b>,
					error: <p>Unable to send, please mail at <br /> <b>ujjwalpandey.aps@gmail.com</b></p>,
				});
			e.target.reset();
		}
	};
	const inputFieldChanged = (event) => event.target.dataset.valued = event.target.value;



	return (
		<>
			<div className={EmailServiceStyle.coverFullScreen}>
				<div className={EmailServiceStyle.emailServiceSection}>
					<div className={EmailServiceStyle.emailService_header}>
						{/* <h2>Feel free, to drop message!</h2> */}
						<h1>Let's work together!</h1>
						<span className={EmailServiceStyle.closeButton} onClick={props.onClick()}> X </span>
					</div>
					<form ref={form} onSubmit={sendEmail}>
						<div>
							<div className={EmailServiceStyle.inputLabel}>Full Name <span className={EmailServiceStyle.required}>*</span></div>
							<input className={EmailServiceStyle.inputField} placeholder="First name + Last name" type="text" name="from_name" data-valued="false" onChange={inputFieldChanged} />
						</div>
						<div>
							<div className={EmailServiceStyle.inputLabel}>Email <span className={EmailServiceStyle.required}>*</span></div>
							<input className={EmailServiceStyle.inputField} placeholder="You will receive confirmation, and I will reply here" type="email" name="user_email" data-valued="false" onChange={inputFieldChanged} />
						</div>
						<div>
							<div className={EmailServiceStyle.inputLabel}>Company</div>
							<input className={EmailServiceStyle.inputField} placeholder="Org/personal work place" type="text" name="company_name" data-valued="false" onChange={inputFieldChanged} />
						</div>
						<div>
							<div className={EmailServiceStyle.inputLabel}>What would like to discuss? <span className={EmailServiceStyle.required}>*</span></div>
							<textarea className={EmailServiceStyle.inputField} rows="5" placeholder="Pandey ji, I am amazed by your skills, would like to invite you to join us for an interview..." name="message" data-valued="false" onChange={inputFieldChanged} />
						</div>
						<input type="submit" className={EmailServiceStyle.submitButton} value="Drop message" />
					</form>
				</div>
			</div>
			<Toaster position="bottom-right" reverseOrder={false} />
		</>
	)
}