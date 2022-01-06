// 49. 최대공약수와 최소공배수

// 풀이
function solution(n, m) {
    let answer = [];
    let max = 0;
    let min = 0;

    if (n < m) {
      max = m;
      min = n;
    } else {
      max = n;
      min = m
    }

    function recursive(max, min) {
      if (max % min === 0) {
        return answer.push(min);
      } else {
        recursive(min, max % min);
      }
    }

    recursive(max, min);
    answer.push(max * min / answer[0]);
    
    return answer;
}

// for 문으로 풀어보기
function solution(n, m) {
    let r, multiple;
    
    for (multiple = n * m; r = n % m; n = m, m = r) {}
    let answer = [m, multiple/m];

    return answer;
}

// while 문으로 풀어보기
function solution(n, m) {
    let answer = [];
    let max = 0;
    let min = 0;
    let r = 0;

    if (n < m) {
      max = m;
      min = n;
    } else {
      max = n;
      min = m
    }

    while(max % min !== 0) {
      r = max % min;
      max = min;
      min = r;

      if (r === 0) {
        break;
      }
    }
    answer.push(min)

    let bigNum = n < m ? m : n;
    let smallNum = n < m ? n : m;
    answer.push(bigNum * smallNum / answer[0]);
    
    return answer;
}