// String Method (1)

// 1-1. charAt()
const str = 'Hello';

console.log(str.charAt(0)); // H
console.log(str.charAt(1)); // e
console.log(str.charAt(2)); // l
console.log(str.charAt(3)); // l
console.log(str.charAt(4)); // o
// 지정한 index가 범위(0 ~ str.length-1)를 벗어난 경우 빈문자열을 반환한다.
console.log(str.charAt(5)); // ''

// 문자열 순회. 문자열은 length 프로퍼티를 갖는다.
for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i)); // Hello
}

// String 객체는 유사 배열 객체로 배열과 유사하게 접근할 수 있다.
for (let i = 0; i < str.length; i++) {
  console.log(str[i]); // Hello
}


// 1-2. charCodeAt()
let str = 'ABC';
console.log(str.charCodeAt(0)); // A = 65

for (let i = 0; i < str.length; i++) {
  console.log(str.charCodeAt(i)); // (A)65 (B)66 (C)67
}


// 1-3. concat()
console.log('Hello '.concat('Lee')); // Hello Lee

var greetList = ['Hello', ' ', 'Venkat', '!'];
console.log("".concat(...greetList)); // "Hello Venkat!"

console.log("".concat({}));   // [object Object]
console.log("".concat([]));   // ""
console.log("".concat(null)); // "null"
console.log("".concat(true)); // "true"
console.log("".concat(4, 5)); // "45"


// 1-4. fromCharCode()
String.fromCharCode(65, 66, 67);  // "ABC"
String.fromCharCode(0x2014)       // "—"
String.fromCharCode(0x12014)      // 숫자 '1'은 무시해서 "—"


// 1-5. includes()
var str = 'To be, or not to be, that is the question.';

console.log(str.includes('To be'));       // true
console.log(str.includes('question'));    // true
console.log(str.includes('nonexistent')); // false
console.log(str.includes('To be', 1));    // false
console.log(str.includes('TO BE'));       // false


// 1-6. indexOf()
const str = 'Hello World';

console.log(str.indexOf('l'));  // 2
console.log(str.indexOf('or')); // 7
console.log(str.indexOf('or' , 8)); // -1

if (str.indexOf('Hello') !== -1) {
  // 문자열 str에 'hello'가 포함되어 있는 경우에 처리할 내용
}

// ES6: String.prototype.includes
if (str.includes('Hello')) {
  // 문자열 str에 'hello'가 포함되어 있는 경우에 처리할 내용
}

// 존재 여부 확인
'Blue Whale'.indexOf('Blue') !== -1; // true
'Blue Whale'.indexOf('Bloe') !== -1; // false

// 문자열 내의 특정 문자 숫자 세기
var str = 'To be, or not to be, that is the question.';
var count = 0;
var pos = str.indexOf('e'); //pos = 4

while (pos !== -1) {
  count++;
  pos = str.indexOf('e', pos + 1); // 첫 번째 e 이후의 인덱스부터 e를 찾는다.
}

console.log(count); // 4


// 1-7. lastIndexOf()
const str = 'Hello World';

console.log(str.lastIndexOf('World')); // 6
console.log(str.lastIndexOf('l'));     // 9
console.log(str.lastIndexOf('o', 5));  // 4
console.log(str.lastIndexOf('o', 8));  // 7
console.log(str.lastIndexOf('l', 10)); // 9

console.log(str.lastIndexOf('H', 0));  // 0
console.log(str.lastIndexOf('W', 5));  // -1
console.log(str.lastIndexOf('x', 8));  // -1


// 1-8. localCompare()
'a'.localeCompare('c'); // -1 
'check'.localeCompare('against'); // 1 
'a'.localeCompare('a'); // 0

// 배열 정렬
var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
items.sort((a, b) => a.localeCompare(b)); 
// ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']

// locales 매개변수 사용
console.log('ä'.localeCompare('z', 'de')); // 독일어
console.log('ä'.localeCompare('z', 'sv')); // 스웨덴어

// options 매개변수 사용
console.log('ä'.localeCompare('a', 'de', { sensitivity: 'base' })); // 0
console.log('ä'.localeCompare('a', 'sv', { sensitivity: 'base' })); // 1

