/*
	drag (dragging), dragstart, dragend
	dragenter, dragleave, dragover (hovering), drop

	1. Making an element draggable requires adding the draggable attribute and the ondragstart event handler,
*/

const richestPeople = [
	"Jeff Bezos",
	"Bill Gates",
	"Warren Buffett",
	"Bernard Arnault",
	"Carlos Slim Helu",
	"Amancio Ortega",
	"Larry Ellison",
	"Mark Zuckerberg",
	"Michael Bloomberg",
	"Larry Page",
];
const draggable_list = document.getElementById("draggable-list");

// Store list-items
const listItems = [];

let dragStartIndex;

// Insert list items into DOM
function startingPoint_CreateList() {
	[...richestPeople]
		.map((a) => ({ value: a, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map((a) => a.value)
		.forEach((person, index) => {
			const listItem = document.createElement("li");
			listItem.setAttribute("data-index", index);
			listItem.innerHTML = `
				<span class="number">${index + 1}</span>
				<div class="draggable" draggable="true">
					<p class="person-name">${person}</p><i class="fas fa-grip-lines"></i>
				</div>`;
			draggable_list.appendChild(listItem);
			listItems.push(listItem);
		});
	addEventListeners();
}

function addEventListeners() {
	let draggable = document.querySelectorAll("div.draggable");
	let dragListItems = document.querySelectorAll(".draggable-list li");

	draggable.forEach(eachDraggable => {
		eachDraggable.addEventListener("drag", () => {
			// console.log("drag");
		});
		eachDraggable.addEventListener("dragstart", eventDragStart);
	});

	dragListItems.forEach((item) => {
		item.addEventListener("dragenter", eventDragEnter);
		item.addEventListener("dragleave", eventDragLeave);
		item.addEventListener("dragover", eventDragOver);
		item.addEventListener("drop", eventDragDrop);
	});

	document.getElementById("check").addEventListener("click", checkListOrder);
}

function eventDragStart() {
	dragStartIndex = +this.closest("li").getAttribute("data-index");
	// '+' so that the value become a number
	// Closest 'li' is the parent 'li'
}

function eventDragEnter() {
	// console.log("eventDragEnter");
	this.classList.add("over");	// Element entered in the area of this element
}

function eventDragLeave() {
	// console.log("eventDragLeave");
	this.classList.remove("over");
}

function eventDragOver(e) {
	// console.log("eventDragOver");
	e.preventDefault();	// do noting
}

function eventDragDrop() {
	// console.log("eventDragDrop");
	let dragEndIndex = +this.getAttribute("data-index");
	swapItems(dragStartIndex, dragEndIndex);
	this.classList.remove("over");
	this.classList.remove("right");
	this.classList.remove("wrong");
}

// Swap list items that are drag and drop
function swapItems(fromIndex, toIndex) {
	const itemOne = listItems[fromIndex].querySelector(".draggable");
	const itemTwo = listItems[toIndex].querySelector(".draggable");

	// Removes the element from the li and then puts in the other one.
	listItems[fromIndex].appendChild(itemTwo);
	listItems[toIndex].appendChild(itemOne);
}

function checkListOrder() {
	listItems.forEach((listItem, index) => {
		const personName = listItem.querySelector(".draggable").innerText.trim();

		if (personName !== richestPeople[index]) {
			listItem.classList.remove("right");
			listItem.classList.add("wrong");
		} else {
			listItem.classList.remove("wrong");
			listItem.classList.add("right");
		}
	});
}