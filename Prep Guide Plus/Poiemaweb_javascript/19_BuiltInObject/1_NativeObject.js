// 1. 네이티브 객체

// 1-1. Object
// 변수 o에 빈 객체를 저장한다
var o = new Object();
console.log(typeof o + ': ', o);

o = new Object(undefined);
console.log(typeof o + ': ', o);

o = new Object(null);
console.log(typeof o + ': ', o);

// String 객체를 반환한다
// var obj = new String('String');과 동치이다
var obj = new Object('String');
console.log(typeof obj + ': ', obj);
console.dir(obj);

var strObj = new String('String');
console.log(typeof strObj + ': ', strObj);

// Number 객체를 반환한다
// var obj = new Number(123);과 동치이다
var obj = new Object(123);
console.log(typeof obj + ': ', obj);

var numObj = new Number(123);
console.log(typeof numObj + ': ', numObj);

// Boolean 객체를 반환한다.
// var obj = new Boolean(true);과 동치이다
var obj = new Object(true);
console.log(typeof obj + ': ', obj);

var boolObj = new Boolean(123);
console.log(typeof boolObj + ': ', boolObj);

// 1-2. Function
var adder = new Function('a', 'b', 'return a + b');

adder(2, 6);  // 8

// 1-3. Boolean
var foo = new Boolean(true);    // true
var foo = new Boolean('false'); // true

var foo = new Boolean(false); // false
var foo = new Boolean();      // false
var foo = new Boolean('');    // false
var foo = new Boolean(0);     // false
var foo = new Boolean(null);  // false

// 1-12. 원시 타입과 래퍼객체
var str = 'Hello world!';
var res = str.toUpperCase();
console.log(res); // 'HELLO WORLD!'

var num = 1.5;
console.log(num.toFixed()); // 2