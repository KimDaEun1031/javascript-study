// 6. 함수 레벨 스코프
var a = 10;     // 전역변수

(function () {
  var b = 20;   // 지역변수
})();

console.log(a); // 10
console.log(b); // "b" is not defined


var x = 'global';

function foo() {
  var x = 'local';
  console.log(x);
}

foo();          // local
console.log(x); // global

// 지역 변수 우선 참조
var x = 'global';

function foo() {
  var x = 'local';
  console.log(x); // local

  function bar() {  // 내부함수
    console.log(x); // local
  }

  bar();
}
foo();
console.log(x); // global

var foo = function ( ) {

    var a = 3, b = 5;
  
    var bar = function ( ) {
      var b = 7, c = 11;    
      a += b + c;
    }; 
    bar( ); 
    // a = 21 , b = 5 
};