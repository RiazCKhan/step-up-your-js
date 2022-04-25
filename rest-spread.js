// This is a repeat of a problem in a previous
// section. The goal this time around is to take
// the solution and shorten it using our new
// ES2015 functionality.

const obj = {
  groceries: {
    cost: 33.22,
    amount: 1
  },
  rent: {
    cost: 899.00,
    amount: 1,
  },
  paycheck: {
    cost: -2000,
    amount: 2
  },
  restaurantBills: {
    cost: 20,
    amount: 4
  }
};


// ----- Exercise 1 -----

// Shorten the long method chain in this function.
// You might want to use arrow function and
// new Object functions.

// The goal is to:
// Filter out all items with a negative cost.
// Multiply the cost of each remaining item times
// the amount purchased and add it all up.


// ----- REFACTORED -----
const sum = Object.keys(obj)
  .map(key => obj[key])
  .filter(item => item.cost > 0)
  .map(item => item.cost * item.amount)
  .reduce((sum, next) => sum + next);


// ------ ORIGINAL -----
// const sum = Object.keys(obj)
//     .map(function(key) {
//       return obj[key]; 
//     }).filter(function(item) {
//       return item.cost > 0;
//     }).map(function(item) {
//       return item.cost * item.amount;
//     }).reduce(function(sum, next) {
//       return sum + next;
//     }); 


// ----- Exercise 2 -----

// Write the shortest function you possibly can
// that takes in an array and returns a new array
// that is identical to the original array,
// but a different reference. In other words,
// create an array shallow-copy function.

const shallowCopy = (arr) => [...arr]
const org = [1, 2, 3, 4]
const copy = shallowCopy([1, 2, 3, 4])
console.log('this is false -> ', org === copy)
// this is because the new arr points to a different point in memory, i.e., different reference


// ----- Exercise 3 -----

// Write one line of code using the reduce
// function that will turn this array of 0s
// into an array of 0s and 1s.
// NO USING THE CHARACTERS { OR }

function fn() {
  const arr1 = [0, 0, 0];
  // We want to return [0, 1, 0, 1, 0, 1]

  arr1.reduce((accum, next) => [...accum, next, 1], []);

}

fn()