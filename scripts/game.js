

function addActivity(command) {
	"use strict";
	var receivedCommand = command,
		activityLogElement = document.getElementById("activityLog"),
		currentActivities = activityLogElement.innerHTML,
		newActivityLog = currentActivities + "<br>" + "<b>$USER_CONSOLE >>></b> " + receivedCommand;
	activityLogElement.innerHTML = newActivityLog;
	activityLogElement.scrollTop = activityLogElement.scrollHeight;
}


function sendCommand() {
	"use strict";
	var commandSent = document.getElementById("userCommandInput").value;
	document.getElementById("userCommandInput").value = null;
	addActivity(commandSent);
}



function load() {
	"use strict";
	var textEntry = document.getElementById("userCommandInput");
	textEntry.addEventListener('keydown', keyDown);
}

function keyDown(event) {
	"use strict";
	var command = document.getElementById("userCommandInput"),
		status = document.getElementById("status");
	if (command.value === "") {
		status.innerHTML = "Ready.";
	} else {
		status.innerHTML = "Waiting for send command.";
	}
	if (event.key === "Enter") {
		addActivity(command.value);
		command.value = "";
		status.innerHTML = "Ready.";
	}
}
