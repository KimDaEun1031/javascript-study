// 59. 올바른 괄호

// 풀이
function solution(s){
    let str = s.split('');
    let count = 0;
  
    if (str[0] === ')') return false;
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') count++;
      else if (count >= 1 && str[i] === ')') count--;
    }
  
    return count === 0 ? true : false;
}