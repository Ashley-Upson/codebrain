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