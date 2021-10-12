console.log('Instead of just running "node" to start the repl you can run this script to alter the behaviour of the repl');
console.log('Try:');
console.log('var a = 5');
console.log('and it will not show undefined');
const repl = require("repl");
let r = repl.start({
  useColors: true,
  ignoreUndefined: true,
  replMode: repl.REPL_MODE_STRICT
})
r.context.util = require("util")
