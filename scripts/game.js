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
}

function randomBetween(min, max) {
	"use strict";
	return (Math.floor(Math.random() * max) + 1);
}

function timer(seconds) {
	"use strict";
	var timeLeft = seconds;
	if (timeLeft === 0) {
		clearInterval(timer);
	} else {
		setInterval(function () {
			timer(timeLeft - 1);
		}, 1000);
	}
}

function scan(userCommand) {
	"use strict";
	var ip1 = randomBetween(1, 255),
		ip2 = randomBetween(1, 255),
		ip3 = randomBetween(1, 255),
		ip4 = randomBetween(1, 255),
		ipAddress = ip1.toString() + "." + ip2.toString() + "." + ip3.toString() + "." + ip4.toString(),
		index = 0;
	if (userCommand === "scan();") { // Control Server
		addActivity("Scanning for IP addresses.", "console");
		ipTable[ipTable.length] = ipAddress;
		timer(5);
		addActivity("Found an IP address: " + ipAddress, "console");
	} else if (userCommand === "list();") { // Display player botnet
		timer(5);
		addActivity("Listing IP addresses.", "console");
		while (index < ipTable.length) {
			addActivity(ipTable[index], "console");
			index = index + 1;
		}
	} else if (userCommand === "firewall();") { // Player firewall
		addActivity("Player Firewall.", "console");
	} else if (userCommand === "anti-virus();") { // Player anti-virus
		addActivity("Player Anti-virus.", "console");
	} else if (userCommand === "decrypt();") { // Player decryption algorithm
		addActivity("Player Decryption Algorithm.", "console");
	} else if (userCommand === "bot();") { // Player bot program
		addActivity("Player Bot Program.", "console");
	} else if (userCommand === "control();") { // Player server
		addActivity("Player Control Server.", "console");
	} else if (userCommand === "botnet();") { // Player botnet efficiency
		addActivity("Player Botnet efficiency.", "console");
	} else if (userCommand === "trojan();") { // Player trojan to attack enemy firewall
		addActivity("Firewall Attack Program.", "console");
	} else if (userCommand === "malware();") { // Player malware to attack enemy anti-virus
		addActivity("Anti-virus Attack Program.", "console");
	} else if (userCommand === "attack_botnet();") { // Player program to attack the enemy botnet and sieze control of it
		addActivity("Botnet attack Program.", "console");
	} else if (userCommand === "hack();") { // Take enemy BrainCoins
		addActivity("Wiring enemy BrainCoins to Player Account.", "console");
	} else {
		addActivity("Command: '" + userCommand + "' not known. Terminating.", "console");
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
		status = document.getElementById("status"),
		activityLog = document.getElementById("activityLog").innerHTML;
	if (command.value === "") {
		status.innerHTML = "Ready.";
	} else {
		status.innerHTML = "Waiting for send command.";
	}
	if (event.key === "Enter") {
		addActivity(command.value, "user");
		scan(command.value);
		command.value = "";
		status.innerHTML = "Ready.";
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