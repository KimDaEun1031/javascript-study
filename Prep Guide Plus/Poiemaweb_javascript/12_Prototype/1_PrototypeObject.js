// 1. 프로토타입 객체
var student = {
  name: 'Lee',
  score: 90
};

console.log(student.hasOwnProperty('name')); // true

console.dir(student);

console.log(student.__proto__ === Object.prototype); // true