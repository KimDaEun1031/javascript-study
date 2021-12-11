// 1-4. 자주 발생하는 실수
var arr = [];

for (var i = 0; i < 5; i++) {
  arr[i] = function () {
    return i;
  };
}

for (var j = 0; j < arr.length; j++) {
  console.log(arr[j]());
}

// 예상 결과 값 : 0, 1, 2, 3, 4
// 실제 결과 값 : 5, 5, 5, 5, 5

//클로저를 사용해 올바른 코드로 변경
var arr = [];

for (var i = 0; i < 5; i++){
  arr[i] = (function (id) { // 2번
    return function () {
      return id; // 3번
    };
  }(i)); // 1번
}

for (var j = 0; j < arr.length; j++) {
  console.log(arr[j]());
}