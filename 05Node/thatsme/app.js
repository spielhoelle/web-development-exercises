var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser());
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index');
});

app.post('/contacts', function(req, res) {

	console.log( req.body );	
	fs.readFile('contacts.json', function(err, data) {
		console.log('File content: ' + data);

		var objContacts = JSON.parse( data );
		console.log('number of contact requests received: ' + objContacts.length);

		objContacts.push({
			name: req.body.name,
			email: req.body.email,
			text: req.body.text
		});

		var jsonContacts = JSON.stringify( objContacts );
		fs.writeFile('contacts.json', jsonContacts, function(err) {
			res.json( {error: 'No error.'} );		
		});
	});
});


console.log('Server runs on port: ' + port);
app.listen(port);