const object = {
  val1: 4,
  val2: 5,
  val3: 6,
};

// Finish this:
const sum = function (obj) {
  let value = Object.keys(obj)
    .map((key) => obj[key] * 3)
    .reduce((accum, nextValue) => {
      return accum + nextValue
    }, 0)
  return value
}

console.log(sum(object))