// 클로저
function outerFunc() {
    var x = 10;
    var innerFunc = function () { console.log(x); };
    innerFunc();
}

outerFunc(); // 10

// 내부 함수를 외부 함수에서 호출하는 것이 아닌 반환하는 예제
function outerFunc() {
    var x = 10;
    var innerFunc = function () { console.log(x); };
    return innerFunc;
}

var inner = outerFunc();
inner(); // 10