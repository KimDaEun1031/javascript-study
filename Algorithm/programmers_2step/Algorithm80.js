// 80. H-Index

// 풀이
function solution(citations) {
    let temp = 0;
  
    citations.sort((a, b) => b - a);
  
    for (let i = 0; i < citations.length; i++) {
      if (citations[i] === 0) return 0;
      if (citations[i] < i + 1) return temp + 1;  
  
      temp = i;
    }
  
    return temp + 1;
}

// while 문으로 풀어보기
function solution(citations) {
    let i = 0;

    while(i + 1 <= citations.sort((a, b) => b - a)[i]) i++;

    return i;
}