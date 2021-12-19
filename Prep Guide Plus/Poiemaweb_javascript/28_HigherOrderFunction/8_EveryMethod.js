// 7. every() 예제

// 예제
// 배열 내 모든 요소가 10보다 큰 값인지 확인
let res = [21, 15, 89, 1, 44].every(function (item) {
    return item > 10;
});
console.log(res); // false

res = [21, 15, 89, 100, 44].every(function (item) {
    return item > 10;
});
console.log(res); // true