var mysql = require('mysql');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'foobar',
	database: 'halloworld'
});

// read data 1
// con.query('select * from persons', 
//     function(err, rows) {
//     if(err)
//         throw err;

//     console.log( rows );
// });

// read data 2
// con.query('select * from persons where firstname = ?', 
//     [name], function(err, rows) {
//     if(err)
//         throw err;

//     console.log( rows );
// });

// update data 

// read data 2
// con.query('update persons set firstname = ? where firstname = ?', 
//     ['Hans', 'Manfred Junior'], function(err, rows) {
//     if(err)
//         throw err;

//     console.log( rows );
// });

// insert data 
// con.query('insert into persons (firstname, lastname, age) values (?,?,?)', 
//     ['Sabine', 'Wohlgefahrt', 35], function(err, rows) {
//     if(err)
//         throw err;

//     console.log( rows );
// });

// delete row
con.query('delete from persons where firstname = ?', 
    ['Sabine'], function(err, rows) {
    if(err)
        throw err;

    console.log( rows );
});