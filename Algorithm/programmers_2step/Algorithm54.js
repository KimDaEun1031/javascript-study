// 54. JadenCase 문자열 만들기

// 풀이
function solution(s) {
    s = s.toLowerCase();
    let result = s.split(' ').map(item => {
      let arr = item.split('');
      if(arr[0] != null) arr[0] = arr[0].toUpperCase();

      return arr.join('');
    }).join(' ');
    
    return result;
}

// charAt() 사용해서 풀어보기
function solution(s) {
    return s.split(" ").map(item => item.charAt(0).toUpperCase() + item.substring(1).toLowerCase()).join(" ");
}