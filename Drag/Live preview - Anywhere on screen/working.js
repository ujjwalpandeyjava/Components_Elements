var container = document.querySelector("#container");
// var dragItem = document.querySelector("#item>.header");
var dragItem = document.querySelector("#item");

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

['touchstart', 'mousedown'].forEach(evt => container.addEventListener(evt, dragStart, false));
['touchend', 'mouseup'].forEach(evt => container.addEventListener(evt, dragEnd, false));
['touchmove', 'mousemove'].forEach(evt => container.addEventListener(evt, drag, false));

function dragStart(event) {
	console.log(event.target.classList.contains("header"));
	if (event.target.classList.contains("header")) {
		if (event.type === "touchstart") {
			initialX = event.touches[0].clientX - xOffset;
			initialY = event.touches[0].clientY - yOffset;
		} else {
			initialX = event.clientX - xOffset;
			initialY = event.clientY - yOffset;
		}

		// if (event.target === dragItem) {
		active = true;
		// }
	}
}

function dragEnd() {
	initialX = currentX;
	initialY = currentY;

	active = false;
}

function drag(event) {
	if (active) {
		event.preventDefault();

		if (event.type === "touchmove") {
			currentX = event.touches[0].clientX - initialX;
			currentY = event.touches[0].clientY - initialY;
		} else {
			currentX = event.clientX - initialX;
			currentY = event.clientY - initialY;
		}

		xOffset = currentX;
		yOffset = currentY;
		dragItem.style.transform = "translate3d(" + currentX + "px, " + currentY + "px, 0)";
	}
}
function ses(params) {
	console.log("ee");
}