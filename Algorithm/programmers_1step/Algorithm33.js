// 33. 2016년

// 풀이
function solution(a, b) {
    let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let date = new Date(2016, a-1, b);
    let day = date.getDay();
    return days[day];
}


// 다시 풀어보기 1 - 22/02/01
function solution(a, b) {
  const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date = new Date(`2016 ${a} ${b}`);

  return day.find((element, i) => i === date.getDay());
}