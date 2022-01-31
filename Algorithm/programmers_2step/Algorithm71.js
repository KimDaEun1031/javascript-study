// 71. 최솟값 만들기

// 풀이
function solution(A,B){
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
  
    return A.reduce((acc, cur, i) => acc += cur * B[i] , 0);
}