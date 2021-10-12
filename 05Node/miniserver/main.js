const express = require('express');
const app = express();
const path = require('path');
var   dateFormat = require('dateformat');
var   bodyParser = require('body-parser');
var   urlencodedParser = bodyParser.urlencoded({extended:false});
var   MongoClient = require('mongodb').MongoClient;
var   url = "mongodb://localhost:27017/devugees";
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

function timeStamp() {
    var now = new Date();
    return dateFormat(now, "dd-mm-yyyy-HH:MM:ss:l-dddd");
}

function q(p) { console.log( timeStamp() + ' : ' + p); }

app.get('/', function(req, res) {
    return res.send({ name : "devugees mini-server" });
});

app.post('/users', function(req, res) {
    if(!req.body.name || !req.body.username || !req.body.email) {
        return res.send({error: "You need to specify a name, a username and an email"});
    }

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var user = {
            name: req.body.name,
            username: req.body.username,
            email: req.body.email
        };

        db.collection("users").find({email:req.body.email}).toArray(
            function(err, result) {
                if(err)
                    return res.send({ error: "An error occured in MongoDB" });

                if(result.length > 0)
                    return res.send({ error: "User already exists" });

                db.collection("users").insert(
                    user,
                    function(err, result) {
                        if(err)
                            return res.send({ error: "An error occured in MongoDB" });

                        q('new user added by ' + req.connection.remoteAddress + ' : ' + JSON.stringify(user));
                        db.close();
                        return res.send({ error: "0" });
                    });
                db.close();
            });
    });

});

app.post('/comments', function(req, res) {
    if(!req.body.name || !req.body.email || !req.body.body) {
        return res.send({ error: "You need to specify a name, an email and a body" });
    }

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var comment = {
            name: req.body.name,
            email: req.body.email,
            body: req.body.body
        };
        db.collection("comments").insert(
            comment,
            function(err, result) {
                if(err)
                    return res.send({ error: "An error occured in MongoDB" });

                q('new comment added by ' + req.connection.remoteAddress + ' : ' + JSON.stringify(comment));
                return res.send({ error: "0" });
            });
    });

});

app.get('/users', function(req, res) {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.collection("users").find({}).toArray(
            function(err, result) {
                if(err)
                    return res.send({ error: "An error occured in MongoDB" });

                db.close();
                return res.send( result );
            });
    });
});

app.get('/comments', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.collection("comments").find({}).toArray(
            function(err, result) {
                if(err)
                    return res.send({ error: "An error occured in MongoDB" });

                db.close();
                return res.send( result );
            });
    });
});

app.listen(3050, function() {
    q('listening on port 3050');
});
