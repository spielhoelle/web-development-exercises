console.log('This script handles the exiting of a node process');

//fetch custom error invoke before exit
process.on('uncaughtException', (err) => {
  console.error(err);
  process.exit(1)
})
//
//run code on process exit
process.on('exit', (code) => {
  console.log('exit', code);
})


process.stdin.resume();
// This causes an error
console.dog();
