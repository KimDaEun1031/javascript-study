var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male'
  };
  
for (var prop in person) {
    console.log(prop + ': ' + person[prop]);
}

var array = ['one', 'two'];
  
for (var index in array) {
    console.log(index + ': ' + array[index]);
}

const array = [1, 2, 3];
array.name = 'my array';

for (const value of array) {
  console.log(value);
}

for (const [index, value] of array.entries()) {
  console.log(index, value);
}
