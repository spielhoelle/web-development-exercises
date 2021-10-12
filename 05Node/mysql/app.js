var mysql = require('mysql');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'halloworld'
});

function showUsers() {
	con.query('select * from person', function(err, rows) {
		if(err)
			throw err;

		console.log( rows );
	});
}

function showUser(fname) {
	con.query('select * from person where firstname = ?', [fname], function(err, rows) {
		if(err)
			throw err;

		console.log( rows );
	});

}

function newUser() {
	con.query( "insert into person (firstname, lastname, email) "
			  +"values ('Manfred', 'Mustermann', 'manfred@gmail.com')", 
			  function(err, rows) {
			   		if(err)
			   			throw err;

			   		console.log( rows );
			  });
}

showUser('Manfred');
