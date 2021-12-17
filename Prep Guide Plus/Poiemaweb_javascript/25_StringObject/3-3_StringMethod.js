// String Method (3)

// 1-1. startsWith()
var str = 'To be, or not to be, that is the question.';

console.log(str.startsWith('To be'));         // true
console.log(str.startsWith('not to be'));     // false
console.log(str.startsWith('not to be', 10)); // true


// 1-2. substring()
const str = 'Hello World'; // str.length == 11

console.log(str.substring(1, 4)); // ell

// 첫번째 인수 > 두번째 인수 : 두 인수는 교환된다.
console.log(str.substring(4, 1)); // ell

// 두번째 인수가 생략된 경우 : 해당 문자열의 끝까지 반환한다.
console.log(str.substring(4)); // o World

// 인수 < 0 또는 NaN인 경우 : 0으로 취급된다.
console.log(str.substring(-2)); // Hello World

// 인수 > 문자열의 길이(str.length) : 인수는 문자열의 길이(str.length)으로 취급된다.
console.log(str.substring(1, 12)); // ello World
console.log(str.substring(11)); // ''
console.log(str.substring(20)); // ''
console.log(str.substring(0, str.indexOf(' '))); // 'Hello'
console.log(str.substring(str.indexOf(' ') + 1, str.length)); // 'World'

// 부분 문자열 바꾸기
function replaceString(oldS, newS, fullS) {
    for (var i = 0; i < fullS.length; ++i) {
      if (fullS.substring(i, i + oldS.length) == oldS) {
        fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length);
      }
    }
    return fullS;
}

replaceString('World', 'Web', 'Brave New World');
// Brave New World -> Brave New Web

// 더 좋은 방법
function replaceString(oldS, newS, fullS) {
    return fullS.split(oldS).join(newS);
}


// 1-3. toLowerCase()
console.log('Hello World!'.toLowerCase()); // hello world!


// 1-4. toString()
var x = new String('Hello world')

console.log(x.toString()) // 'Hello world'


// 1-5. toUpperCase()
console.log('Hello World!'.toUpperCase()); // HELLO WORLD!

// 문자열이 아닌 this의 문자열 변환
// toUpperCase()의 this가 문자열, undefined, null이 아니면 자동으로 문자열을 변환한다.
const a = String.prototype.toUpperCase.call({
    toString: function toString() {
      return 'abcdef';
    }
});

const b = String.prototype.toUpperCase.call(true);

console.log(a, b); // 'ABCDEF TRUE'


// 1-6. trim()
const str = '   foo  ';

console.log(str.trim()); // 'foo'

// String.prototype.replace
console.log(str.replace(/\s/g, ''));   // 'foo'
console.log(str.replace(/^\s+/g, '')); // 'foo  '
console.log(str.replace(/\s+$/g, '')); // '   foo'

// String.prototype.trimStart,trimEnd
console.log(str.trimStart()); // 'foo  '
console.log(str.trimEnd());   // '   foo'


// 1-7. trimEnd()
var str = '   foo  ';

console.log(str.length); // 8

str = str.trimEnd();
console.log(str.length); // 6
console.log(str);        // '   foo'

String.prototype.trimRight.name === "trimEnd"; // true


// 1-8. trimStart()
var str = '   foo  ';

console.log(str.length); // 8

str = str.trimStart();
console.log(str.length); // 5
console.log(str);        // 'foo  '

String.prototype.trimLeft.name === "trimStart"; // true