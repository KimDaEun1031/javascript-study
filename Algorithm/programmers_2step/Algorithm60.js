// 60. 행렬의 곱셈

// 풀이
function solution(arr1, arr2) {
    let answer = [];
  
    for (let i = 0; i < arr1.length; i++) {
      answer.push([]);
      for (let j = 0; j < arr2[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < arr2.length; k++) {
          sum += arr1[i][k] * arr2[k][j];
        }    
        answer[i].push(sum);
      }
    }
  
    return answer;
}

// map() 과 reduce() 로 풀어보기
function solution(arr1, arr2) {
    return arr1.map((row) => arr2[0].map((x ,y) => row.reduce((a ,b ,c) => a + b * arr2[c][y], 0)))
}
