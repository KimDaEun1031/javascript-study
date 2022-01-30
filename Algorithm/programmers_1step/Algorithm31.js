// 31. 부족한 금액 계산하기

// 풀이
function solution(price, money, count) {
    let totalMoney = 0;
    for (let i = 0; i <= count; i++) {
      totalMoney += price * i;
    }

    let result = totalMoney - money;
    return totalMoney - money <= 0 ? 0 : result;
}

// 가우스 공식 사용해서 풀어보기
function solution(price, money, count) {
    let result = price * count * (count + 1) / 2 - money;
    return result > 0 ? result : 0;
}

// 다시 풀어보기 1 - 22/01/30
function solution(price, money, count) {
  let result = 0;
  for (let i = 0; i <= count; i++) {
    result += price * i;
  }
   
  return result - money <= 0 ? 0 : result - money;
}