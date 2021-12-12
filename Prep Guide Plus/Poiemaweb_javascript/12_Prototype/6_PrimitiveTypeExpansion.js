// 원시 타입의 확장
var str = 'test';
console.log(typeof str);                 
console.log(str.constructor === String); 
console.dir(str);                        

var strObj = new String('test');
console.log(typeof strObj);                 
console.log(strObj.constructor === String); 
console.dir(strObj);

console.log(str.toUpperCase());   
console.log(strObj.toUpperCase());


str.myMethod = function () {
  console.log('str.myMethod');
};

str.myMethod();


String.prototype.myMethod = function () {
    return 'myMethod';
  };
  
console.log(str.myMethod());     
console.log('string'.myMethod());
console.dir(String.prototype);

console.log(str.__proto__ === String.prototype);                 
console.log(String.prototype.__proto__  === Object.prototype);   
console.log(String.prototype.constructor === String);           
console.log(String.__proto__ === Function.prototype);            
console.log(Function.prototype.__proto__  === Object.prototype); 