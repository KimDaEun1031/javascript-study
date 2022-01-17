// 3. this

// 3-1. 일반 함수의 this

function Prefixer(prefix) {
    this.prefix = prefix;
}
  
Prefixer.prototype.prefixArray = function (arr) {
    // (A)
    return arr.map(function (x) {
      return this.prefix + ' ' + x; // (B)
    });
};
  
var pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Lee', 'Kim']));

// 콜백 함수 내부의 this가 메소드를 호출한 객체(생성자 함수의 인스턴스)를 가리키는 방법

// 1. that = this
  
Prefixer.prototype.prefixArray = function (arr) {
    var that = this;  // this: Prefixer 생성자 함수의 인스턴스
    return arr.map(function (x) {
      return that.prefix + ' ' + x;
    });
};

var pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Lee', 'Kim']));

// map(func, this)
  
Prefixer.prototype.prefixArray = function (arr) {
    return arr.map(function (x) {
      return this.prefix + ' ' + x;
    }, this); // this: Prefixer 생성자 함수의 인스턴스
};
  
var pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Lee', 'Kim']));

// bind(this)

Prefixer.prototype.prefixArray = function (arr) {
    return arr.map(function (x) {
      return this.prefix + ' ' + x;
    }.bind(this)); // this: Prefixer 생성자 함수의 인스턴스
  };
  
  var pre = new Prefixer('Hi');
  console.log(pre.prefixArray(['Lee', 'Kim']));


// 3-2. 화살표 함수의 this
Prefixer.prototype.prefixArray = function (arr) {
    // this는 상위 스코프인 prefixArray 메소드 내의 this를 가리킨다.
    return arr.map(x => `${this.prefix}  ${x}`);
  };
  
  const pre = new Prefixer('Hi');
  console.log(pre.prefixArray(['Lee', 'Kim']));