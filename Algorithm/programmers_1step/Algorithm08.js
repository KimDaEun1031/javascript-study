// 8. 콜라츠 추측

// 풀이
function solution(num) {
    var count = 0;
    while (num !== 1) {
       if (count > 500) return -1;
       num % 2 === 0 ? num = (num / 2) : num = ((num * 3) + 1);
       count++;                                
    }    
    return count;
}

// 다시 풀어보기 1 - 21/12/30
function solution(num) {
    let answer = 0;
 
    while(num > 1) {
      if (num % 2 === 0) {
        num = num / 2;
        answer++;
      } else {
        num = (num * 3) + 1;
        answer++;
      }
 
      if (answer > 500) return -1;
    }
    
    return answer;
 }
 
