var a = 'abc';
var b = 'def';

function fn() {
    a = 123;
    var b = 456;
    console.log(a, b)
}

fn();