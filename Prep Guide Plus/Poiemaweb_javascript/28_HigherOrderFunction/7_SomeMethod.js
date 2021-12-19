// 6. some() 예제

// 예제
// 배열 내 요소 중 10보다 큰 값이 1개 이상 존재하는지 확인
let res = [2, 5, 8, 1, 4].some(function (item) {
    return item > 10;
});
console.log(res); // false

res = [12, 5, 8, 1, 4].some(function (item) {
    return item > 10;
});
console.log(res); // true

// 배열 내 요소 중 특정 값이 1개 이상 존재하는지 확인
res = ['apple', 'banana', 'mango'].some(function (item) {
    return item === 'banana';
});
console.log(res); // true