import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `<h1>JAVASCRIPT DOM</h1>
<button type="button">Click Me!</button>
`;

const button = document.querySelector('button');
// console.dir(button);

// // Avoid, doesn't allow multiple events
// button.onclick = function () {
// 	console.log('1');
// };

// function handleClickOnce(e) {
// 	console.log(e.target);
// 	button.removeEventListener('click', handleClickOnce);
// }

// button.addEventListener('click', handleClickOnce);
button.addEventListener('dblclick');

// arrow functions
button.addEventListener('dblclick', (e) => {
	console.log(this, e.target, 'double-clicked!');
});

//025 - adding eventListeners and event object

// const button = document.querySelector('button');

// // Old way: Set
// button.className += ' three';

// // Old way: Get
// console.log(button.className.split(' '));

// // New way: classList
// // Add
// button.classList.add('four');

// // Remove
// button.classList.remove('one');

// // toggle
// button.classList.toggle('five');
// setTimeout(() => button.classList.toggle('five'), 2500);
// 024 -  Setting and Getting classes

// const button = document.querySelector('button');

// // css Text
// button.style.cssText = 'padding: 25px; margin: 10px 0;';

// // direct property access
// button.style.fontSize = '22px';
// button.style.marginTop = '25px';
// console.log(button.style.fontSize);
// 023 -  Setting and Getting Inline Styles

// const button = document.querySelector('button');

// //SET
// button.setAttribute('aria-label', 'Close this modal');

// //GET
// const value = button.getAttribute('aria-label');
// console.log(value);

// // .attributes
// console.log(button.attributes['aria-label']);

// 022 - Setting And Getting HTML Attributes

// 021 - Element properties vs HTML Attributes
// const input = document.querySelector('input');
// input.value = 2;
// console.log(parseInt(input.value, 10));
// console.dir(input);

// 020 - Finding Sibling elements
// const item = document.querySelector('.item');

// console.log(item.parentNode);
// console.log(item.parentElement.parentElement);

// console.log(item.closest('#app'));
// console.log(item.closest('#body'));

// // 018 - Finding child elements
// const list = document.querySelector('#list');
// const selectedIndex = 2;

// // querySelectorAll: NodeList
// const queryChildren = list.querySelectorAll('li');
// console.log(queryChildren[selectedIndex], queryChildren.length);

// // .children HTMLCollection
// console.log(list.children[selectedIndex], list.children.length);

// // .childNodes
// console.log(list.childNodes);

// // childNodes: nodesList (includes spaces around the elements)
// console.log(list.childNodes[selectedIndex], list.childNodes.length);

// const listItems = document.querySelectorAll('#list li');
// console.log(listItems);
// // traditional / long method of looping over DOM Elements
// for (let i = 0; i < listItems.length; i++) {
// 	// console.log(listItems[i]);
// }

// // forof method to loop over DOM Elements
// for (const item of listItems) {
// 	console.log(item);
// }

// // Using the spread method to loop through
// [...listItems].forEach((item) => console.log(item));

// // Using from method
// Array.from(listItems).forEach((item) => console.log(item));

// Looping over DOM Elements

// const data = ['Earth', 'Fire', 'Water'];
// const fragment = document.createDocumentFragment();

// data.forEach((item) => {
// 	const li = document.createElement('li');
// 	li.className = 'list-item';
// 	li.innerText = item;
// 	fragment.append(li);
// });

// // getElementById: HTMLElement
// const ulFromId = document.getElementById('list');
// ulFromId.append(fragment);

// // getElementByClassName: HTMLCollection
// const listItemsFromClassName = ulFromId.getElementsByClassName('list-item');
// console.log(listItemsFromClassName);

// // getElementsByTagName
// const listItemsFromTagname = ulFromId.getElementsByTagName('li');
// console.log(listItemsFromTagname);

// // ul {background: red;}
// // #list {background: red;}

// const ulFromQuerySelector = document.querySelector('#list');
// console.log(ulFromQuerySelector);

// ulFromQuerySelector.append(fragment);

// const listItemsFromQSA = ulFromQuerySelector.querySelectorAll('.list-item');
// console.log(listItemsFromQSA);

// // Demonstrate live collection
// const newListItem = document.createElement('li');
// newListItem.className = 'list-item';
// newListItem.innerText = 'Air';
// ulFromQuerySelector.append(newListItem);

// console.log(listItemsFromQSA, ulFromQuerySelector.querySelectorAll('.list-item'));

// No need to query again since we using live collection
// console.log(listItemsFromClassName);
// console.log(listItemsFromTagname);

// Querying DOM Nodes

// const div = document.createElement('div');
// div.innerText = 'I am a message';

// app.append(div);
// setTimeout(() => div.remove(), 2500);

// // old way
// setTimeout(() => div.parentNode.removeChild(div), 2500);

// 14 - Removing DOM Elements

