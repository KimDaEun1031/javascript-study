// 78. 카펫

// 풀이
function solution(brown, yellow) {
  let sum = brown + yellow;

  for (let i = 3; i <= brown; i++) {
      if (sum % i === 0) {

      let num = sum / i;

      if ((i - 2) * (num - 2) === yellow) {
          return [num, i];
      }
      }
  }
}