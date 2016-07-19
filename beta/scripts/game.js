var ipTable = ["127.0.0.1"];

function addActivity(command, type) {
	"use strict";
	var receivedCommand = command,
		activityLogElement = document.getElementById("activityLog"),
		currentActivities = activityLogElement.innerHTML,
		newActivityLog;
	if (type === "user") {
		newActivityLog = currentActivities + "<br>" + "<b>$USER_CONSOLE >>></b> " + receivedCommand;
		activityLogElement.innerHTML = newActivityLog;
		activityLogElement.scrollTop = activityLogElement.scrollHeight;
	} else if (type === "console") {
		currentActivities = activityLogElement.innerHTML;
		newActivityLog = currentActivities + "<br>" + "<b>>>></b> " + receivedCommand;
		activityLogElement.innerHTML = newActivityLog;
		activityLogElement.scrollTop = activityLogElement.scrollHeight;
	} else {
		currentActivities = activityLogElement.innerHTML;
		newActivityLog = currentActivities + "<br>" + "<b>FATAL ERROR</b> ";
		activityLogElement.innerHTML = newActivityLog;
		activityLogElement.scrollTop = activityLogElement.scrollHeight;
	}
	return true;
}

function randomBetween(min, max) {
	"use strict";
	return (Math.floor(Math.random() * max) + 1);
}

function scan(userCommand) {
	"use strict";
    switch (userCommand) {
    case "scan();":
		addActivity("Scanning for IP addresses.", "console");
		schedule(5, playerScan, null);
        break;
    case "list();":
        scanList();
        break;
    case "firewall();":
        schedule(5, firewall, null);
        break;
    case "anti-virus();":
        schedule(5, antivirus, null);
        break;
    case "decrypt()":
        schedule(5, decrypt, null);
        break;
    case "bot();":
        schedule(5, bot, null);
        break;
    case "control();":
        schedule(5, control, null);
        break;
    case "botnet();":
        schedule(5, botnet, null);
        break;
    case "trojan();":
        schedule(5, trojan, null);
        break;
    case "malware();":
        schedule(5, malware, null);
        break;
    case "attack_botnet();":
        schedule(5, attack_botnet, null);
        break;
    case "hack();":
        schedule(5, hack, null);
        break;
    default:
        addActivity("Command: '" + userCommand + "' not known. Terminating.", "console");
        break;
    }
}

function sendCommand() {
	"use strict";
	var commandSent = document.getElementById("userCommandInput").value;
	document.getElementById("userCommandInput").value = null;
	addActivity(commandSent, "user");
}

function keyDown(event) {
	"use strict";
	var command = document.getElementById("userCommandInput"),
		activityLog = document.getElementById("activityLog").innerHTML;
	if (event.key === "Enter") {
		addActivity(command.value, "user");
		scan(command.value);
		command.value = "";
		return;
	}
/*	addActivity("","user");
	document.getElementById("activityLog").innerHTML = activityLog + event.key;*/
}

function load() {
	"use strict";
	var textEntry = document.getElementById("userCommandInput");
	textEntry.addEventListener('keydown', keyDown);
}