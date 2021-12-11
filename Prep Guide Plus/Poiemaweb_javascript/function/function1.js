// 함수 선언식
function square(number) {
    return number * number;
  }
  
// 함수 호출
square(2);

// 함수 표현식

// 기명 함수 표현식(named function expression)
var foo = function multiply(a, b) {
    return a * b;
  };
  
// 익명 함수 표현식(anonymous function expression)
var bar = function(a, b) {
    return a * b;
  };
  
console.log(foo(10, 5)); 
console.log(multiply(10, 5));



var foo = function(a, b) {
    return a * b;
  };
  
var bar = foo;
  
console.log(foo(10, 10));
console.log(bar(10, 10));

