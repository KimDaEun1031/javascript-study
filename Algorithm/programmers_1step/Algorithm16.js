// 16. 시저 암호

// 풀이
function solution(s, n) {
    let answer = '';
    
    for (let i = 0; i < s.length; i++) {
    
        if (s[i] === ' ') {
            answer += ' '
        } else {
        // 90 이상이면 소문자 이하면 대문자
            answer += String.fromCharCode((s.charCodeAt(i) > 90) ?
             (s.charCodeAt(i) + n -97) %26 +97 : (s.charCodeAt(i) + n -65) %26 +65); 
        }
    }
    return answer;
}

// 아스키코드 없이 풀어보기
function solution(s, n) {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let answer= '';

    for(let i =0; i < s.length; i++){
        if(s[i] == ' ') {
            answer += ' '; 
            continue;
        }
        let arr = upper.includes(s[i]) ? upper : lower;
        let index = arr.indexOf(s[i]) + n;
        if(index >= arr.length) index -= arr.length;
        answer += arr[index];
    }
    return answer;
}