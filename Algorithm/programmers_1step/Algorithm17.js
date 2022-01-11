// 17. 3진법 뒤집기

// 풀이
function solution(n) {
    let str = String(n.toString(3)).split("").reverse().reduce((acc, cur) => acc + cur);   
    return parseInt(str, 3);  
}

// reduce() 대신 join() 사용해서 풀어보기
function solution(n) {
    let str = String(n.toString(3)).split("").reverse().join("");   
    return parseInt(str, 3);  
}

// 다시 풀어보기 1 - 22/01/11
function solution(n) {
    let result = String(n.toString(3)).split('').reverse().join('');
    return parseInt(result, 3);
}