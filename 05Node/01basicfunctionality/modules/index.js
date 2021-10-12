console.log("How modules are automatically resolved");

console.log('Module structure. Check out the paths array');
console.log( module);

console.log('stuff from node_modules is automatically resolved');

require('find-me')

// This check if the file exists but execute it
require.resolve('find-me')
