// 6-1. arguments Property
function multiply(x, y) {
    console.log(arguments);
    return x * y;
}

multiply();        // {}
multiply(1);       // { '0': 1 }
multiply(1, 2);    // { '0': 1, '1': 2 }
multiply(1, 2, 3); // { '0': 1, '1': 2, '2': 3 }

function sum() {
    var res = 0;
  
    for (var i = 0; i < arguments.length; i++) {
      res += arguments[i];
    }
  
    return res;
}

console.log(sum());        // 0
console.log(sum(1, 2));    // 3
console.log(sum(1, 2, 3)); // 6

function sum() {
    if (!arguments.length) return 0;
  
    // arguments 객체를 배열로 변환
    var array = Array.prototype.slice.call(arguments);
    return array.reduce(function (pre, cur) {
      return pre + cur;
    });
}
  
console.log(sum(1, 2, 3, 4, 5)); // 15

// 6-2. caller Property
function foo(func) {
    var res = func();
    return res;
}
  
function bar() {
    return 'caller : ' + bar.caller;
}

console.log(foo(bar)); // caller : function foo(func) {...}
console.log(bar());    // null (browser에서의 실행 결과)

// 6-3. length Property
function foo() {}
console.log(foo.length); // 0

function bar(x) {
  return x;
}
console.log(bar.length); // 1

function baz(x, y) {
  return x * y;
}
console.log(baz.length); // 2

// 6-4. name Property
// 기명 함수 표현식(named function expression)
var namedFunc = function multiply(a, b) {
    return a * b;
};
  // 익명 함수 표현식(anonymous function expression)
var anonymousFunc = function(a, b) {
    return a * b;
};
  
console.log(namedFunc.name);     // multiply
console.log(anonymousFunc.name); // ''

// 6-5. __proto__ 접근자 Property

console.log({}.__proto__ === Object.prototype); // true
console.log(Object.getOwnPropertyDescriptor({}, '__proto__')); // undefined
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
// {get: ƒ, set: ƒ, enumerable: false, configurable: true}
console.log({}.__proto__ === Object.prototype); // true
console.log((function() {}).__proto__ === Function.prototype); // true

// 6-6. prototype Property
console.log(Object.getOwnPropertyDescriptor(function() {}, 'prototype'));
// {value: {…}, writable: true, enumerable: false, configurable: false}
console.log(Object.getOwnPropertyDescriptor({}, 'prototype')); // undefined