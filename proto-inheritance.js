// ----- Quiz -----

// ----- 1 - What will print? True or False?
// const obj = {};
// console.log(obj.__proto__ === Object.__proto__);

// Answer = False
// console.log(obj.__proto__) --> Null does not exist on the object literal
// console.log(Object.__proto__) --> prints the empty obj

// ----- 2 - What will print? True or False?
// const obj = {};
// console.log(obj.__proto__ === Object.prototype);

// Answer = True
// Null = Null

// ----- 3 - What will print? True or False?
// function Fn() {}
// const obj = new Fn();
// console.log(obj.__proto__ === Object.prototype);

// Answer = False
// console.log(obj.__proto__) // --> !== null
// console.log(Object.prototype) // --> === null 

// ----- 4 - What will print? True or False?
// function Fn() {}
// const obj = new Fn();
// console.log(obj.__proto__ === Fn.prototype);

// Answer = True

// ----- 5 - What will print? True or False?
// function Fn() {}
// const obj = new Fn();
// console.log(obj.__proto__.__proto__ === Object.prototype);

// Answer = true
// Neither of these values exist

// ----- 6 - What will print?
// function Fn() {}
// const obj = new Fn();
// console.log(obj.__proto__.__proto__.__proto__);

// Answer = null
// console.log(obj.__proto__) // --> first level above object literal === {}
// console.log(obj.__proto__.__proto__) // --> second level === new Functions

// ----- 7 - What will print? True or False?
// function Fn() {}
// const obj = Object.create(Fn.prototype);
// console.log(obj.__proto__ === Fn.prototype);

// Answer = true

// ----- 8 - What will print? True or False?
// function Fn() {}
// const obj = Object.create(Fn);
// console.log(obj.__proto__ === Fn.prototype);

// Answer = false
// console.log(obj) // --> Fn {}
// console.log(Fn.prototype) // --> {}

// ----- 9 - What will print? True or False?
// function Fn() {}
// const obj1 = new Fn();
// const obj2 = Object.create(obj1);
// console.log(obj2.__proto__.__proto__ === Fn.prototype);

// Answer = true
// console.log(obj2.__proto__.__proto__) // --> {}

// ----- 10 - What will print? True or False?
function Fn() {}
const obj1 = new Fn();
const obj2 = Object.create(obj1);
console.log(obj2.__proto__.__proto__.__proto__ === Object.prototype);