// 4. 단축 평가

// 논리합(||) 연산자
'Cat' || 'Dog'  // 'Cat'
false || 'Dog'  // 'Dog'
'Cat' || false  // 'Cat'

// 논리곱(&&) 연산자
'Cat' && 'Dog'  // Dog
false && 'Dog'  // false
'Cat' && false  // false

// 객체가 null인지 확인하고 프로퍼티를 참조할 때
var elem = null;

console.log(elem.value); // TypeError: Cannot read property 'value' of null
console.log(elem && elem.value); // null

// 함수의 인수(argument)를 초기화할 때
// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
    str = str || '';
    return str.length;
  }
  
  getStringLength();     // 0
  getStringLength('hi'); // 2
  
  // ES6의 매개변수의 기본값 설정
  function getStringLength(str = '') {
    return str.length;
  }
  
  getStringLength();     // 0
  getStringLength('hi'); // 2