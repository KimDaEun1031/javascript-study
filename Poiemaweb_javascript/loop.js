//for
console.log("=== for ===");
console.log("순서대로 출력");
for (var i = 0; i < 2; i++) {
    console.log(i);
  }

console.log("반대로 출력");
for (var i = 1; i >= 0; i--) {
    console.log(i);
} 

console.log("중첩 for문");
for (var i = 1; i <= 6; i++) {
    for (var j = 1; j <= 6; j++) {
      if (i + j === 6) console.log(`[${i}, ${j}]`);
    }
  }

console.log("=== while ===");
var count = 0;

// count가 3보다 작을 때까지
while (count < 3) {
  console.log(count);
  count++;
}

console.log("=== do-while ===");
var count = 0;

// count가 3보다 작을 때까지
do {
  console.log(count);
  count++;
} while (count < 3);

console.log("=== break ===");
foo: console.log('foo');

foo: {
    console.log(1);
    break foo;
    console.log(2);
  }
  
  console.log('Done!');

outer: for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
            // i + j 가 3이라면 break
            if (i + j === 3) break outer;
        }
    }

console.log('Done!');

console.log("=== continue ===");
var string = 'Hello World.';
var count = 0;

for (var i = 0; i < string.length; i++) {
  if (string[i] !== 'l') continue;
  count++;
}

console.log(count);

console.log(string.match(/l/g).length); // 3