// Sum Arr

const array1 = [1, 2, 3, 4, 5];

function reduceAdd(numbers) {
  return numbers.reduce((accum, currentValue, currentIndex, array) => {
    return accum + currentIndex
  }, 0) // inital value necessary to start at 0
}

function forEachAdd(numbers) {
  let total = 0
  numbers.forEach((num) => {
    total += num
  })
  return total;
}

const array2 = ['abc', 'def']

function forEachToObject(arr) {
  let object = {}
  arr.forEach((str) => {
    object[str] = 'true'
  })
  return object
}

console.log(forEachToObject(array2))

const array3 = ['abc', 17, 'def']
const array4 = ['def', 'abc', null, 17, 24]

function isSubset(arr1, arr2) {
    
}