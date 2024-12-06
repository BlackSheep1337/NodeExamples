function final(someInput: string, callback: (result: string) => void) {
  callback(`${someInput} and terminated by executing callback`);
}


function middleware(someInput: string, callback: (result: string) => void) {
  final(`${someInput} touched by middleware`, callback);
}

function initiate() {
  const someInput = 'hello this is a function';
  middleware(someInput, function (result: string) {
    console.log(result);
  });
}

initiate();