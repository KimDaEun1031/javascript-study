// 3. Spread 문법 (Spread Syntax, ...)

// ...[1, 2, 3]는 [1, 2, 3]을 개별 요소로 분리한다(→ 1, 2, 3)
console.log(...[1, 2, 3]) // 1, 2, 3

// 문자열은 이터러블이다.
console.log(...'Hello');  // H e l l o

// Map과 Set은 이터러블이다.
console.log(...new Map([['a', '1'], ['b', '2']]));  // [ 'a', '1' ] [ 'b', '2' ]
console.log(...new Set([1, 2, 3]));  // 1 2 3

// 이터러블이 아닌 일반 객체는 Spread 문법의 대상이 될 수 없다.
console.log(...{ a: 1, b: 2 });
// Found non-callable @@iterator


// 3-1. 함수의 인수로 사용하는 경우
// ES5
function foo(x, y, z) {
    console.log(x); // 1
    console.log(y); // 2
    console.log(z); // 3
}

// 배열을 분해하여 배열의 각 요소를 파라미터에 전달하려고 한다.
const arr = [1, 2, 3];

// apply 함수의 2번째 인수(배열)는 분해되어 함수 foo의 파라이터에 전달된다.
foo.apply(null, arr);
// foo.call(null, 1, 2, 3);

// ES6
function foo(x, y, z) {
    console.log(x); // 1
    console.log(y); // 2
    console.log(z); // 3
}

// 배열을 foo 함수의 인자로 전달하려고 한다.
const arr = [1, 2, 3];

/* ...[1, 2, 3]는 [1, 2, 3]을 개별 요소로 분리한다(→ 1, 2, 3)
    spread 문법에 의해 분리된 배열의 요소는 개별적인 인자로서 각각의 매개변수에 전달된다. */
foo(...arr);

// spread vs rest parameter
/* Spread 문법을 사용한 매개변수 정의 (= Rest 파라미터)
...rest는 분리된 요소들을 함수 내부에 배열로 전달한다. */
function foo(param, ...rest) {
    console.log(param); // 1
    console.log(rest);  // [ 2, 3 ]
}
foo(1, 2, 3);

/* Spread 문법을 사용한 인수
배열 인수는 분리되어 순차적으로 매개변수에 할당 */
function bar(x, y, z) {
    console.log(x); // 1
    console.log(y); // 2
    console.log(z); // 3
}

// ...[1, 2, 3]는 [1, 2, 3]을 개별 요소로 분리한다(-> 1, 2, 3)
// spread 문법에 의해 분리된 배열의 요소는 개별적인 인자로서 각각의 매개변수에 전달된다.
bar(...[1, 2, 3]);


// 3-2. 배열에서 사용하는 경우


// a. concat
// ES5
var arr = [1, 2, 3];
console.log(arr.concat([4, 5, 6])); // [ 1, 2, 3, 4, 5, 6 ]

// ES6
const arr = [1, 2, 3];
// ...arr은 [1, 2, 3]을 개별 요소로 분리한다
console.log([...arr, 4, 5, 6]); // [ 1, 2, 3, 4, 5, 6 ]


// b. push
// ES5
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

// apply 메소드의 2번째 인자는 배열. 이것은 개별 인자로 push 메소드에 전달된다.
Array.prototype.push.apply(arr1, arr2);

console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]

// ES6
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// ...arr2는 [4, 5, 6]을 개별 요소로 분리한다
arr1.push(...arr2); // == arr1.push(4, 5, 6);

console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]


// c. splice
// ES5
var arr1 = [1, 2, 3, 6];
var arr2 = [4, 5];

/*
apply 메소드의 2번째 인자는 배열. 이것은 개별 인자로 splice 메소드에 전달된다.
[3, 0].concat(arr2) → [3, 0, 4, 5]
arr1.splice(3, 0, 4, 5) → arr1[3]부터 0개의 요소를 제거하고 그자리(arr1[3])에 새로운 요소(4, 5)를 추가한다.
*/
Array.prototype.splice.apply(arr1, [3, 0].concat(arr2));

console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]

// ES6
const arr1 = [1, 2, 3, 6];
const arr2 = [4, 5];

// ...arr2는 [4, 5]을 개별 요소로 분리한다
arr1.splice(3, 0, ...arr2); // == arr1.splice(3, 0, 4, 5);

console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]


// d. copy
// ES5
var arr  = [1, 2, 3];
var copy = arr.slice();

console.log(copy); // [ 1, 2, 3 ]

// copy를 변경한다.
copy.push(4);

console.log(copy); // [ 1, 2, 3, 4 ]
// arr은 변경되지 않는다.
console.log(arr);  // [ 1, 2, 3 ]

// ES6
const arr = [1, 2, 3];
// ...arr은 [1, 2, 3]을 개별 요소로 분리한다
const copy = [...arr];

console.log(copy); // [ 1, 2, 3 ]

// copy를 변경한다.
copy.push(4);

console.log(copy); // [ 1, 2, 3, 4 ]
// arr은 변경되지 않는다.
console.log(arr);  // [ 1, 2, 3 ]

const todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
];

// shallow copy
// const _todos = todos.slice();
const _todos = [...todos];
console.log(_todos === todos); // false

// 배열의 요소는 같다. 즉, 얕은 복사되었다.
console.log(_todos[0] === todos[0]); // true

