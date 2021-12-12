// 풀이
function solution(phone_number) {
    var answer = '';
     for (var i = 0; i < phone_number.length; i++) {
       var result = i >= phone_number.length-4 ? answer += phone_number[i] : answer += "*";
     }
   return answer;
}

// 정규식 풀이
function solution(phone_number) {
    return phone_number.replace(/\d(?=\d{4})/g, "*");
}