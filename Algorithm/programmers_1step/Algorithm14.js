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

// 다시 풀어보기 1 - 22/01/07
function solution(a, b) {
    return a.reduce((acc, cur, index) => acc + (cur * b[index]), 0);
}