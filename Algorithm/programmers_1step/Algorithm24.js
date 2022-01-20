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

// 다시 풀어보기 1 - 22/01/20
function solution(n) {
    const array = [];
    for (let i = 0; i <= n; i++) {
      if (n % i === 0) array.push(i);
    }

    return array.reduce((acc, cur) => acc + cur, 0);
}