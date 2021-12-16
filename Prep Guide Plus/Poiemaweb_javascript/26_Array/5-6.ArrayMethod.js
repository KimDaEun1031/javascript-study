// Array Method (6)
 
// 1-1. splice()
// 요소를 제거하지 않고 하나의 요소 추가
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum'); // []

// 요소를 제거하지 않고 두 개의 요소 추가
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum', 'guitar'); // []

// 요소 제거
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);

// 제거된 요소 ["mandarin"]
// ["angel", "clown", "drum", "sturgeon"]

// 하나의 요소를 제거하고 하나의 요소 추가
var myFish = ['angel', 'clown', 'drum', 'sturgeon'];
var removed = myFish.splice(2, 1, 'trumpet');

// 제거된 요소 ["drum"]  | 추가된 요소 ["trumpet"]
// ["angel", "clown", "trumpet", "sturgeon"]

// 두 개의 요소를 제거하고 세 개의 요소 추가
var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');

// 제거된 요소 ["angel", "clown"] | 추가된 요소 ["parrot", "anemone", "blue"]
// ["parrot", "anemone", "blue", "trumpet", "sturgeon"]

// 두 개의 요소 제거
var myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
var removed = myFish.splice(myFish.length - 3, 2);

// 제거된 요소 ["blue", "trumpet"]
// ["parrot", "anemone", "sturgeon"]

// 음수 인덱스에서 한 개의 요소 제거
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(-2, 1);

// 제거된 요소 ["mandarin"]
// ["angel", "clown", "sturgeon"]

// 지정 인덱스를 포함해서 이후의 모든 요소 제거
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2);

// 제거된 요소 ["mandarin", "sturgeon"]
// ["angel", "clown"]


// 1-2. toString()
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var myVar = monthNames.toString(); // 'Jan,Feb,Mar,Apr'


// 1-3. values()
// for ... of 루프를 통한 반복
var arr = ['w', 'y', 'k', 'o', 'p'];
var eArr = arr.values();

for (let letter of eArr) {
  console.log(letter); // w y k o p
}

// 다른 반복법
var arr = ['w', 'y', 'k', 'o', 'p'];
var eArr = arr.values();
console.log(eArr.next().value); // w
console.log(eArr.next().value); // y
console.log(eArr.next().value); // k
console.log(eArr.next().value); // o
console.log(eArr.next().value); // p


// 1-4. concat()
// 배열 2개 이어붙이기
const alpha = ['a', 'b', 'c'];
const numeric = [1, 2, 3];

alpha.concat(numeric); // ['a', 'b', 'c', 1, 2, 3]

// 배열 3개 이어붙이기
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

num1.concat(num2, num3); //  [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 배열에 값 이어붙이기
const alpha = ['a', 'b', 'c'];

alpha.concat(1, [2, 3]); // ['a', 'b', 'c', 1, 2, 3]


// 1-5. copyWithin()
[1, 2, 3, 4, 5].copyWithin(-2);
// [1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(-2, -3, -1);
// [1, 2, 3, 3, 4]

[].copyWithin.call({length: 5, 3: 1}, 0, 3);
// {0: 1, 3: 1, length: 5}

// ES2015 TypedArray는 Array의 하위 클래스
var i32a = new Int32Array([1, 2, 3, 4, 5]);

i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// 아직 ES2015를 사용할 수 없는 환경에서
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]