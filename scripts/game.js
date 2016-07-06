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

function sendCommand() {
	"use strict";
}