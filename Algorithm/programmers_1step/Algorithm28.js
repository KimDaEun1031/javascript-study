// 28. 문자열 내 마음대로 정렬하기

// 풀이
function solution(strings, n) {
    let answer = strings.sort((a, b) => {
       if(a[n] > b[n]) return 1;
        if(a[n] < b[n]) return -1;
        if(a[n] === b[n]){
            if(a > b) return 1;
            if(a < b) return -1;
            return 0;
        }
    });
    
    return answer;
}

// localCompare() 사용해서 풀어보기
function solution(strings, n) {
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}