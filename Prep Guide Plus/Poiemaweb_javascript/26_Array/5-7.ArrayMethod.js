// Array Method (7)

// 1-1. entries()
var a = ['a', 'b', 'c'];
var iterator = a.entries();

for (let e of iterator) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']


// 1-2. every()
// 모든 배열 요소의 크기 테스트
function isBigEnough(element, index, array) {
    return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true

// 화살표 함수
[12, 5, 8, 130, 44].every(elem => elem >= 10); // false
[12, 54, 18, 130, 44].every(elem => elem >= 10); // true

// 배열 수정, 추가, 삭제하기
// 요소 수정
let arr = [1, 2, 3, 4];
arr.every( (elem, index, arr) => {
  arr[index+1] -= 1
  console.log(`[${arr}][${index}] -> ${elem}`)
  return elem < 2
})

// 3회 순회하지만 앞선 2회의 순회는 수정이 일어나지 않는다.
// 1번 반복시 : [1,1,3,4][0] -> 1
// 2번 반복시 : [1,1,2,4][1] -> 1
// 3번 반복시 : [1,1,2,3][2] -> 2


// 요소 추가
arr = [1, 2, 3];
arr.every( (elem, index, arr) => {
  arr.push('new')
  console.log(`[${arr}][${index}] -> ${elem}`)
  return elem < 4
})

// 새로운 요소가 추가된 후에도 3회 순회한다.
// 1번 반복시 : [1, 2, 3, new][0] -> 1
// 2번 반복시 : [1, 2, 3, new, new][1] -> 2
// 3번 반복시 : [1, 2, 3, new, new, new][2] -> 3


// 요소 삭제
arr = [1, 2, 3, 4];
arr.every( (elem, index, arr) => {
  arr.pop()
  console.log(`[${arr}][${index}] -> ${elem}`)
  return elem < 4
})

// 기존 요소가 `pop()` 되어 2번만 순회한다.
// 1번 반복시 : [1,2,3][0] -> 1
// 2번 반복시 : [1,2][1] -> 2


// 1-3. fill()
[1, 2, 3].fill(4);               // [4, 4, 4]
[1, 2, 3].fill(4, 1);            // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1);         // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3);         // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2);       // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN);     // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5);         // [1, 2, 3]
Array(3).fill(4);                // [4, 4, 4]
[].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}

// 오브젝트
var arr = Array(3).fill({}); // [{}, {}, {}]
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]


// 1-4. find()
// 속성을 사용해 객체 찾기
var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function findCherries(fruit) {
    return fruit.name === 'cherries';
}

console.log(inventory.find(findCherries)); // { name: 'cherries', quantity: 5 }

// 화살표 함수
const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

const result = inventory.find(fruit => fruit.name === 'cherries');

console.log(result) // { name: 'cherries', quantity: 5 }

// 배열에서 소수 찾기
function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined
console.log([4, 5, 8, 12].find(isPrime)); // 5

// 탐색 중 삭제된 배열 요소
var a = [0,1,,,,5,6];

a.find(function(value, index) {
  console.log('Visited index ' + index + ' with value ' + value);
});
  a.find(function(value, index) {
  if (index == 0) {
    console.log('Deleting a[5] with value ' + a[5]);
    delete a[5];
  }
  console.log('Visited index ' + index + ' with value ' + value);
});

// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value 5
// Visited index 6 with value 6
// Deleting a[5] with value 5
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value undefined
// Visited index 6 with value 6


// 1-5. findIndex()
// 배열에서 소수의 색인 찾기
function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
}

console.log([4, 6, 8, 12].findIndex(isPrime)); // -1
console.log([4, 6, 7, 12].findIndex(isPrime)); // 2