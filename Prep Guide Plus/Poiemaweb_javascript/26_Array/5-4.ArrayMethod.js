// Array Method (4)

// 1-1. indexOf()
// 배열 값 찾기
var array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0

// 요소의 모든 항목 찾기
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]

// 요소가 배열에 존재하는지 확인 후 배열 업데이트
function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('새로운 veggies 컬렉션 : ' + veggies);
    } else if (veggies.indexOf(veggie) > -1) {
        console.log(veggie + ' 은 이미 veggies 컬렉션에 존재합니다.');
    }
}

var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

updateVegetablesCollection(veggies, 'spinach');
// 새로운 veggies 컬렉션 : potato, tomato, chillies, green-pepper, spinach
updateVegetablesCollection(veggies, 'spinach');
// spinach 은 이미 veggies 컬렉션에 존재합니다.


// 1-2. isArray()
// 배열인지 판별하기
// 모두 true 반환
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array('a', 'b', 'c', 'd'));
Array.isArray(new Array(3));
// Array.prototype은 스스로도 배열이다.
Array.isArray(Array.prototype);

// 모두 false 반환
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray({ __proto__: Array.prototype });

// instanceof vs isArray
var iframe = document.createElement('iframe');
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length-1].Array;
var arr = new xArray(1,2,3); // [1,2,3]

// 올바른 Array 판별
Array.isArray(arr);  // true
// iframe을 통해서 작동하지 않기 때문에 올바르지 않은 방법
arr instanceof Array; // false


// 1-3. join()
// 4가지 다른 방법으로 배열 연결하기
var a = ['바람', '비', '불'];
var myVar1 = a.join();      // myVar1에 '바람,비,불'을 대입
var myVar2 = a.join(', ');  // myVar2에 '바람, 비, 불'을 대입
var myVar3 = a.join(' + '); // myVar3에 '바람 + 비 + 불'을 대입
var myVar4 = a.join('');    // myVar4에 '바람비불'을 대입


// 1-4. keys()
// keys 메소드는 빈 인덱스를 무시하지 않는다.
var arr = ['a', , 'c'];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]


// 1-5. lastIndexOf()
// 배열 값 찾기
var array = [2, 5, 9, 2];
array.lastIndexOf(2);     // 3
array.lastIndexOf(7);     // -1
array.lastIndexOf(2, 3);  // 3
array.lastIndexOf(2, 2);  // 0
array.lastIndexOf(2, -2); // 0
array.lastIndexOf(2, -1); // 3

// 요소의 모든 항목 찾기
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.lastIndexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
}

console.log(indices);
// [4, 2, 0]