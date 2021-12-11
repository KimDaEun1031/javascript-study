// 4. Prototype chain
var student = {
  name: 'Lee',
  score: 90
}

console.log(student.hasOwnProperty('name')); // true

// 4-1 객체 리터럴 방식으로 생성된 객체의 프로토타입 체인
var person = {
  name: 'Lee',
  gender: 'male',
  sayHello: function(){
    console.log('Hi! my name is ' + this.name);
  }
};

console.dir(person);

console.log(person.__proto__ === Object.prototype);   // true
console.log(Object.prototype.constructor === Object); // true
console.log(Object.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true

// 4-2. 생성자 함수로 생성된 객체의 프로토타입 체인

// 3가지 객체 생성 방식에 의해 생성된 객체의 prototype 객체
function Person(name, gender) {
    this.name = name;
    this.gender = gender;
    this.sayHello = function(){
      console.log('Hi! my name is ' + this.name);
    };
  }

var foo = new Person('Lee', 'male');

console.dir(Person);
console.dir(foo);

console.log(foo.__proto__ === Person.prototype);              
console.log(Person.prototype.__proto__ === Object.prototype);
console.log(Person.prototype.constructor === Person);        
console.log(Person.__proto__ === Function.prototype);          
console.log(Function.prototype.__proto__ === Object.prototype); 