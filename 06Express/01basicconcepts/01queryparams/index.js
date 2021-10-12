const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log(`Query param: ${req.query}`);
  res.send(`Hello ${req.query.username}!`)
})

app.listen(3000, () => {
  console.log('To hit the endpoint, run:');
  console.log('curl "http://localhost:3000?username=MrSnow"');
})
