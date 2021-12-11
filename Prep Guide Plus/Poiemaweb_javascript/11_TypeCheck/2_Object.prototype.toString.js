// Object.prototype.toString
var obj = new Object();
obj.toString(); // [object Object]

// Function.prototype.call()
Object.prototype.toString.call('');             // [object String]
Object.prototype.toString.call(new String());   // [object String]
Object.prototype.toString.call(1);              // [object Number]
Object.prototype.toString.call(new Number());   // [object Number]
Object.prototype.toString.call(NaN);            // [object Number]
Object.prototype.toString.call(Infinity);       // [object Number]
Object.prototype.toString.call(true);           // [object Boolean]
Object.prototype.toString.call(undefined);      // [object Undefined]
Object.prototype.toString.call();               // [object Undefined]
Object.prototype.toString.call(null);           // [object Null]
Object.prototype.toString.call([]);             // [object Array]
Object.prototype.toString.call({});             // [object Object]
Object.prototype.toString.call(new Date());     // [object Date]
Object.prototype.toString.call(Math);           // [object Math]
Object.prototype.toString.call(/test/i);        // [object RegExp]
Object.prototype.toString.call(function () {}); // [object Function]
Object.prototype.toString.call(document);       // [object HTMLDocument]
Object.prototype.toString.call(argument);       // [object Arguments]
Object.prototype.toString.call(undeclared);     // ReferenceError

// 타입을 반환하는 함수
function getType(target) {
  return Object.prototype.toString.call(target).slice(8, -1);
}

getType('');         // String
getType(1);          // Number
getType(true);       // Boolean
getType(undefined);  // Undefined
getType(null);       // Null
getType({});         // Object
getType([]);         // Array
getType(/test/i);    // RegExp
getType(Math);       // Math
getType(new Date()); // Date
getType(function () {}); // Function

// 타입을 반환(체크)하는 함수를 위의 sum 함수에 추가
function sum(a, b) {
    // a와 b가 number 타입인지 체크
    if (getType(a) !== 'Number' || getType(b) !== 'Number') {
      throw new TypeError('파라미터에 number 타입이 아닌 값이 할당되었습니다.');
    }
    return a + b;
}
  
console.log(sum(10, 20)); 
console.log(sum('10', 20));


// 타입 별 체크 기능 함수
function getType(target) {
    return Object.prototype.toString.call(target).slice(8, -1);
  }
  
  function isString(target) {
    return getType(target) === 'String';
  }
  
  function isNumber(target) {
    return getType(target) === 'Number';
  }
  
  function isBoolean(target) {
    return getType(target) === 'Boolean';
  }
  
  function isNull(target) {
    return getType(target) === 'Null';
  }
  
  function isUndefined(target) {
    return getType(target) === 'Undefined';
  }
  
  function isObject(target) {
    return getType(target) === 'Object';
  }
  
  function isArray(target) {
    return getType(target) === 'Array';
  }
  
  function isDate(target) {
    return getType(target) === 'Date';
  }
  
  function isRegExp(target) {
    return getType(target) === 'RegExp';
  }
  
  function isFunction(target) {
    return getType(target) === 'Function';
  }