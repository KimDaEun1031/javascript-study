// 2. Math Method

// 2-1. abs()
Math.abs('-1');     // 1
Math.abs(-2);       // 2
Math.abs(null);     // 0
Math.abs('');       // 0
Math.abs([]);       // 0
Math.abs([2]);      // 2
Math.abs([1,2]);    // NaN
Math.abs({});       // NaN
Math.abs('string'); // NaN
Math.abs();         // NaN

// 2-2. round()
Math.round( 20.49); //  20
Math.round( 20.5 ); //  21
Math.round( 42   ); //  42
Math.round(-20.5 ); // -20
Math.round(-20.51); // -21

Math.round(1.4);  // 1
Math.round(1.6);  // 2
Math.round(-1.4); // -1
Math.round(-1.6); // -2
Math.round(1);    // 1
Math.round();     // NaN

// 2-3. ceil()
Math.ceil(.95);    // 1
Math.ceil(4);      // 4
Math.ceil(7.004);  // 8
Math.ceil(-0.95);  // -0
Math.ceil(-4);     // -4
Math.ceil(-7.004); // -7

Math.ceil(1.4);  // 2
Math.ceil(1.6);  // 2
Math.ceil(-1.4); // -1
Math.ceil(-1.6); // -1
Math.ceil(1);    // 1
Math.ceil();     // NaN

//  ceil() - 소수점 처리 클로저
// Closure
(function() {

    function decimalAdjust(type, value, exp) {
    
      if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
      }
      value = +value;
      exp = +exp;
  
      if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
      }
  
      value = value.toString().split('e');
      value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
  
      value = value.toString().split('e');
      return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }
  
    if (!Math.round10) {
      Math.round10 = function(value, exp) {
        return decimalAdjust('round', value, exp);
      };
    }
    
    if (!Math.floor10) {
      Math.floor10 = function(value, exp) {
        return decimalAdjust('floor', value, exp);
      };
    }
  
    if (!Math.ceil10) {
      Math.ceil10 = function(value, exp) {
        return decimalAdjust('ceil', value, exp);
      };
    }
  })();
  
  // Round
  Math.round10(55.55, -1);   // 55.6
  Math.round10(55.549, -1);  // 55.5
  Math.round10(55, 1);       // 60
  Math.round10(54.9, 1);     // 50
  Math.round10(-55.55, -1);  // -55.5
  Math.round10(-55.551, -1); // -55.6
  Math.round10(-55, 1);      // -50
  Math.round10(-55.1, 1);    // -60
  
  // Floor
  Math.floor10(55.59, -1);   // 55.5
  Math.floor10(59, 1);       // 50
  Math.floor10(-55.51, -1);  // -55.6
  Math.floor10(-51, 1);      // -60
  
  // Ceil
  Math.ceil10(55.51, -1);    // 55.6
  Math.ceil10(51, 1);        // 60
  Math.ceil10(-55.59, -1);   // -55.5
  Math.ceil10(-59, 1);       // -50

// 2-4. floor()
Math.floor( 45.95); //  45
Math.floor( 45.05); //  45
Math.floor(  4   ); //   4
Math.floor(-45.05); // -46
Math.floor(-45.95); // -46

Math.floor(1.9);  // 1
Math.floor(9.1);  // 9
Math.floor(-1.9); // -2
Math.floor(-9.1); // -10
Math.floor(1);    // 1
Math.floor();     // NaN

