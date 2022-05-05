// IIFE -> immediately invoked function expression

for (var i = 0; i < 5; i++) { // We are explicitly using `var` for a reason
  (function(num){

    const time = num * 1000;
    setTimeout(function() {console.log(num);}, time);

  })(i)
} // -> ?