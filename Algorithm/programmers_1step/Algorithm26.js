// 26. 소수 찾기

// 풀이 - 시간초과
// 큰 수일 경우 시간초과가 뜨고 효율성 테스트에서도 시간초과가 뜬다.
function solution(n) {
    let result = 0;
    for (let i = 2; i <= n; i++) {
      let count = 0;
      for (let j = 1; j <= i; j++) {
        if (i % j === 0) count++;
      }
      if (count === 2) result++;
    }
  
    return result;
}

// 다른 사람 풀이
function solution(n) {
    // n = 10
    let arr = [];
    let cnt = 0;
    for (let i = 0; i < n + 1; i++) {
        arr.push(true);
    }

    // 정수는 false
    // 1~10 소수 :  2, 3, 5, 7
    /*
      1번째 [true, true, true, true, false, true, true, true, true, true, true]
      2번째 [true, true, true, true, false, true, false, true, true, true, true]
      3번째 [true, true, true, true, false, true, false, true, false, true, true]
      4번째 [true, true, true, true, false, true, false, true, false, true, false]
      5번째 [true, true, true, true, false, true, false, true, false, false, false]
    */ 
    for (let i = 2; i * i <= n; i++) { 
        if (arr[i]) {
            for (let j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
    }

    // 0, 1은 false [false, false, true, true, false, true, false, true, false, false, false]
    arr.splice(0, 2, false, false);
    for(let i = 0; i <arr.length; i++) {
       // true인 것들 -> 소수 인 것은 카운트
        if(arr[i]) cnt++;
    }

    return cnt++;
}