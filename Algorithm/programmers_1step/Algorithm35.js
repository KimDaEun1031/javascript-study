// 35. 예산

// 풀이
function solution(d, budget) {
    let answer = 0;
    let sum = 0;
     
    d.sort((a, b) => a - b);
     
    for (let i = 0; i < d.length; i++) {
       answer++;
       sum += d[i];
 
       if (sum > budget) answer--;
    }
    
    return answer;
}

// reduce() 사용해서 풀어보기
function solution(d, budget) {
    d.sort((a, b) => a - b);

    while (d.reduce((a, b) => (a + b), 0) > budget) d.pop();

    return d.length;
}

// 다시 풀어보기 1 - 22/02/06
function solution(d, budget) {
    let result = 0;
    let sum = 0;
  
    d.sort((a, b) => a - b);
  
    for (let i = 0; i < d.length; i++) {
      result++;
      sum += d[i];
  
      if (sum > budget) result--;
    }
  
    return result;
}