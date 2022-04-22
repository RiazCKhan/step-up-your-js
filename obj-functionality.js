// Change this getter method such that
// when we attempt to access the property
// 'val', it multiplies by 2 every time.

// Ex:
/*
console.log(obj.val); -> 2
console.log(obj.val); -> 4
console.log(obj.val); -> 8
console.log(obj.val); -> 16
*/

const obj = {
  _val: 1,
  get val() {
      return this._val = this._val * 2
  }
};

console.log(obj.val)

// Note: Getter Methods still require a 'return'
// 'this' can be used to reference variables within the same OBJ
// Getter Methods do not require a parenthese() when called