var express = require('express'),// Require the "express" module
	app = express(),// Create the handle for the "express" module
	expressWs = require('express-ws')(app),// Require the "express-ws" module
	dataToSend,// Variable to hold the data that is to be sent to the client
	clientToRecieve;// Variable to hold the client ID for the response
/**
 *	---------------------------------------
 *	INSERT CODE FOR ALL GAME FUNCTIONS HERE
 *	---------------------------------------
 */
function randomBetween(min, max) {// Function to generate a random number between min and max inclusive
	"use strict";// Check the code against established coding standards
	return (Math.floor(Math.random() * max) + 1);// Generate and return the random number
}
function gameCommands(command) {// Function to deal with commands sent by the client - called by ParseWebSocketData
	if(command === "scan"){// If the command recieved is "scan"
		pcScan();// Call the function relevant to the client command
	} else if(command === "") {// If the command recieved is ""
		//Call the fucntion relevant to the client command 
	}
}
// All the fucnctions that are to be used by the player.
function pcScan(client){// Server logic for the player input of "scan();".
	"use strict";// Check the code against established coding standards
	var ip1 = randomBetween(1, 255),// Generate the first section of the IP address
		ip2 = randomBetween(1, 255),// Generate the second section of the IP address
		ip3 = randomBetween(1, 255),.// Generate the third section of the IP address
		ip4 = randomBetween(1, 255),// Generate the fourth section of the IP address
		ipAddress = ip1.toString() + "." + ip2.toString() + "." + ip3.toString() + "." + ip4.toString();// Create the whole generated IP address
	dataToSend = "pcScan;" + ipAddress;// Set the data to be sent to the client
	clientToRecieve = client;// Set the client to recieve the data
}
function pcList() {// Server logic for the player input of "list();".
	
}
function pcFirewall() {// Server logic for the player input of "firewall();".
	
}
function pcAV() {// Server logic for the player input of "antivirus();".
	
}
function pcDecrypt() {// Server logic for the player input of "decrypt();".
	
}
function pcBot() {// Server logic for the player input of "bot();".
	
}
function pcBotnet() {// Server logic for the player input of "botnet();".
	
}
function pcAttackBotnet() {// Server logic for the player input of "attack_botnet();".
	
}
function pcControl() {// Server logic for the player input of "control();".
	
}
function pcTrojan() {// Server logic for the player input of "trojan();".
	
}
function pcMalware() {// Server logic for the player input of "malware();".
	
}
function pcHack() {// Server logic for the player input of "hack();".
	
}
function parseWebSocketData(receivedData, client) {// Deals with ALL data recieved from the client.
	/**
	 *	Data structure of all data sent to the server:
	 *	{"primaryType;secondaryType;optionalData"}
	 *		primaryType:
	 *			command
	 *			serverData
	 *		secondaryType:
	 *			if primaryType === command
	 *				addActivity;
	 *				pcScan;
	 *				pcList;
	 *				pcFirewall;
	 *				pcAV;
	 *				pcDecrypt;
	 *				pcBot;
	 *				pcBotnet;
	 *				pcAttackBotnet;
	 *				pcControl;
	 *				pcTrojan;
	 *				pcMalware;
	 *				pcHack;
	 */
	console.log(receivedData);
	var firstSemiColon = receivedData.indexOf(";"),
		primaryType = receivedData.substring(0,firstSemiColon),
		currentData = receivedData.substring(firstSemiColon + 1, receivedData.length),
		nextSemiColon = currentData.indexOf(";") || receivedData.length -1,
		secondaryType = currentData,
		all = primaryType + " ... " + secondaryType;
	console.log(secondaryType);
	console.log(aWss.clients);
	if(primaryType === "command"){
		if(secondaryType === "pcScan"){
			pcScan(client);
		}
	}
}
/*  ---------------------------------------  */
app.use(function (request, response, next) {
	request.testing = 'server';
	return next();
});
app.get('/', function(request, response, next){
	console.log('get route', request.testing);
	response.end();
});
/**
 *	-------------------------------------------------------
 *	| This function deals with data sent from the client. |
 *	-------------------------------------------------------
 */
app.ws('/', function(ws, req) {
    var clientSocket = req.socket;
	ws.on('message', function(msg) {
		console.log("Received data from client: " + msg);
		parseWebSocketData(msg/* .utf8Data */);// This function deals with all information recieved via websockets.
	});
});
var aWss = expressWs.getWss('/');
setInterval(function () {
	aWss.clients.forEach(function (client) {
		var clientSocket = client._sender._socket;
		if(dataToSend === null) {
			// Do nothing
		} else {
			client.send(dataToSend);
			dataToSend = null;
		}
	});
}, 5000);
app.listen(8080);
console.log("Executed all code.");