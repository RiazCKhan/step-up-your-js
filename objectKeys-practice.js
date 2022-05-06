const object = {
  val1: 4,
  val2: 5,
  val3: 6,
};

// Finish this:
const sum = function(obj){
  let values = Object.keys(obj)
  .map((key) => obj[key] * 3)
  // .reduce((value, nextItem) => {
  //   return value 
  // }, 0)

}

sum(object)