var express = require("express");
var app = express();
app.get("/", function (req, res) {
	res.send("hello world");
});
var ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
app.listen(3000);