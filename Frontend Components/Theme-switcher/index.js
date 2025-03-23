const currentTheme = localStorage.getItem("theme")
const isSolder = localStorage.getItem("solder")
if (currentTheme) {
	document.body.classList.add(currentTheme)
}
if (isSolder) {
	document.body.classList.add("solder")
}



const lightButton = document.getElementById("light");
const darkButton = document.getElementById("dark");
const solderButton = document.getElementById("solder");

lightButton.onclick = () => {
	// document.body.classList.remove("dark")
	// document.body.classList.add("light")
	// or
	document.body.classList.replace("dark", "light")

	localStorage.setItem("theme", "light")
}
darkButton.onclick = () => {
	// document.body.classList.remove("light")
	// document.body.classList.add("dark")
	// or 
	document.body.classList.replace("light", "dark")

	localStorage.setItem("theme", "dark")
}

solderButton.onclick = () => {
	if (document.body.classList.contains("solder")) {
		document.body.classList.remove("solder")
		solderButton.style.cssText = `
		--bg-solder: var(--yellow);`
		solderButton.innerText = "Solder"
		localStorage.removeItem("solder")

	} else {
		document.body.classList.add("solder")
		solderButton.style.cssText = `
		--bg-solder: white;`
		solderButton.innerText = "Normal"
		localStorage.setItem("solder", "solder")
	}

}
