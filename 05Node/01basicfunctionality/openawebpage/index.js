console.log('This script opens a website and prints its content to the page');
var request = require('request');
request('http://www.duckduckgo.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

