// Pass-by-reference
var a = {}, b = {}, c = {};
console.log(a === b, a === c, b === c);

a = b = c = {};
console.log(a === b, a === c, b === c);

// Pass-by-value
var a = 1;
var b = a;

console.log(a, b);  
console.log(a === b); 

a = 10;
console.log(a, b);   
console.log(a === b);