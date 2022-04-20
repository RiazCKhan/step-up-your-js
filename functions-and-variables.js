// ----- VARIABLE SCOPE -----

// What will the following code print?
// ----- Exercise 1 -----
var a = 'abc';
var b = 'def';

function fn() {
  a = 123;
  var b = 456;
  console.log(a, b)
}
fn();

// a = 123
// b = 456

// ----- Exercise 2 -----
var a = 'abc';
var b = 'def';

function fn() {
  a = 123;
  var b = 456;
}
fn();

console.log(a, b);

// a = 123
// b = 'def'

// ----- Exercise 3 -----
var x = 5;
var y = 'abc';

function outerFn() {
    var x = 10;
    y = 'xyz';

    function innerFn() {
        x = 20;
        var y = 'jkl';
    }

    innerFn();

    console.log(x);
    console.log(y);
}

outerFn();
// x = 20
// y = 'xyz'

console.log(x); // x = 5
console.log(y); // y = 'xyz'

