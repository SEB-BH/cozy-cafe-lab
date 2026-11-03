# JavaScript DOM Cheat Sheet

The **DOM (Document Object Model)** lets JavaScript read and change a web page.

**Common pattern:** Select an element → change it or listen for an event.

> Examples are separate patterns. Replace selectors and variable names to match your HTML.

---

## 1. Connect JavaScript to HTML

Add this inside the HTML `<head>`:

```html
<script defer src="./js/app.js"></script>
```

`defer` lets the HTML finish loading before the script runs.

---

## 2. Select One Element

Use `document.querySelector()` with a CSS selector.

```javascript
// Select by ID: use #
const titleElement = document.querySelector('#main-title');

// Select by class: use .
const messageElement = document.querySelector('.message');

// Select by tag name
const buttonElement = document.querySelector('button');
```

- Returns the **first matching element**.
- Returns `null` if nothing matches.
- Store the element in a variable so you can use it again.

Check your selection:

```javascript
console.dir(titleElement);
```

### Another option: select by ID

```javascript
const titleElement = document.getElementById('main-title');
```

Use the ID name **without `#`** for `getElementById()`.

---

## 3. Select Multiple Elements

Use `document.querySelectorAll()`.

```javascript
const taskElements = document.querySelectorAll('.task');
```

It returns a **NodeList**: a collection of elements.

```javascript
// How many elements were selected?
console.log(taskElements.length);

// Access the first element
console.log(taskElements[0]);
```

If nothing matches, it returns an empty NodeList.

### Change each selected element

```javascript
taskElements.forEach((taskElement) => {
  taskElement.style.color = 'navy';
});
```

> Change each element inside the loop. The NodeList itself does not have a `.style` property.

---

## 4. Read or Change Text

Use `.textContent`.

```javascript
// Read the text
console.log(titleElement.textContent);

// Replace the text
titleElement.textContent = 'Team Dashboard';

// Clear the text
titleElement.textContent = '';
```

You can display a variable:

```javascript
let taskCount = 3;

titleElement.textContent = `Tasks: ${taskCount}`;
```

> Changing a variable does not automatically update the page. Run the DOM update again when the data changes.

---

## 5. Change Styles

Use `.style` followed by a CSS property.

```javascript
titleElement.style.color = 'navy';
titleElement.style.backgroundColor = 'lightblue';
titleElement.style.fontSize = '32px';
titleElement.style.textAlign = 'center';
```

Use **camelCase** for CSS property names in JavaScript:

| CSS | JavaScript |
| --- | --- |
| `background-color` | `backgroundColor` |
| `font-size` | `fontSize` |
| `text-align` | `textAlign` |
| `border-radius` | `borderRadius` |

> Values such as `'32px'` need quotes and a unit.

---

## 6. Work with CSS Classes

Use `.classList`.

```javascript
// Add a class
buttonElement.classList.add('active');

// Remove a class
buttonElement.classList.remove('active');

// Add it if missing; remove it if present
buttonElement.classList.toggle('active');

// Check whether the class exists: true or false
buttonElement.classList.contains('active');

// Replace an existing class
buttonElement.classList.replace('active', 'complete');
```

**Do not include `.` in the class name.**

```javascript
// Selecting by class needs a dot
const cardElement = document.querySelector('.card');

// Adding a class does not
cardElement.classList.add('highlight');
```

Define the class in your CSS:

```css
.highlight {
  background-color: lightyellow;
}
```

---

## 7. Work with Attributes

Attributes are values written in HTML, such as `id`, `href`, and `disabled`.

```javascript
// Read an attribute
linkElement.getAttribute('href');

// Add or update an attribute
linkElement.setAttribute('href', 'https://www.bibf.com');

// Check whether an attribute exists
buttonElement.hasAttribute('disabled');

// Remove an attribute
buttonElement.removeAttribute('disabled');
```

### Enable or disable a button

```javascript
// Disable
buttonElement.setAttribute('disabled', '');

// Enable
buttonElement.removeAttribute('disabled');
```

Or check before removing:

```javascript
if (buttonElement.hasAttribute('disabled') === true) {
  buttonElement.removeAttribute('disabled');
}
```

> `disabled` is a boolean attribute. Its presence disables the button—even if its value is `'false'`.

---

## 8. Create and Add an Element

**Create → add content → place on the page.**

```javascript
// Select the parent
const taskListElement = document.querySelector('#task-list');

// Create a new element
const taskElement = document.createElement('li');

// Give it content
taskElement.textContent = 'Prepare the report';

// Add it inside the parent, at the end
taskListElement.appendChild(taskElement);
```

> `createElement()` alone does not display the element. You must place it in the DOM.

---

## 9. Read and Clear an Input

Use `.value` for the text inside an input.

