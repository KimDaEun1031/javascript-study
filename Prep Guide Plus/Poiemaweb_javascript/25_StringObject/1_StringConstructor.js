// 1. String Constructor

let strObj = new String('Lee');
console.log(strObj); // String {0: 'L', 1: 'e', 2: 'e', length: 3, [[PrimitiveValue]]: 'Lee'}

strObj = new String(1);
console.log(strObj); // String {0: '1', length: 1, [[PrimitiveValue]]: '1'}

strObj = new String(undefined);
console.log(strObj); // String {0: 'u', 1: 'n', 2: 'd', 3: 'e', 4: 'f', 5: 'i', 6: 'n', 7: 'e', 8: 'd', length: 9, [[PrimitiveValue]]: 'undefined'}

// new 연산자를 사용하지 않고 String 생성자 함수를 호출
var x = String('Lee');

console.log(typeof x, x); // string Lee

// 일반적 문자열 사용
const str = 'Lee';
const strObj = new String('Lee');

console.log(str == strObj);  // true
console.log(str === strObj); // false

console.log(typeof str);    // string
console.log(typeof strObj); // object