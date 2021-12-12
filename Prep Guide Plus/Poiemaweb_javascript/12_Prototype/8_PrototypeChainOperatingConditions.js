// 8. 프로토타입 체인 동작 조건
function Person(name) {
    this.name = name;
}

Person.prototype.gender = 'male';

var foo = new Person('Lee');
var bar = new Person('Kim');

console.log(foo.gender); // 'male'
console.log(bar.gender); // 'male'

foo.gender = 'female'; 

console.log(foo.gender); // 'female'
console.log(bar.gender); // 'male'