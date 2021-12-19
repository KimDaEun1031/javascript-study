// 3. map() 예제

// 예제 1
const numbers = [1, 4, 9];

// 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행
const roots = numbers.map(function (item) {
  // 반환값이 새로운 배열의 요소가 된다. 반환값이 없으면 새로운 배열은 비어 있다.
  return Math.sqrt(item);
});

// 위 코드의 축약표현
// const roots = numbers.map(Math.sqrt);

// map 메소드는 새로운 배열을 반환한다
console.log(roots);   // [ 1, 2, 3 ]
// map 메소드는 원본 배열은 변경하지 않는다
console.log(numbers); // [ 1, 4, 9 ]


// 예제 2
// 두번째 인자로 this 전달
function Prefixer(prefix) {
    this.prefix = prefix;
}
  
Prefixer.prototype.prefixArray = function (arr) {
    // 콜백함수의 인자로 배열 요소의 값, 요소 인덱스, map 메소드를 호출한 배열, 즉 this를 전달할 수 있다.
    return arr.map(function (x) {
      // x는 배열 요소의 값이다.
      return this.prefix + x; // 2번째 인자 this를 전달하지 않으면 this === window
    }, this);
};

const pre = new Prefixer('-webkit-');
const preArr = pre.prefixArray(['linear-gradient', 'border-radius']);
console.log(preArr);
// [ '-webkit-linear-gradient', '-webkit-border-radius' ]


// 예제 3
// map의 동작을 흉내낸 myMap 메소드 작성
Array.prototype.myMap = function (iteratee) {
    // 첫번재 매개변수에 함수가 전달되었는지 확인
    if (!iteratee || {}.toString.call(iteratee) !== '[object Function]') {
      throw new TypeError(iteratee + ' is not a function.');
    }
  
    const result = [];
    for (let i = 0, len = this.length; i < len; i++) {
      /**
       * 배열 요소의 값, 요소 인덱스, 메소드를 호출한 배열, this를 매개변수를 통해 iteratee에 전달하고
       * iteratee를 호출하여 그 결과를 반환용 배열에 푸시하여 반환한다.
       */
      result.push(iteratee(this[i], i, this));
    }
    return result;
};
  
const result = [1, 4, 9].myMap(function (item, index, self) {
    console.log(`[${index}]: ${item} of [${self}]`);
    return Math.sqrt(item);
});

console.log(result); // [ 1, 2, 3 ]
