
var interSectionObserver = new IntersectionObserver(allObserved => {
	allObserved.forEach(eachElement => {
		// will not work if the element is out of screen (more than 50 of view)
		let observeEle = eachElement.target.classList;
		if (eachElement.isIntersecting) {
			observeEle.add("show");
			if (observeEle.contains("fromLeft"))
				observeEle.add("toLeft");
			else if (observeEle.contains("fromRight"))
				observeEle.add("toRight");
			else if (observeEle.contains("fromTop"))
				observeEle.add("toTop");
			else if (observeEle.contains("fromBottom"))
				observeEle.add("toBottom");
		} else {
			observeEle.remove("show");
			if (observeEle.contains("fromLeft"))
				observeEle.remove("toLeft");
			else if (observeEle.contains("fromRight"))
				observeEle.remove("toRight");
			else if (observeEle.contains("fromTop"))
				observeEle.remove("toTop");
			else if (observeEle.contains("fromBottom"))
				observeEle.remove("toBottom");
		}
	})
});
var hiddenElements = document.querySelectorAll(".hide");
hiddenElements.forEach(ee => interSectionObserver.observe(ee));