// 1. 실행 컨텍스트
function sum(a, b) {
    let result = a + b;
    return result;
}

let number = sum(1, 2);

// 2. 콜 스택
function sum(c, d) {
    let r = c + d;
    return r;
}

function calc(a, b, expr) {
    let result = expr(a, b);
    return result;
}

let number = calc(1, 2, sum);

// 3. 스코프
var spreadRatio = 1.25;

function getMortageRatio(fb) {
    var total = spreadRatio + fb;
    return total;
}

var ratio = getMortageRatio(2);

// 4. 클로저
function outer() {
    var n = 0;
    function increase() {
        n += 1;
    }

    return increase;
}

var newFn = outer();
newFn();
newFn();

// 5. 비동기 자바스크립트
function greet() {
    console.log("Hi");
}

function wait(ms) {
    // blocking for ms
}

setTimeout(greet, 5);
wait(1000);
console.log("Bye");

// 6. 자바스크립트 프로토타입
let fns = {
    getName() {
        return this.name;
    } ,
    addAge() {
        this.age += 1;
    }
};

function createPerson(name) {
    let newPerson = {};
    Object.setPrototypeOf(
        newPerson, fns
    );
    newPerson.name = name;
    newPerson.age = 0;
    return newPerson;
}

let john = createPerson('john');
john.getName();


// new 사용
function newCreatePerson(name) {
    this.name = name;
    this.age = 0;
}

newCreatePerson.prototype.getName = function() {return this.name; };
newCreatePerson.prototype.addAge = function() {return this.age += 1; };

let newJohn = new newCreatePerson('John');
newJohn.getName();