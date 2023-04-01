var NAWLTimer = "";
function onNAWL(message, showLoader = true, forHowMuchTime) {
	document.getElementById("noActionWaitingLoader").style.display = "flex";
	document.getElementById("NAWLMessage").innerHTML = message;
	document.getElementById("NAWL").style.display = (showLoader) ? "flex" : "none";
	clearTimeout(NAWLTimer);
	NAWLTimer = setTimeout(() => {
		document.getElementById("noActionWaitingLoader").style.display = "none";
	}, forHowMuchTime * 1000);
}
function offNAWL() {
	NAWLTimer = document.getElementById("noActionWaitingLoader").style.display = "none";
}
const xx = () => clearTimeout(NAWLTimer)
