const fs = require('node:fs');


setTimeout(() => {
  console.log('timeout 1');
}, 0);

setImmediate(() => {
  console.log('immediate 1');
});


fs.readFile('./example.txt', () => {
  setTimeout(() => {
    console.log('timeout 2');
  }, 0);

  setImmediate(() => {
    console.log('immediate 2');
  },);
});