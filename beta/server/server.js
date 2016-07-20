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

/*  ---------------------------------------  */

app.use(function (request, response, next) {
	console.log('middleware');
	request.testing = 'server';
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
	ws.on('message', function(msg) {
		console.log("Received data from client: " + msg);
		// Insert switch statement for data sent by client.
		switch(msg){
			case "scan();":
				ws.send("");
			default:
				ws.send("Command not recognised.");
		}
	});
	console.log('socket', req.testing);
});
 
app.listen(8080);