// e. null
var foo = 'Lee';
foo = null;  // 참조 정보가 제거됨

var element = document.querySelector('.myElem');
// HTML 문서에 myElem 클래스를 갖는 요소가 없다면 null을 반환한다.
console.log(element); // null

// null 타입 확인하기
var foo = null;
console.log(typeof foo); // object

var foo = null;
console.log(typeof foo === null); // false
console.log(foo === null);        // true