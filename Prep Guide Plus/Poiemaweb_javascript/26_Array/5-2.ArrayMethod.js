// Array Method (2)

// 1-1. filter()
// 작은 값 걸러내기
function isBigEnough(value) {
    return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered 는 [12, 130, 44]

// JSON에서 무효한 항목 거르기
// 0이 아닌 숫자 id인 모든 요소만
var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
];
  
var invalidEntries = 0;
  
function isNumber(obj) {
    return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
}
  
function filterByID(item) {
    if (isNumber(item.id) && item.id !== 0) {
      return true;
    }
    invalidEntries++;
    return false;
}

var arrByID = arr.filter(filterByID);

console.log('Filtered Array\n', arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries);
// Number of Invalid Entries = 5

// 배열 내용 검색
var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

//검색 조건에 따른 배열 필터링(쿼리)

function filterItems(query) {
  return fruits.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']



// 1-2. map()
// 숫자의 배열을 받아 각 숫자들의 제곱근이 들어있는 새로운 배열 만들기
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots는 [1, 2, 3]
// numbers는 그대로 [1, 4, 9]

// 배열 속 객체를 재구성하기
var kvArray = [{key:1, value:10},
    {key:2, value:20},
    {key:3, value: 30}];

var reformattedArray = kvArray.map(function(obj){
var rObj = {};
rObj[obj.key] = obj.value;
return rObj;
});
// reformattedArray는 [{1:10}, {2:20}, {3:30}]

// kvArray는 그대로
// [{key:1, value:10},
//  {key:2, value:20},
//  {key:3, value: 30}]

// 인자를 받는 함수를 사용해 숫자 배열 재구성하기
// 인자인 배열과 안의 요소들은 map을 통해 순회하면서 원본 배열로부터 자동으로 할당된다.
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
// doubles는 이제 [2, 8, 18]
// numbers는 그대로 [1, 4, 9]

// 각 문자의 ASCII 인코딩 값을 요소로 갖는 배열 얻기
var map = Array.prototype.map;
var a = map.call('Hello World', function(x) { return x.charCodeAt(0); });
// a는 이제 [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]

// querySelectorAll를 사용해 수집된 객체들을 순회 처리하는 방법
// 더 쉬운 방법 from() 사용
var elems = document.querySelectorAll('select option:checked');
var values = [].map.call(elems, function(obj) {
  return obj.value;
});

// javascript의 선택적 인수 위험
function returnInt(element) {
    return parseInt(element, 10);
}

['1', '2', '3'].map(returnInt); // [1, 2, 3]

// 위와 같지만 더 간단한 화살표 표현식
['1', '2', '3'].map(str => parseInt(str));

// 더 간단하게 해결할 수 있는 방법
['1', '2', '3'].map(Number); // [1, 2, 3]
// parseInt와 달리 float이나 지수표현도 반환한다.
['1.1', '2.2e2', '3e300'].map(Number); // [1.1, 220, 3e+300]


// 1-3. reduce()
// 예제 1 - 초기값 없음
[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
});

//10

// 화살표 함수 사용 - 결과 동일
[0, 1, 2, 3, 4].reduce( (prev, curr) => prev + curr );

// 예제 2 - 초기값 있음
[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
}, 10);

// 20

// 배열의 모든 값 합산
var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
// sum is 6

// 화살표 함수
var total = [ 0, 1, 2, 3 ].reduce(
    ( accumulator, currentValue ) => accumulator + currentValue, 0);

// 객체 배열에서의 값 합산
// 객체로 이루어진 배열에 들어있는 값을 합산하기 위해서는 반드시 초기값을 주어야한다.
var initialValue = 0;
var sum = [{x: 1}, {x:2}, {x:3}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x;
},initialValue)

console.log(sum) // logs 6

// 화살표 함수
var initialValue = 0;
var sum = [{x: 1}, {x:2}, {x:3}].reduce(
    (accumulator, currentValue) => accumulator + currentValue.x  ,initialValue);

console.log(sum) // logs 6

