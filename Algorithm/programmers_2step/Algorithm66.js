// 66. [1차] 뉴스 클러스터링

// 풀이
function solution(str1, str2) {

    const arr = function strSlice(str, arr = []) {
      for (let i = 0; i < str.length - 1; i++) {
        let multiSet = str.slice(i, i + 2).toLowerCase();
        if (/^[a-zA-Z]+$/g.test(multiSet)) {
          arr.push(multiSet);
        }
      }
  
      return arr;
    }
  
    const arr1 = arr(str1);
    const arr2 = arr(str2);
    const intersection = [];
    const union = [];
    
    for (let i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) >= 0) {
        intersection.push(arr1.splice(arr1.indexOf(arr2[i]), 1));
      }
      union.push(arr2[i])
    }
   
    for (let i = 0; i < arr1.length; i++) {
      union.push(arr1[i])
    }
  
    if (union.length === 0) {
      return 65536;
    } else {
      return Math.floor(intersection.length / union.length * 65536);
    }
  
}