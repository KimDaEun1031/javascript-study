// 23. 정수 내림차순으로 배치하기

// 풀이
function solution(n) {
    let str = String(n).split('').sort().reverse().join('');
    return Number(str);
}

// 다시 풀어보기 1 - 22/01/19

function solution(n) {
    return Number(String(n).split('').sort().reverse().join(''));
}