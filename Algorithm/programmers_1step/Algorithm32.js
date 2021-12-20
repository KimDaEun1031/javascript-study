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