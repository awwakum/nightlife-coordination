var express = require('express');
var app = express();
var requestYelp = require('./requestYelp');

var port = process.env.PORT || 3000;

app.get('/:location', function(req, res) {
	requestYelp(req.params.location, res);
});

app.listen(port, function() {
	console.log('Server runs on port %s', port);
});
