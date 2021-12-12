// 5. 이상한 문자 만들기

// 풀이
function solution(s) {
    var answer ='';
    var str = s.split(" ");
    var arr = [];
      
    for (var i = 0; i < str.length; i++) {
        arr = str[i].split("");        
        for (var j = 1; j <= arr.length; j++) {
          j % 2 === 0 ? answer += arr[j-1].toLowerCase() :answer += arr[j-1].toUpperCase();  
        }    
        if (i >= str.length-1) continue;
        answer += " ";     
      }
    return answer;
}

// 정규식과 함수, replace() 이용해서 풀어보기
function solution(s){
    return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})
}