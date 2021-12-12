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