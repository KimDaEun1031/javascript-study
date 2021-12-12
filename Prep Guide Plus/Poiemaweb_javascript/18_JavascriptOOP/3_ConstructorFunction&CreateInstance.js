// 3. 생성자 함수와 인스턴스의 생성
// 생성자 함수(Constructor)
function Person(name) {
    // 프로퍼티
    this.name = name;
  
    // 메소드
    this.setName = function (name) {
      this.name = name;
    };
  
    // 메소드
    this.getName = function () {
      return this.name;
    };
}

// 인스턴스의 생성
var me = new Person('Lee');
console.log(me.getName()); // Lee

// 메소드 호출
me.setName('Kim');
console.log(me.getName()); // Kim

// 문제 되는 생성 방법
// Person 생성자 함수로 여러 개의 인스턴스 생성
var me  = new Person('Lee');
var you = new Person('Kim');
var him = new Person('Choi');

console.log(me);  // Person { name: 'Lee', setName: [Function], getName: [Function] }
console.log(you); // Person { name: 'Kim', setName: [Function], getName: [Function] }
console.log(him); // Person { name: 'Choi', setName: [Function], getName: [Function] }