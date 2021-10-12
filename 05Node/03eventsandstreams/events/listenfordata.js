console.log(`Fetching big json and listen for the 'data' event`);
const http = require('http');
http.get('http://jsonplaceholder.typicode.com/posts', (res) => {
  let rawData = '';
  res.on('data', (chunk) => {
    rawData += chunk;
    console.log('Data event triggered, raw data received');
  });
  res.on('end', () => {
    const parsedData = JSON.parse(rawData);
    console.log('done');
  });
});
