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