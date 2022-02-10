// 39. 다트게임

// 풀이
function solution(dartResult) {
    let arr = [];
    let temp = 0;
    for (let i = 0; i < dartResult.length; i++) {
      if (dartResult[i] >= 0 && dartResult[i] <= 9) {
        if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
          temp = 10;
          i++;
        } else {
          temp = dartResult[i];
        }
      } else if (dartResult[i] === 'S') {
          arr.push(temp);
      } else if (dartResult[i] === 'D') {
          arr.push(Math.pow(temp, 2));
      } else if (dartResult[i] === 'T') {
          arr.push(Math.pow(temp, 3));
      } else if (dartResult[i] === '#') {
          arr[arr.length - 1] *= -1;
      } else if (dartResult[i] === '*') {
          arr[arr.length - 1] *= 2;
          arr[arr.length - 2] *= 2;
      }
    }
  
    let strToNum = [];
    arr.forEach(num => strToNum.push(Number(num)))
  
    return strToNum.reduce((acc, cur) => acc + cur);
}


// 정규식 사용해서 풀어보기
function solution(dartResult) {
    const bonus = { 'S': 1, 'D': 2, 'T': 3 },
          options = { '*': 2, '#': -1, undefined: 1 };

    let darts = dartResult.match(/\d.?\D/g);

    for (let i = 0; i < darts.length; i++) {
        let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
            score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

        if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

        darts[i] = score;
    }

    return darts.reduce((a, b) => a + b);
}

// 다시 풀어보기 1 - 22/02/10
function solution(dartResult) {
    let arr = [];
    let temp = 0;
      
    for (let i = 0; i < dartResult.length; i++) {
        
      if (dartResult[i] >= 0 && dartResult[i] <= 9) {
        if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
          temp = 10;
          i++;
        } else {
          temp = dartResult[i];
        }
          
      } else if (dartResult[i] === 'S') {
          arr.push(temp);
      } else if (dartResult[i] === 'D') {
          arr.push(Math.pow(temp, 2));
      } else if (dartResult[i] === 'T') {
          arr.push(Math.pow(temp, 3));
      } else if (dartResult[i] === '#') {
          arr[arr.length - 1] *= -1;
      } else if (dartResult[i] === '*') {
          arr[arr.length - 1] *= 2;
          arr[arr.length - 2] *= 2;
      }
    }
  
    return arr.reduce((acc, cur) => acc + Number(cur), 0);
}