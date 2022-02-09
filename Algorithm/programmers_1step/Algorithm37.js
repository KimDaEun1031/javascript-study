// 37. 모의고사

// 풀이
function solution(answers) {
    let one = [1, 2, 3, 4, 5];
    let two = [2, 1, 2, 3, 2, 4, 2, 5];
    let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let result = [0, 0, 0];
    for (let i = 0; i < answers.length; i++) {
      if (one[i % one.length] === answers[i]) result[0] += 1;
      if (two[i % two.length] === answers[i]) result[1] += 1;
      if (three[i % three.length] === answers[i]) result[2] += 1;
    }
    let max = Math.max(...result);
    
    let answer = [];
    if (result[0] === max) answer.push(1); 
    if (result[1] === max) answer.push(2); 
    if (result[2] === max) answer.push(3);
    
    return answer;
}

// filter() 사용해서 풀어보기
function solution(answers) {
    let answer = [];
    let a1 = [1, 2, 3, 4, 5];
    let a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    let a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    let a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    let a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    let max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};

    return answer;
}

// 다시 풀어보기 1 - 22/02/08
function solution(answers) {
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let result = [];

  let countA = answers.filter((val, i) => val === one[i % one.length]).length;
  let countB = answers.filter((val, i) => val === two[i % two.length]).length;
  let countC = answers.filter((val, i) => val === three[i % three.length]).length;

  let max = Math.max(countA, countB, countC);

  if (countA === max) result.push(1);
  if (countB === max) result.push(2);
  if (countC === max) result.push(3);

  return result;
}