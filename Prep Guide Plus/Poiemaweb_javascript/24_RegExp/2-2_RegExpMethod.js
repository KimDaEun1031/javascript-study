// 2-2. RegExp Method

// 1-1. exec()
const target = 'Is this all there is?';
const regExp = /is/;

const res = regExp.exec(target);
console.log(res); // [ 'is', index: 5, input: 'Is this all there is?' ]

// g 추가 (같은 결과)
const target = 'Is this all there is?';
const regExp = /is/g;

const res = regExp.exec(target);
console.log(res); // [ 'is', index: 5, input: 'Is this all there is?' ]


// 1-2. test()
const target = 'Is this all there is?';
const regExp = /is/;

const res = regExp.test(target);
console.log(res); // true