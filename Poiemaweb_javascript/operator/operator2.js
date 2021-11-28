//비교 연산자
var result1 = ( 5 == 5 );
var result2 = ( 5 == '5' );
var result3 = ( 5 == 8 );

console.log("동등 비교 5 == 5 : " + result1);
console.log("동등 비교 5 == '5' : " + result2);
console.log("동등 비교 5 == 8 : " + result3);

var result4 = ( 5 === 5 );
var result5 = ( 5 === '5' );

console.log("일치 비교 5 === 5 : " + result4);
console.log("일치 비교 5 === '5' : " + result5);

var result6 = ( 5 != 8 );
var result7 = ( 5 != 5 );
var result8 = ( 5 != '5' );

console.log("부동등 비교 5 != 8 : " + result6);
console.log("부동등 비교 5 != 5 : " + result7);
console.log("부동등 비교 5 != '5' : " + result8);

var result9 = ( 5 !== 8 );
var result10 = ( 5 !== 5 );
var result11 = ( 5 !== '5' );

console.log("부일치 비교 5 !== 8 : " + result9);
console.log("부일치 비교 5 !== 5 : " + result10);
console.log("부일치 비교 5 !== '5' : " + result11);

//삼항 조건 연산자
console.log("===삼항 조건 연산자===");
var x = 2;
var result = x % 2 ? '홀수' : '짝수';

console.log("x % 2 ? '홀수' : '짝수' =  " + result);

//논리 연산자
console.log("===논리 연산자===");

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



