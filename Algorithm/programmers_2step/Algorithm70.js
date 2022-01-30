// 70. 영어 끝말잇기

// 풀이
function solution(n, words) {
    const len = words.length;
    let stack = {};
  
    for (let i = 0; i < len; i++) {
      const word = words[i];
      if (!stack[word]) {
        if (i > 0 && words[i - 1].charAt(words[i - 1].length - 1) !== word.charAt(0)) {
          return [(i % n) + 1, Math.ceil((i + 1) / n)]; 
        } else {
          stack[word] = word; 
        }
      } else {
        return [(i % n) + 1, Math.ceil((i + 1) / n)];
      }
    }
  
    return [0, 0];
}


// reduce() 사용해서 풀어보기
function solution(n, words) {
    let answer = 0;
       words.reduce((prev, now, idx) => {
           answer = answer || ((words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]) ? idx : answer);
           return now[now.length - 1];
       }, "")
   
       return answer ? [answer % n + 1, Math.floor(answer / n) + 1] : [0, 0];
}