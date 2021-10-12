console.log('This script demonstrates how events can be defined and how they are triggered... after some while');

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('mynamedevent', (firstarg, secondarg) => {
  console.log(firstarg, secondarg);
});

setTimeout(() => {
  myEmitter.emit('mynamedevent','Event triggered -', 'after a timeout');
}, 1000);
