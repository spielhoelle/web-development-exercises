const express = require('express')
const fs = require('fs')
const app = express()

app.post('/', function (req, res) {
  let text = `${new Date()} ${req.query.username}\r\n`;
  fs.appendFile('express/posttofile/post-requests.log', text, function (err) {
    if (err) throw err;
    console.log('Saved!');
    res.send('Username appended to file')
  });
})

app.listen(3000, () => {
  console.log('To append text to the file run:');
  console.log('curl -X POST "http://localhost:3000?username=Alice"');
})

