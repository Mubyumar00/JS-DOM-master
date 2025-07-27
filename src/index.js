import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `<h1>JAVASCRIPT DOM</h1>
<ul id='list'></ul>
`;
const data = ['Earth', 'Fire', 'Water'];
const fragment = document.createDocumentFragment();

data.forEach((item) => {
	const li = document.createElement('li');
	li.className = 'list-item';
	li.innerText = item;
	fragment.append(li);
});

// getElementById: HTMLElement
const ulFromId = document.getElementById('list');
ulFromId.append(fragment);

// getElementByClassName: HTMLCollection
const listItemsFromClassName = ulFromId.getElementsByClassName('list-item');
console.log(listItemsFromClassName);

// getElementsByTagName
const listItemsFromTagname = ulFromId.getElementsByTagName('li');
console.log(listItemsFromTagname);

// Demonstrate live collection
const newListItem = document.createElement('li');
newListItem.className = 'list-item';
newListItem.innerText = 'Air';
ulFromId.append(newListItem);

// No need to query again since we using live collection
console.log(listItemsFromClassName);
console.log(listItemsFromTagname);

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
