import { FaGithub, FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { PiLinkSimpleBold } from "react-icons/pi";
import connectCSS from './ConnectView.module.css';

export default function ConnectView() {
	return (
		<div id={connectCSS.connectMain}>
			<div className={[connectCSS.socialIcons].join(" ")}>
				<div className={connectCSS.emptyTop}></div>
				<a rel="noopener noreferrer" target="_blank" href="https://github.com/ujjwalpandeyjava"><FaGithub color="black" size="1.3rem" /></a>
				<a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/ujjwal.pandey.1656"><FaFacebook color="black" size="1.3rem" /></a>
				{/* <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/Ujjwalp13341664"><FaXTwitter color="black" size="1.3rem" /></a> */}
				<a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/pandeyy_ujjwal"><FaInstagramSquare color="black" size="1.3rem" /></a>
				<a rel="noopener noreferrer" target="_blank" href="https://ujjwalpandeyjava.github.io/Links"><PiLinkSimpleBold color="black" size="1.3rem" /></a>
				<a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/ujjwal-pandey-8bb562138"><IoLogoLinkedin color="black" size="1.3rem" /></a>
				<div className={connectCSS.lineBottom}></div>
			</div>
			<div className={[connectCSS.contactEmail].join(" ")}>
				<div className={connectCSS.emptyTop}></div>
				<div className={connectCSS.e_mailContainer}>
					<div className={connectCSS.e_mail}>ujjwalpandey.aps@gmail.com</div>
				</div>
				<div className={connectCSS.lineBottom2}></div>
			</div>
		</div>
	)
}