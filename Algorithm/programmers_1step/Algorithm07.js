// 7. 하샤드 수

// 풀이
function solution(x) {   
    var sum = (x+"").split("").reduce((acc, cur) => acc + parseInt(cur), 0)
    return x % sum === 0 ? true : false;         
}

// 다시 풀어보기 1 - 21/12/29
function solution(x) {
    return (x % String(x).split('').reduce((a, b) => a + Number(b), 0) === 0) ? true : false;
}