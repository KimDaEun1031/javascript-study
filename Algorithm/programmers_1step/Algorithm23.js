// 23. 정수 내림차순으로 배치하기

// 풀이
function solution(n) {
    let str = String(n).split('').sort().reverse().join('');
    return Number(str);
}
