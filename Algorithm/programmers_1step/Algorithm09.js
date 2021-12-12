// 9. 문자열 다루기 기본

// 풀이
function solution(s) {
    if (s.length === 4 || s.length === 6) {
        return s == parseInt(s);
    } 
    return false;
}