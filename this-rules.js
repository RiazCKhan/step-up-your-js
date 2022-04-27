// RULE 1
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