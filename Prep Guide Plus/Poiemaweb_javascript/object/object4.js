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

//Property 값 읽기
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

// Property 값 갱신
var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
  };
  
person['first-name'] = 'Kim';
console.log(person['first-name'] );

// Property 동적 생성
var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
  };
  
person.age = 20;
console.log(person.age);

// Property 삭제
var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
  };
  
delete person.gender;
console.log(person.gender); 
  
delete person;
console.log(person);
