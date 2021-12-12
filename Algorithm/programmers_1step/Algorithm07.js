// 7. 하샤드 수

// 풀이
function solution(x) {   
    var sum = (x+"").split("").reduce((acc, cur) => acc + parseInt(cur), 0)
    return x % sum === 0 ? true : false;         
}