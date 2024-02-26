// Will have to remove some files

// ---------- Auto logout code starts ---------- //
$(document).ready(function () {
	parent.showContentOn100vh();
	showNavIfTouchScreen();
	$('html').keydown(event => backBtn(event));

	startDateTime = new Date();

	$("form").submit(e => {
		e.preventDefault();
	});

	$(function () {
		$("#wrap").click(function (e) {
			if ($(this).children().attr('class') == "glyphicon glyphicon-chevron-left") {
				$(this).children().attr('class', 'glyphicon glyphicon-chevron-right');
				document.getElementsByTagName("body")[0].style.marginLeft = "0px";
				document.getElementById("healthCartSidebar").style.marginLeft = "-350px";
			}
			else {
				$(this).children().attr('class', 'glyphicon glyphicon-chevron-left');
				document.getElementsByTagName("body")[0].style.marginLeft = "350px";
				document.getElementById("healthCartSidebar").style.marginLeft = "0px";
			}
		});
	});
	//checkUsername();

	//Side bar navigation add active class
	$("li.treeview > a").on("click", function () {
		$("li.treeview > a.active").removeClass("active");
		$(this).addClass("active");
	});

	// If this does not works here move it into html file.
	$(".tablinks").on('click', (event) => {
		$(".tablinks").removeClass("active");
		$(event.currentTarget).addClass("active");
	});

	// off spinner on tag containing this class
	$(".offSpinnerOnClick").on('click', offSpinner);

	$("#patientSearchDiv").hide();
	//$("#documentationLi").click(); 

	document.getElementById("orgLogoImgLoginPg").src = parent.gOrgLogoImg;
	document.getElementById("orgNameloginPg").innerText = parent.gOrgName;
	document.getElementById("orgLogoImg").src = parent.gOrgLogoImg;
	document.getElementById("orgName").innerHTML = parent.gOrgName;	// Shows OrgName on top of search patient page

	parent.hideNavBarCNE(); //Hide CNE navigation bar

	// Retrieve the object from storage and show the page according to logged in person.
	let loggedInNurse = sessionStorage.getItem("loggedInNurseInfo");
	if (loggedInNurse) {
		loggedInNurse = JSON.parse(loggedInNurse);
		$("#nurseLoginDiv").hide();
		$("#loggedInPatientDiv").hide();
		$("#patientSearchDiv").show();
		$("#healthCartSidebar").hide();

		practionerId = loggedInNurse.practitionerId;

		// Send Practitioner/Nurse logged in req to Anchor
		if (practionerId) loginLogoutPractitionerFromAnchor(1, practionerId);

		practionerOrgId = loggedInNurse.orgId;
		thirdPartyEmrVendor = loggedInNurse.thirdPartyEmrVendor;
		third_Party_EMR_Faciity_Configs = loggedInNurse.third_Party_EMR_Faciity_Configs;

		$("#nurseName").html(loggedInNurse.userName);
		$("#nurseUserName").html((loggedInNurse.email) ? ','.concat(loggedInNurse.email) : '');

		document.getElementById("nurseImgHC").src = loggedInNurse.practitionerImg;
		document.getElementById("nurseNameHC").innerHTML = loggedInNurse.userName;

		onloadPatientSearch();

		let loggedInPatient = sessionStorage.getItem('loggedInPatientInfo');
		if (loggedInPatient) {
			// console.log("gPatientId..."+parent.gPatientId);
			$("#patientSearchDiv").hide();
			$("#loggedInPatientDiv").show();
			$("#documentationDivHC").show();
			$("#myMedicationsHC").hide();
			$("#myVitalsHC").hide();
			// $("#cneNavbarFixed").hide();
			$("#healthCartSidebar").show();
			$("#manualVitalEntryHC").hide();
			$("#patientConditionDiv").hide();

			document.getElementsByTagName("body")[0].style.marginLeft = "350px";
			$("#clinicalNotesHC").hide();

			let loggedInPatientData = JSON.parse(loggedInPatient);
			patientId = loggedInPatientData.patientId;
			isThirdPartyEmrPatient = loggedInPatientData.isThirdPartyEmrPatient;

			document.getElementById("patientNameLbl").innerHTML = loggedInPatientData.patientName;
			//document.getElementById("patientIDLbl").innerHTML = loggedInPatientData.patientId;
			document.getElementById("patientRoomNo").innerHTML = loggedInPatientData.patientRoomNo;
			document.getElementById("patientOrgName").innerHTML = loggedInPatientData.patientOrgName;
			document.getElementById("addrLbl").innerHTML = loggedInPatientData.addr;
			document.getElementById("patientImg").src = loggedInPatientData.patientImg;
			document.getElementById("gender_DOB").innerHTML = (loggedInPatientData.patientGender && loggedInPatientData.dob) ? `${loggedInPatientData.patientGender} | ${loggedInPatientData.dob}` : `${loggedInPatientData.patientGender} ${loggedInPatientData.dob}`;
			document.getElementById("ph_email").innerHTML = (loggedInPatientData.ph && loggedInPatientData.patientEmail) ? `${loggedInPatientData.ph} | ${loggedInPatientData.patientEmail}` : `${loggedInPatientData.ph} ${loggedInPatientData.patientEmail}`

			getDocumentationData(patientId);
			//	getMedicationRequestFromFhir();
			getClinicalNotes();
			getEncounter();

			$("#documentationLi").click();
			$("#summaryTab").addClass("active");

		} else {
			setTimeout(() => {
				openKeybaordForsearchPatient();
			}, 500);
		}

		// When user come back to site after page reload or similar condition we check for logout and logout.
		let timeOfAutoLogout = sessionStorage.getItem("timeOfAutoLogoutNurse");
		if (timeOfAutoLogout != null) {
			let oldSessionLogoutDate = new Date(timeOfAutoLogout);
			if (oldSessionLogoutDate.getTime() <= new Date().getTime()) {
				// Logout patinet and nurse respectively;
				forceLogout();
			}
			else
				onLoginStartAutoLougoutTimer();	//Adds all the events to start working autologout timer and all...
		} else
			onLoginStartAutoLougoutTimer();
	}

	//	searchPatient keyboard listner
	document.getElementById("inputSearch").addEventListener('change', patientSearchFilter);
	document.getElementById("inputSearch").addEventListener('input', patientSearchFilter);
	document.getElementById("inputSearch").addEventListener('click', openKeybaordForsearchPatient);

});
function openKeybaordForsearchPatient() {
	showKeyboardWithTheseDetails("inputSearch", 100, 75, false);
}

