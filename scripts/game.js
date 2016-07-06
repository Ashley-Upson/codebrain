function checkCommandInput() {
	"use strict";
	var command = document.getElementById("userCommandInput"),
		status = document.getElementById("status");
	if (command.value === "") {
		status.innerHTML = "Ready.";
	} else {
		status.innerHTML = "Waiting for send command.";
	}
}

function addActivity(command) {
	"use strict";
	var receivedCommand = command,
		currentActivities = document.getElementById("activityLog").innerHTML,
		newActivityLog = currentActivities + "<br>" + receivedCommand;
	document.getElementById("activityLog").innerHTML = newActivityLog;
}


function sendCommand() {
	"use strict";
	var commandSent = document.getElementById("userCommandInput").value;
	addActivity(commandSent);
}

function load() {
	"use strict";
}