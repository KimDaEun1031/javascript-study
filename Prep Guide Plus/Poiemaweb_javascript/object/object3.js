//생성자 함수
var person1 = {
    name: 'Lee',
    gender: 'male',
    sayHello: function () {
      console.log('Hi! My name is ' + this.name);
    }
  };
  
  var person2 = {
    name: 'Kim',
    gender: 'female',
    sayHello: function () {
      console.log('Hi! My name is ' + this.name);
    }
  };

// 생성자 함수
function Person(name, gender) {
    this.name = name;
    this.gender = gender;
    this.sayHello = function(){
      console.log('Hi! My name is ' + this.name);
    };
  }


  
// 인스턴스의 생성
  var person1 = new Person('Lee', 'male');
  var person2 = new Person('Kim', 'female');
  
  console.log('person1: ', typeof person1);
  console.log('person2: ', typeof person2);
  console.log('person1: ', person1);
  console.log('person2: ', person2);
  
  person1.sayHello();
  person2.sayHello();

  function Person(name, gender) {
    var married = true;         // private
    this.name = name;           // public
    this.gender = gender;       // public
    this.sayHello = function(){ // public
      console.log('Hi! My name is ' + this.name);
    };
  }
  
  var person = new Person('Lee', 'male');
  
  console.log(typeof person);
  console.log(person);
  
  console.log(person.gender); 
  console.log(person.married);