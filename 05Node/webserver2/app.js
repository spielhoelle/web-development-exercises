var express = require('express');
var app = express();
var port = 3000;
var fs = require('fs');

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/person/:name', function(req, res) {
	res.render('person', { personName: req.params.name });
});

app.get('/users', function(req, res) {
	fs.readFile( 'users.json', function(err, data) {
		var obj = JSON.parse(data);
		res.render('users', { users: obj } );	
	});
});


console.log('Server runs on port: ' + port);
app.listen(port);