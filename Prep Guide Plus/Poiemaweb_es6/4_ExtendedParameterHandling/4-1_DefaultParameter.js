// 1. 매개변수 기본값 (Default Parameter value)

function sum(x = 0, y = 0) {
    return x + y;
}

console.log(sum(1));    // 1
console.log(sum(1, 2)); // 3


function foo(x, y = 0) {
    console.log(arguments);
}

console.log(foo.length); // 1

sum(1);    // Arguments { '0': 1 }
sum(1, 2); // Arguments { '0': 1, '1': 2 }