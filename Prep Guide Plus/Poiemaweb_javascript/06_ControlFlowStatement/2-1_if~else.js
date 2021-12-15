var num = 2;
var kind;

// if
if (num > 0) {
  kind = '양수';
}
console.log("if문 num > 0 : " + kind);

// if ~ else
if (num > 0) {
  kind = '양수';
} else {
  kind = '음수';
}
console.log("if..else문 num > 0 : " + kind);

// if ~ else if ~ else
if (num > 0) {
  kind = '양수';
} else if (num < 0) {
  kind = '음수';
} else {
  kind = '영';
}
console.log(kind);

var kind = num ? (num > 0 ? '양수' : '음수') : '영';
console.log(kind);