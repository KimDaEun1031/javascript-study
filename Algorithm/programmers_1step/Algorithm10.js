// 10. 자연수 뒤집어 배열로 만들기

// 풀이
function solution(n) {
    var str = String(n).split('').reverse();
    var answer = [];
    for (var i = 0; i < str.length; i++) {
        answer[i] = Number(str[i]);
    }
    return answer;
}

// 다시 풀어보기 1 - 22/01/03
function solution(n) {
    let result = [];
    let str = String(n).split('').reverse();  
    str.forEach(item => result.push(Number(item)));
    return result;
}