// 48. 평균 구하기

// 풀이
function solution(arr) {
    return arr.reduce((a, b) => a + b) / arr.length;
}