// 24. 약수의 합

// 풀이
function solution(n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
       if (n % i === 0) arr.push(i);
    }
    let answer = arr.reduce((acc, cur) => acc + cur, 0);
    return answer;
}
