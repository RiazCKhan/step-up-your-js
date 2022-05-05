// Sum Arr

function add(numbers) {
  return numbers.reduce((accum, currentValue, currentIndex, array) => {
    return accum + currentIndex
  }, 0) // inital value necessary to start at 0
}

console.log(add([1, 2, 3, 4, 5, 6]))