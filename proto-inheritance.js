// ----- Quiz -----

// 1 - What will print? True or False?
// const obj = {};
// console.log(obj.__proto__ === Object.__proto__);

// Answer = False
// console.log(obj.__proto__) --> Null does not exist on the object literal
// console.log(Object.__proto__) --> prints the empty obj

// 2 - What will print? True or False?
const obj = {};
console.log(obj.__proto__ === Object.prototype);