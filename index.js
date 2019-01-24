/*
    File: index.js
    Author: Eli Boblett
    Date: 1.17.19
*/

var express = require('express');
var app = express();
var config = require('./config.json');
// core module to help with urls
var url = require('url');

app.use(require('cookie-parser')());

app.get('/', function(req, res) {
    res.send("<h3>Hello World</h3>");
});

app.listen(config.port, function() {
    console.log("Server is listening on localhost:%s", config.port);
});
