// map item, index, arr

const data = ['Hello', 'there!', 'How', 'are', 'you', 'doing?']

// function upperCase(item, index, arr) {
//   return arr[index][0].toUpperCase() + item.substring(1)
// }

// data.map(item, index, arr => arr[index][0].toUpperCase() + item.substring(1))

const toUpperCase = data.map((item, index, arr) => arr[index][0].toUpperCase() + item.substring(1));

// console.log(toUpperCase)

const data2 = [1, 2, 3, 4, 5]

// function evenOdd(item, index, arr) {
//   if (item % 2 === 0) {
//    return arr[index] = 'even'
//   }
//   else {
//     return arr[index] = 'odd'
//   }
// }

const evenOdd = data2.map((item, index, arr) => {
  if (item % 2 === 0) {
    return arr[index] = 'even'
  }
  else {
    return arr[index] = 'odd'
  }
})

console.log(evenOdd)