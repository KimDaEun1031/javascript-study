// 63. 다음 큰 숫자

// 풀이
function solution(n) {
    let nLength = n.toString(2).match(/[1]/g).length;
    let len = 0;
    let num = n + 1;
  
    while (true) {
      len = num.toString(2).match(/[1]/g).length;
  
      if (nLength === len) break;
      else num++;
    }
  
    return num;
}