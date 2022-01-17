// 21. 제일 작은 수 제거하기

// 풀이
function solution(arr) {
    let answer = [];
    if (arr.length <= 1) return [-1];
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
  
    return arr;
}

// 전개구문을 사용하지 않고 풀어보기
function solution(arr) {
    let answer = [];
    if (arr.length <= 1) return [-1];
    arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1);
  
    return arr;
}

// 다시 풀어보기 1 - 22/01/17
function solution(arr) {
    let result = arr.filter(item => item !== Math.min(...arr));
    if (result.length <= 0) result.push(-1)
    
    return result;
}