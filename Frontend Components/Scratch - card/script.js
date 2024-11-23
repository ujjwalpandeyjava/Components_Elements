const canvas = document.getElementById("scratchCanvas");
const ctx = canvas.getContext("2d");
const scratchArea = canvas.getBoundingClientRect();

// Set up the canvas size
canvas.width = scratchArea.width;
canvas.height = scratchArea.height;

// Style the scratchable surface
ctx.fillStyle = "#888";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Draw the scratchable "paint"
ctx.fillStyle = "#da4c4c";
ctx.globalCompositeOperation = "source-over";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Listen for touch or mouse events
let isScratching = false;

function startScratch(event) {
	isScratching = true;
}

function stopScratch() {
	isScratching = false;

	// Check if enough has been scratched off
	const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
	let scratchedPixels = 0;
	for (let i = 3; i < imageData.length; i += 4) {
		if (imageData[i] === 0) scratchedPixels++;
	}

	const totalPixels = canvas.width * canvas.height;
	const scratchedPercentage = (scratchedPixels / totalPixels) * 100;

	if (scratchedPercentage > 30) {
		canvas.style.display = "none"; // Hide canvas to reveal content
	}
}

function scratch(event) {
	if (!isScratching) return;

	const x = (event.touches ? event.touches[0].clientX : event.clientX) - scratchArea.left;
	const y = (event.touches ? event.touches[0].clientY : event.clientY) - scratchArea.top;

	ctx.globalCompositeOperation = "destination-out";
	ctx.beginPath();
	ctx.arc(x, y, 20, 0, Math.PI * 2);
	ctx.fill();
}

// Attach event listeners
canvas.addEventListener("mousedown", startScratch);
canvas.addEventListener("mouseup", stopScratch);
canvas.addEventListener("mousemove", scratch);

canvas.addEventListener("touchstart", startScratch);
canvas.addEventListener("touchend", stopScratch);
canvas.addEventListener("touchmove", scratch);
