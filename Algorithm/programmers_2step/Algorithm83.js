// 83. 위장

// 풀이
function solution(clothes) {
    let result = 1;
    let obj = {};
  
    for (let i = 0; i < clothes.length; i++) {
      obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
    }
  
    for (let key in obj) {
      result *= obj[key];
    }
  
    return result - 1;
}

// Object.values()와 reduce() 사용해서 풀어보기
function solution(clothes) {
    return Object.values(clothes.reduce((obj, i)=> {
        obj[i[1]] = obj[i[1]] ? obj[i[1]] + 1 : 1;
        return obj;
    } , {})).reduce((a, b)=> a * (b + 1), 1) -1;    
}