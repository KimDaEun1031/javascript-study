// 2. Number Property

// 2-1. Number.EPSILON (ES6)
console.log(0.1 + 0.2);        // 0.30000000000000004
console.log(0.1 + 0.2 == 0.3); // false!!!

function isEqual(a, b){
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(isEqual(0.1 + 0.2, 0.3));

// 2-2. Number.MAX_VALUE (ES1)
Number.MAX_VALUE; // 1.7976931348623157e+308

var num = 10;
num.MAX_VALUE;    // undefined

console.log(Infinity > Number.MAX_VALUE); // true

// 2-3. Number.MIN_VALUE (ES1)
Number.MIN_VALUE; // 5e-324

var num = 10;
num.MIN_VALUE;    // undefined

console.log(Number.MIN_VALUE > 0); // true

// 2-4. Number.POSITIVE_INFINITY (ES1)
Number.POSITIVE_INFINITY // Infinity

var num = 10;
num.POSITIVE_INFINITY;   // undefined

// 2-5. Number.NEGATIVE_INFINITY (ES1)
Number.NEGATIVE_INFINITY // -Infinity

var num = 10;
num.NEGATIVE_INFINITY;   // undefined

// 2-6. Number.NaN (ES1)
console.log(Number('xyz')); // NaN
console.log(1 * 'string');  // NaN
console.log(typeof NaN);    // number