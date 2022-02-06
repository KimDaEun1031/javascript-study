// 76. 삼각 달팽이

// 풀이
function solution(n) {
    let arr = [];
    let x = 0;
    let y = -1;
    let num = 1;
    
    for (let i = 0; i < n; i++) {
      arr[i] = new Array(i + 1);
    }
    
    for (let i = 0; i <= n; i++) {
      for (let j = i; j <= n - 1; j++) {
        if (i % 3 === 0) y += 1;
        else if (i % 3 === 1) x += 1;
        else {
          y -= 1;
          x -= 1;
        }
  
        arr[y][x] = num;
        num++;
      }
    }
    
    return arr.reduce((acc, cur) => acc.concat(cur), []);
}

// 다른 풀이
function solution(n) {
    let arr = Array(n).fill().map((_, i) => Array(i + 1).fill());
  
    let row = -1;
    let col = 0;
    let fill = 0;
  
    for (let i = n; i > 0; i -= 3) {
      arr[++row][col] = ++fill;
  
      for (let j = 0; j < i - 1; j++) arr[++row][col] = ++fill;
      for (let j = 0; j < i - 1; j++) arr[row][++col] = ++fill;
      for (let j = 0; j < i - 2; j++) arr[--row][--col] = ++fill;
    }
  
    return arr.flat();
}