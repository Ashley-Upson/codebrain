var express = require("express"),// Require "express".
	fs = require("fs"),// Require "fs".
	app = express(),// Define the application variable.
	ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1",// Define the IP address as either the OpenShift provided one or localhost.
	port = process.env.OPENSHIFT_NODEJS_PORT || 8080;// Define the port as either the OpenShift provided one or 8080.

app.get("/", function (request, response) {
	
	response.send("hello world");
});

app.listen(ip, port);