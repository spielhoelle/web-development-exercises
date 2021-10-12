const express = require('express');
const bodyParser = require('body-parser');
const randomstring = require('randomstring');
const mysql = require('mysql');
const app = express();

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'foobar',
	database: 'productserver'
});

app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    return res.send({ productapi: '1.0' });
});

app.get('/products', function(req, res) {
    let sql = 'select * from products';
 
    if(req.query.q) {
        sql += ' where lower(title) like ? or lower(description) like ?';
    }

    con.query(sql, 
        req.query.q ? ['%'+req.query.q+'%', '%'+req.query.q+'%'] : null, function(err, rows) {
        if(err)
            return res.send({ err: err });

        return res.send(rows);
    });    
});

app.post('/products', function(req, res) {
    if(!req.body.type || !req.body.title || !req.body.description || !req.body.price || !req.body.imageurl) {
        return res.send({ error: 'type, title, description and price required' });
    }

    let sql = `insert into products (title, type, description, price, imageurl) 
    values (?, ?, ?, ?, ?)`;

    con.query(sql, 
        [req.body.title, req.body.type, req.body.description, req.body.price, req.body.imageurl], function(err, rows) {
        if(err)
            return res.send({ err: err });

        return res.send({error: 0, id: rows.insertId});
    });
});

app.delete('/products/:id', function(req, res) {
    let sql = 'delete from products where id = ?';
 
    con.query(sql, req.params.id, function(err, rows) {
        if(err)
            return res.send({ err: err });

        return res.send({ error: 0 });
    });     
});

app.listen( 3000 );