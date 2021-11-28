//이항 산술 연산자
console.log("===이항 산술 연산자===");
var result1 = 5 + 2;
var result2 = 5 - 2;
var result3 = 5 * 2;
var result4 = 5 / 2;
var result5 = 5 % 2;

console.log("+ : " + result1);
console.log("- : " + result2);
console.log("* : " + result3);
console.log("/ : " + result4);
console.log("% : " + result5);

//단항 산술 연산자
console.log("===단항 산술 연산자===");
var x = 5;
var result6 = x++;
var result7 = ++x;
var result8 = x--;
var result9 = --x;

console.log("선대입 후증가 : " + result6);
console.log("선증가 후대입 : " +result7);
console.log("선대입 후감소 : " +result8);
console.log("선감소 후대입 : " +result9);

//할당 연산자
console.log("===할당 연산자===");
var y;
y = 10;
y += 5;
console.log("+= : " + y);
y = 10;
y -= 5;
console.log("-= : " + y);
y = 10;
y *= 5;
console.log("*= : " + y);
y = 10;
y /= 5;
console.log("/= : " + y);
y = 10;
y %= 5;
console.log("%= : " + y);

var str = 'My name is ';
str += 'Lee'; 
console.log("str : " + str);

