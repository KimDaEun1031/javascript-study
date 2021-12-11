function Person(name) {
    this.name = name;
  }
  
  var foo = new Person('Lee');
  
  // 프로토타입 객체의 변경
  Person.prototype = { gender: 'male' };
  
  var bar = new Person('Kim');
  
  console.log(foo.gender);
  console.log(bar.gender);
  
  console.log(foo.constructor);
  console.log(bar.constructor);


  function Person(name) {
    this.name = name;
  }
  
  Person.prototype.gender = 'male'; 
  
  var foo = new Person('Lee');
  var bar = new Person('Kim');
  
  console.log(foo.gender);
  console.log(bar.gender);
 
  foo.gender = 'female';  
  
  console.log(foo.gender); 
  console.log(bar.gender);