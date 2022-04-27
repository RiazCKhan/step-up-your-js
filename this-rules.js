// ----- RULE 1 -----
// If the new keyword is used when calling the function, this inside 
// the function is a brand new object created by the JavaScript engine.

function ConstructorExample() {
  console.log(this);
  this.value = 10;
  console.log(this);
}

new ConstructorExample();
// -> ConstructorExample {}
// -> ConstructorExample { value: 10 }

// ----- RULE 2 ----- 
// If apply, call, or bind are used to call a function, this 
// inside the function is the object that is passed in as the argument.

