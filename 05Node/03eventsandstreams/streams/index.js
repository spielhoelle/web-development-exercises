var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream(`${__dirname}/input.txt`)
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream(`${__dirname}/input.txt.gz`));
  
console.log("File Compressed.");


