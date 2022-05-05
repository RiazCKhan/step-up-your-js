// map item, index, arr

const data = ['Hello', 'there!', 'How', 'are', 'you', 'doing?']

function upperCase(item, index, arr) {
  return arr[index][0].toUpperCase() + item.substring(1)
}

console.log(data.map(upperCase))
