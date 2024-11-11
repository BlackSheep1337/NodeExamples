const fs = require('node:fs');

function someAsyncOperation(callback) {
  fs.readFile('./example.txt', callback);
}

const timeScheduled = Date.now();

setTimeout(() => {
  const daley = Date.now() - timeScheduled;

  console.log(`${daley}ms have passed since i was scheduled`);
}, 100);

someAsyncOperation(() => {
  const startCallBack = Date.now();

  while (Date.now() - startCallBack < 10) {
    
  }
});