// 18. 행렬의 덧셈

// 풀이
function solution(arr1, arr2) {
    var answer = [];
    for (let i = 0; i < arr1.length; i++) {
      let temp = []
      for (let j = 0; j < arr1[i].length; j++) {
        temp.push(arr1[i][j] + arr2[i][j]);
      }
      answer.push(temp);
    }
    return answer;
}

// map() 사용해서 풀어보기
// map을 통해 풀 수 있는 건 알았는데 잘 못해서 결국 for 문으로 풀었다..
function solution(arr1, arr2) { 
	return arr1.map((e,i) => arr2[i].map((v,j) => arr1[i][j]+arr2[i][j])) 
}