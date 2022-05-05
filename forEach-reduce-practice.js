// Sum Arr

function add(numbers) {
  return numbers.reduce((accum, currentValue, currentIndex, array) => accum + currentIndex)
}

console.log(add([1, 2, 3, 4, 5, 6]))