// 4. filter() 예제

// 예제 1
const result = [1, 2, 3, 4, 5].filter(function (item, index, self) {
    console.log(`[${index}] = ${item}`);
    return item % 2; // 홀수만을 필터링 (1은 true로 평가된다)
});

console.log(result); // [ 1, 3, 5 ]


// 예제 2
// filter의 동작을 흉내낸 myFilter 메소드 작성
Array.prototype.myFilter = function (predicate) {
    // 첫번재 매개변수에 함수가 전달되었는지 확인
    if (!predicate || {}.toString.call(predicate) !== '[object Function]') {
      throw new TypeError(predicate + ' is not a function.');
    }
  
    const result = [];
    for (let i = 0, len = this.length; i < len; i++) {
      /**
       * 배열 요소의 값, 요소 인덱스, 메소드를 호출한 배열, 즉 this를 매개변수를 통해 predicate에 전달하고
       * predicate를 호출하여 그 결과가 참인 요소만을 반환용 배열에 푸시하여 반환한다.
       */
      if (predicate(this[i], i, this)) result.push(this[i]);
    }
    return result;
};
  
const result = [1, 2, 3, 4, 5].myFilter(function (item, index, self) {
    console.log(`[${index}]: ${item} of [${self}]`);
    return item % 2; // 홀수만을 필터링한다 (1은 true로 평가된다)
});

console.log(result); // [ 1, 3, 5 ]