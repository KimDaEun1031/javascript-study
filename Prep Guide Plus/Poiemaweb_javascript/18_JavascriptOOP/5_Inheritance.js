// 5. 상속

// 5-1. 의사 클래스 패턴 상속
// 부모 생성자 함수
var Parent = (function () {
    // Constructor
    function Parent(name) {
    this.name = name;
}
  
// method
Parent.prototype.sayHi = function () {
    console.log('Hi! ' + this.name);
};
    return Parent;
}());
  
// 자식 생성자 함수
var Child = (function () {

    function Child(name) {
        this.name = name;
    }
    
    // 자식 생성자 함수의 프로토타입 객체를 부모 생성자 함수의 인스턴스로 교체.
    Child.prototype = new Parent(); // 2번
    
    // 메소드 오버라이드
    Child.prototype.sayHi = function () {
        console.log('안녕하세요! ' + this.name);
    };
    
    // sayBye 메소드는 Parent 생성자함수의 인스턴스에 위치된다
    Child.prototype.sayBye = function () {
        console.log('안녕히가세요! ' + this.name);
    };
    return Child;
}());
  
var child = new Child('child'); // 1번
console.log(child);  // Parent { name: 'child' }

console.log(Child.prototype); // Parent { name: undefined, sayHi: [Function], sayBye: [Function] }

child.sayHi();  // 안녕하세요! child
child.sayBye(); // 안녕히가세요! child

console.log(child instanceof Parent); // true
console.log(child instanceof Child);  // true


// 5-2. 프로토타입 패턴 상속
// 부모 생성자 함수
var Parent = (function () {
    // Constructor
    function Parent(name) {
      this.name = name;
    }
  
    // method
    Parent.prototype.sayHi = function () {
      console.log('Hi! ' + this.name);
    };
  
    // return constructor
    return Parent;
}());

// create 함수의 인수는 프로토타입이다.
var child = Object.create(Parent.prototype);
child.name = 'child';

child.sayHi();  // Hi! child

console.log(child instanceof Parent); // true