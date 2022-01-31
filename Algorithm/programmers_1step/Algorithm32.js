// 32. 최소직사각형

// 풀이
function solution(sizes) {
    let max = 0;
    let min = 0;
  
    for(let len of sizes) {
      if(len[0] > len[1]){ 
        if(max < len[0]) max = len[0];
        if(min < len[1]) min = len[1];
      }
      else {
        if(max < len[1]) max = len[1];
        if(min < len[0]) min = len[0];
      }
    };
    return max * min;
}

// 다시 풀어보기 1 - 22/01/31
function solution(sizes) {
  const low = [];
  const high = [];

  sizes.map(([i, j]) => {
    if (i > j) {
      low.push(i);
      high.push(j);
    } else {
      low.push(j);
      high.push(i);
    }
    
  });

  return Math.max(...high) * Math.max(...low);
}