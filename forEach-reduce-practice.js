// Sum Arr

const array1 = [1, 2, 3, 4, 5];

function reduceAdd(numbers) {
  return numbers.reduce((accum, currentValue, currentIndex, array) => {
    return accum + currentIndex
  }, 0) // inital value necessary to start at 0
}

function forEachAdd(numbers) {
  return numbers.forEach((num, index, arr) => {
    return num + num[i]
  })
}

console.log(forEachAdd(array1))