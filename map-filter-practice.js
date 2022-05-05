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

// const evenOdd = data2.map((item, index, arr) => {
//   if (item % 2 === 0) {
//     return arr[index] = 'even'
//   }
//   else {
//     return arr[index] = 'odd'
//   }
// })

function evenOdd(numbers) {
  return numbers.map((num) => {
    if (num % 2 === 0) {
      return 'even'
    }
    return 'odd'
  })
}

// console.log(evenOdd(data2))

function isEven(numbers) {
  return numbers.filter((num) => {
    if (num % 2 == 0) {
      return 'even'
    }
  })
}

console.log(isEven(data2))

const ashFamily = [
  {
    familyMember: 'Uncle',
    age: 52,
    location: 'San Diego, CA'
  }, {
    familyMember: 'Grandpa',
    age: 84,
    location: 'San Francisco, CA'
  }, {
    familyMember: 'Sister',
    age: 19,
    location: 'New York, NY'
  }
]

function getOlderFamily(family){



}