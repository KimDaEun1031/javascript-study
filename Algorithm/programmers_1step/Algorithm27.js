// 27. 문자열 내림차순으로 배치하기

// 풀이
function solution(s) {
    return String(s.split('').sort().reverse().join(''));
}