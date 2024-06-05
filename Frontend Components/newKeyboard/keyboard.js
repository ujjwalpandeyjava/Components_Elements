/* 
How to use this keyboard on a page?

Add this at the end before the scripts of the page: 
<div id="autoKeyboardWork"></div>
		OR
<div id="keyboard">
		<div id="keyboardKeys">
			<keyRow>
				<div class="key keyStyle" id="key00"></div>
				<div class="key keyStyle" id="key01"></div>
				<div class="key keyStyle" id="key02"></div>
				<div class="key keyStyle" id="key03"></div>
				<div class="key keyStyle" id="key04"></div>
				<div class="key keyStyle" id="key05"></div>
				<div class="key keyStyle" id="key06"></div>
				<div class="key keyStyle" id="key07"></div>
				<div class="key keyStyle" id="key08"></div>
				<div class="key keyStyle" id="key09"></div>
				<div class="keyStyle specialBtn" id="closeKeyboardBtn">
					<div>X</div>
				</div>
			</keyRow>
			<keyRow>
				<div class="key keyStyle" id="key10"></div>
				<div class="key keyStyle" id="key11"></div>
				<div class="key keyStyle" id="key12"></div>
				<div class="key keyStyle" id="key13"></div>
				<div class="key keyStyle" id="key14"></div>
				<div class="key keyStyle" id="key15"></div>
				<div class="key keyStyle" id="key16"></div>
				<div class="key keyStyle" id="key17"></div>
				<div class="key keyStyle" id="key18"></div>
				<div class="key keyStyle" id="key19"></div>
				<div class="keyStyle specialBtn bigKey" id="backSpace">
					<i class=" key fa-solid fa-delete-left"></i>
				</div>
			</keyRow>
			<keyRow>
				<div class="key keyStyle" id="key20"></div>
				<div class="key keyStyle" id="key21"></div>
				<div class="key keyStyle" id="key22"></div>
				<div class="key keyStyle" id="key23"></div>
				<div class="key keyStyle" id="key24"></div>
				<div class="key keyStyle" id="key25"></div>
				<div class="key keyStyle" id="key26"></div>
				<div class="key keyStyle" id="key27"></div>
				<div class="key keyStyle" id="key28"></div>
				<div class="keyStyle specialBtn specialBtn" id="enterKey">
					<i class="fas fa-level-down-alt"></i>
				</div>
			</keyRow>
			<keyRow>
				<div class="key keyStyle" id="key30"></div>
				<div class="key keyStyle" id="key31"></div>
				<div class="key keyStyle" id="key32"></div>
				<div class="key keyStyle" id="key33"></div>
				<div class="key keyStyle" id="key34"></div>
				<div class="key keyStyle" id="key35"></div>
				<div class="key keyStyle" id="key36"></div>
				<div class="key keyStyle" id="key37"></div>
				<div class="key keyStyle" id="key38"></div>
				<div class="key keyStyle" id="key39"></div>
			</keyRow>
			<keyRow>
				<div class="key keyStyle specialBtn" id="key40"></div>
				<div class="key keyStyle specialBtn" id="key41"></div>
				<div class="key keyStyle biggestKey" id="key42"></div>
				<div class="key keyStyle specialBtn" id="key43"></div>
				<div class="key keyStyle specialBtn" id="key44"></div>
			</keyRow>
		</div>
	</div>
	<div id="increasePgHeight"></div>

	Add keyboard's js, css, jquery, fontawesome, "IDs" of textBoxes you want to use with this keyboard in variable list = "IDsOfTxtAreasUsingKeyboard".
	Done.
*/

var IDsOfTxtAreasUsingKeyboard = ["password", "userName", "inputSearch", "clinacalNotesMsg"];

