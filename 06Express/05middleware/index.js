console.log(`Sometimes you want to run something on every or a subset of routes`);
console.log(`Eg. log every request or handle authentication`);
console.log(`run curl localhost:3000 to see the date logged for EVERY route`);

var express = require('express')
var app = express()

var myLogger = function (req, res, next) {
  console.log(`Timestamp ${Date.now()}`)
  next()
}

//app.use runs the specified middlewar myLogger on every route
app.use(myLogger)

app.get('/', function (req, res) {
  res.send('/ route got hit and something got logged on the server')
})

app.listen(3000)
