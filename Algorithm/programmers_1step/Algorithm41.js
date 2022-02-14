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

// 다시 풀어보기 1 - 22/02/14
function solution(nums) {
  const getPermutations = function (arr, len = arr.length) {
    const result = [];
    if (len === 1) return arr.map(element => [element]);

    arr.forEach((cur, index) => {
      const permutations = getPermutations(arr.slice(index + 1), len - 1);

      permutations.forEach(item => {
        result.push([cur, ...item]);
      })
    });

    return result;
  };

  const isPrime = function (num) {
    const arr = [];

    for (let i = 2; i <= num; i++) {
      arr.push(i);
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (arr[i] === 0) continue;

      for(let j = i + i; j <= num; j += i) {
        arr[j] = 0;
      }
    }

    return arr;
  };

  const getElementSum = function (arr) {
    return arr.map(item => item.reduce((acc, cur) => acc + cur));
  };

  const resultArr = getPermutations(nums, 3);
  const sum = getElementSum(resultArr);
  const prime = isPrime(Math.max(...sum));

  return sum.filter(item => prime[item] !== 0).length;
}