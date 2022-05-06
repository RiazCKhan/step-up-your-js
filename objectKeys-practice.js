const object = {
  val1: 4,
  val2: 5,
  val3: 6,
};

// Finish this:
const sum = function(obj){
  let values = Object.keys(obj)
  .map((key) => console.log(obj[key]))
}

sum(object)