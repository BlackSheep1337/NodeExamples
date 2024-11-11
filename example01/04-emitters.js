const EventEmitter = require('node:events');

class MyEmmiter extends EventEmitter {
  constructor() {
    super();
    process.nextTick(() => {
      this.emit('event');
    });
  }
}

const myEmmiter = new MyEmmiter();
myEmmiter.on('event', () => {
  console.log('an event occured!');
});