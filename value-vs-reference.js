// Given the following code
// what will print to console?

function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: 'John',
    age: 50
  };

  return person;
}

const personObj1 = {
  name: 'Alex',
  age: 30
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> { name: 'Alex', age: 25 }
// Note the FN changes the value of age in the personObj1 
// THEN personObj1 is reassigned to John
console.log(personObj2); // -> { name: 'John', age: 50 }