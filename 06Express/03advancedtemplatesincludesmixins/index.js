var path = require('path');
console.log(`Advanced express pug example with includes and layout`);
var express = require('express')
var app = express()
app.use(express.static('./node_modules'))

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('pages/index')
})
app.get('/about', function (req, res) {
  res.render('pages/about')
})
app.get('/pricing', function (req, res) {
  res.render('pages/pricing')
})

app.listen(3000)
