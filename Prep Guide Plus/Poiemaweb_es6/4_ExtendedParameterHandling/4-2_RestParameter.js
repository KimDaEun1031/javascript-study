// 2. Rest 파라미터 (Rest Parameter, 나머지 매개변수)

// 2-1. 기본 문법
function foo(param, ...rest) {
    console.log(param); // 1
    console.log(rest);  // [ 2, 3, 4, 5 ]
}

foo(1, 2, 3, 4, 5);

function bar(param1, param2, ...rest) {
    console.log(param1); // 1
    console.log(param2); // 2
    console.log(rest);   // [ 3, 4, 5 ]
}

bar(1, 2, 3, 4, 5);

// Rest parameter must be last formal parameter
// function foo( ...rest, param1, param2) { }

// foo(1, 2, 3, 4, 5);


// 2-2. arguments와 rest 파라미터

// ES5
var foo = function () {
    console.log(arguments);
};

foo(1, 2); // { '0': 1, '1': 2 }


// ES6
function sum(...args) {
    console.log(arguments); // Arguments(5) [1, 2, 3, 4, 5, callee: (...), Symbol(Symbol.iterator): ƒ]
    console.log(Array.isArray(args)); // true
    return args.reduce((pre, cur) => pre + cur);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// 화살표 함수 사용
var normalFunc = function () {};
console.log(normalFunc.hasOwnProperty('arguments')); // true

const arrowFunc = () => {};
console.log(arrowFunc.hasOwnProperty('arguments')); // false



