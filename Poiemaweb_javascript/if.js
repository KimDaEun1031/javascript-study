var num = 2;
var kind;

if (num > 0) {
  kind = '양수';
}
console.log("if문 num > 0 : " + kind);


if (num > 0) {
  kind = '양수';
} else {
  kind = '음수';
}
console.log("if..else문 num > 0 : " + kind);


if (num > 0) {
  kind = '양수';
} else if (num < 0) {
  kind = '음수';
} else {
  kind = '영';
}
console.log("if..elseif..else문 num > 0 : " + kind);

var kind = num ? (num > 0 ? '양수' : '음수') : '영';
console.log("if..else문을 삼항연산자로 : " + kind);