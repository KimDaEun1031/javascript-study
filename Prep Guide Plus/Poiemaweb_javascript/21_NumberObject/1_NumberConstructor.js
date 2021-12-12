// 1. Number Constructor

// Number 객체 생성
new Number(value);

// NaN
var x = new Number(123);
var y = new Number('123');
var z = new Number('str');

console.log(x); // 123
console.log(y); // 123
console.log(z); // NaN

// 타입 변환
var x = Number('123');

console.log(typeof x, x); // number 123

// 기본 사용
var x = 123;
var y = new Number(123);

console.log(x == y);  // true
console.log(x === y); // false

console.log(typeof x); // number
console.log(typeof y); // object