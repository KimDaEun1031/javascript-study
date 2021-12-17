// Array Method (1)

// 1-1. push()

// 배열에 엘리먼트 추가하기
var sports = ['축구', '야구'];
var total = sports.push('미식축구', '수영');

console.log(sports); // ['축구', '야구', '미식축구', '수영']
console.log(total);  // 4

// 두 개의 배열 합치기
var vegetables = ['설탕당근', '감자'];
var moreVegs = ['셀러리', '홍당무'];

// 첫번째 배열에 두번째 배열을 합친다.
// vegetables.push('셀러리', '홍당무'); 하는 것과 동일하다.
Array.prototype.push.apply(vegetables, moreVegs);

console.log(vegetables); // ['설탕당근', '감자', '셀러리', '홍당무']


// 1-2. slice()

// 기존 배열의 일부 반환
let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
let citrus = fruits.slice(1, 3)

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']

// slice 사용하기
// myCar와 newCar는 myHonda 객체에 대한 참조를 포함한다.
let myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }
let myCar = [myHonda, 2, 'cherry condition', 'purchased 1997']
let newCar = myCar.slice(0, 2)

console.log('myCar = ' + JSON.stringify(myCar))
// myCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2, 'cherry condition', 'purchased 1997']

console.log('newCar = ' + JSON.stringify(newCar))
// newCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2]

console.log('myCar[0].color = ' + myCar[0].color) // myCar[0].color = red
console.log('newCar[0].color = ' + newCar[0].color) // newCar[0].color = red

// myHonda 컬러 변경
myHonda.color = 'purple'
console.log('The new color of my Honda is ' + myHonda.color) // The new color of my Honda is purple

console.log('myCar[0].color = ' + myCar[0].color) // myCar[0].color = purple
console.log('newCar[0].color = ' + newCar[0].color) // newCar[0].color = purple

// 배열형 객체
// call()를 사용한 방법
function list() {
    return Array.prototype.slice.call(arguments); 
    // Array.prototype.slice.call -> [].slice.call 더 짧게 작성
  }
  
  let list1 = list(1, 2, 3); // [1, 2, 3]
  
  // bind()를 사용한 방법
  let unboundSlice = Array.prototype.slice
  let slice = Function.prototype.call.bind(unboundSlice)
  
  function list() {
    return slice(arguments)
  }
  
  let list1 = list(1, 2, 3) // [1, 2, 3]


// 1-3. pop()
// 배열의 마지막 요소 제거
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

var popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'


// 1-4. shift()
// 배열에서 요소 제거한 후 제거된 요소와 제거된 후의 배열 보여주기
var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('myFish before: ' + myFish);
// "제거전 myFish 배열: angel,clown,mandarin,surgeon"

var shifted = myFish.shift();

console.log('myFish after: ' + myFish);
// "제거후 myFish 배열: clown,mandarin,surgeon"

console.log('Removed this element: ' + shifted);
// "제거된 배열 요소: angel"

// while 문에서 shift 메소드 사용하기
var names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];

// 반복 시 배열의 다음 요소를 제거한다. 빈 배열이 될 때까지 반복.
while( (i = names.shift()) !== undefined ) {
    console.log(i);
}
// Andrew, Edward, Paul, Chris, John


// 1-5. unshift()
var arr = [1, 2];

arr.unshift(0); // result of call is 3, the new array length
// arr is [0, 1, 2]

arr.unshift(-2, -1); // = 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-3]);
// arr is [[-3], -2, -1, 0, 1, 2]