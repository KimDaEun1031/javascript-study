// 8. find() 예제

// 예제 1
const users = [
    { id: 1, name: 'Lee' },
    { id: 2, name: 'Kim' },
    { id: 2, name: 'Choi' },
    { id: 3, name: 'Park' }
];

// 콜백함수를 실행하여 그 결과가 참인 첫번째 요소를 반환한다.
  let result = users.find(function (item) {
    return item.id === 2;
});

// ES6
// const result = users.find(item => item.id === 2;);

// Array#find는 배열이 아니라 요소를 반환한다.
console.log(result); // { id: 2, name: 'Kim' }

// Array#filter는 콜백함수의 실행 결과가 true인 배열 요소의 값만을 추출한 새로운 배열을 반환한다.
result = users.filter(function (item) {
    return item.id === 2;
});

console.log(result); // [ { id: 2, name: 'Kim' },{ id: 2, name: 'Choi' } ]


// 예제 2
// find의 동작을 흉내낸 myFind 메소드 작성
const users = [
    { id: 1, name: 'Lee' },
    { id: 2, name: 'Kim' },
    { id: 2, name: 'Choi' },
    { id: 3, name: 'Park' }
];

Array.prototype.myFind = function (predicate) {
    // 첫번재 매개변수에 함수가 전달되었는지 확인
    if (!predicate || {}.toString.call(predicate) !== '[object Function]') {
      throw new TypeError(predicate + ' is not a function.');
    }
  
    /**
     * 배열 요소의 값, 요소 인덱스, 메소드를 호출한 배열, this를 매개변수를 통해 predicate에 전달하고
     * predicate를 호출하여 그 결과가 참인 요소를 반환하고 처리를 종료한다.
     */
    for (let i = 0, len = this.length; i < len; i++) {
      if (predicate(this[i], i, this)) return this[i];
    }
};
  
const result = users.myFind(function (item, index, array) {
    console.log(`[${index}]: ${JSON.stringify(item)} of [${JSON.stringify(array)}]`);
    return item.id === 2; // 요소의 id 프로퍼티의 값이 2인 요소를 검색
});

console.log(result); // { id: 2, name: 'Kim' }