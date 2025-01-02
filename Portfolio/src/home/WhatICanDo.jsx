import frontEnd from "../images/whatICanDo/FrontEnd.png";
import backend from "../images/whatICanDo/FrontEnd2.png";
import dataBase from "../images/whatICanDo/buildServer.png";
import jsAll from "../images/whatICanDo/buildServer2.png";
import whatICanDoCSS from './WhatICanDo.module.css';

function WhatICanDo() {
	return (
		<div className={whatICanDoCSS.abilitiesSection}>
			<h1>My proficiency</h1>
			<div className={whatICanDoCSS.abilities}>
				<div className={whatICanDoCSS.eachAbilities}>
					<img src={backend} alt="Server-side coding" />
					<div>Back-end</div>
					<p>The sole of a web/portal is its server, I do server-side with the most intelligent language and framework to provide the best industry-standard codes.
						<br />Java, Spring MVC, Spring boot, Hibernate, MongoDB, MySQL</p>
				</div>
				<div className={whatICanDoCSS.eachAbilities}>
					<img src={frontEnd} alt="Client-side coding" />
					<div>Front-end</div>
					<p>It is very important to make the user feel good and immersive while interacting with the page.
						I develop mind-blowing UI/UX with best practices code of HTML, CSS, JS, ReactJs, SCSS, and libraries.</p>
				</div>
				<div className={whatICanDoCSS.eachAbilities}>
					<img src={dataBase} alt="Database development coding" />
					<div>Database management</div>
					<p>Maintaining and structuring the data is one of the most crucial tasks a backend developer does,
						Giving me the upper hand in comparison to others as of my experience and high-level technologies.
					</p>
				</div>
				<div className={whatICanDoCSS.eachAbilities}>
					<img src={jsAll} alt="Backend coding with js" />
					<div>JavaScript For everything</div>
					<p>In this decade, building web from frontend to backend everything is possible in JavaScript,
						and I am proficient in building full stack web with only JS, including NodeJs, Express, ReactJs, MongoDB, MySQL, and required.</p>
				</div>
			</div>
		</div>
	)
}

export default WhatICanDo