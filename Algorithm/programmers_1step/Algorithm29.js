// 29. 두 정수 사이의 합

// 풀이
function solution(a, b) {
    var answer = 0;
    if (a < b) {
      for (let i = a; i <= b; i++) {
        answer += i;
      }
    }
  
    if (a === b) return a;
  
    if (a > b) {
      for (let i = b; i <= a; i++) {
        answer += i;
      }
    }
    return answer;
}

// Math.abs() 메소드 사용해서 풀어보기
function solution(a, b){
    // 가우스 공식 : a ~ b까지의 합을 계산하는 공식 | n(n+1)/2
    // 양 끝의 합 * 양 끝의 합의 개수
    return (a+b)*(Math.abs(b-a)+1)/2;
}

// 다시 풀어보기 1 - 22/01/25
function solution(a, b) {

  let answer = 0;

  if (a < b) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  } else if (a === b) {
    return a;
  } else {
    for (let i = b; i <= a; i++) {
      answer += i;
    }
  }

  return answer;
  
}