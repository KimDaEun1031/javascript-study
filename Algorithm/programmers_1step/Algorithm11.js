// 11. 음양 더하기

// 풀이
function solution(absolutes, signs) {
    var answer = 0;
    for (let i = 0; i < signs.length; i++) {
        signs[i] === true ? answer += absolutes[i] : answer -= absolutes[i]
    }        
    return answer;
}

// 다시 풀어보기 1 - 22/01/04
function solution(absolutes, signs) {
    let answer = 0;
    signs.forEach((item, i) => {
      item ? answer += absolutes[i] : answer -= absolutes[i];
    });
      
    return answer;
}