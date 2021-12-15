var month = 11;
var monthName;

switch (month) {
  case 1:
    monthName = 'January';
    break;
  case 2:
    monthName = 'February';
    break;
  case 3:
    monthName = 'March';
    break;
  case 4:
    monthName = 'April';
    break;
  case 5:
    monthName = 'May';
    break;
  case 6:
    monthName = 'June';
    break;
  case 7:
    monthName = 'July';
    break;
  case 8:
    monthName = 'August';
    break;
  case 9:
    monthName = 'September';
    break;
  case 10:
    monthName = 'October';
    break;
  case 11:
    monthName = 'November';
    break;
  case 12:
    monthName = 'December';
    break;
  default:
    monthName = 'Invalid month';
}

console.log("11월달은 영어로 : " + monthName);
console.log("===============================")
console.log("윤년 계산기")

var year = 2021;
var month = 2;
var days = 0;

switch (month) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    days = 31;
    break;
  case 4: case 6: case 9: case 11:
    days = 30;
    break;
  case 2:
    //년도가 4로 나누어졌을 때 0과 같고 100으로 나눈 나머지값이 0이 아닐 때 or 년도가 400으로 나눈 나머지 값이 0과 같다면 29 아니라면 28
    days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
    break;
  default:
    console.log('Invalid month');
}

console.log("2021년 2월의 마지막 날 : " + days);