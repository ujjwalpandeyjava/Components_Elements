import { FaAws, FaSalesforce } from "react-icons/fa6";
import { SiJquery } from "react-icons/si";
import { useEffect } from 'react';
import { FaSitemap } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPostman } from "react-icons/si";

import { BiLogoSpringBoot } from "react-icons/bi";
import { FaAngleDown, FaAngleUp, FaGithub, FaNode } from "react-icons/fa";
import { FaJava, FaReact } from "react-icons/fa6";
import { GrJava, GrMysql } from "react-icons/gr";
import { SiHibernate, SiMongodb, SiSpringboot } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { VscSymbolInterface } from "react-icons/vsc";
import eachSkills from './eachSkills.module.css';




export default function Skills() {
	const scrollHeight = 200
	useEffect(() => {
		document.documentElement.style.setProperty('--eachSkillHeightWidth', scrollHeight + 'px');
	}, [])

	const scrollSkills = (scrollTo) => {
		let container = document.getElementById('skillShowCase');
		if (scrollTo === 0)
			container.scrollTop -= scrollHeight;
		else {
			container.scrollTop += scrollHeight;
			if (container.scrollTop > container.scrollHeight - container.clientHeight)
				container.scrollTop = container.scrollHeight - container.clientHeight;
		}
	}
	return (
		<div className={eachSkills.skillSection}>
			Services
			<div className={eachSkills.heading}>
				Skill-Set
				<div className={eachSkills.underline}></div>
			</div>
			<div className={eachSkills.skillShowCase}>
				<div id='skillShowCase' className={eachSkills.allSkills}>
					<div className={eachSkills.eachSkill}>
						<FaJava className={eachSkills.skillIcon} />
						<div>Java</div>
						<div className={eachSkills.eachSkillDescription}>Object Oriented Programming language used to write the logic for the applications for me server and JSP.</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<GrJava className={eachSkills.skillIcon} />
						<div>Advanced Java</div>
						<div className={eachSkills.eachSkillDescription}>Used to write backend-business logic with the power of Java, allowing us to implement several protocols on the base of API properties & requirements.</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<GrMysql className={eachSkills.skillIcon} />
						<div>MySQL</div>
						<div className={eachSkills.eachSkillDescription}>I leverage MySQL as my primary database, employing structured queries to efficiently store and manage data, ensuring robust data management in my projects.</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<SiMongodb className={eachSkills.skillIcon} />
						<div>MongoDB</div>
						<div className={eachSkills.eachSkillDescription}>I proficiently utilize MongoDB as my NoSQL secondary database, crafting queries in Java through Spring JPA repositories and directly in JavaScript for seamless data management.</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<SiHibernate className={eachSkills.skillIcon} />
						<div>Hibernate</div>
						<div className={eachSkills.eachSkillDescription}>Hibernate simplifies SQL interactions by enabling Java-based queries with POJOs. It seamlessly maps Java objects to database tables, enhancing simplicity in data handling.</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<BiLogoSpringBoot className={eachSkills.skillIcon} />
						<div>Spring</div>
						<div className={eachSkills.eachSkillDescription}>I choose the Spring framework for its robust and all-condition module availability to simplify Java development, and showcase expertise in enhancing server capabilities effectively.</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<SiSpringboot className={eachSkills.skillIcon} />
						<div>Spring Boot</div>
						<div className={eachSkills.eachSkillDescription}>I choose Spring-Boot to rapid the development of spring applications and overcome the limitations of the spring framework.</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<FaSitemap className={eachSkills.skillIcon} />
						<div>REST APIs</div>
						<div className={eachSkills.eachSkillDescription}>A REST API is an application programming interface that allows interaction with RESTful web services, with any supported language.</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<FaGithub className={eachSkills.skillIcon} />
						<div>GitHub</div>
						<div className={eachSkills.eachSkillDescription}>Version control GitHub is used to track the history of code changes, and let multiple developers work asynchronously.</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<VscSymbolInterface className={eachSkills.skillIcon} />
						<div>HTML, CSS, SCSS</div>
						<div className={eachSkills.eachSkillDescription}>The core of any front-end technology, I have mastered even the minute details and keep myself updated.</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<TbBrandJavascript className={eachSkills.skillIcon} />
						<div>JavaScript</div>
						<div className={eachSkills.eachSkillDescription}>The All rounder, allowing me to code anything and everything in one language, I rank myself 9.5/10 in JS.</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<SiJquery className={eachSkills.skillIcon} />
						<div>jQuery</div>
						<div className={eachSkills.eachSkillDescription}>Simplified JavaScript library to fasten up the JavaScript work.</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<FaNode className={eachSkills.skillIcon} />
						<div>Nodejs</div>
						<div className={eachSkills.eachSkillDescription}>The runtime environment is used for all kinds of applications built on JavaScript.</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<SiExpress className={eachSkills.skillIcon} />
						<div>Express</div>
						<div className={eachSkills.eachSkillDescription}>I used Express.js a Node.js framework to simplify the development of web server APIs and add helpful features.</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<FaReact className={eachSkills.skillIcon} />
						<div>ReactJs</div>
						<div className={eachSkills.eachSkillDescription}>My mastery of SPA technology ReactJs with 2 years of experience gives me the ability to write class & function-based components to create Single Page Frontend Applications, with the help of JS and NodeJS.</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<FaSalesforce className={eachSkills.skillIcon} />
						<div>Salesforce</div>
						<div className={eachSkills.eachSkillDescription}>I have worked with the Salesforce team to develop and deploy custom application on there platform.</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<SiPostman className={eachSkills.skillIcon} />
						<div>Postman</div>
						<div className={eachSkills.eachSkillDescription}>I always use it to know how my API is behaving and performing, Postman is a tool for building, testing, and modifying APIs, simplifying API development.</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<FaAws className={eachSkills.skillIcon} />
						<div>AWS</div>
						<div className={eachSkills.eachSkillDescription}>Amazon Web Services for all cloud stuff.</div>
					</div>
				</div>
				<div className={eachSkills.previousNextAction}>
					<div className={eachSkills.previousSkill} onClick={() => scrollSkills(0)}><FaAngleUp size="1.75em" /></div>
					<div className={eachSkills.nextSkill} onClick={() => scrollSkills(1)}><FaAngleDown size="1.75em" /></div>
				</div>
			</div>
		</div>
	)
};