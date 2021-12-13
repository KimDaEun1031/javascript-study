// 2. Date Method

// 1-1. now()
const now = Date.now();
// 2021-12-13 09:45 기준
console.log(now); // 1639356348167

// 1-2. parse()
let d = Date.parse('Jan 2, 1970 00:00:00 UTC'); // UTC
console.log(d); // 86400000

d = Date.parse('Jan 2, 1970 09:00:00'); // KST
console.log(d); // 86400000

d = Date.parse('1970/01/02/09:00:00'); // KST
console.log(d); // 86400000

d = Date.parse('foo-bar 2014'); 
console.log(d); // NaN

// 1-3. UTC()
let d = Date.UTC(1970, 0, 2);
console.log(d); // 86400000

d = Date.UTC('1970/1/2');
console.log(d); // NaN

// 1-4. getFullYear()
const today = new Date();
const year = today.getFullYear();

console.log(today); // Mon Dec 13 2021 10:11:42 GMT+0900 (한국 표준시)
console.log(year);  // 2021

// 1-5. setFullYear()
const today = new Date();

// 년도 지정
today.setFullYear(2000);

let year = today.getFullYear();
console.log(today); // Wed Dec 13 2000 10:21:13 GMT+0900 (한국 표준시)
console.log(year);  // 2000

// 년도 지정
today.setFullYear(1900, 0, 1);

year = today.getFullYear();
console.log(today); // Mon Jan 01 1900 10:21:13 GMT+0827 (한국 표준시)
console.log(year);  // 1900

// 1-6. getDate()
const today = new Date();
const date = today.getDate();

console.log(today); // Mon Dec 13 2021 10:23:41 GMT+0900 (한국 표준시)
console.log(date);  // 13

// 1-7. setDate()
const today = new Date();

// 날짜 지정
today.setDate(1);

const date = today.getDate();
console.log(today); // Wed Dec 01 2021 10:27:13 GMT+0900 (한국 표준시)
console.log(date);  // 1

// 1-8. getDay()
const today = new Date();
const day = today.getDay();

console.log(today); // Mon Dec 13 2021 10:30:55 GMT+0900 (한국 표준시)
console.log(day);   // 1

// 1-9. getHours()
const today = new Date();
const hours = today.getHours();

console.log(today); // Mon Dec 13 2021 10:33:30 GMT+0900 (한국 표준시)
console.log(hours); // 10

// 1-10. setHours()
const today = new Date();

// 시간 지정
today.setHours(7);

let hours = today.getHours();
console.log(today); // Mon Dec 13 2021 07:38:49 GMT+0900 (한국 표준시)
console.log(hours); // 7

// 시간/분/초/밀리초 지정
today.setHours(0, 0, 0, 0); // 00:00:00:00

hours = today.getHours();
console.log(today); // Mon Dec 13 2021 00:00:00 GMT+0900 (한국 표준시)
console.log(hours); // 0

// 1-11. getMinutes()
const today = new Date();
const minutes = today.getMinutes();

console.log(today);   // Mon Dec 13 2021 10:42:26 GMT+0900 (한국 표준시)
console.log(minutes); // 42

// 1-12. setMinutes()
const today = new Date();

// 분 지정
today.setMinutes(50);

let minutes = today.getMinutes();
console.log(today);   // Mon Dec 13 2021 10:50:55 GMT+0900 (한국 표준시)
console.log(minutes); // 50

// 분/초/밀리초 지정
today.setMinutes(5, 10, 999); // HH:05:10:999

minutes = today.getMinutes();
console.log(today);   // Mon Dec 13 2021 10:05:10 GMT+0900 (한국 표준시)
console.log(minutes); // 5

// 1-13. getSeconds()
const today = new Date();
const seconds = today.getSeconds();

console.log(today);   // Mon Dec 13 2021 10:46:57 GMT+0900 (한국 표준시)
console.log(seconds); // 57

// 1-14. setSeconds()
const today = new Date();

// 초 지정
today.setSeconds(30);

let seconds = today.getSeconds();
console.log(today);   // Mon Dec 13 2021 10:53:30 GMT+0900 (한국 표준시)
console.log(seconds); // 30

// 초/밀리초 지정
today.setSeconds(10, 0); // HH:MM:10:000

seconds = today.getSeconds();
console.log(today);   // Mon Dec 13 2021 10:53:10 GMT+0900 (한국 표준시)
console.log(seconds); // 10

// 1-15. getMilliseconds()
const today = new Date();
const ms = today.getMilliseconds();

console.log(today); // Mon Dec 13 2021 10:57:46 GMT+0900 (한국 표준시)
console.log(ms);    // 438

// 1-16. setMilliseconds()
const today = new Date();

// 밀리초 지정
today.setMilliseconds(123);

const ms = today.getMilliseconds();
console.log(today); // Mon Dec 13 2021 11:03:52 GMT+0900 (한국 표준시)
console.log(ms);    // 123

// 1-17. getTime()
const today = new Date();
const time = today.getTime();

console.log(today); // Mon Dec 13 2021 11:06:09 GMT+0900 (한국 표준시)
console.log(time);  // 1639361169311

// 1-18. setTime()
const today = new Date();

// 1970년 1월 1일 00:00:00(UTC)를 기점으로 현재 시간까지 경과된 밀리초 지정
today.setTime(86400000); // 86400000 === 1day

const time = today.getTime();
console.log(today); // Fri Jan 02 1970 09:00:00 GMT+0900 (한국 표준시)
console.log(time);  // 86400000

// 1-19. getTimezoneOffset()
const today = new Date();
const x = today.getTimezoneOffset() / 60; // -9

console.log(today); // Mon Dec 13 2021 11:11:25 GMT+0900 (한국 표준시)
console.log(x);     // -9

// 1-20. toDateString()
const d = new Date('2019/5/16/18:30');

console.log(d.toString());     // Thu May 16 2019 18:30:00 GMT+0900 (한국 표준시)
console.log(d.toDateString()); // Thu May 16 2019

// 1-21. toTimeString()
const d = new Date('2019/5/16/18:30');

console.log(d.toString());     // Thu May 16 2019 18:30:00 GMT+0900 (한국 표준시)
console.log(d.toTimeString()); // 18:30:00 GMT+0900 (한국 표준시)