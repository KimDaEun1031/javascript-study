// 85. 조이스틱

// 풀이
function solution(name) {
    let result = 0;
    let count = 0;
    let length = name.length;
    let move = length - 1;
  
    for (let i = 0; i < name.length; i++) {
      result += Math.min(name.charCodeAt(i) - 65, 90 - name.charCodeAt(i) + 1);
  
      count = i + 1;
      while(count < length && name.charCodeAt(count) === 65) {
        count++;
      }
  
      move = Math.min(move, i * 2 + length - count);
      move = Math.min(move, (length - count) * 2 + i);
    }
  
    return result + move;
}