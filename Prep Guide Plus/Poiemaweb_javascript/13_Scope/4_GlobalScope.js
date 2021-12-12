// 4. 전역 스코프
var global = 'global'; // 전역변수

function foo() {
  var local = 'local'; // 지역변수
  console.log(global);
  console.log(local);
}
foo();

console.log(global);
console.log(local); // Uncaught ReferenceError: local is not defined