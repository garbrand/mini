// mini
// Tiny webserver. Install globally using npm -g, cd into a folder and type `mini`;

var http = require('http');
var express = require('express');
var browserify = require('browserify-middleware');

var app = express();
var server = http.createServer(app);

// Browserify a /js dir or a client/js dir
// app.use('/js', browserify(__dirname + '/js'));
// app.use('/client/js', browserify(__dirname + '/js'));

// Serve out the root as static files
app.use(express.static(__dirname));
app.use(express.directory(__dirname));


// Export the listen function
var listen = function(port) {
	server.listen(port);
	console.log('Server listening on port', port);
};

module.exports.listen = listen;
