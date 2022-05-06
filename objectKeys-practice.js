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

sum(object)

const object2 = {
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

const sumList = (obj) => {
  let total = Object.keys(obj)
    .map((key) => obj[key])
    .filter((item) => item.cost > 0)
    .map((item) => item.cost * item.amount)
    .reduce((accum, currentValue) => accum + currentValue)
  return total
}

console.log(sumList(object2))