// 4. 생성자 함수 호출
// 생성자 함수
function Person(name) {
    this.name = name;
}

var me = new Person('Lee');
console.log(me); // Person&nbsp;{name: "Lee"}

var you = Person('Kim');
console.log(you); // undefined