// floor() - 십진수 조절 클로저
// Closure
(function() {

    function decimalAdjust(type, value, exp) {
  
      if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
      }
      value = +value;
      exp = +exp;
  
      if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
      }
  
      value = value.toString().split('e');
      value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
  
      value = value.toString().split('e');
      return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }
  
  
    if (!Math.round10) {
      Math.round10 = function(value, exp) {
        return decimalAdjust('round', value, exp);
      };
    }
  
    if (!Math.floor10) {
      Math.floor10 = function(value, exp) {
        return decimalAdjust('floor', value, exp);
      };
    }
  
    if (!Math.ceil10) {
      Math.ceil10 = function(value, exp) {
        return decimalAdjust('ceil', value, exp);
      };
    }
  })();
  
  // Round
  Math.round10(55.55, -1);   // 55.6
  Math.round10(55.549, -1);  // 55.5
  Math.round10(55, 1);       // 60
  Math.round10(54.9, 1);     // 50
  Math.round10(-55.55, -1);  // -55.5
  Math.round10(-55.551, -1); // -55.6
  Math.round10(-55, 1);      // -50
  Math.round10(-55.1, 1);    // -60
  
  // Floor
  Math.floor10(55.59, -1);   // 55.5
  Math.floor10(59, 1);       // 50
  Math.floor10(-55.51, -1);  // -55.6
  Math.floor10(-51, 1);      // -60
  
  // Ceil
  Math.ceil10(55.51, -1);    // 55.6
  Math.ceil10(51, 1);        // 60
  Math.ceil10(-55.59, -1);   // -55.5
  Math.ceil10(-59, 1);       // -50

// 2-5. sqrt()
Math.sqrt(9); // 3
Math.sqrt(2); // 1.414213562373095

Math.sqrt(1);  // 1
Math.sqrt(0);  // 0
Math.sqrt(-1); // NaN
Math.sqrt();   // NaN

// 2-6. random()

// 0 이상 1 미만의 난수 생성
function getRandom() {
    return Math.random();
}
// 두 값 사이의 난수 생성
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
// 두 값 사이의 정수 난수 생성
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}
// 최댓값을 포함하는 정수 난수 생성
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}
// 1 ~ 10 까지의 정수
const random = Math.floor((Math.random() * 10) + 1);
console.log(random); // 1 ~ 10까지의 정수

// 2-7. pow()
// 간단한 예
Math.pow(7, 2);    // 49
Math.pow(7, 3);    // 343
Math.pow(2, 10);   // 1024

// 분수 지수
Math.pow(4, 0.5);  // 2 (4의 제곱근)
Math.pow(8, 1/3);  // 2 (8의 세제곱근)
Math.pow(2, 0.5);  // 1.4142135623730951 (2의 제곱근)
Math.pow(2, 1/3);  // 1.2599210498948732 (2의 세제곱근)

// 양의 지수
Math.pow(7, -2);   // 0.02040816326530612 (1/49)
Math.pow(8, -1/3); // 0.5

// 양의 밑
Math.pow(-7, 2);   // 49    제곱의 결과값은 양수
Math.pow(-7, 3);   // -343  세제곱은 음수가 될 수 있음
Math.pow(-7, 0.5); // NaN   음수는 실제 제곱근을 가지지 않음

// "짝수"와 "홀수" 근이 서로 가깝게 놓여 있고 부동소수점 <-> 정밀도의 한계로 인해,
// 밑이 음수이며 지수가 분수라면 언제나 NaN을 반환한다.
Math.pow(-7, 1/3); // NaN

// ES7(ECMAScript 2016) Exponentiation operator(거듭 제곱 연산자)
2 ** 8; // 256

// 2-8. max()
Math.max(10, 20);   //  20
Math.max(-10, -20); // -10
Math.max(-10, 20);  //  20

// 배열의 최대값 가져오기 - reduce() 사용
var arr = [1,2,3];
var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
});
// 배열의 최대값 가져오기 - apply() 사용
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}
// 배열의 최대값 가져오기 - Spread Syntax(전개구문) 사용
var arr = [1, 2, 3];
var max = Math.max(...arr);

// 2-9. min()
var x = 10, y = -20;
var z = Math.min(x, y); // -20

// 값 제한
// min()을 사용하지 않고 값을 제한
var x = f(foo);

if (x > boundary) {
  x = boundary;
}

// min()을 사용하고 값을 제한
var x = Math.min(f(foo), boundary);