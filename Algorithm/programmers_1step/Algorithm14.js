// 14. 내적

// 풀이
function solution(a, b) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += (a[i]*b[i]);
    }
    return sum;
}

// reduce() 이용해서 풀기
function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}

// 다시 풀어보기 1 - 22/01/06
function solution(numbers) {
    let sum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((a, b) => a + b);
    numbers.forEach(num => sum -= num);
    return sum;
}