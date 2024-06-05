var listOfElementsAndTimeSpent = {};
var screenTimeObserver = new IntersectionObserver(allObserved => {
	allObserved.forEach(eachEl => {
		if (eachEl.isIntersecting)
			if (listOfElementsAndTimeSpent[eachEl.target.id])
				listOfElementsAndTimeSpent[eachEl.target.id].visitTime += 1;
			else
				listOfElementsAndTimeSpent[eachEl.target.id] = { entryTime: Date.now(), totalTime: 0, visitTime: 1 }
		else {
			if (listOfElementsAndTimeSpent[eachEl.target.id]) {
				listOfElementsAndTimeSpent[eachEl.target.id].totalTime = Date.now() - listOfElementsAndTimeSpent[eachEl.target.id].entryTime
				console.log(JSON.stringify({ id: eachEl.target.id, time: listOfElementsAndTimeSpent[eachEl.target.id] }), "in ms");
			}
		}
	})
})
var screenTimeObserverEle = document.querySelectorAll('.timeSpent');
screenTimeObserverEle.forEach(eachEl => screenTimeObserver.observe(eachEl));
