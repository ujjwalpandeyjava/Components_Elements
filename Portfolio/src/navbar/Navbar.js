import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { FaWindowClose } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import ujjwalIcon from '../images/ujjwalAvatar3.png';
import navbarCSS from './Navbar.module.css';


export default function Navbar() {
	const [floatNav, setFloatNav] = useState(false);
	const [showSmallScreenMenu, setShowSmallScreenMenu] = useState(false);

	useEffect(() => {
		const handleScroll = () => { setFloatNav(window.scrollY > 80) }

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, []);

	const currentUrl = useLocation().pathname;
	const isActive = (event, passedUrl) => {
		if (currentUrl === passedUrl)
			toast("Already at " + event.currentTarget.textContent, {
				icon: '📃🕸️',
				style: {
					borderRadius: '10px',
					background: '#ff9966',
					color: 'white',
					padding: '1px'
				}
			}
			);
	}

	return (
		<div className={[navbarCSS.navbar, (floatNav) ? navbarCSS.floatingNav : ""].join(" ")} id={navbarCSS.navbar}>
			<div className={navbarCSS.noHamburger}>
				<Link relative='path' to="" onClick={(event) => isActive(event, "/")}>Home</Link>
				<Link relative='path' to={`experience`} onClick={(event) => isActive(event, "/experience")}>Experience</Link>
				<Link relative='path' to={`skills_projects`} onClick={(event) => isActive(event, "/skills_projects")}>ShowCase</Link>
				<Link relative='path' to={`contact`} onClick={(event) => isActive(event, "/contact")}>Contact</Link>
			</div>
			<div className={navbarCSS.hamburger}>
				{showSmallScreenMenu ?
					<div className={[navbarCSS.sidebar, navbarCSS.move].join(" ")} onClick={() => setShowSmallScreenMenu(false)}>
						<Link relative='path' to="" onClick={(event) => isActive(event, "/")}>Home</Link>
						<Link relative='path' to={`experience`} onClick={(event) => isActive(event, "/experience")}>Experience</Link>
						<Link relative='path' to={`skills_projects`} onClick={(event) => isActive(event, "/skills_projects")}>ShowCase</Link>
						<Link relative='path' to={`contact`} onClick={(event) => isActive(event, "/contact")}>Contact</Link>
					</div> : null}
				{showSmallScreenMenu ? <FaWindowClose size={30} onClick={() => setShowSmallScreenMenu(false)} /> : <BiSolidBarChartAlt2 className={navbarCSS.rotate90} size={30} onClick={() => setShowSmallScreenMenu(true)} />}
			</div>
			<Link to="" onClick={(event) => isActive(event, "/")}><img id={navbarCSS.navIcon} src={ujjwalIcon} alt="It's me, on home" /></Link>
		</div>
	)
}