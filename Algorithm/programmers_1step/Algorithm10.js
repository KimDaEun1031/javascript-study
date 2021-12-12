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