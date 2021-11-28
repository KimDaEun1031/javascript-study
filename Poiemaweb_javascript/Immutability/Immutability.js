//immutable value
var statement = 'I am an immutable value';

var otherStr = statement.slice(8, 17);

console.log(otherStr);
console.log(statement);

//mutable value
var arr = [];
console.log(arr.length);

var v2 = arr.push(2);
console.log(arr.length);

// Object.assign
// Copy
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy);
console.log(obj == copy);

// Merge
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const merge1 = Object.assign(o1, o2, o3);

console.log(merge1); 
console.log(o1); 

// Merge
const o4 = { a: 1 };
const o5 = { b: 2 };
const o6 = { c: 3 };

const merge2 = Object.assign({}, o4, o5, o6);

console.log(merge2);
console.log(o4); 

const user1 = {
    name: 'Lee',
    address: {
      city: 'Seoul'
    }
  };
  
const user2 = Object.assign({}, user1);
console.log(user1 === user2);

user2.name = 'Kim';
console.log(user1.name);
console.log(user2.name); 


console.log(user1.address === user2.address);

user1.address.city = 'Busan';
console.log(user1.address.city);
console.log(user2.address.city);

// Object.freeze
const user1 = {
    name: 'Lee',
    address: {
      city: 'Seoul'
    }
  };
  

const user2 = Object.assign({}, user1, {name: 'Kim'});

console.log(user1.name); 
console.log(user2.name); 

Object.freeze(user1);

user1.name = 'Kim'; 

console.log(user1); 
console.log(Object.isFrozen(user1)); 

// 객체 내부의 객체 변경
const user = {
    name: 'Lee',
    address: {
      city: 'Seoul'
    }
  };
  
Object.freeze(user);

user.address.city = 'Busan';
console.log(user);

// deep freeze
function deepFreeze(obj) {
    const props = Object.getOwnPropertyNames(obj);
  
    props.forEach((name) => {
      const prop = obj[name];
      if(typeof prop === 'object' && prop !== null) {
        deepFreeze(prop);
      }
    });
    return Object.freeze(obj);
  }
  
const user = {
    name: 'Lee',
    address: {
        city: 'Seoul'
    }
};

deepFreeze(user);

user.name = 'Kim';           
user.address.city = 'Busan'; 

console.log(user);