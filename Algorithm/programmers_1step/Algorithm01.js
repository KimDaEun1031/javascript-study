// 풀이
function solution(num) {
    var answer = '';
    
    if (num % 2 !== 0) {
        answer = 'Odd';
    } else {
        answer = 'Even'
    }
     
    return answer;
}

// 삼항 연산자 풀이
function solution(num) {
    return num % 2 ? "Odd" : "Even";
}