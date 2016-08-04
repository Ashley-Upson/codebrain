var ws,// Variable to hold the WebSockets
	clientID = (Math.random(18).toString()).substring(2);// Generate an ID for the client
function checkData(data){// A function to work with data recieved from the server
	"use strict";// Check code against established coding standards
	var currentData = data,// A variable to hold the current set of data being handled
		current = currentData.substring(0, currentData.indexOf(";"));// Variable to hold the current data to work with
	if(current === "addActivity") {// Code to deal with the first section of the response data being "addActivity"
		/**
		 *	-	Add code to check for the type parameter of the addActivity function from the websockets
		 *		server.
		 *	-	Call addActivity with the type and messaage parameters.
		 */
	} else if(current === "pcScan"){// Code to deal with the first section of the response data being "pcScan"
		var ipToAdd = data.substring(data.indexOf(";") + 1);// IP address taken from the response data
		ipTable[ipTable.length] = ipToAdd;// Add the IP sent in the response data to the local ipTable
		addActivity("Ip address found: " + ipToAdd, "console");// Output to the user that the IP address has been found
	}
}
function webSocket() {// Function dealing with the main WebSocket code
	"use strict";// Check code against established coding standards
	var ip = "127.0.0.1",// Define the IP of the server
		port = 8080;// Define the port of the server
	if ("WebSocket" in window) {// Check to see if the browser supports WebSockets
		ws = new WebSocket("ws://localhost" + ":" + port + "/");// Open a new WebSocket
		ws.onopen = function () {// Code to be executed when a WebSocket is opened
			document.getElementById("serverStatus").innerHTML = "Connected to WS";// Tell the client it is connected to the server
		};
		ws.onmessage = function (event) {// Code to be executed when the client recieves data from the server
			var receivedMessage = event.data;// Variable to hold the data recieved from the server
			checkData(receivedMessage);// Pass the data recieved from the server to the function dealing with all responses
		};
		ws.onclose = function () {// Code to be executed when the WebSocket is closed
			document.getElementById("serverStatus").innerHTML = "Not connected to WS";// The the client it is no longer connected to the server
		};
	} else {// If the browser does not support WebSocket
		/* Nothing can be done. Game will not work */
	}
}
webSocket();// Call the function that deals with all the WebSocket