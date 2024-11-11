function apiCall(args, callback) {
  if (typeof args !== 'string') {
    return process.nextTick(
      callback,
      new TypeError('argument should be string')
    );
  }
}

apiCall(1, () => {
  console.log('No errors');
});

let bar;

function someAsyncApiCall(callback) {
  process.nextTick(callback);
}


someAsyncApiCall(() => {
  console.log('bar', bar);
});

bar = 1;
