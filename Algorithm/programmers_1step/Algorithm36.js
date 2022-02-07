// 36. K번째수

// 풀이
function solution(array, commands) {
    let answer = [];
    for (const i in commands) {
      let arr = array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b);
      answer.push(arr[commands[i][2] - 1])
    }
    return answer;
}

// map() 사용해서 풀어보기
function solution(array, commands) {
    let answer = [];

    answer = commands.map(a => {
        return array.slice(a[0] - 1, a[1]).sort((b, c) => b - c)[a[2] - 1];
    })
    return answer;
}

// 다시 풀어보기 1 - 22/02/07
function solution(array, commands) {
    let result = [];
  
    for (let i = 0; i < commands.length; i++) {
      let str = array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b);
      result.push(str[commands[i][2] - 1]);
    }
  
    return result;
}