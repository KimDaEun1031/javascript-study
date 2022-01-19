// 61. 짝지어 제거하기

// 풀이
function solution(s) {
    let arr = [];
    for (let i = 0; i < s.length; i++) {
      arr[arr.length - 1] !== s[i] ? arr.push(s[i]) : arr.pop();
    }
  
    return arr.length > 0 ? 0 : 1;
}
