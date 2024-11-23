let canvas = document.getElementById("scratch");
let context = canvas.getContext("2d");

const init = () => {
	let gradientColor = context.createLinearGradient(0, 0, 135, 135);
	gradientColor.addColorStop(0, "#c3a3f1");
	gradientColor.addColorStop(1, "#6414e9");
	context.fillStyle = gradientColor;
	context.fillRect(0, 0, 200, 200);
};

let mouseX = 0;
let mouseY = 0;
let isDragged = false;

let events = {
	mouse: {
		down: "mousedown",
		move: "mousemove",
		up: "mouseup",
	},
	touch: {
		down: "touchstart",
		move: "touchmove",
		up: "touchend",
	},
};

let deviceType = "";

// Detect touch device
const isTouchDevice = () => {
	try {
		document.createEvent("TouchEvent");
		deviceType = "touch";
		return true;
	} catch (e) {
		deviceType = "mouse";
		return false;
	}
};

let rectLeft = canvas.getBoundingClientRect().left;
let rectTop = canvas.getBoundingClientRect().top;

// Get exact x and y position
const getXY = (e) => {
	mouseX = (!isTouchDevice() ? e.pageX : e.touches[0].pageX) - rectLeft;
	mouseY = (!isTouchDevice() ? e.pageY : e.touches[0].pageY) - rectTop;
};

isTouchDevice();

canvas.addEventListener(events[deviceType].down, (event) => {
	isDragged = true;
	getXY(event);
	scratch(mouseX, mouseY);
});

canvas.addEventListener(events[deviceType].move, (event) => {
	if (!isTouchDevice()) {
		event.preventDefault();
	}
	if (isDragged) {
		getXY(event);
		scratch(mouseX, mouseY);
		checkScratchProgress();
	}
});

canvas.addEventListener(events[deviceType].up, () => {
	isDragged = false;
});

canvas.addEventListener("mouseleave", () => {
	isDragged = false;
});

const scratch = (x, y) => {
	context.globalCompositeOperation = "destination-out";
	context.beginPath();
	context.arc(x, y, 12, 0, 2 * Math.PI);
	context.fill();
};

// Check the scratch progress
const checkScratchProgress = () => {
	const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
	let scratchedPixels = 0;
	for (let i = 3; i < imageData.data.length; i += 4)
		if (imageData.data[i] === 0) scratchedPixels++;

	const totalPixels = canvas.width * canvas.height;
	const scratchedPercentage = (scratchedPixels / totalPixels) * 100;
	if (scratchedPercentage > 55)
		revealContent();
};

// Reveal the content by clearing the canvas
const revealContent = () => {
	context.clearRect(0, 0, canvas.width, canvas.height);
	canvas.style.pointerEvents = "none"; // Disable further scratching
};

// Initialize the scratch card
window.onload = init();
