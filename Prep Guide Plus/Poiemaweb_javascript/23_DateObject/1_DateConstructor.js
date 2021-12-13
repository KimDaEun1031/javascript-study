// 1. Date Constructor

// 1-1. new Date()
const date = new Date();
console.log(date); // Mon Dec 13 2021 09:56:36 GMT+0900 (한국 표준시)

// 1-2. new Date(milliseconds)
let date = new Date(0);
console.log(date); // Thu Jan 01 1970 09:00:00 GMT+0900 (한국 표준시)

// 86400000ms = 1day
// 1s = 1,000ms
// 1m = 60s * 1,000ms = 60,000ms
// 1h = 60m * 60,000ms = 3,600,000ms
// 1d = 24h * 3,600,000ms = 86,400,000ms
date = new Date(86400000);
console.log(date); // Fri Jan 02 1970 09:00:00 GMT+0900 (한국 표준시)

// 1-3. new Date(dateString)
let date = new Date('May 16, 2019 17:22:10');
console.log(date); // Thu May 16 2019 17:22:10 GMT+0900 (한국 표준시)

date = new Date('2019/05/16/17:22:10');
console.log(date); // Thu May 16 2019 17:22:10 GMT+0900 (한국 표준시)

// 1-4. new Date(year, month[, day, hour, minute, second, millisecond])
// 2019/5/1/00:00:00:00
let date = new Date(2019, 4); 
console.log(date); // Wed May 01 2019 00:00:00 GMT+0900 (한국 표준시)

// 2019/5/16/17:24:30:00
date = new Date(2019, 4, 16, 17, 24, 30, 0);
console.log(date); // Thu May 16 2019 17:24:30 GMT+0900 (한국 표준시)

// 가독성이 훨씬 좋음.
date = new Date('2019/5/16/17:24:30:10');
console.log(date); // Thu May 16 2019 17:24:30 GMT+0900 (한국 표준시)

// 1-5. Date 생성자 함수를 new 연산자없이 호출
let date = Date();
console.log(typeof date, date); // string Mon Dec 13 2021 09:57:42 GMT+0900 (한국 표준시)