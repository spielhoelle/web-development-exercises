const express = require('express');
const randomstring = require('randomstring');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();

// default options
// app.use('/', express.static(__dirname + '/public'));
app.use(bodyParser.json());

// at startup, we create an empty products.json file, if it does not exist yet

if(!fs.existsSync(__dirname + '/products.json')) {
    fs.writeFileSync(__dirname + '/products.json', '[]', 'utf-8');
}

app.get('/', function(req, res) {
    return res.send({ productsapi: 1.0 });
});

app.post('/product', function(req, res) {
    if(!req.body.type || !req.body.price || !req.body.title || !req.body.description) {
        return res.send({ error: 'type, price, title and description required' });
    }

    if(req.body.type !== 'book' && req.body.type !== 'movie' && req.body.type !== 'music') {
        return res.send({ error: 'type can either be book, movie or music!' });
    }

    fs.readFile(__dirname + '/products.json', function(err, data) {
        if(err) return res.send({ error: err });
        
        var products = null;
        try { products = JSON.parse(data); }
        catch(e) {
            return res.send({ error: e.toString() });
        }

        if(!Array.isArray(products)) {
            return res.send({error: 'products json is invalid'});
        }

        let newProduct = req.body;
        newProduct.id = randomstring.generate(20);
        products.push(newProduct);

        let strProducts = null;
        try {
            strProducts = JSON.stringify( products );
        }
        catch(e) {
            return res.send({ error: e });
        }

        fs.writeFile(__dirname + '/products.json', strProducts, function(err) {
            if(err) return res.send({ error: err });
            return res.send({ error: 0, newProduct: newProduct });
        })
    });    
});

// task
app.delete('/product/:id', function(req, res) {
    if(!req.params.id) {
        return res.send({ error: 'product id required' });
    }

    fs.readFile(__dirname + '/products.json', function(err, data) {
        var products = null;
        try { products = JSON.parse(data); }
        catch(e) {
            return res.send({ error: e });
        }

        let product = null;
        for(let i=0; i<products.length; i++) {
            if(products[i].id === req.params.id) {
                product = products[i];
                products.splice(i, 1);
                break;
            }
        }

        if(!product) return res.send({ error: 'product not found' });
        let strProducts = JSON.stringify(products);
        fs.writeFile(__dirname + '/products.json', strProducts, function(err) {
            if(err) {
                return res.send({ error: err});
            }
            
            return res.send({ error: 0 });
        });
    });
});

app.get('/products', function(req, res) {
    fs.readFile(__dirname + '/products.json', function(err, data) {
        if(err) return res.send({ error: err });

        let products = null;
        try {
            products = JSON.parse(data);
        }
        catch(err) {
            return res.send({ error: err.toString() });
        }

        return res.send({ error: 0, products: products });
    });
});

console.log('started products server.');
app.listen( 3000 );