const seconds = 1000, minutes = 60 * seconds; //(10*seconds)(10*minutes)<-in_Milli_Seconds, (alertPanelTime in seconds)
// Change alertPanelTime for chnaging time shown on alert of will logout in x seconds, and autoLogoutIn for time of logout on inactivity.
var shouldILogout = true, autoLogoutPageReload = false, shellIlogoutThisTime = null, notificationOnAlertPanel_Interval = null, alertPanelTime = 100, autoLogoutIn = 27 * minutes;

function updateAutoLogoutTime() {
	sessionStorage.setItem("timeOfAutoLogoutNurse", new Date(+new Date() + autoLogoutIn));	//With future time of update
}

var startAutoLogoutTimerOL = null, nurseLogoutTimer = null, alertpanelTimerOL = null;
const startAutoLogoutTimer = () => {
	startAutoLogoutTimerOL = setInterval(isItTimeToAutoLogout, 5 * seconds);	//Auto checks - is it time to logout with function 'isItTimeToAutoLogout'?
}

function isItTimeToAutoLogout() {
	let dateObjFromLocalSession = null;
	let timeOfAutoLogout = sessionStorage.getItem("timeOfAutoLogoutNurse");
	if (timeOfAutoLogout != null) {
		dateObjFromLocalSession = new Date(timeOfAutoLogout);

		if (dateObjFromLocalSession.getTime() <= new Date().getTime() && isAnyPopupOnscreen() === true) { // datetime is in milliseconds
			autoLogout();
		}
		else if (isAnyPopupOnscreen() === false) {
			updateAutoLogoutTime();   //extend autologout time while popup is removed
		}
	}
}

