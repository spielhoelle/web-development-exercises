console.log(`Run two servers and pass some numbers to server 1`)
console.log(`Run:`);
console.log(`node index.js`);
console.log(`node index2.js`);
console.log("");
console.log(`Then hit server1 with some parameters:`);
console.log(`curl localhost:3000/24/56`);
console.log(`should return 1344`);

const http = require('http')
const port = 3000
var httpRequest = require('request');

const requestHandler = (request, response) => {
  console.log("Request is hitting SERVER 1", request.url);
  httpRequest(`http://localhost:4000${request.url}`, function (error, httpResponse, body) {
    console.log('Result received on SERVER 1', body); 
    response.write(`Response send back to the Client at the very end\n`)
    response.end(body)
  });
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  console.log(`server is listening on ${port}`)
})
