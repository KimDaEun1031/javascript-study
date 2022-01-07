// 13. 없는 숫자 더하기

// 풀이
function solution(numbers) {
    let sum = [0,1,2,3,4,5,6,7,8,9].reduce((acc, cur) => acc+cur);
    numbers.forEach(function(num) {
        sum -= num;
    })
    return sum;
}

// 더 간단하게 풀기
function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

// 다시 풀어보기 1 - 22/01/06
function solution(numbers) {
    let sum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((a, b) => a + b);
    numbers.forEach(num => sum -= num);
    return sum;
}