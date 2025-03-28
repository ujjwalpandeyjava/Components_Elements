function isTouchDevice() {
	try {
		//We try to create Touch Event (it would fail for desktops and throw error)
		document.createEvent("TouchEvent");
		return true;
	} catch (e) {
		return false;
	}
}

let div = document.getElementById("moveDiv");
let title = document.getElementById("colorChangeArea");

let x = 0;
let y = 9;
const move = (e) => {
	// Touch screens (Error thrown when user doesn't move his finger)
	try {
		// PageX and PageY return the position of clients cursor from the top left of screen
		x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
		y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
	} catch (error) { }
	//Set left and top of div based on mouse position
	div.style.left = x + "px";
	div.style.top = y + "px";
	const rect = title.getBoundingClientRect();
	if (x > rect.left && x < rect.right && y > rect.top && y < rect.bottom) {
		div.style.width = 3 + "em";
		div.style.height = 3 + "em";
	} else {
		div.style.width = 0 + "em";
		div.style.height = 0 + "em";
	}
};

//For mouse
document.addEventListener("mousemove", (e) => { move(e); });
//For touch
document.addEventListener("touchmove", (e) => { move(e); });