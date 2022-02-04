// 75. [3차] n진수 게임

// 풀이
function solution(n, t, m, p) {
  let answer = '';
  let str = '';
  let num = 0;

  while(str.length <= t * m) {
      str += num.toString(n).toUpperCase();
      num++;
  }


  let count = 0;
  for (let i = 0; i < str.length; i++) {
      if (count === t)
      break;
      if (i % m === p - 1){
      answer += str[i];
      count++;
      }
  }

  return answer;
}