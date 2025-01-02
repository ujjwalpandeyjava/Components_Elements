import { useState } from "react";
import "./ScrollDown.scss";

function ScrollDown() {
	let [scrollerDisplaying, setScrollerDisplaying] = useState("flex");
	window.onscroll = () => {
		let currentScrollPos = window.pageYOffset;
		if (currentScrollPos > 120 && scrollerDisplaying === "flex")
			setScrollerDisplaying("none")
		else if (currentScrollPos < 120 && scrollerDisplaying === "none")
			setScrollerDisplaying("flex")
	}
	return (
		<section id="scrollDown" style={{ "display": scrollerDisplaying }} onClick={() => window.scrollBy(0, 550)}>
			<p>Scroll Down</p>
			<div><span>&bull;</span></div>
		</section>
	)
}

function ScrollToTop() {
	return (
		<div id="scrollToTop" onClick={() => { }}>Scroll To Top</div>
	)
}
export { ScrollDown, ScrollToTop };
