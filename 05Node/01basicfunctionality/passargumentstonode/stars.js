const print = (stars, header) => {
  console.log('*'.repeat(stars));
  console.log(header);
  console.log('*'.repeat(stars));
}
if (require.main == module){
  print(process.argv[2], process.argv[3])
} else {
  console.log('Try to run the stars.js script in the same folder with the amount of stars and a text: \r\n');
  console.log(`For example: `);
  console.log(`"node ${__dirname}/stars.js 50 Starlight"`);
  console.log(`for 50 stars and the word Starlight`);
  module.exports = print
}
