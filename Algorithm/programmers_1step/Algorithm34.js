// 34. 두 개 뽑아서 더하기

// 풀이
function solution(numbers) {
    let arr = [];
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        arr.push(numbers[i] + numbers[j])
      }
    }
  
    let result = arr.sort(function(a, b) {
      return a-b;
    }).reduce((acc, cur) => {
      const length = acc.length;
      if (length === 0 || acc[length - 1] !== cur) {
        acc.push(cur);
      }
      return acc;
    }, [])
  
    return result;
}

// Set() 사용해서 풀어보기
function solution(numbers) {
    let arr = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            arr.push(numbers[i] + numbers[j])
        }
    }

    let answer = [...new Set(arr)]

    return answer.sort((a, b) => a - b)
}