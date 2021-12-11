// 3. Number Method

// 3-1. isFinite()
Number.isFinite(Infinity);  // false
Number.isFinite(NaN);       // false
Number.isFinite(-Infinity); // false

Number.isFinite(0);         // true
Number.isFinite(2e64);      // true

Number.isFinite('0');       // false
                            // 전역함수 isFinite('0')라면 true
Number.isFinite(null);      // false
                            // 전역함수 isFinite(null)라면 true

// 3-2. isInteger()
Number.isInteger(0);         // true
Number.isInteger(1);         // true
Number.isInteger(-100000);   // true
Number.isInteger(99999999999999999999999); // true

Number.isInteger(0.1);       // false
Number.isInteger(Math.PI);   // false

Number.isInteger(NaN);       // false
Number.isInteger(Infinity);  // false
Number.isInteger(-Infinity); // false
Number.isInteger('10');      // false
Number.isInteger(true);      // false
Number.isInteger(false);     // false
Number.isInteger([1]);       // false

// 3-3. isNaN()
Number.isNaN(NaN);        // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0)       // true

// 전역 함수 isNaN()로 하면 모두 true
Number.isNaN("NaN");      // false
Number.isNaN(undefined);  // false
Number.isNaN({});         // false
Number.isNaN("blabla");   // false

// 모두 false
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");

// 3-4. isSafeInteger()
Number.isSafeInteger(3);                    // true
Number.isSafeInteger(Math.pow(2, 53));      // false
Number.isSafeInteger(Math.pow(2, 53) - 1);  // true
Number.isSafeInteger(NaN);                  // false
Number.isSafeInteger(Infinity);             // false
Number.isSafeInteger('3');                  // false
Number.isSafeInteger(3.1);                  // false
Number.isSafeInteger(3.0);                  // true

// 3-5. toExponential()
var numObj = 77.1234;

console.log(numObj.toExponential());  // logs 7.71234e+1
console.log(numObj.toExponential(4)); // logs 7.7123e+1
console.log(numObj.toExponential(2)); // logs 7.71e+1
console.log(77.1234.toExponential()); // logs 7.71234e+1
console.log(77 .toExponential());     // logs 7.7e+1

// 3-6. toFixed()
numObj.toFixed();       // Returns '12346': 소수점 이하 반올림
numObj.toFixed(1);      // Returns '12345.7': 반올림, 소숫점 이하 1자리수 유효
numObj.toFixed(6);      // Returns '12345.678900': 빈 공간을 0으로 채운다.
(1.23e+20).toFixed(2);  // Returns '123000000000000000000.00'
(1.23e-10).toFixed(2);  // Returns '0.00'
2.34.toFixed(1);        // Returns '2.3'
2.35.toFixed(1);        // Returns '2.4'. 이 경우에는 올림을 한다.
-2.34.toFixed(1);       // Returns -2.3 (연산자의 적용이 우선이기 때문에, 음수의 경우 문자열로 반환하지 않는다.)
(-2.34).toFixed(1);     // Returns '-2.3' (괄호를 사용할 경우 문자열을 반환한다.)

// 3-7. toPrecision()
var numObj = 5.123456;

console.log(numObj.toPrecision());    // logs '5.123456' 전체자리수 유효
console.log(numObj.toPrecision(5));   // logs '5.1235' 전체 5자리수 유효, 나머지 반올림
console.log(numObj.toPrecision(2));   // logs '5.1' 전체 1자리수 유효, 나머지 반올림
console.log(numObj.toPrecision(1));   // logs '5' 반올림

numObj = 0.000123

console.log(numObj.toPrecision());    // logs '0.000123'
console.log(numObj.toPrecision(5));   // logs '0.00012300' 
console.log(numObj.toPrecision(2));   // logs '0.00012'
console.log(numObj.toPrecision(1));   // logs '0.0001'

// 지수 표기법으로 반환
var numObj = 15345.6789;

// 전체자리수 유효
console.log(numObj.toPrecision());   // '12345.6789'
// 전체 1자리수 유효, 나머지 반올림
console.log(numObj.toPrecision(1));  // '2e+4'
// 전체 2자리수 유효, 나머지 반올림
console.log(numObj.toPrecision(2));  // '1.5e+4'
// 전체 3자리수 유효, 나머지 반올림
console.log(numObj.toPrecision(3));  // '1.53e+4'
// 전체 6자리수 유효, 나머지 반올림
console.log(numObj.toPrecision(6));  // '12345.7'

// 3-8. toString()
var count = 10;
console.log(count.toString());   // '10'
console.log((17).toString());    // '17'
console.log(17 .toString());     // '17'
console.log((17.2).toString());  // '17.2'

var x = 16;
console.log(x.toString(2));       // '10000'
console.log(x.toString(8));       // '20'
console.log(x.toString(16));      // '10'

console.log((254).toString(16));  // 'fe'
console.log((-10).toString(2));   // '-1010'
console.log((-0xff).toString(2)); // '-11111111'

// 3-8. valueOf()
var numObj = new Number(10);
console.log(typeof numObj); // object

var num = numObj.valueOf();
console.log(num);           // 10
console.log(typeof num);    // number





