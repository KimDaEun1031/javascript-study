// 9. 문자열 다루기 기본

// 풀이
function solution(s) {
    if (s.length === 4 || s.length === 6) {
        return s == parseInt(s);
    } 
    return false;
}

// 다시 풀어보기 1 - 21/12/31
function solution(s) {
    return (s.length === 4 || s.length === 6) && (Number.isSafeInteger(Number(s)) && (s.search('e') === -1)) ? true : false;
}