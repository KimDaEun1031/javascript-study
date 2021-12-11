var score;  // 변수의 선언
score = 80; // 값의 할당
score = 90; // 값의 재할당
score;      // 변수의 참조

// 변수의 선언과 할당
var average = (50 + 100) / 2;

// 2-1. 변수의 선언
var x = 3;        // NG
var score = 100;  // OK

var PI = 3.141592653589793; // 상수
var radius = 2; // 변수

// 명명 규칙
var name;     // 선언
name = 'Lee'; // 할당

var age = 30; // 선언과 할당

var person = 'Lee',
    address = 'Seoul',
    price = 200;

var price = 10;
var tax   = 1;
var total = price + tax;

// 값을 할당하지 않는 변수
var x;
console.log(x); // undefined
console.log(y); // ReferenceError

// 2-2. 변수의 중복 선언
var x = 1;
console.log(x); // 1

// 변수의 중복 선언
var x = 100;
console.log(x); // 100

// 2-3. 동적 타이핑(Dynamic Typing)
var foo;

console.log(typeof foo);  // undefined

foo = null;
console.log(typeof foo);  // object

foo = {};
console.log(typeof foo);  // object

foo = 3;
console.log(typeof foo);  // number

foo = 3.14;
console.log(typeof foo);  // number

foo = 'Hi';
console.log(typeof foo);  // string

foo = true;
console.log(typeof foo);  // boolean

// 2-4. 변수 호이스팅 (Variable Hoisting)
console.log(foo); // ① undefined
var foo = 123;
console.log(foo); // ② 123
{
  var foo = 456;
}
console.log(foo); // ③ 456