// 72. 예상 대진표

// 풀이
function solution(n, a, b) {
    let count = 0;
  
    while (a !== b) {
      a = Math.ceil(a / 2);
      b = Math.ceil(b / 2);
  
      count += 1;
    }
  
    return count;
}