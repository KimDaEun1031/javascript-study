// 30. 나누어 떨어지는 숫자 배열

// 풀이
function solution(arr, divisor) {
    arr.sort(function (a, b) {return a - b});
    let result = arr.filter(num => num % divisor === 0);
    if (result.length === 0) result.push(-1);

    return result;
}

// 다시 풀어보기 1 - 22/01/27
function solution(arr, divisor) {
    let result = arr.filter(item => item % divisor === 0).sort((a, b) => a - b);

    if (result.length === 0) return [-1];
    return result;
}