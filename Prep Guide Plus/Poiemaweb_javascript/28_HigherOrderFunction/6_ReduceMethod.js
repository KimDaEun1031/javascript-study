// 5. reduce() 예제

// 예제 1
const arr = [1, 2, 3, 4, 5];

/*
previousValue: 이전 콜백의 반환값
currentValue : 배열 요소의 값
currentIndex : 인덱스
array        : 메소드를 호출한 배열, 즉 this
*/
// 합산
const sum = arr.reduce(function (previousValue, currentValue, currentIndex, self) {
  console.log(previousValue + '+' + currentValue + '=' + (previousValue + currentValue));
  return previousValue + currentValue; // 결과는 다음 콜백의 첫번째 인자로 전달된다
});

console.log(sum); // 15: 1~5까지의 합
/*
1: 1+2=3
2: 3+3=6
3: 6+4=10
4: 10+5=15
15
*/

// 최대값 취득
const max = arr.reduce(function (pre, cur) {
  return pre > cur ? pre : cur;
});

console.log(max); // 5: 최대값


// 예제 2
// 두번째 인수로 초기값 전달 -> 콜백 함수에 최초로 전달
const sum = [1, 2, 3, 4, 5].reduce(function (pre, cur) {
    return pre + cur;
}, 5);

console.log(sum); // 20
// 5 + 1 => 6 + 2 => 8 + 3 => 11 + 4 => 15 + 5


// 예제 3
// 객체의 Property 값을 합산할 시 초기값이 없는 경우
const products = [
    { id: 1, price: 100 },
    { id: 2, price: 200 },
    { id: 3, price: 300 }
  ];
  
  // Property 값을 합산
  const priceSum = products.reduce(function (pre, cur) {
    console.log(pre.price, cur.price);
    // 숫자값이 두번째 콜백 함수 호출의 인수로 전달된다. 이때 pre.price는 undefined이다.
    return pre.price + cur.price;
});

console.log(priceSum); // NaN


// 예제 4
// 객체의 Property 값을 합산할 시 초기값을 지정하는 경우
const products = [
    { id: 1, price: 100 },
    { id: 2, price: 200 },
    { id: 3, price: 300 }
  ];
  
  // Property 값을 합산
  const priceSum = products.reduce(function (pre, cur) {
    console.log(pre, cur.price);
    return pre + cur.price;
}, 0);

console.log(priceSum); // 600


// 예제 5
// reduce()로 빈 배열 호출 시 에러 발생
const sum = [].reduce(function (pre, cur) {
    console.log(pre, cur);
    return pre + cur;
});
// TypeError: Reduce of empty array with no initial value
  
// 빈 배열 호출 시 초기값 지정하면 에러 회피
const sum = [].reduce(function (pre, cur) {
    console.log(pre, cur);
    return pre + cur;
}, 0);

console.log(sum); // 0

