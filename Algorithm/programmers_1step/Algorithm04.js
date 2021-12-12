// 4. 자릿수 더하기

// 풀이
function solution(n)
{
    var answer = 0;
    var str = (n).toString();
    var str_split = str.split('');
      
    for (var i = 0; i < str.length; i++) {
        answer += Number(str_split[i]);        
    }

    return answer;
}

// reduce() 메소드 사용해서 풀어보기
function solution(n){
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}