function isAnyPopupOnscreen() {	// true: no popup on screen, false: any 1+ popup is on screen.
	let isSipCallIsRunning = parent.isSipCallRunning();
	var sironaPopupStatus = parent.sironaPopupClasses.length;

	// Check any type of popup exists or not & Call(Video/Audio) is running or not. Go to home page only if there is no popup exists And no call (Video/Audio) is running
	return (parent.gNotificationCounter < 0 && parent.gvitalCounter < 0 && parent.gMRCounter < 0 && sironaPopupStatus === 0 && !isSipCallIsRunning);
}

function autoLogout() {
	if (document.getElementById("alertPanel").style.display != "flex") {
		showAlertPanel();
		shellIlogoutThisTime = setTimeout(() => {
			if (shouldILogout) {
				if (patientId != '')
					forceLogout();
			}
			else {
				updateAutoLogoutTime();
			}
		}, (alertPanelTime + 3) * seconds);
	}
}
// First logout patient, then logout nurse.
function forceLogout() {
	if (sessionStorage.getItem("loggedInPatientInfo") != null) {
		exitPatient();
	}
	if (sessionStorage.getItem("loggedInNurseInfo") != null) {
		nurseLogoutTimer = setInterval(() => {
			if (sessionStorage.getItem("loggedInPatientInfo") == null) {
				autoLogoutPageReload = true;
				nurselogout();
				nurseLoginMessages("Session expired!", "orange");
				clearInterval(nurseLogoutTimer);
			}
		}, 2500);
	}
}

const alertpanelTimer = () => {
	let LogoutCountSeconds = alertPanelTime;
	alertpanelTimerOL = setInterval(() => {
		LogoutCountSeconds -= 1;
		$("#alertPanelTimer").text(LogoutCountSeconds + " seconds");
		if (LogoutCountSeconds <= 0) {
			forceLogout();
			document.getElementById("alertPanel").style.display = "none";
			clearInterval(alertpanelTimerOL);
		}
	}, 1 * seconds);
}

function showAlertPanel() {
	document.getElementById("alertPanel").style.display = "flex";
	document.getElementById("alertPanelBTN").focus();
	$("#alertPanelTimer").text(alertPanelTime + " seconds");
	alertpanelTimer();

	$("#alertPanel").on('click mousemove scroll keypress keydown', () => {
		stopAutoLogoutFromAlertPanel();
	});

	// checking: is there notification on screen? if yes, will remove panel and extend auto-logout time
	notificationOnAlertPanel_Interval = setInterval(function () {
		console.log("checking: is there notification on screen? if yes, will remove panel and extend auto-logout time");
		if (isScreenFreeFromPopups() === false) {
			stopAutoLogoutFromAlertPanel();
		}
	}, 1 * seconds);
}
function stopAutoLogoutFromAlertPanel() {
	shouldILogout = false;
	document.getElementById("alertPanel").style.display = "none";
	clearInterval(alertpanelTimerOL);
	updateAutoLogoutTime();
	clearTimeout(shellIlogoutThisTime);
	clearTimeout(notificationOnAlertPanel_Interval);
}

function onLoginStartAutoLougoutTimer() {
	$(document).on('click mousemove scroll keydown keypress', updateAutoLogoutTime);	//Activity happned now update the autologout time
	startAutoLogoutTimer();
	shouldILogout = true;
}

function onLogoutStopAutoLougoutTimer() {
	$(document).off('click mousemove scroll keydown keypress');	//updateAutoLogoutTime will now stop working and save resources!
	$("#alertPanel").off('click mousemove scroll keypress keydown');
	document.getElementById("alertPanel").style.display = "none";
	clearInterval(alertpanelTimerOL);
	noNeedOfAutoLogout();
	function noNeedOfAutoLogout() {
		clearInterval(startAutoLogoutTimerOL);
		clearInterval(alertpanelTimerOL);
		sessionStorage.removeItem("timeOfAutoLogoutNurse");
	}
}

// Back and home buttons
function showNavIfTouchScreen() {
	if (parent.isTouchDevice()) {
		let navBar = document.getElementById("cneNavbarFixed");
		navBar.style.display = "inline-flex";
		// navBar.nextElementSibling.style.paddingLeft = "50px"
	}
}