// 124 나라의 숫자

// 풀이
function solution(n) {
    let answer = "";
  
    while(n > 0) {
        if (n % 3 == 0) {
            answer = "4" + answer;
            n = n / 3 - 1;
        } else if (n % 3 == 1) {
            answer = "1" + answer;
            n = Math.floor(n / 3);
        } else {
            answer = "2" + answer;
            n = Math.floor(n / 3);
        }
    }
  
    return answer;
}

// 재귀함수로 풀어보기
function solution(n) {
    return n === 0 ? '' : solution(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
}