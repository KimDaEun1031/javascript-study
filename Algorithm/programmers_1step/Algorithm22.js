// 22. 정수 제곱근 판별

// 풀이
function solution(n) {
    let x = Math.sqrt(n);     
    return Number.isInteger(x) ? Math.pow(x + 1, 2) : -1;
}

// 다시 풀어보기 1 - 22/01/18
function solution(n) {
    let num = Math.sqrt(n);
    return Number.isInteger(num) ? Math.pow(num + 1, 2) : -1;
}