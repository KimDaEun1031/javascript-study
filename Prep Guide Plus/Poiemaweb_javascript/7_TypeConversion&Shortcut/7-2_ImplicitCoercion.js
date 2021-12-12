// 2. 암묵적 타입 변환

// 표현식이 모두 문자열 타입이여야 하는 Context
'10' + 2               // '102'
`1 * 10 = ${ 1 * 10 }` // "1 * 10 = 10"

// 표현식이 모두 숫자 타입이여야 하는 Context
5 * '10' // 50

// 표현식이 불리언 타입이여야 하는 Context
!0 // true
if (1) { }

// 2-1. 암묵적 타입 변환 - 문자열 타입으로 변환
console.log(`1 + 1 = ${1 + 1}`);

// 문자열 타입 아닌 값을 문자열 타입으로 암묵적 타입 변환을 수행할 때
// 숫자 타입
console.log(0 + '');          // "0"
console.log(-0 + '');         // "0"
console.log(1 + '');          // "1" 
console.log(-1 + '');         // "-1"
console.log(NaN + '');        // "NaN"
console.log(Infinity + '');   // "Infinity"
console.log(-Infinity + '');  // "-Infinity"
// 불리언 타입
console.log(true + '');       // "true"
console.log(false + '');      // "false"
// null 타입
console.log(null + '');       // "null"
// undefined 타입
console.log(undefined + '');  // "undefined"
// 심볼 타입
console.log((Symbol()) + ''); //  TypeError: Cannot convert a Symbol value to a string
// 객체 타입
console.log(({}) + '');            // "[object Object]"
console.log(Math + '');            // "[object Math]"
console.log([] + '');              // ""
console.log([10, 20] + '');        // "10,20"
console.log((function(){}) + '');  // "function(){}"
console.log(Array + '');           // "function Array() { [native code] }"

// 2-2. 암묵적 타입 변환 - 숫자 타입으로 변환
console.log(1 - '1');   // 0
console.log(1 * '10');  // 10
console.log(1 / 'one'); // NaN
console.log('1' > 0);   // true

// 숫자 타입 아닌 값을 숫자 타입으로 암묵적 타입 변환을 수행할 때
// 문자열 타입
console.log(+'');               // 0
console.log(+'0');              // 0
console.log(+'1');              // 1
console.log(+'string' );        // NaN
// 불리언 타입
console.log(+true);             // 1 
console.log(+false);            // 0
// null 타입
console.log(+null);             // 0
// undefined 타입
console.log(+undefined);        // NaN
// 심볼 타입
console.log(+Symbol());         // TypeError: Cannot convert a Symbol value to a number
// 객체 타입
console.log(+{});               // NaN
console.log(+[]);               // 0
console.log(+[10, 20]);         // NaN
console.log(+(function(){}));   // NaN

// 2-2. 암묵적 타입 변환 - 불리언 타입으로 변환
if ('')    console.log('1');
if (true)  console.log('2');
if (0)     console.log('3');
if ('str') console.log('4');
if (null)  console.log('5'); 
// 2 4

// false로 평가되는 Falsy 값
if (!false)     console.log(false + ' is falsy value');
if (!undefined) console.log(undefined + ' is falsy value');
if (!null)      console.log(null + ' is falsy value');
if (!0)         console.log(0 + ' is falsy value');
if (!NaN)       console.log(NaN + ' is falsy value');
if (!'')        console.log('' + ' is falsy value');

//  true로 평가되는 Truthy 값
// 주어진 인자가 Falsy 값이면 true, Truthy 값이면 false를 반환한다.
function isFalsy(v) {
    return !v;
}
  
// 주어진 인자가 Truthy 값이면 true, Falsy 값이면 false를 반환한다.
function isTruthy(v) {
    return !!v;
}
  
// 모두 true를 반환한다.
console.log(isFalsy(false));
console.log(isFalsy(undefined));
console.log(isFalsy(null));
console.log(isFalsy(0));
console.log(isFalsy(NaN));
console.log(isFalsy(''));

console.log(isTruthy(true));
// 빈 문자열이 아닌 문자열은 Truthy 값이다.
console.log(isTruthy('0'));
console.log(isTruthy({}));
console.log(isTruthy([]));