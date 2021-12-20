// 3. DOM Query / Traversing (요소에의 접근)

// 3-1. 하나의 요소 노드 선택(DOM Query)

// document.getElementById(id)
// id로 하나의 요소를 선택한다.
const elem = document.getElementById('one');
// 클래스 어트리뷰트의 값을 변경한다.
elem.className = 'blue';

console.log(elem); // <li id="one" class="blue">Seoul</li>
console.log(elem.__proto__);           // HTMLLIElement
console.log(elem.__proto__.__proto__); // HTMLElement
console.log(elem.__proto__.__proto__.__proto__);           // Element
console.log(elem.__proto__.__proto__.__proto__.__proto__); // Node

// document.querySelector(cssSelector)
// CSS 셀렉터를 이용해 요소를 선택한다
const elem = document.querySelector('li.red');
// 클래스 어트리뷰트의 값을 변경한다.
elem.className = 'blue';


// 3-2. 여러 개의 요소 노드 선택(DOM Query)

// document.getElementByClassName(class)

// Node의 상태를 변경하기 위해 loop를 사용할 경우 주의점
// HTMLCollection을 반환한다. HTMLCollection은 live하다.
const elems = document.getElementsByClassName('red');

for (let i = 0; i < elems.length; i++) {
  // 클래스 어트리뷰트의 값을 변경한다.
  elems[i].className = 'blue';
}

// 위의 문제를 회피하는 방법
// 반복문을 역방향으로 돌린다.
const elems = document.getElementsByClassName('red');

for (let i = elems.length - 1; i >= 0; i--) {
  elems[i].className = 'blue';
}

// while문을 사용한다.
const elems = document.getElementsByClassName('red');

// 무한 반복을 위해 index를 0으로 고정
let i = 0;
while (elems.length > i) { // elems에 요소가 남아 있지 않을 때까지 무한반복
  elems[i].className = 'blue';
  // i++;
}

// HTMLCollection을 배열로 변경한다. (권장)
const elems = document.getElementsByClassName('red');

// 유사 배열 객체인 HTMLCollection을 배열로 변환한다.
// 배열로 변환된 HTMLCollection은 더 이상 live하지 않다.
console.log([...elems]); // [li#one.red, li#two.red, li#three.red]

[...elems].forEach(elem => elem.className = 'blue');

// querySelectorAll 메소드를 사용한다.
// querySelectorAll는 Nodelist(non-live)를 반환한다. IE8+
const elems = document.querySelectorAll('.red');

[...elems].forEach(elem => elem.className = 'blue');


//  document.getElementsByTagName(tagName)
// HTMLCollection을 반환한다.
const elems = document.getElementsByTagName('li');

[...elems].forEach(elem => elem.className = 'blue');


// document.querySelectorAll(selector)
// Nodelist를 반환한다.
const elems = document.querySelectorAll('li.red');

[...elems].forEach(elem => elem.className = 'blue');


// 3-3. DOM Traversing (탐색)

//  parentNode
const elem = document.querySelector('#two');

elem.parentNode.className = 'blue';

// firstChild, lastChild
const elem = document.querySelector('ul');

// first Child
elem.firstChild.className = 'blue';
// last Child
elem.lastChild.className = 'blue';

// 위의 문제를 회피하기 위한 방법
// firstElementChild, lastElementChild 사용
const elem = document.querySelector('ul');

// first Child
elem.firstElementChild.className = 'blue';
// last Child
elem.lastElementChild.className = 'blue';


// hasChildNodes(), childNodes, children
const elem = document.querySelector('ul');

if (elem.hasChildNodes()) {
  console.log(elem.childNodes);
  // 텍스트 요소를 포함한 모든 자식 요소를 반환한다.
  // NodeList(9) [text, li#one.red, text, li#two.red, text, li#three.red, text, li#four, text]

  console.log(elem.children);
  // 자식 요소 중에서 Element type 요소만을 반환한다.
  // HTMLCollection(4) [li#one.red, li#two.red, li#three.red, li#four, one: li#one.red, two: li#two.red, three: li#three.red, four: li#four]
  [...elem.children].forEach(el => console.log(el.nodeType)); // 1 (=> Element node)
}

// previousSibling, nextSibling / previousElementSibling, nextElementSibling
const elem = document.querySelector('ul');

elem.firstElementChild.nextElementSibling.className = 'blue';
elem.firstElementChild.nextElementSibling.previousElementSibling.className = 'blue';