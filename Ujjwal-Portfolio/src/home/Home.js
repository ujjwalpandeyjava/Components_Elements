import { useEffect, useState } from 'react';
import ImageCarousel from '../imageCarousel/ImageCarousel';
import myPicture from '../images/no-bg-UjjwalPandey.png';
import SocialIcons from '../socialIcons';


const displayOption = {
	flex: "flex",
	none: "none",
}
function Home() {
	const [scrollerDisplaying, setScrollerDisplaying] = useState(displayOption.flex)

	useEffect(() => {
		const handleScroll = () => {
			let currentScrollPos = window.pageYOffset;
			if (currentScrollPos > 120 && scrollerDisplaying === displayOption.flex) {
				setScrollerDisplaying(displayOption.none)
			} else if (currentScrollPos < 120 && scrollerDisplaying === displayOption.none) {
				setScrollerDisplaying(displayOption.flex)
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [scrollerDisplaying]);


	return (
		<div id="home" className="home">
			<div className="whoIAm">
				<div className="name">Who I AM?</div>
				<div className="wrapper">
					<div className="static-txt">I am a &#9;</div>
					<ul className="dynamic-texts">
						<li><span>Java Developer</span></li>
						<li><span>React Developer</span></li>
						<li><span>😉 Full-Stack Dev.</span></li>
					</ul>
				</div>
				<SocialIcons />
			</div>
			<div className="whoIamPic">
				<img src={myPicture} alt="It me Ujjwal Pandey" />
				<ImageCarousel />
			</div>
			<section id="scroller" style={{ "display": scrollerDisplaying }} onClick={() => window.scrollBy(0, 550)}>
				<p>Scroll Down</p>
				<div><span>&bull;</span></div>
			</section>
		</div>
	)
}
export default Home;