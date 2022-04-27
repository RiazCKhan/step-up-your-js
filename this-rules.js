// ----- RULE 1 -----
// If the new keyword is used when calling the function, this inside 
// the function is a brand new object created by the JavaScript engine.

function ConstructorExample() {
  console.log('rule 1 example', this);
  this.value = 10;
  console.log('rule 1 example', this);
}

new ConstructorExample();
// -> ConstructorExample {}
// -> ConstructorExample { value: 10 }

// ----- RULE 2 ----- 
// If apply, call, or bind are used to call a function, this 
// inside the function is the object that is passed in as the argument.

function fn() {
  console.log('rule 2 example', this);
}

var obj = {
  value: 5
};

var boundFn = fn.bind(obj);

boundFn(); // -> { value: 5 }
fn.call(obj); // -> { value: 5 }
fn.apply(obj); // -> { value: 5 }

// ----- RULE 3 ----- 
/* 
If a function is called as a method — that is, 
if dot notation is used to invoke the function — 
this is the object that the function is a property of. 
In other words, when a dot is to the left of a function invocation, 
this is the object to the left of the dot. 
(ƒ symbolizes function in the code blocks)
*/

const obj2 = {
  value: 5,
  printThis: function() {
    console.log('rule 3 example', this);
  }
};

obj2.printThis(); // -> { value: 5, printThis: ƒ }

// ----- RULE 4 ----- 
/* 
If a function is invoked as a free function invocation, 
meaning it was invoked without any of the conditions present above, 
this is the global object. In a browser, it’s window.
*/

function fn() {
  console.log('rule 4 example', this);
}

// If called in browser:
fn(); // -> Window {stop: ƒ, open: ƒ, alert: ƒ, ...}