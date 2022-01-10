// 53. N개의 최소공배수

// 풀이
function solution(arr) {

    function recursive(max, min) {
      return min ? recursive(min, max % min) : max;
    }
  
    let result = arr.reduce((acc, cur) => acc * cur / recursive(acc, cur));
  
    return result;
}