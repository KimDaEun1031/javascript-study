// 62. [3차] 파일명 정렬

// 풀이
function solution(files) {
    return files.sort((a, b) => {   
      const headA = a.match(/^\D+/)[0].toLowerCase();
      const headB = b.match(/^\D+/)[0].toLowerCase();

      if (headA > headB) return 1;
      else if (headA < headB) return -1;

      const numA = a.match(/\d+/)[0].replace(/^0+/, "");
      const numB = b.match(/\d+/)[0].replace(/^0+/, "");

      return numA - numB;
    });
}