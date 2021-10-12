// example of a server that reads/creates and deletes files
// in the files/ folder

// ASHOK:
// 1. install express by $ npm install express
// 2. create a folder files/
// 3. put halloworld.txt, hallomars.txt, hallomoon.txt there 

var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function(req, res) {
    return res.send({ fileExample: '1.0' });
});

// show them this here ... 

app.get('/:filename', function(req, res) {
    if(!req.params.filename) {
        return res.send({ error: 'you need to specify a filename!' });
    }

    // ashok, tell them the difference here between fs.readFile and fs.readFileSync
    // ( readFile is non-blocking, readFileSync is blocking )

    let filename = __dirname + '/files/' + req.params.filename;

    fs.readFile(filename, 'utf-8', function(err, data) {
        if(err) {
            return res.send({ error: err });
        }

        return res.send({ error: 0, data: data});
    });
});

// and this ...
app.delete('/:filename', function(req, res) {
    if(!req.params.filename) {
        return res.send({ error: 'you need to specify a filename!' });
    }

    let filename = __dirname + '/files/' + req.params.filename;
    fs.unlink(filename, function(err) {
        if(err) {
            return res.send({ error: err });
        }

        return res.send({ error: 0 });
    });
});

// make this one a task!
app.post('/:filename', function(req, res) {
    if(!req.params.filename) {
        return res.send({ error: 'you need to specify a filename!' });
    }

    let filename = __dirname + '/files/' + req.params.filename;
    fs.writeFile(filename, 'hallo whatever!!!', function(err) {
        if(err) {
            return res.send({ error: err });
        }

        return res.send({ error: 0 });
    });
});



app.listen(3000);