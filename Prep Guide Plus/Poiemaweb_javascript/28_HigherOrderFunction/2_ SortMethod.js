// 1. sort() 예제

// 예제 1
const fruits = ['Banana', 'Orange', 'Apple'];

// ascending(오름차순)
fruits.sort();
console.log(fruits); // [ 'Apple', 'Banana', 'Orange' ]

// descending(내림차순)
fruits.reverse();
console.log(fruits); // [ 'Orange', 'Banana', 'Apple' ]


// 예제 2
// 숫자 정렬 시 주의
// 기본 정렬 순서는 문자열 Unicode 포인트 순서에 따르기에 숫자 배열 정렬 시 일시적으로 문자열로 변환 후 정렬한다.
// 문자열 '1' Unicode 코드 포인트 : U+0031
// 문자열 '2' Unicode 코드 포인트 : U+0032
// 문자열 '10' Unicode 코드 포인트 : U+0031U+0030
// -> 문자열 '10'이 문자열 '2'보다 Unicode 코드 포인트 순서가 앞서므로 정렬 시 10, 2 식으로 정렬된다.
const points = [40, 100, 1, 5, 2, 25, 10];

points.sort();
console.log(points); // [ 1, 10, 100, 2, 25, 40, 5 ]


// 예제 3
const points = [40, 100, 1, 5, 2, 25, 10];

// 숫자 배열 오름차순 정렬
// 비교 함수의 반환값이 0보다 작은 경우, a를 우선하여 정렬한다.
points.sort(function (a, b) { return a - b; });
// ES6 화살표 함수
// points.sort((a, b) => a - b);
console.log(points); // [ 1, 2, 5, 10, 25, 40, 100 ]

// 숫자 배열에서 최소값 취득
console.log(points[0]); // 1

// 숫자 배열 내림차순 정렬
// 비교 함수의 반환값이 0보다 큰 경우, b를 우선하여 정렬한다.
points.sort(function (a, b) { return b - a; });
// ES6 화살표 함수
// points.sort((a, b) => b - a);
console.log(points); // [ 100, 40, 25, 10, 5, 2, 1 ]

// 숫자 배열에서 최대값 취득
console.log(points[0]); // 100


// 객체를 요소로 갖는 배열을 정렬하는 예제
const todos = [
    { id: 4, content: 'JavaScript' },
    { id: 1, content: 'HTML' },
    { id: 2, content: 'CSS' }
 ];

// 비교 함수
function compare(key) {
    return function (a, b) {
      // Property 값이 문자열인 경우, - 산술 연산으로 비교하면 NaN이 나오므로 비교 연산을 사용한다.
      return a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0);
    };
}

// id를 기준으로 정렬
todos.sort(compare('id'));
console.log(todos);

// content를 기준으로 정렬
todos.sort(compare('content'));
console.log(todos);