// 5. 프로토타입 객체의 확장
function Person(name) {
    this.name = name;
  }
  
var foo = new Person('Lee');
  
Person.prototype.sayHello = function(){
    console.log('Hi! my name is ' + this.name);
  };
  
foo.sayHello();