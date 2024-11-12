const arr = [1, 2, [2, 3], 12, 2, [[[[["96"]]]]]];

const flated = arr.flat(5);

flated.splice(0, 1);

Object.freeze()


console.log(arr[-1])
console.log('not flated', {arr});
console.log({flated});