// 중첩 배열 평탄화
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    function(accumulator, currentValue) {
      return accumulator.concat(currentValue);
}, []);
// 평탄화 결과: [0, 1, 2, 3, 4, 5]
  
// 화살표 함수
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
( accumulator, currentValue ) => accumulator.concat(currentValue), []);

// 객체 내의 값 인스턴스 개수 세기
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

// 속성으로 객체 분류하기
var people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
];
  
function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      var key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
}

var groupedPeople = groupBy(people, 'age');
// groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }

// 확장 연산자와 초기값을 이용해 객체로 이루어진 배열에 담긴 배열 연결하기
var friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
}];
  
var allbooks = friends.reduce(function(accumulator, currentValue) {
    return [...accumulator, ...currentValue.books];
}, ['Alphabet']);

// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]

// 배열의 중복 항목 제거
let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((accumulator, current) => {
    const length = accumulator.length
    if (length === 0 || accumulator[length - 1] !== current) {
        accumulator.push(current);
    }
    return accumulator;
}, []);
console.log(result); //[1,2,3,4,5]

// reduce()로 map() 작성하기
if (!Array.prototype.mapUsingReduce) {
    Array.prototype.mapUsingReduce = function(callback, thisArg) {
      return this.reduce(function(mappedArray, currentValue, index, array) {
        mappedArray[index] = callback.call(thisArg, currentValue, index, array);
        return mappedArray;
      }, []);
    };
}
  
[1, 2, , 3].mapUsingReduce(
    (currentValue, index, array) => currentValue + index + array.length
); // [5, 7, , 10]


// 1-4. forEach()
// 초기화하지 않은 값의 반복 생략
const arraySparse = [1,3,,7]
let numCallbackRuns = 0

arraySparse.forEach(function(element){
  console.log(element)
  numCallbackRuns++
})

console.log("numCallbackRuns: ", numCallbackRuns)

// 1
// 3
// 7
// numCallbackRuns: 3
// comment: as you can see the missing value between 3 and 7 didn't invoke callback function.

// for 문을 forEach()로 바꾸기
const items = ['item1', 'item2', 'item3'];
const copy = [];

// 이전
for (let i=0; i<items.length; i++) {
  copy.push(items[i]);
}

// 이후
items.forEach(function(item){
  copy.push(item);
});

// 배열 값 출력하기
function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element);
}
  
// a[2]는 빈 값이라서 건너뛴다.
[2, 5, , 9].forEach(logArrayElements);
// 기록:
// a[0] = 2
// a[1] = 5
// a[3] = 9

// thisArg 사용
function Counter() {
    this.sum = 0
    this.count = 0
  }
  Counter.prototype.add = function(array) {
    array.forEach(function(entry) {
      this.sum += entry // 배열의 각 요소 값을 더해준다.
      ++this.count // forEach() 가 반복한 횟수
    }, this)
    // ^---- 주의
}

const obj = new Counter()
obj.add([2, 5, 9])
obj.count
// 3
obj.sum
// 16

// 객체 복사 함수
function copy(obj) {
    const copy = Object.create(Object.getPrototypeOf(obj))
    const propNames = Object.getOwnPropertyNames(obj)
  
    propNames.forEach(function(name) {
      const desc = Object.getOwnPropertyDescriptor(obj, name)
      Object.defineProperty(copy, name, desc)
    })
  
    return copy
}

const obj1 = { a: 1, b: 2 }
const obj2 = copy(obj1)      // obj2 looks like obj1 now

// 반복 중 배열 변경으로 인한 반복 생략
// forEach()는 반복 전에 배열의 복사본을 만들지 않는다.
let words = ['one', 'two', 'three', 'four']
words.forEach(function(word) {
  console.log(word)
  if (word === 'two') {
    words.shift()
  }
})
// one
// two
// four

// 배열 평탄화
// 시연 용으로 배열 평탄화는 flat()를 사용
function flatten(arr) {
  const result = []

  arr.forEach((i) => {
    if (Array.isArray(i)) {
      result.push(...flatten(i))
    } else {
      result.push(i)
    }
  })

  return result
}

// Usage
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]]

flatten(nested) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
