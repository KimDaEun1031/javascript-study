// 1. 배열의 생성

// 1-1. 배열 리터럴
const emptyArr = [];

console.log(emptyArr[1]);     // undefined
console.log(emptyArr.length); // 0

const arr = [
  'zero', 'one', 'two', 'three', 'four',
  'five', 'six', 'seven', 'eight', 'nine'
];

console.log(arr[1]);      // 'one'
console.log(arr.length);  // 10
console.log(typeof arr);  // object

// 객체 리터럴로 표현
const obj = {
    '0': 'zero',  '1': 'one',   '2': 'two',
    '3': 'three', '4': 'four',  '5': 'five',
    '6': 'six',   '7': 'seven', '8': 'eight',
    '9': 'nine'
};

// 프로토타입 확인
const emptyArr = [];
const emptyObj = {};

console.dir(emptyArr.__proto__);
console.dir(emptyObj.__proto__);

const misc = [
    'string',
    10,
    true,
    null,
    undefined,
    NaN,
    Infinity,
    ['nested array'],
    { object: true },
    function () {}
];

console.log(misc.length); // 10


// 1-2. Array() 생성자 함수
const arr = new Array(2);
console.log(arr); // (2) [empty × 2]

const arr = new Array(1, 2, 3);
console.log(arr); // [1, 2, 3]