import Frag from "./frag";
import './frag.css';
import aboutImage from './images/ujjwalAvatar3.png';


function AboutSection() {
	return (
		<div id="aboutSection" className="parallelBackgroundImage bg-Image0">
			<h1 className="sectionHeading blueHeading">About me</h1>
			<div id="firstInAbout">
				<div><img src={aboutImage} alt="That's me" /></div>
				<div id="aboutMe">
					<div>
						<div>
							Hi, I'm Ujjwal Pandey <br />
							Graduate in: <span>GNIIT</span> <sub>(from<span> NIIT</span>),</sub> and <span>BCA</span> <sub>(from<span> IGNOU</span>)</sub>
							<br /><br />

							A highly skilled and passionate web developer with <span>over 2+ years</span> of experience in building innovative and user-friendly web applications using cutting-edge technologies.
							<br /><br />

							<span className="tech">I have successfully created responsive and scalable web applications with a variety of technologies, including HTML, CSS, JavaScript, Java, BootSpring, MySQL, MongoDB, and ReactJs.</span>
							<br /><br />

							Eagerly seeking opportunities to collaborate with great engineers and companies.
							<br /><br />

							<u><strong>Interest area:</strong></u> <i>Working with different technologies.</i>
						</div>
					</div>
					<div id="bars">
						<div><p>How good I am in?</p><hr /></div>
						<div className='group'>
							<p> <span>Full-Stack Web Development</span><span>99%</span></p>
							<section><Frag percent="100%" /></section>
						</div>
						<div className='group'>
							<p><span>Front-end Development</span><span>97%</span></p>
							<section><Frag percent="97%" /></section>
						</div>
						<div className='group'>
							<p><span>Back-end Development</span><span>85%</span></p>
							<section><Frag percent="85%" /></section>
						</div>
						<div className='group'>
							<p><span>ReactJs app Development</span><span>80%</span></p>
							<section><Frag percent="80%" /></section>
						</div>
						<div className='group'>
							<p><span>Competitive programming</span><span>60%</span></p>
							<section><Frag percent="60%" /></section>
						</div>
						<div className="group">
							<p style={{ color: '#5ff8e4' }}><span>Getting better everyday</span><span role="img" aria-label="wink emoji">😉</span></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default AboutSection;