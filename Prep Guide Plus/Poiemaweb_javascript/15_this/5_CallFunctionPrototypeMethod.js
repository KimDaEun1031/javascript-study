// 5. apply/call/bind 호출
var Person = function (name) {
    this.name = name;
};

var foo = {};

Person.apply(foo, ['name']);

console.log(foo); // { name: 'name' }


function convertArgsToArray() {
    console.log(arguments);
  
    var arr = Array.prototype.slice.apply(arguments); // arguments.slice
    // var arr = [].slice.apply(arguments);
  
    console.log(arr);
    return arr;
}

convertArgsToArray(1, 2, 3);


function Person(name) {
    this.name = name;
  }
  
  Person.prototype.doSomething = function (callback) {
    if (typeof callback == 'function') {
      // callback.call(this);
      // this가 바인딩된 새로운 함수를 호출
      callback.bind(this)();
    }
  };
  
  function foo() {
    console.log('#', this.name);
  }
  
  var p = new Person('Lee');
  p.doSomething(foo);  // 'Lee'