```javascript
const inputElement = document.querySelector('#task-input');

// Read the current value
console.log(inputElement.value);

// Set the value
inputElement.value = 'Prepare the report';

// Clear the input
inputElement.value = '';
```

| Element | Property for its text |
| --- | --- |
| Heading, paragraph, button, list item | `.textContent` |
| Input | `.value` |

---

## 10. Respond to an Event

An **event** is something that happens, such as a click.

Use `.addEventListener()`:

```javascript
const buttonElement = document.querySelector('#save-button');

buttonElement.addEventListener('click', () => {
  buttonElement.textContent = 'Saved!';
});
```

The function runs **when the event happens**.

### Common event names

| Event | When it happens |
| --- | --- |
| `'click'` | The element is clicked |
| `'mouseenter'` | The pointer enters the element |
| `'mouseleave'` | The pointer leaves the element |
| `'input'` | The user changes an input's value |
| `'submit'` | A form is submitted |

> There is no `'hover'` event. Use `'mouseenter'` and `'mouseleave'`.

---

## 11. Use a Named Event Handler

Store the function first, then pass it to the listener.

```javascript
const handleClick = () => {
  buttonElement.textContent = 'Saved!';
};

buttonElement.addEventListener('click', handleClick);
```

**Pass the function without `()`.**

```javascript
// Correct: run when clicked
buttonElement.addEventListener('click', handleClick);

// Incorrect: calls the function immediately
buttonElement.addEventListener('click', handleClick());
```

### Remove the listener

Use the same event name and function reference:

```javascript
buttonElement.removeEventListener('click', handleClick);
```

---

## 12. Use the Event Object

The browser passes an event object to the handler.

Add an `event` parameter to access it:

```javascript
const handleClick = (event) => {
  console.dir(event);
  console.log(event.target);
  console.log(event.target.id);
};

buttonElement.addEventListener('click', handleClick);
```

- `event.target`: the element where the event started.
- `event.target.id`: that element's ID.

> If you click a child inside a button, `event.target` can be that child.

---

## 13. Event Bubbling and Delegation

A click can **bubble** from an element to its parents.

**Event delegation** means listening on a parent to handle clicks from its children.

```html
<div id="actions">
  <button id="save-button">Save</button>
  <button id="cancel-button">Cancel</button>
</div>
```

```javascript
const actionsElement = document.querySelector('#actions');

actionsElement.addEventListener('click', (event) => {
  if (event.target.id === 'save-button') {
    console.log('Save selected');
  } else if (event.target.id === 'cancel-button') {
    console.log('Cancel selected');
  }
});
```

Check which element was clicked so clicking the parent does not trigger the wrong action.

---

## 14. Put It Together: Add a Task

### HTML

```html
<input id="task-input">
<button id="add-button">Add task</button>
<ul id="task-list"></ul>
```

### JavaScript

```javascript
const inputElement = document.querySelector('#task-input');
const addButtonElement = document.querySelector('#add-button');
const taskListElement = document.querySelector('#task-list');

addButtonElement.addEventListener('click', () => {
  if (inputElement.value !== '') {
    const taskElement = document.createElement('li');
    taskElement.textContent = inputElement.value;
    taskListElement.appendChild(taskElement);

    inputElement.value = '';
  }
});
```

**Steps:** Read the input → check it is not empty → create an element → add text → display it → clear the input.

---

## 15. Extra Reference: HTML Content and Placement

### Set HTML inside an element

```javascript
messageElement.innerHTML = '<strong>Task complete!</strong>';
```

- `.textContent` treats the value as plain text.
- `.innerHTML` treats the value as HTML.
- Both replace the existing content inside the element.

> Use `.textContent` for user-entered text. Do not insert user input with `.innerHTML`.

### Place or replace elements

```javascript
// Place a new element before an existing element
existingElement.before(newElement);

// Place a new element after an existing element
existingElement.after(newElement);

// Replace a child: new element first, old element second
parentElement.replaceChild(newElement, oldElement);
```

---

## Quick Troubleshooting

| Problem | Check |
| --- | --- |
| Selected element is `null` | Selector spelling, `#` or `.`, and whether the HTML has loaded |
| Only one element changes | Use `querySelectorAll()` and a loop for multiple elements |
| New element does not appear | Did you add it with `appendChild()`? |
| Input text is missing | Use `.value`, not `.textContent` |
| Click handler runs immediately | Pass the function without `()` |
| Style does not work | Check camelCase, quotes, and units |
| Class style does not appear | Check the CSS rule and leave `.` out of `classList.add()` |

---

## MDN References

- [DOM scripting introduction](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting)
- [Document reference](https://developer.mozilla.org/en-US/docs/Web/API/Document)
- [Element reference](https://developer.mozilla.org/en-US/docs/Web/API/Element)
- [HTMLElement reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
- [Node reference](https://developer.mozilla.org/en-US/docs/Web/API/Node)
- [addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)