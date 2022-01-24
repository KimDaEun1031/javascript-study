// 65. 점프와 순간 이동

// 풀이
function solution(n) {
    let result = 0;
  
    while(n > 0) {
      if (n % 2 !== 0) {
        n -= 1;
        result = result + 1;
      } else {
        n = n / 2;
      }
    }
  
    return result;
}