// 56. 숫자의 표현

// 풀이
function solution(n) {
    let result = 0;
    let count = 1;
  
    for (let i = 1; i <= n / 2; i++) {
      for (let j = i, result = 0; j <= n + 1; j++) {
        result += j;
        if (result === n) {
          count += 1;
          break;
        } else if (result > n)  break;
      }   
    }
  
    return count;
}

// 약수 조건으로 풀어보기
function solution(n) {
    let result = 0;
  
    for (let i = 0; i <= n; i++) {
      if (n % i == 0 && i % 2 == 1) result++;
    }
    
    return result;
}