// 44. 키패드 누르기

// 풀이
function solution(numbers, hand) {
    let position = [10 , 12];
    let result = [];
    let l = 0;
    let r = 0;

    numbers.forEach(num => {
      if (num === 0) num = 11;

      if (num === 1 || num === 4 || num === 7) {
        result.push('L');
        position[0] = num;
      } else if (num === 3 || num === 6 || num === 9) {
        result.push('R');
        position[1] = num;
      } else {

        if (position[0] === 1 || position[0] === 4 || position[0] === 7 || position[0] === 10) {
          l = Math.ceil(Math.abs((num - (position[0] + 1)) / 3) + 1);
        } else {
          l = Math.ceil(Math.abs((num - position[0]) / 3));
        }

        if (position[1] === 3 || position[1] === 6 || position[1] === 9 || position[1] === 12) {
          r = Math.ceil(Math.abs((num - (position[1] - 1)) / 3) + 1);
        } else {
          r = Math.ceil(Math.abs((num - position[1]) / 3));
        }

        if (l === r) {

          if (hand === 'right') {
            result.push('R');
            position[1] = num;
          } else if (hand === 'left') {
            result.push('L');
            position[0] = num;
          }
          
        } else if (l < r) {
          result.push('L');
          position[0] = num;
        } else if (l > r) {
          result.push('R');
          position[1] = num;
        }
      }
    })
    
    return result.join('');
}

// 키패드 코드화해서 풀어보기
function solution(numbers, hand) {
    const keypad = {
        1:[0,3], 2:[1,3], 3:[2,3],
        4:[0,2], 5:[1,2], 6:[2,2],
        7:[0,1], 8:[1,1], 9:[2,1],
        '*':[0,0], 0:[1,0], '#':[2,0],
    }
    const len = numbers.length;
  
    let answer = '';
    let leftFinger = '*';
    let rightFinger = '#';
  
    for (let i = 0; i < len; i++) {
      let num = numbers[i];
      // 1, 4, 7
      if (num % 3 === 1) {
        answer += 'L';
        leftFinger = num;
      }
      // 0을 제외한 3, 6, 9
      else if (num !== 0 && num % 3 === 0) {
        answer += 'R';
        rightFinger = num;
      }
      // 2, 5, 8, 0
      else {
        answer += getDistance(keypad, num, hand, leftFinger, rightFinger);
        answer[answer.length - 1] === 'L'
          ? (leftFinger = num)
          : (rightFinger = num);
      }
    }
  
    return answer;
  }
  
  function getDistance(keypad, num, hand, leftFinger, rightFinger) {
    const handed = hand === 'left' ? 'L' : 'R';
    const left =
      Math.abs(keypad[num][0] - keypad[leftFinger][0]) +
      Math.abs(keypad[num][1] - keypad[leftFinger][1]);
    const right =
      Math.abs(keypad[num][0] - keypad[rightFinger][0]) +
      Math.abs(keypad[num][1] - keypad[rightFinger][1]);
  
    if (left === right) return handed;
  
    return left < right ? 'L' : 'R';
  }