// 82. 소수 찾기

// 풀이
function solution(numbers) {
    let answer = 0;
  
    numbers = numbers.split('');
  
    const getPermutations = function (arr, num) {
      const result = [];
  
      if (num === 1) return arr.map(element => [element]);
  
      arr.forEach((item, index, array) => {
        const rest = [...array.slice(0, index), ...array.slice(index + 1)];
        const permutations = getPermutations(rest, num - 1);
        const attached = permutations.map(element => [item, ...element]);
  
        result.push(...attached);
      });
  
      return result;
    }
  
    const isPrime = function (num) {
      if (num === 2 || num === 3) return true;
      if (num === 0 || num === 1) return false;
  
      for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) return false;
      }
  
      return true;
    }
  
    let arr = [];
  
    for (let i = 1; i <= numbers.length; i++) {
      let combi = getPermutations(numbers, i);
      arr.push(...combi);
    }
  
    let flatArr = [...new Set(arr.flatMap(item => Number(item.join(''))))];
  
    for (let val of flatArr) {
      if (isPrime(val)) answer++;
    }
  
    return answer;
}