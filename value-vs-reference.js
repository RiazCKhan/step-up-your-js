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

// ----- QUIZ -----
// What will print ?

// 1
// const obj1 = {
//   innerObj: {
//       x: 9
//   }
// };

// const z = obj1.innerObj;

// z.x = 25;

// console.log(obj1.innerObj.x); // 25 because pointing to the same location in memory

// 2
// const obj = {
//   arr: [{ x: 17 }]
// };

// let z = obj.arr;

// z = [{ x: 25 }];

// console.log(obj.arr[0].x); // 17 

// 3 
const obj = {
  arr: []
};

obj.arr.push(17);

console.log(obj.arr === [17]); // FALSE -- they are different references