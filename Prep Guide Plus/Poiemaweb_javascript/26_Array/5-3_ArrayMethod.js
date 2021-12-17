// Array Method (3)

// 1-1. flat()
// 중첩 배열 평탄화
const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 배열 공백 값 제거
const arr5 = [1, 2, , 4, 5];
arr5.flat();
// [1, 2, 4, 5]

// reduce()와 concat() 사용
const arr = [1, 2, [3, 4]];

// To flat single level array
arr.flat();
// is equivalent to
arr.reduce((acc, val) => acc.concat(val), []);
// [1, 2, 3, 4]

// or with decomposition syntax
const flattened = arr => [].concat(...arr);

// reduce() + concat() + isArray + 재귀 사용
const arr = [1, 2, [3, 4, [5, 6]]];

// to enable deep level flatten use recursion with reduce and concat
function flatDeep(arr, d = 1) {
   return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : arr.slice();
};

flatDeep(arr, Infinity);
// [1, 2, 3, 4, 5, 6]

// 스택
function flatten(input) {
    const stack = [...input];
    const res = [];
    while(stack.length) {
  
      const next = stack.pop();
      if(Array.isArray(next)) {
        stack.push(...next);
      } else {
        res.push(next);
      }
    }
  
    return res.reverse();
}

const arr = [1, 2, [3, 4, [5, 6]]];
flatten(arr);
// [1, 2, 3, 4, 5, 6]

// Generator 함수
function* flatten(array, depth) {
    if(depth === undefined) {
      depth = 1;
    }
    for(const item of array) {
        if(Array.isArray(item) && depth > 0) {
          yield* flatten(item, depth - 1);
        } else {
          yield item;
        }
    }
}

const arr = [1, 2, [3, 4, [5, 6]]];
const flattened = [...flatten(arr, Infinity)];
// [1, 2, 3, 4, 5, 6]


// 1-2. flatMap()
// map 과 flatMap - 1
let arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// 한 레벨만 평탄화됨
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]

// map 과 flatMap - 2
// 문장 리스트로부터 단어 리스트 생성하기
let arr1 = ["it's Sunny in", "", "California"];

arr1.map(x=>x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap(x => x.split(" "));
// ["it's","Sunny","in","California"]

// 아이템 추가 및 제거
// 음수는 제거, 홀수는 1과 짝수로 분리
let a = [5, 4, -3, 20, 17, -33, -4, 18]
//       |\  \  x   |  | \   x   x   |
//      [4,1, 4,   20, 16, 1,       18]

a.flatMap( (n) =>
  (n < 0) ?      [] :
  (n % 2 == 0) ? [n] :
                 [n-1, 1]
)

// [4, 1, 4, 20, 16, 1, 18]

// reduce()와 concat() 사용
var arr1 = [1, 2, 3, 4];

arr1.flatMap(x => [x * 2]);
// 동일
arr1.reduce((acc, x) => acc.concat([x * 2]), []);
// [2, 4, 6, 8]


// 1-3. from()
// String에서 배열 만들기
Array.from('foo');
// ["f", "o", "o"]

// Set에서 배열 만들기
const s = new Set(['foo', window]);
Array.from(s);
// ["foo", window]

// Map에서 배열 만들기
const m = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(m);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];

// 배열 형태를 가진 객체(arguments)에서 배열 만들기
function f() {
    return Array.from(arguments);
}

f(1, 2, 3);
// [1, 2, 3]

// from() 과 화살표 함수 사용
Array.from([1, 2, 3], x => x + x);
// [2, 4, 6]

Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]

// 시퀸스 생성기 (range)
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

range(0, 4, 1);
// [0, 1, 2, 3, 4]

range(1, 10, 2);
// [1, 3, 5, 7, 9]

range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


// 1-4. includes()
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true

// fromIndex가 배열의 길이보다 같거나 큰 경우
// 같거나 큰 경우 false 반환
var arr = ['a', 'b', 'c'];

arr.includes('c', 3);   // false
arr.includes('c', 100); // false

// 0보다 작은 인덱스의 계산
// 배열 길이는 3 | fromIndex 는 - 100
// 3 + (-100) = -97 

var arr = ['a', 'b', 'c'];

arr.includes('a', -100); // true
arr.includes('b', -100); // true
arr.includes('c', -100); // true
arr.includes('a', -2); // false

// 제네릭 메소드로 사용
(function() {
    console.log([].includes.call(arguments, 'a')); // true
    console.log([].includes.call(arguments, 'd')); // false
  })('a','b','c');