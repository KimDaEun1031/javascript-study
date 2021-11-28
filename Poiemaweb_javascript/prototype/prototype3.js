var student = {
    name: 'Lee',
    score: 90
  }

console.log(student.hasOwnProperty('name'))

var person = {
    name: 'Lee',
    gender: 'male',
    sayHello: function(){
      console.log('Hi! my name is ' + this.name);
    }
  };
  
console.dir(person);

console.log(person.__proto__ === Object.prototype); 
console.log(Object.prototype.constructor === Object);
console.log(Object.__proto__ === Function.prototype); 
console.log(Function.prototype.__proto__ === Object.prototype); 