/*
	--------
	OLD CODE
	--------

var express = require("express"),// Require "express".
	fs = require("fs"),// Require "fs".
	app = express(),// Define the application variable.
	ip = process.env.OPENSHIFT_NODEJS_IP,// Define the IP address as either the OpenShift provided one or localhost.
	port = process.env.OPENSHIFT_NODEJS_PORT;// Define the port as either the OpenShift provided one or 8080.

if (process.env.OPENSHIFT_NODEJS_PORT === null || process.env.OPENSHIFT_NODEJS_PORT === undefined) {
	port = 8080;
}

app.get("/", function (request, response) {
	response.send("hello world");
});

if (process.env.OPENSHIFT_NODEJS_IP === null || process.env.OPENSHIFT_NODEJS_IP === undefined) {
	ip = "127.0.0.1";
	app.listen(port);
} else {
	app.listen(ip, port);
}

console.log(ip + ":" + port);

*/

var express = require('express'),
	app = express(),
	expressWs = require('express-ws')(app);
 
/*
	---------------------------------------
	INSERT CODE FOR ALL GAME FUNCTIONS HERE
	---------------------------------------
*/

function randomBetween(min, max) {
	"use strict";
	return (Math.floor(Math.random() * max) + 1);
}

function gameCommands(command) {// Called by parseWebSocketData - deals with commands sent by the client.
	if(command === "scan"){
		pcScan();
	} else if(command === "") {
				
	}
}

// All the fucnctions that are to be used by the player.
function pcScan(){// Server logic for the player input of "scan();".
	"use strict";
	var ip1 = randomBetween(1, 255),
		ip2 = randomBetween(1, 255),
		ip3 = randomBetween(1, 255),
		ip4 = randomBetween(1, 255),
		ipAddress = ip1.toString() + "." + ip2.toString() + "." + ip3.toString() + "." + ip4.toString();
	// This was just "ws" at one point
	expressWs.send("pcScan;" + ipAddress);
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

function parseWebSocketData(receivedData) {// Deals with ALL data sent from the client.
	// Data structure of all data sent to the server:
	// {"primaryType;secondaryType;optionsalData"}
	/*
		primaryType:
			command
			serverData
			
		secondaryType:
			if primaryType === command
				addActivity;
				pcScan;
				pcList;
				pcFirewall;
	*/
	console.log(receivedData);
	var firstSemiColon = receivedData.indexOf(";"),
		primaryType = receivedData.substring(0,firstSemiColon),
		currentData = receivedData.substring(firstSemiColon + 1, receivedData.length),
		nextSemiColon = currentData.indexOf(";") || receivedData.length -1,
		secondaryType = currentData,
		all = primaryType + " ... " + secondaryType;
	console.log(secondaryType);
	console.log(aWss.clients)
	//Won't work. As you can clearly see in the GitHub code they defined aWss.
	//Oh yeah...
	
	if(primaryType === "command"){
		if(secondaryType === "pcScan"){
			pcScan();
		}
	}
}

/*  ---------------------------------------  */

app.use(function (request, response, next) {
	request.testing = 'server';
	response.send("blah");
	return next();
});
 
app.get('/', function(request, response, next){
	console.log('get route', request.testing);
	response.end();
});
 
/*
  -------------------------------------------------------
  |	This function deals with data sent from the client. |
  -------------------------------------------------------
*/

app.ws('/', function(ws, req) {
	console.log(ws);
	ws.on('message', function(msg) {
		console.log("Received data from client: " + msg);
		parseWebSocketData(msg/* .utf8Data */);// This function deals with all information recieved via websockets.
	});
	console.log('socket', req.testing);
});
var aWss = expressWs.getWss('/');
setInterval(function () {
  aWss.clients.forEach(function (client) {
    client.send('hello');
  });
}, 5000);

app.listen(8080);
console.log("Executed all code.");