// 4. 화살표 함수를 사용해서는 안되는 경우

// 4-1. 메소드
//  ES6의 축약 메소드 표현
// Good
const person = {
    name: 'Lee',
    sayHi() { // === sayHi: function() {
      console.log(`Hi ${this.name}`);
    }
};

person.sayHi(); // Hi Lee


// 4-2. prototype
// 일반 함수를 할당
// Good
const person = {
    name: 'Lee',
};
  
Object.prototype.sayHi = function() {
    console.log(`Hi ${this.name}`);
};

person.sayHi(); // Hi Lee

// 4-3. 생성자 함수
const Foo = () => {};

// 화살표 함수는 prototype 프로퍼티가 없다
console.log(Foo.hasOwnProperty('prototype')); // false

const foo = new Foo(); // Foo is not a constructor

// 4-4. addEventListener 함수의 콜백 함수
// 일반 함수를 사용
// Good
var button = document.getElementById('myButton');

button.addEventListener('click', function() {
  console.log(this === button); // => true
  this.innerHTML = 'Clicked button';
});