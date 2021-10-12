var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var mysql = require('mysql');

app.use(bodyParser());

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'online_shop'
});

app.get('/', function(req, res) {
	res.json( {"shop-backend":"1.0"} );
});

app.get('/products', function(req, res) {
	con.query('select * from products', function(err, rows) {
		if(err)
			throw res.json( err );

		console.log( rows );
		res.json( rows );
	});
});

app.get('/categories', function(req, res) {
	con.query('select * from product_categories', function(err, rows) {
		if(err)
			throw res.json( err );

		console.log( rows );
		res.json( rows );
	});
});

app.get('/paymethods', function(req, res) {
	con.query('select * from payment_methods', function(err, rows) {
		if(err)
			throw res.json( err );

		console.log( rows );
		res.json( rows );
	});	
});

app.get('/customers', function(req, res) {
	con.query('select * from customers where active = 1', function(err, rows) {
		if(err)
			throw res.json( err );

		console.log( rows );
		res.json( rows );
	});
});

app.put('/activate/:userid', function(req, res) {
	con.query('update customers set active = ? where id = ?', 
		[req.body.status, req.params.userid],
		function(err, rows) {
		if(err)
			throw res.json( err );

		console.log( rows );
		res.json( rows );
	});	
});

app.post('/user', function(req, res) {
	
	con.query('select * from customers where email = ?',
		[req.body.email], 
		function(err, rows) {
			if(err)
				throw res.json(err);

			if( rows.length > 0 ) {
				res.json({error: 'Email already exists.'});
			}
			else {
				con.query(`insert into customers (firstname, lastname, birthdate, phone, city, street, email) 
					values (?, ?, ?, ?, ?, ?, ?)`,
					[
					  req.body.firstname, 
					  req.body.lastname, 
					  req.body.birthdate, 
					  req.body.phone, 
					  req.body.city, 
					  req.body.street, 
					  req.body.email 
					],
					function(err, rows) {
					  if(err)
					  	throw res.json( err );

					  res.json( rows );
					}
				);
			}
		});
});

app.put('/user/:userid', function(req, res) {
	console.log('userid: ' + req.params.userid);
	var sql = 'update customers set ';
	var i = 1;
	var bodyLength = Object.keys(req.body).length;
	var values = [];
	for(var field in req.body) {
		sql += field + ' = ?';
		if(i < bodyLength)
			sql += ',';
		i++;
		values.push( req.body[field] );
	}

	sql += ' where id = ?';
	values.push( req.params.userid );
	con.query(sql, 
		values,
		function(err, rows) {
		if(err)
			throw res.json( err );

		console.log( rows );
		res.json( rows );
	});		
});

app.delete('/user/:userid', function(req, res) {
	con.query('update customers set deleted = now() where id = ?', [req.params.userid], 
		function(err, rows) {
		if(err)
			throw res.json( err );

		console.log( rows );
		res.json( rows );
	});
});

app.listen(port);

