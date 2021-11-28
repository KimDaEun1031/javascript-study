function Person(name) {
    this.name = name;
  }
  
var foo = new Person('Lee');

console.log(Person.prototype.constructor === Person);
console.log(foo.constructor === Person);
console.log(Person.constructor === Function);