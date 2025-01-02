import { Fragment } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { PiLinkSimpleBold } from "react-icons/pi";
import siCSS from './SocialIcons.module.css'

export default function SocialIcons(props) {
	return (
		<Fragment>
			<div className={siCSS.socialIcons}>
				<div className={siCSS.icon}>
					<div className={siCSS.tooltip}>Github</div>
					<a href="https://github.com/ujjwalpandeyjava" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
				</div>
				<div className={siCSS.icon}>
					<div className={siCSS.tooltip}>Facebook</div>
					<a href="https://www.facebook.com/ujjwal.pandey.1656" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
				</div>
				{/* <div className={siCSS.icon}>
					<div className={siCSS.tooltip}>Twitter</div>
					<a href="https://twitter.com/Ujjwalp13341664" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
				</div> */}
				<div className={siCSS.icon}>
					<div className={siCSS.tooltip}>Instagram</div>
					<a href="https://www.instagram.com/pandeyy_ujjwal/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
				</div>
				<div className={siCSS.icon}>
					<div className={siCSS.tooltip}>LinkedIn</div>
					<a href="https://www.linkedin.com/in/ujjwal-pandey-8bb562138/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
				</div>
				<div className={siCSS.icon}>
					<div className={siCSS.tooltip}>Connections</div>
					<a href="https://ujjwalpandeyjava.github.io/Links/" target="_blank" rel="noopener noreferrer"><PiLinkSimpleBold /></a>
				</div>
			</div>
		</Fragment>
	)
}