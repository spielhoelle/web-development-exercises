console.log('Modules will be required just once');
require('./keyboard');
console.log('Wrapped in a function call they can be printed multiple times');
require('./keyboard2')();
require('./keyboard2')();
