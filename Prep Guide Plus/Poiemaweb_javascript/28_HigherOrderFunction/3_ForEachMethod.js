// 2. forEach() 예제

// 예제 1
const numbers = [1, 2, 3];
let pows = [];

// for 문으로 순회
for (let i = 0; i < numbers.length; i++) {
  pows.push(numbers[i] ** 2);
}

console.log(pows); // [ 1, 4, 9 ]

pows = [];

// forEach 메소드로 순회
numbers.forEach(function (item) {
  pows.push(item ** 2);
});

// ES6 화살표 함수
// numbers.forEach(item => pows.push(item ** 2));

console.log(pows); // [ 1, 4, 9 ]


// 예제 2
const numbers = [1, 3, 5, 7, 9];
let total = 0;

// forEach 메소드는 인수로 전달한 보조 함수를 호출하면서
// 3개(배열 요소의 값, 요소 인덱스, this)의 인수를 전달한다.
// 배열의 모든 요소를 순회하며 합산한다.
numbers.forEach(function (item, index, self) {
  console.log(`numbers[${index}] = ${item}`);
  total += item;
});

// reduce() 사용해서 동일 결과
// total = numbers.reduce(function (pre, cur) {
//   return pre + cur;
// });

console.log(total); // 25
console.log(numbers); // [ 1, 3, 5, 7, 9 ]


// 예제 3
const numbers = [1, 2, 3, 4];

// forEach 메소드는 원본 배열(this)을 변경하지 않는다. 하지만 콜백 함수는 원본 배열(this)을 변경할 수는 있다.
// 원본 배열을 직접 변경하려면 콜백 함수의 3번째 인자(this)를 사용한다.
numbers.forEach(function (item, index, self) {
  self[index] = Math.pow(item, 2);
});

console.log(numbers); // [ 1, 4, 9, 16 ]


// 예제 4
// forEach 메소드는 for 문과는 달리 break 문을 사용할 수 없다.
[1, 2, 3].forEach(function (item, index, self) {
    console.log(`self[${index}] = ${item}`);
    if (item > 1) break; // Error: Illegal break statement
});


// 예제 5
// 두번째 인자로 this 전달
function Square() {
    this.array = [];
}
  
Square.prototype.multiply = function (arr) {
    arr.forEach(function (item) {
      // this를 인수로 전달하지 않으면 this === window
      this.array.push(item * item);
    }, this);
};

const square = new Square();
square.multiply([1, 2, 3]);
console.log(square.array); // [ 1, 4, 9 ]

// this 생략 시 동일 동작
Square.prototype.multiply = function (arr) {
    arr.forEach(item => this.array.push(item * item));
};


// 예제 6
// forEach의 동작을 흉내낸 myForEach 메소드 작성
Array.prototype.myForEach = function (f) {
    // 첫번재 매개변수에 함수가 전달되었는지 확인
    if (!f || {}.toString.call(f) !== '[object Function]') {
      throw new TypeError(f + ' is not a function.');
    }
  
    for (let i = 0; i < this.length; i++) {
      // 배열 요소의 값, 요소 인덱스, forEach 메소드를 호출한 배열, this를 매개변수에 전달하고 콜백 함수 호출
      f(this[i], i, this);
    }
};

let total = 0;
  
[0, 1, 2, 3].myForEach(function (item, index, array) {
    console.log(`[${index}]: ${item} of [${array}]`);
    total += item;
});

console.log('Total: ', total);
