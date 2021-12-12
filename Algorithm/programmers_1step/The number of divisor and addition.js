// 풀이
function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        let count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                count++;
            }
        } 
        count % 2 === 0 ? answer += i : answer -= i;
    }
    return answer;
}

// Math.sqrt()를 사용한 풀이
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
    	// 제곱근이 정수면 약수의 개수가 홀수
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}