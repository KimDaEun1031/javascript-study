// 57. 최댓값과 최솟값

// 풀이
function solution(s) {
    let answer = '';
  
    s = s.split(' ').map(num => Number.parseInt(num)).sort();
    
    let max = Math.max(...s);
    let min = Math.min(...s);
  
    answer =  min + " " + max;
    
    return answer;
}

// 문자열을 숫자 타입으로 바꾸지 않고 풀어보기
function solution(s) {
    const arr = s.split(' ');

    return Math.min(...arr)+' '+Math.max(...arr);
}