// const div = document.createElement('div');
// const span = document.createElement('span');

// span.innerText = 'Can you clone me?';
// div.append(span);

// app.append(div);

// //cloneNode(false) only clones the top element.
// const clone = div.cloneNode();
// console.log(clone);

// //cloneNode(true) clones all the elements and subtrees.
// const newClone = div.cloneNode();
// console.log(newClone);

// app.append(newClone);

// 13 - Cloning DOM Elements
// const div = app.querySelector('div');
// const newDiv = document.createElement('div');
// newDiv.innerText = 'I have been replaced!';

// // New way
// div.replaceWith(newDiv);

// // Old way
// const anotherDiv = document.createElement('div');
// anotherDiv.innerText = 'I replace all';

// setTimeout(() => {
// 	newDiv.parentNode.replaceChild(anotherDiv, newDiv);
// }, 2000);

// Replacing DOM elements
// <ul>
// 	<li>1</li>
// </ul>`;

// const ul = app.querySelector('ul');

// ul.insertAdjacentHTML('beforebegin', '<p>Before</p>');
// ul.insertAdjacentHTML('afterbegin', '<li>First</li>');
// ul.insertAdjacentHTML('beforeend', '<li>last</li>');
// ul.insertAdjacentHTML('afterend', '<li>After</li>');

//  011 - inserting DOM as string template

// const div = document.createElement('div');
// const span = document.createElement('span');
// const p = document.createElement('p');
// const i = document.createElement('i');
// const b = document.createElement('b');

// div.append(span);
// div.prepend(p);
// p.before(i);

// Old way of using insertBefore
// i.parentNode.insertBefore(b, i);

// After: old way pf using insertBefore + nextSibling
// i.parentNode.insertBefore(b, i.nextSibling);

// console.log(div);

// 09 - Inserting DOM Elements

// const data = ['Earth', 'Fire', 'Water', 'Air'];

// const fragment = document.createDocumentFragment();
// // console.dir(fragment);

// data.forEach((name) => {
// 	const li = document.createElement('li');
// 	li.innerText = name;
// 	fragment.append(li);
// });
// app.append(fragment);

// 09 - Using document fragments

// Using document.createElement()
// function createInputDOM({ label, type = 'text' }) {
// 	const labelEl = document.createElement('label');
// 	const inputEl = document.createElement('input');

// 	inputEl.type = type;
// 	labelEl.innerText = label;
// 	labelEl.append(inputEl);

// 	return labelEl;
// }

// const inputFromDOM = createInputDOM({ label: 'Name' });
// console.log(inputFromDOM);
// app.append(inputFromDOM);

//  Using String Templates
// function createInputTemplate({ label, type = 'text' }) {
// 	return `
// 	<label>
// 	${label}
// 	<input type="${type}">
// 	</label>
// 	`;
// }

// const inputFromTemplate = createInputTemplate({ label: 'Email', type: 'email' });
// const inputFromTemplateTwo = createInputTemplate({ label: 'Password', type: 'password' });
// app.innerHTML += inputFromTemplate;
// app.innerHTML += inputFromTemplateTwo;

// PART 08 -  innerHTML VS createELEMENT

//
// PART 07 - CHANGING CONTENTS OF DOM ELEMENTS

// const h1 = document.createElement('h1');

// h1.innerText = 'Ultimate Courses';
// h1.innerText += 'Learning JS DOM';
// h1.style.display = 'none';

// const h2 = document.createElement('h2');
// h2.innerText = 'DOM Practice';
// h2.style.display = 'none';

// app.append(h1, h2);

// console.log(app.innerHTML);
// console.log(app.innerText); // Elements
// console.log(app.textContent); // Nodes

// const div = document.createElement('div');
// const text = document.createTextNode('DOM!');
// const comment = document.createComment('No Comment');

// div.append(comment);
// div.append(text);

// app.append(div);

// console.log(app, div);

// <html>
// console.log(document.documentElement);
// console.dir(document.documentElement);

// <head>
// console.dir(document.head);

// <body>
// console.dir(document.body);

// retrieve the constructor name
// console.log(document.body.constructor.name);

// looking at the prototype chain
// console.log(document.body instanceof HTMLBodyElement);
// console.log(document.body instanceof HTMLElement);
// console.log(document.body instanceof Node);
// console.log(document.body instanceof EventTarget);

/**
 * NodeTypes
 * 1. Element
 * 2. Attribute
 * 3. Text
 * 4. CDATASection
 * 5. EntityReference
 * 6. Entity
 * 7. ProcessingInstruction
 * 8. Comment
 * 9. Document
 * 10. DocumentType
 * 11. DocumentFragment
 * 12. Notation
 */

// console.log(document.body.nodeType);
// console.log(document.nodeType);

// nodeName for any Node Types
// console.log(document.nodeName);

// tagName for any Node Types
// console.log(document.tagName);
