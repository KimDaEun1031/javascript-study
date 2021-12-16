// 2. 배열 요소의 추가와 삭제

// 2-1. 배열 요소의 추가
const arr = [];
console.log(arr[0]); // undefined

arr[1] = 1;
arr[3] = 3;

console.log(arr);       // (4) [empty, 1, empty, 3]
console.log(arr.lenth); // 4

// 값이 할당되지 않은 인덱스 위치의 요소는 생성되지 않는다.
console.log(Object.keys(arr)); // [ '1', '3' ]

// 존재하지 않는 요소를 참조하면 undefined가 반환된다.
console.log(arr[0]); // undefined


// 2-2. 배열 요소의 삭제
const numbersArr = ['zero', 'one', 'two', 'three'];

// 요소의 값만 삭제된다
delete numbersArr[2]; // (4) ["zero", "one", empty, "three"]
console.log(numbersArr);

// 요소 값만이 아니라 요소를 완전히 삭제한다
// splice(시작 인덱스, 삭제할 요소수)
numbersArr.splice(2, 1); // (3) ["zero", "one", "three"]
console.log(numbersArr);