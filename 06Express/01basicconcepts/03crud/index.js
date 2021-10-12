console.log('Simple CRUD example');
console.log('Hit the endpoints and see the response and the console output');
var express    = require('express');
var app        = express();

console.log(`POST: curl -X POST localhost:3000`);
app.post('/', function(req, res) {
  console.log('Create');
  res.send('Create')
})

console.log(`GET: curl localhost:3000`);
app.get('/', function(req, res) {
  console.log('Read');
  res.send('Read all')
});

console.log(`GET:ID: curl localhost:3000/somerandomid`);
app.get('/:id', function(req, res) {
  console.log('Read');
  res.send(`Read with id:${req.params.id}`)
})

console.log(`PUT: curl -X PUT localhost:3000/somerandomid`);
app.put('/:id', function(req, res) {
  console.log('Update');
  res.send(`Update by id:${req.params.id}`)

})

console.log(`DELETE: curl -X DELETE localhost:3000/somerandomid`);
app.delete('/:id', function(req, res) {
  console.log('Delete');
  res.send(`Delete by id:${req.params.id}`)
});

let port = 3000;
app.listen(port);
console.log('Magic happens on port', port);