var eventAttachedTo = "", previousTextOf = {};
const alphabeticalKeyboard = [
	['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
	['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
	['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
	['Caps', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', '.com'],
	['&123', '@', '____', '_', 'Clear text']
]
const alphabeticalCaptialKeyboard = [
	['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
	['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
	['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
	['abc', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', '.com'],
	['&123', '@', '____', '_', 'Clear text']
]
const symbolicKeyboard = [
	['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
	['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'],
	['\'', '\"', '/', '\\', '?', '+', '-', ';', ':'],
	['ABC', '[', ']', '{', '}', '<', '>', ',', '.', '|'],
	['abc', '=', '____', '~', 'Rtn txt']
]
const focusBackToinput = () => {
	document.getElementById(eventAttachedTo).focus();
	document.addEventListener('click', hideKeyboardOnoutSideClick);
}
function attachKeysToKeyboard(keys) {
	for (let row = 0; row < keys.length; row++) {
		let thisRow = keys[row];
		for (let eachKey = 0; eachKey < thisRow.length; eachKey++) {
			let keyID = "#key" + row + eachKey;
			$(keyID).text(thisRow[eachKey]);
		}
	}
}
function capsLocksToggleSign(isOn) {
	let backgroundColor = (isOn) ? "#ffffff" : "#39FF14";
	let backgroungLight = (isOn) ? '#ffffffde' : '#39FF14';
	document.getElementById("key30").style.setProperty('--capsBackgroundColor', backgroundColor)
	document.getElementById("key30").style.setProperty('--capsBackgroungLight', backgroungLight)
}
function showKeyboardFor(inputBoxId, event) {
	attachKeysToKeyboard(alphabeticalKeyboard);
	if (getComputedStyle(document.getElementById("keyboard")).bottom == '-400px') {
		//console.log("Show KB and add end events for id:- ", inputBoxId)
		eventAttachedTo = inputBoxId
		document.getElementById("keyboard").style.bottom = "0.7px"
		document.getElementById("increasePgHeight").style.display = 'block'
		document.getElementById("closeKeyboardBtn").addEventListener('click', hideKeyboard_removeEvents)
	} else if (inputBoxId !== eventAttachedTo) {
		//console.log(`Remove all old events form- ${eventAttachedTo}'s keyboard and keys... then add new to- ${inputBoxId}`)
		document.getElementById("closeKeyboardBtn").removeEventListener('click', hideKeyboard_removeEvents)
		eventAttachedTo = inputBoxId;	//Keep it at the end of the function
		document.getElementById("closeKeyboardBtn").addEventListener('click', hideKeyboard_removeEvents)
	}
}
function hideKeyboard_removeEvents() {
	//console.log("hiding keyboard for inputbox:- ", eventAttachedTo)
	// document.getElementById("closeKeyboardBtn").removeEventListener('click', hideKeyboard_removeEvents)
	document.getElementById("keyboard").style.bottom = "-400px"
	document.getElementById("increasePgHeight").style.display = 'none'
}
function clearTextFunction(eventAttachedToInput) {
	let textFromInputBox = document.getElementById(eventAttachedToInput).value;
	if (textFromInputBox !== null && textFromInputBox !== '' && textFromInputBox !== " ") {
		previousTextOf[eventAttachedToInput] = textFromInputBox;
		document.getElementById(eventAttachedToInput).value = "";
	}
}
function returnClearTextFunction(eventAttachedToInput) {
	let textFromInputBox = document.getElementById(eventAttachedToInput).value;
	if (textFromInputBox !== null && textFromInputBox !== '' && textFromInputBox !== " " && previousTextOf[eventAttachedToInput] != undefined) {
		document.getElementById(eventAttachedToInput).value = previousTextOf[eventAttachedToInput];
		previousTextOf[eventAttachedToInput] = textFromInputBox;
	} else if (previousTextOf[eventAttachedToInput] != undefined)
		document.getElementById(eventAttachedToInput).value = previousTextOf[eventAttachedToInput];
}
function backKeyPressed() {
	// console.log("Back Key Pressed!!", this);
	let field = document.getElementById(eventAttachedTo);
	let valueFromInputBox = field.value;
	let cursourStartLocation = field.selectionStart;
	field.value = valueFromInputBox.substring(0, cursourStartLocation - 1) + valueFromInputBox.substring(cursourStartLocation, valueFromInputBox.length);
	field = document.getElementById(eventAttachedTo);
	field.setSelectionRange(cursourStartLocation - 1, cursourStartLocation - 1);
	field.dispatchEvent(new Event('change'));
	focusBackToinput();
}
function enterKeyPressed() {
	let keyboardEvent_Enter = new KeyboardEvent('keyup', {
		code: 'Enter',
		key: 'Enter',
		charCode: 13,
		keyCode: 13,
		view: window
	});

	if (document.getElementById(eventAttachedTo).tagName === "INPUT") {
		let path = keyboardEvent_Enter.path;
		path.forEach(el => {
			if (el.tagName === "FORM") {
				let childNodesList = el.childNodes
				childNodesList.forEach(node => {
					if (node.tagName === "BUTTON" && node.type === "submit")
						node.click();
				});
			}
		});
	} else if (document.getElementById(eventAttachedTo).type === "textarea") document.getElementById(eventAttachedTo).value += "\n";
	focusBackToinput();
}
function keyPressed(thi) {	// functionality of keys
	// thi.stopPropagation();
	let keyValue = event.path[0].innerText;	// console.log(keyValue, "'", event.target.id, "'");
	switch (keyValue) {
		case "":
			console.log("Value is null");
			break;
		case "Caps":
			attachKeysToKeyboard(alphabeticalCaptialKeyboard);
			capsLocksToggleSign(false);
			break;
		case "ABC":
			attachKeysToKeyboard(alphabeticalCaptialKeyboard);
			capsLocksToggleSign(false);
			break;
		case "abc":
			attachKeysToKeyboard(alphabeticalKeyboard);
			capsLocksToggleSign(true);
			break;
		case "Clear text":
			clearTextFunction(eventAttachedTo);
			break;
		case "Rtn txt":
			returnClearTextFunction(eventAttachedTo);
			break;
		case "&123":
			attachKeysToKeyboard(symbolicKeyboard);
			capsLocksToggleSign(true);
			break;
		case "____":
			addText(" ");
			// document.getElementById(eventAttachedTo).value += " ";
			break;
		default:	// For all the normal keys which will add the value on the inputbox 
			// document.getElementById(eventAttachedTo).value += event.path[0].innerText;
			addText(event.path[0].innerText);
			break;
	}
	document.getElementById(eventAttachedTo).dispatchEvent(new Event('change'));
	focusBackToinput();
}
function addText(whatToAdd) {
	let field = document.getElementById(eventAttachedTo);
	let cursourStartLocation = field.selectionStart;
	let textLength = whatToAdd.length;
	//	console.log(cursourStartLocation);
	let fieldValue = field.value;
	//	console.log(fieldValue);
	field.value = fieldValue.substring(0, cursourStartLocation) + whatToAdd + fieldValue.substring(cursourStartLocation, fieldValue.length)
	field = document.getElementById(eventAttachedTo);
	//	console.log(field.value);
	field.setSelectionRange(cursourStartLocation + textLength, cursourStartLocation + textLength);
	// field.selectionStart = cursourStartLocation + 1;
	//	console.log(field.selectionStart);
}
function autoAddKeyboard() {
	document.getElementById("autoKeyboardWork").innerHTML = `
	<div id="keyboard">
			<div id="keyboardKeys">
				<keyRow>
					<div class="key keyStyle" id="key00"></div>
					<div class="key keyStyle" id="key01"></div>
					<div class="key keyStyle" id="key02"></div>
					<div class="key keyStyle" id="key03"></div>
					<div class="key keyStyle" id="key04"></div>
					<div class="key keyStyle" id="key05"></div>
					<div class="key keyStyle" id="key06"></div>
					<div class="key keyStyle" id="key07"></div>
					<div class="key keyStyle" id="key08"></div>
					<div class="key keyStyle" id="key09"></div>
					<div class="keyStyle specialBtn" id="closeKeyboardBtn">
						<div>X</div>
					</div>
				</keyRow>
				<keyRow>
					<div class="key keyStyle" id="key10"></div>
					<div class="key keyStyle" id="key11"></div>
					<div class="key keyStyle" id="key12"></div>
					<div class="key keyStyle" id="key13"></div>
					<div class="key keyStyle" id="key14"></div>
					<div class="key keyStyle" id="key15"></div>
					<div class="key keyStyle" id="key16"></div>
					<div class="key keyStyle" id="key17"></div>
					<div class="key keyStyle" id="key18"></div>
					<div class="key keyStyle" id="key19"></div>
					<div class="keyStyle specialBtn bigKey" id="backSpace">
						<i class=" key fa-solid fa-delete-left"></i>
					</div>
				</keyRow>
				<keyRow>
					<div class="key keyStyle" id="key20"></div>
					<div class="key keyStyle" id="key21"></div>
					<div class="key keyStyle" id="key22"></div>
					<div class="key keyStyle" id="key23"></div>
					<div class="key keyStyle" id="key24"></div>
					<div class="key keyStyle" id="key25"></div>
					<div class="key keyStyle" id="key26"></div>
					<div class="key keyStyle" id="key27"></div>
					<div class="key keyStyle" id="key28"></div>
					<div class="keyStyle specialBtn specialBtn" id="enterKey">
						<i class="fas fa-level-down-alt"></i>
					</div>
				</keyRow>
				<keyRow>
					<div class="key keyStyle" id="key30"></div>
					<div class="key keyStyle" id="key31"></div>
					<div class="key keyStyle" id="key32"></div>
					<div class="key keyStyle" id="key33"></div>
					<div class="key keyStyle" id="key34"></div>
					<div class="key keyStyle" id="key35"></div>
					<div class="key keyStyle" id="key36"></div>
					<div class="key keyStyle" id="key37"></div>
					<div class="key keyStyle" id="key38"></div>
					<div class="key keyStyle" id="key39"></div>
				</keyRow>
				<keyRow>
					<div class="key keyStyle specialBtn" id="key40"></div>
					<div class="key keyStyle specialBtn" id="key41"></div>
					<div class="key keyStyle biggestKey" id="key42"></div>
					<div class="key keyStyle specialBtn" id="key43"></div>
					<div class="key keyStyle specialBtn" id="key44"></div>
				</keyRow>
			</div>
		</div>
		<div id="increasePgHeight"></div>`
}
function hideKeyboardOnoutSideClick() {
	let allowedFields = ["text", "password", "textarea"]
	const outSide = !document.getElementById("keyboard").contains(event.target)
	// Don't combine these two ifs
	if (outSide) {
		if (!allowedFields.includes(event.target.type)) {
			hideKeyboard_removeEvents();
			document.removeEventListener('click', hideKeyboardOnoutSideClick);
		}
	}
}
$(document).ready(() => {
	if (document.getElementById("autoKeyboardWork") !== null)
		autoAddKeyboard();
	checkUsername();
	IDsOfTxtAreasUsingKeyboard.forEach(inputBoxId => {
		document.getElementById(inputBoxId).addEventListener('click', showKeyboardFor.bind(event, inputBoxId));
	});
	$("keyRow>.key").bind('click', keyPressed.bind(this));
	$("#backSpace").bind('click', backKeyPressed);
	$("#enterKey").bind('click', enterKeyPressed);
});