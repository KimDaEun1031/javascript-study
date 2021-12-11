//논리 연산자
var result12 = (true || true);
var result13 = (true || false);
var result14 = (false || true);
var result15 = (false || false);

console.log("논리합 true || true : " + result12 );
console.log("논리합 true || false : " + result13);
console.log("논리합 false || true : " + result14 );
console.log("논리합 false || false : " + result15);

var result16 = (true && true);
var result17 = (true && false);
var result18 = (false && true);
var result19 = (false && false);

console.log("논리곱 true && true : " + result16 );
console.log("논리곱 true && false : " + result17);
console.log("논리곱 false && true : " + result18 );
console.log("논리곱 false && false : " + result19);

var result20 = ('Cat' && 'Dog');
console.log("논리곱 논리합 단축 'Cat' && 'Dog' : " + result20 );

var result21 = (!true);
var result22 = (!false);

console.log("논리부정 !true : " + result21);
console.log("논리부정 !false : " + result22);