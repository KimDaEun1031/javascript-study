// 3-1. Property 키

//Property 접근
var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
    1: 10,
    function: 1 
};
  
console.log(person);

// 노 권장
// var person = {
//     first-name: 'Ung-mo',
// };

// 3-2. Property 값 읽기
var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
    1: 10
};
  
console.log(person);

console.log(person.first-name);   
console.log(person[first-name]); 
console.log(person['first-name']); 

console.log(person.gender);   
console.log(person[gender]); 
console.log(person['gender']);

console.log(person['1']);
console.log(person[1]);
//   console.log(person.1); 에러

var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
};
  
console.log(person.age); // 없으므로 undefined

// 3-3. Property 값 갱신
var person = {
  'first-name': 'Ung-mo',
  'last-name': 'Lee',
  gender: 'male',
};

person['first-name'] = 'Kim';
console.log(person['first-name'] ); // 'Kim'

// 3-4.  Property 동적 생성
var person = {
  'first-name': 'Ung-mo',
  'last-name': 'Lee',
  gender: 'male',
};

person.age = 20;
console.log(person.age); // 20

// 3-5. Property 삭제
var person = {
  'first-name': 'Ung-mo',
  'last-name': 'Lee',
  gender: 'male',
};

delete person.gender;
console.log(person.gender); // undefined

delete person;
console.log(person); // Object {first-name: 'Ung-mo', last-name: 'Lee'}

// 3-6. for-in 문
var person = {
  'first-name': 'Ung-mo',
  'last-name': 'Lee',
  gender: 'male'
};

// prop에 객체의 Property 이름이 반환된다. 단, 순서는 보장되지 않는다.
for (var prop in person) {
  console.log(prop + ': ' + person[prop]);
}

/*
first-name: Ung-mo
last-name: Lee
gender: male
*/

var array = ['one', 'two'];

// index에 배열의 경우 인덱스가 반환된다
for (var index in array) {
  console.log(index + ': ' + array[index]);
}

/*
0: one
1: two
*/

// for-of 문
const array = [1, 2, 3];
array.name = 'my array';

for (const value of array) {
  console.log(value);
}

/*
1
2
3
*/

for (const [index, value] of array.entries()) {
  console.log(index, value);
}

/*
0 1
1 2
2 3
*/