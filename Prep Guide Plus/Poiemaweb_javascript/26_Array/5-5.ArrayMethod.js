// Array Method (5)

// 1-1. of()
// 배열 생성
Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]

// Array.of() 와 Array 생성자의 차이
// Array.of()와 Array 생성자의 차이는 정수형 인자의 처리 방법
// Array.of(7) - 하나의 요소 7을 가진 배열 생성
Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]

// Array(7) - length 속성이 7인 빈 배열 생성
Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]


// 1-2. reduceRight()
// 배열 내 모든 값의 합계 구하기
var sum = [0, 1, 2, 3].reduceRight(function(a, b) {
    return a + b;
});
// sum is 6

// 이중 배열 평탄화
var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
    return a.concat(b);
}, []);
// flattened is [4, 5, 2, 3, 0, 1]

// reduce() 와 reduceRight()의 차이
var a = ["1", "2", "3", "4", "5"];
var left  = a.reduce(function(prev, cur)      { return prev + cur; });
var right = a.reduceRight(function(prev, cur) { return prev + cur; });

console.log(left);  // "12345"
console.log(right); // "54321"


// 1-3. some()
// 배열의 요소 테스트
function isBiggerThan10(element, index, array) {
    return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true

// 화살표 함수를 사용한 배열의 요소 테스트
[2, 5, 8, 1, 4].some(elem => elem > 10);  // false
[12, 5, 8, 1, 4].some(elem => elem > 10); // true

// 값이 배열 내 존재하는지 확인
var fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
    return arr.some(function(arrVal) {
        return val === arrVal;
    });
}

checkAvailability(fruits, 'kela'); //false
checkAvailability(fruits, 'banana'); //true

// 화살표 함수를 사용하여 값이 존재하는지 확인
var fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
    return arr.some(arrVal => val === arrVal);
}

checkAvailability(fruits, 'kela'); //false
checkAvailability(fruits, 'banana'); //true

// 모든 값을 boolean으로 변환
var TRUTHY_VALUES = [true, 'true', 1];

function getBoolean(a) {
    'use strict';

    var value = a;

    if (typeof value === 'string') {
        value = value.toLowerCase().trim();
    }

    return TRUTHY_VALUES.some(function(t) {
        return t === value;
    });
}

getBoolean(false); // false
getBoolean('false'); // false
getBoolean(1); // true
getBoolean('true'); // true


// 1-4. reverse()
// 배열 요소 반전시키기
const a = [1, 2, 3];
console.log(a); // [1, 2, 3]

a.reverse();
console.log(a); // [3, 2, 1]


// 1-5. sort()
// 클로저를 사용한 숫자 정렬
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]

// 객체 값을 기준으로 정렬
var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];
  
  // value 기준으로 정렬
  items.sort(function (a, b) {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  
  // name 기준으로 정렬
  items.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // 이름이 같을 경우
    return 0;
  });

// 배열 정렬
var stringArray = ['Blue', 'Humpback', 'Beluga'];
var numericStringArray = ['80', '9', '700'];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

console.log('stringArray:', stringArray.join());
// stringArray: Blue,Humpback,Beluga
console.log('Sorted:', stringArray.sort());
// Sorted: Beluga,Blue,Humpback

console.log('numberArray:', numberArray.join());
// numberArray: 40,1,5,200
console.log('Sorted without a compare function:', numberArray.sort());
// Sorted without a compare function: 1,200,40,5
console.log('Sorted with compareNumbers:', numberArray.sort(compareNumbers));
// Sorted with compareNumbers: 1,5,40,200

console.log('numericStringArray:', numericStringArray.join());
// numericStringArray: 80,9,700
console.log('Sorted without a compare function:', numericStringArray.sort());
// Sorted without a compare function: 700,80,9
console.log('Sorted with compareNumbers:', numericStringArray.sort(compareNumbers));
// Sorted with compareNumbers: 9,80,700

console.log('mixedNumericArray:', mixedNumericArray.join());
// mixedNumericArray: 80,9,700,40,1,5,200
console.log('Sorted without a compare function:', mixedNumericArray.sort());
// Sorted without a compare function: 1,200,40,5,700,80,9
console.log('Sorted with compareNumbers:', mixedNumericArray.sort(compareNumbers));
// Sorted with compareNumbers: 1,5,9,40,80,200,700

// 아스키코드 이외의 문자 정렬
var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
items.sort(function (a, b) {
  return a.localeCompare(b);
});

// items is ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']

// map() 을 사용한 정렬
// 소트 할 배열
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// 임시 배열은 위치 및 정렬 값이있는 객체를 보유합니다.
var mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})

// 축소 치를 포함한 매핑 된 배열의 소트
mapped.sort(function(a, b) {
  return +(a.value > b.value) || +(a.value === b.value) - 1;
});

// 결과 순서를 위한 컨테이너
var result = mapped.map(function(el){
  return list[el.index];
});