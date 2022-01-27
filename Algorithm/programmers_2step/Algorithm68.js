// 68. 피보나치 수

// 풀이
function solution(n) {
  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
  }

  return arr[n];
}

// 실패한 풀이 - 1 : 재귀
function solution(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;

    return solution(n - 1) + solution(n - 2);
}

// 실패한 풀이 - 2 : 동적계획법(top-down)
function fibo(n, d = []) {
    if(n < 2) return n;
    if(d[n]) return d[n];

    d[n] = fibo(n - 1) + fibo(n - 2);

    return d[n] % 1234567;
}