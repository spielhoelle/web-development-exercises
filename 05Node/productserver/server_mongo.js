const express = require('express');
const randomstring = require('randomstring');
const app = express();

app.use(express.json());
app.get('/products', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if(err) return res.send({ error: err });

        const dbo = db.db('productserver');
        
        if(!req.query.q) {        
            dbo.collection('products').find({}).toArray(function(err, dbres) {
                if(err) return res.send({ error: err });
                db.close();
                return res.send( dbres );
            });
        }
        else {

            let search = {
                $or: [
                        {title: new RegExp(req.query.q,'i')}, 
                        {description: new RegExp(req.query.q,'i')}
                     ]
                };


            dbo.collection('products').find(search).toArray(function(err, dbres) {
                if(err) return res.send({ error: err });

                db.close();
                return res.send(dbres);
            });
        }
    });
});

app.post('/products', function(req, res) {
    if(!req.body.type || !req.body.title || !req.body.description || !req.body.price || !req.body.imageurl) {
        return res.send({ error: 'invalid request' });
    }

    MongoClient.connect(url, function(err, db) {
        if(err) return res.send({ error: err });

        var dbo = db.db('productserver');
        var newProduct = {
            title: req.body.title,
            description: req.body.description,
            type: req.body.type,
            price: req.body.price,
            imageurl: req.body.imageurl
        };

        dbo.collection('products').insertOne(newProduct, function(err, dbres) {
            if(err) return res.send({ error: err });

            db.close();
            return res.send({ error: 0, insertId: dbres.insertedId });
        });
    });
});

// Query Parameter: halloworld.com/users?abc=123&xyz=789
//
// Parameter: halloworld.com/users/123
//            halloworld.com/orders/456
// task: implement delete method
// take a look at devugees8/nodejs/sql/nodesql/main.js

app.delete('/products/:id', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if(err) return res.send({ error: err });

        var dbo = db.db('productserver');
        let mongoId = null;
        try {
            mongoId = new mongo.ObjectId(req.params.id);
        }
        catch(err) {
            return res.send({ error: err });
        }

        dbo.collection('products').deleteOne({'_id': mongoId}, function(err, dbres) {
            if(err) return res.send({ error: err });

            db.close();
            return res.send(dbres);
        });
    });
});

app.put('/student/:id', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if(err) return res.send({ error: err });

        var dbo = db.db('productserver');
        let mongoId = null;
        try {
            mongoId = new mongo.ObjectId(req.params.id);
        }
        catch(err) {
            return res.send({ error: err });
        }    

        let newValues = { $set: req.body };
        dbo.collection('products').updateOne({_id: mongoId}, newValues, function(err, dbres) {
            if(err) return res.send({ error: err });
            
            db.close();
            return res.send({ error: 0, result: dbres });
        });
    });
});

app.listen(3000);