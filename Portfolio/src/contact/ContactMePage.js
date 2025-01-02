import React from 'react';
import useDocumentTitle from '../assets/useDocumentTitle';
import ContactMe from './contactMe';
import connectImg from './doItTogether.svg';

function ContactMePage() {
	useDocumentTitle("Contact with Ujjwal Pandey")
	
	
	return (
		<div>
			<img src={connectImg} style={{ maxHeight: "45vh", margin: 'auto', display: 'block' }} alt='Connect me' />
			{/* <SocialIcons /> */}
			<ContactMe />
		</div>
	)
}

export default ContactMePage;