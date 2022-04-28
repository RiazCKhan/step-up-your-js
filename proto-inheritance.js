// ----- Quiz -----

// 1 - What will print? True or False?
// const obj = {};
// console.log(obj.__proto__ === Object.__proto__);

// Answer = False
// console.log(obj.__proto__) --> Null does not exist on the object literal
// console.log(Object.__proto__) --> prints the empty obj

// 2 - What will print? True or False?
// const obj = {};
// console.log(obj.__proto__ === Object.prototype);

// Answer = True
// Null = Null

// 3 - What will print? True or False?
// function Fn() {}
// const obj = new Fn();
// console.log(obj.__proto__ === Object.prototype);

// Answer = False
// console.log(obj.__proto__) // --> !== null
// console.log(Object.prototype) // --> === null 

// 4 - What will print? True or False?
function Fn() {}
const obj = new Fn();
console.log(obj.__proto__ === Fn.prototype);

// Answer = True