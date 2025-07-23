import '../assets/css/style.css';

const app = document.getElementById('app');

app.innerHTML = `<h1>JAVASCRIPT DOM</h1>`;

const h1 = document.createElement('h1');

h1.innerText = 'Ultimate Courses';
h1.style.display = 'none';

app.append(h1);

console.log(app.innerHTML);
console.log(app.innerText); // Elements
console.log(app.textContent); // Nodes

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
