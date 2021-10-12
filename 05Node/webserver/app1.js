var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
var port = 3000;

app.use(bodyParser());
app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next) {
	console.log('Request URL: ' + req.url);
	next();
});

app.get('/', function(req, res) {
	res.send('<html><head><link href="assets/style.css" type="text/css" rel="stylesheet"/></head><body><h1>Hallo World</h1></body></html>');
});

app.get('/hallo', function(req, res) {
	res.send('<html><head></head><body><h2>Hallo Mars</h2</body></html>');
});

app.get('/hallo/:name/:age', function(req, res) { // req = request, res = response
	console.log('req.params looks like this:' + JSON.stringify(req.params));
	res.send('<html><head></head><body><h2>Hallo '+ req.params.name +', you are ' + req.params.age + ' years old</h2</body></html>');
});

// Task: Implement a GET-route /open with one parameter "filename".
// 		 The route should return the contents of the file "filename" which
//       should exist in your webserver's folder.
//
//		 I.e. /open/halloworld.txt should return the contents of halloworld.txt 

app.get('/open/:filename', function(req, res) {
	fs.readFile(req.params.filename, 'utf8', function(err, data) {
		if(err) 
			return res.json({error: 'File not found'});

		res.json({ filedata: data });
	});
});

app.get('/api', function(req, res) {
	res.json({ message: 'Hallo World' });
});

app.post('/comment', function(req, res) {
	res.json( { x: req.body.x, y: req.body.y, z: 3 });
});


/*

curl \
--header "Content-type: application/json" \
--request POST \
--data '{"title": "Test Title", "note": "Test note"}' \
http://localhost:3000/comment

*/

app.listen( port );
console.log('My Webserver runs on port: ' + port);

