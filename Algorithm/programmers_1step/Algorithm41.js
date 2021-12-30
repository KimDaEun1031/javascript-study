// 41. 소수 만들기

// 풀이
function solution(nums) {
    let answer = 0;
    
    // 소수 판별 함수 - 스택 오버플로우
    const isPrime = num => {
     for (let i = 2; i < num; i++) {
       if (num % i === 0) return false;
     }
     return num > 1;
   }
   
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        for (let k = j + 1; k < nums.length; k++) {
          let sum = nums[i] + nums[j] + nums[k];
          if (isPrime(sum)) answer++;
        }
      }
    }
   
    return console.log(answer);
}