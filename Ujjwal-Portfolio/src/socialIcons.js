import  { Fragment } from "react";


export default function SocialIcons(props) {
	return (
		<Fragment>
			<div className="socialIcons">
				<div className="icon">
					<div className="tooltip"><a href="https://www.facebook.com/ujjwal.pandey.1656" target="_blank"  rel="noopener noreferrer">Facebook</a></div>
					<span><a href="https://ujjwalpandeyjava.github.io/Links/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></span>
				</div>
				<div className="icon">
					<div className="tooltip"><a href="https://twitter.com/Ujjwalp13341664" target="_blank" rel="noopener noreferrer">Twitter</a></div>
					<span><a href="https://ujjwalpandeyjava.github.io/Links/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a></span>
				</div>
				<div className="icon">
					<div className="tooltip"><a href="https://www.linkedin.com/in/ujjwal-pandey-8bb562138/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
					<span><a href="https://ujjwalpandeyjava.github.io/Links/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></span>
				</div>
				<div className="icon">
					<div className="tooltip"><a href="https://www.instagram.com/pandey.ujjwalpandey/" target="_blank" rel="noopener noreferrer">Instagram</a></div>
					<span><a href="https://ujjwalpandeyjava.github.io/Links/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></span>
				</div>
				<div className="icon">
					<div className="tooltip"><a href="https://github.com/ujjwalpandeyjava" target="_blank" rel="noopener noreferrer">Github</a></div>
					<span><a href="https://ujjwalpandeyjava.github.io/Links/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></span>
				</div>
			</div>
		</Fragment>
	)
}