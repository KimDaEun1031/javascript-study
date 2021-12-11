function changeVal(primitive, obj) {
    primitive += 100;
    obj.name = 'Kim';
    obj.gender = 'female';
}
  
var num = 100;
var obj = {
    name: 'Lee',
    gender: 'male'
};
  
console.log(num); // 100
console.log(obj); // Object {name: 'Lee', gender: 'male'}

changeVal(num, obj);

console.log(num); // 100
console.log(obj); // Object {name: 'Kim', gender: 'female'}