// 2. [[Prototype]] vs prototype Prototype
function Person(name) {
  this.name = name;
}

var foo = new Person('Lee');

console.dir(Person); // prototype Property가 있다.
console.dir(foo);    // prototype Property가 없다.

// [[Prototype]]
console.log(Person.__proto__ === Function.prototype);

// prototype Prototype
console.log(Person.prototype === foo.__proto__);