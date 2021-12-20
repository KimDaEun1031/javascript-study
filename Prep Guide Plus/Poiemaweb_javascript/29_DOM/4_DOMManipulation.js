// 4. DOM Manipulation (조작)

// nodeValue
// 해당 텍스트 노드의 부모 요소 노드를 선택한다.
const one = document.getElementById('one');
console.dir(one); // HTMLLIElement: li#one.red

// nodeName, nodeType을 통해 노드의 정보를 취득할 수 있다.
console.log(one.nodeName); // LI
console.log(one.nodeType); // 1: Element node

// firstChild Property를 사용하여 텍스트 노드를 탐색한다.
const textNode = one.firstChild;

// nodeName, nodeType을 통해 노드의 정보를 취득할 수 있다.
console.log(textNode.nodeName); // #text
console.log(textNode.nodeType); // 3: Text node

// nodeValue Property를 사용하여 노드의 값을 취득한다.
console.log(textNode.nodeValue); // Seoul

// nodeValue Property를 이용하여 텍스트를 수정한다.
textNode.nodeValue = 'Pusan';


// className, classList
const elems = document.querySelectorAll('li');

// className
[...elems].forEach(elem => {
  // class Attribute 값을 취득하여 확인
  if (elem.className === 'red') {
    // class Attribute 값을 변경한다.
    elem.className = 'blue';
  }
});

// classList
[...elems].forEach(elem => {
  // class Attribute 값 확인
  if (elem.classList.contains('blue')) {
    // class Attribute 값 변경한다.
    elem.classList.replace('blue', 'red');
  }
});

// id
// h1 태그 요소 중 첫번째 요소를 취득
const heading = document.querySelector('h1');

console.dir(heading); // HTMLHeadingElement: h1
console.log(heading.firstChild.nodeValue); // Cities

// id Attribute 값을 변경.
// id Attribute가 존재하지 않으면 id Attribute를 생성하고 지정된 값을 설정
heading.id = 'heading';
console.log(heading.id); // heading


// hasAttribute(attribute), getAttribute(attribute), setAttribute(attribute, value), removeAttribute(attribute)
const input = document.querySelector('input[type=text]');
  console.log(input);

  // value Attribute가 존재하지 않으면
  if (!input.hasAttribute('value')) {
    // value Attribute를 추가하고 값으로 'hello!'를 설정
    input.setAttribute('value', 'hello!');
  }

  // value Attribute 값을 취득
  console.log(input.getAttribute('value')); // hello!

  // value Attribute를 제거
  input.removeAttribute('value');

  // value Attribute의 존재를 확인
  console.log(input.hasAttribute('value')); // false

// 예제는 4-2_AttributeMethod.html


// 4-3. HTML 콘텐츠 조작(Manipulation)

// textContent : 4-3_TextContent.html

// innerHTML
const ul = document.querySelector('ul');

// innerHTML 프로퍼티는 모든 자식 요소를 포함하는 모든 콘텐츠를 하나의 문자열로 취득할 수 있다. 이 문자열은 마크업을 포함한다.
console.log(ul.innerHTML);
// IE를 제외한 대부분의 브라우저들은 요소 사이의 공백 또는 줄바꿈 문자를 텍스트 노드로 취급한다
/*
        <li id="one" class="red">Seoul</li>
        <li id="two" class="red">London</li>
        <li id="three" class="red">Newyork</li>
        <li id="four">Tokyo</li>
*/

const one = document.getElementById('one');

// 마크업이 포함된 콘텐츠 취득
console.log(one.innerHTML); // Seoul

// 마크업이 포함된 콘텐츠 변경
one.innerHTML += '<em class="blue">, Korea</em>';

// 마크업이 포함된 콘텐츠 취득
console.log(one.innerHTML); // Seoul <em class="blue">, Korea</em>


// 4-4. DOM 조작 방식

// createElement(tagName), createTextNode(text), appendChild(Node), removeChild(Node)
// 태그이름을 인자로 전달하여 요소를 생성
const newElem = document.createElement('li');
// const newElem = document.createElement('<li>test</li>');
// Uncaught DOMException: Failed to execute 'createElement' on 'Document': The tag name provided ('<li>test</li>') is not a valid name.

// 텍스트 노드를 생성
const newText = document.createTextNode('Beijing');

// 텍스트 노드를 newElem 자식으로 DOM 트리에 추가
newElem.appendChild(newText);

const container = document.querySelector('ul');

// newElem을 container의 자식으로 DOM 트리에 추가. 마지막 요소로 추가된다.
container.appendChild(newElem);

const removeElem = document.getElementById('one');

// container의 자식인 removeElem 요소를 DOM 트리에 제거한다.
container.removeChild(removeElem);