<h1>
  <span class="headline">Cozy Cafe Lab</span>
  <span class="subhead">Exercise</span>
</h1>

**Learning objective:** By the end of this lab, you will be able to use DOM methods, events, and functions to display and update information on a webpage.

## Introduction

The Cozy Cafe needs some updates to its website. You will improve its content, add button interactions, and display information stored in JavaScript variables.

Complete the parts in order.

> 🧠 When you select an element, store it in a variable with `Element` or `El` in its name. Use `console.dir()` or `console.log()` to check that you selected the correct element.

## Part 1: Update the cafe’s content

The main title is too long, and the daily quote is missing.

1. Select the element with the ID `main-title`.
2. Store the result in a variable named `mainTitleEl`.
3. Change its text to **Welcome to the Cozy Cafe**.


**Check your work:** Refresh the page. The shorter title should appear.

## Part 2: Style individual and grouped elements

### Update the highlighted headings

The page contains multiple headings with the class `highlight-title`.

1. Select **all** elements with this class.
2. Store the result in a variable named `highlightTitleEls`.
3. Use `forEach()` to work with each element.
4. Inside the loop:
   - Log the element’s `textContent`.
   - Change its font style to italic.

> 💡 CSS uses `font-style`. JavaScript’s `style` object uses `fontStyle`.

**Check your work:** Both **Quote of the Day** and **Cafe Adventures** should be italic. Their text should also appear in the console.

### Feature the quote

1. Select the paragraph with the ID `quote-of-the-day`.
2. Store the result in a variable.
3. Give it a quote of your choice.

You can use this example quote, or make your own:

> A little coffee, a little conversation.

**Check your work:** Refresh the page. Your quote should appear.

In **`app.js`**, give the quote-of-the-day paragraph the class `featured`.

In **`style.css`**, create a rule for a `featured` class.

Give it:
- A background colour of `#eadbc8`.
- A border of `1px solid #76523c`.
- Padding of `12px`.
- Centred text.


**Check your work:** The quote should now appear inside a coloured box.

> 🧠 Use `'.featured'` when writing a CSS selector. Use `'featured'` when passing the class name to `classList.add()`.

## Part 3: Replace the main photo

The cafe wants to feature its berry cake.

1. Select the image with the ID `main-photo`.
2. Use `getAttribute()` to read its current `src`.
3. Log that value in the console.
4. Use `setAttribute()` to change its `src` to:

   ```text
   ./assets/berry-cake.jpg
   ```

5. Update its `alt` attribute to:

   ```text
   A berry cake served at the cafe
   ```

**Check your work:** The first photo should now show the berry cake. Inspect the image in the browser’s Elements tab to confirm its updated attributes.

## Part 4: Connect the background-colour button

Make the **Change Background Colour** button work.

1. Select the button with the ID `bg-color-btn`.
2. Select the `<body>` element.
3. Create a function named `handleBackgroundChange`.
4. Inside the function, change the body’s background colour.
5. Use `addEventListener()` to run the function when the button is clicked.

Choose a colour such as `bisque`, `lightsteelblue`, or `lavender`.

> 💡 When registering a named event handler, pass the function’s name without `()`. The browser will call the function when the event happens.

**Check your work:** The original background should appear when the page loads. Clicking the button should change it.


## Part 4b: Highlight the cafe photos

Help visitors see which photo they are pointing at.

1. Select all elements with the class `cafe-photo`.
2. Use `forEach()` to add two event listeners to each photo:
   - **`'mouseover'`:** Change its border colour to `#76523c`.
   - **`'mouseout'`:** Change its border colour back to `#eadbc8`.

> 💡 In JavaScript, hovering can be handled with `'mouseover'` and `'mouseout'` events. Use these event names in `addEventListener()` rather than `'click'`.

You can change a border’s colour using:

```js
photoElement.style.borderColor = '#76523c';
```

**Check your work:** Move your pointer over each photo, then away. Only the photo you are hovering over should have a dark border.

## Part 5: Display whether the cafe is open

So far, you have changed elements directly. Next, you will store information in a variable and use a function to display it.

This feature has two parts:

- **Data:** A variable that remembers whether the cafe is open.
- **Display:** A paragraph that shows visitors the opening status.

### Follow the example

Add this code below your existing work in **`app.js`**:

```js
let isCafeOpen = true;

const cafeStatusElement = document.querySelector('#cafe-status');
const closeCafeButtonElement = document.querySelector('#close-cafe-btn');

console.dir(cafeStatusElement);
console.dir(closeCafeButtonElement);

function renderCafe() {
  if (isCafeOpen === true) {
    cafeStatusElement.textContent = 'We are open. Welcome!';
  } else {
    cafeStatusElement.textContent = 'We are closed. See you tomorrow!';
  }
}

function handleCloseCafe() {
  isCafeOpen = false;
  renderCafe();
}

closeCafeButtonElement.addEventListener('click', handleCloseCafe);

renderCafe();
```

**Render** means to display the application’s current data on the page.

`renderCafe()` is an ordinary function that we named. It is not a built-in DOM method.

Read through the code:

1. `isCafeOpen` starts as `true`.
2. The initial call to `renderCafe()` displays the open message.
3. Clicking **Close Cafe** changes `isCafeOpen` to `false`.
4. Calling `renderCafe()` again displays the closed message.

**Check your work:** Refresh the page. The cafe should start open. Click **Close Cafe** to display the closed message.

### 🎓 You Do: Reopen the cafe

Make the **Open Cafe** button work.

1. Select the button with the ID `open-cafe-btn`.
2. Create a function named `handleOpenCafe`.
3. Inside the function:
   - Set `isCafeOpen` to `true`.
   - Call `renderCafe()`.
4. Connect the function to the button’s click event.

Use the existing `isCafeOpen` variable and `renderCafe()` function.

**Check your work:** Close the cafe, reopen it, and repeat. The message should match the most recent button click.

## Part 6: Display specialty availability

The cafe also needs to show which specialties are available.

You will store three statuses in an array and display them in the three existing `<span>` elements.

### Add the data and select the elements

Add the following **above your `renderCafe()` function definition**:

```js
const specialtyStatuses = ['Available', 'Sold out', 'Available'];

const specialtyStatusElements =
  document.querySelectorAll('.specialty-status');

console.log(specialtyStatuses);
console.log(specialtyStatusElements);
```

Keep these declarations above the initial call to `renderCafe()` as well.

The array and the selected elements use the same order:

| Index | Specialty | Starting status |
|---|---|---|
| `0` | Rose Latte | Available |
| `1` | Pistachio Croissant | Sold out |
| `2` | Lotus Cheesecake | Available |

> 🧠 There should be three statuses and three selected spans. Both collections start at index `0`.

### Display the first status

Inside `renderCafe()`, add this line **after the existing `if/else` statement**:

```js
specialtyStatusElements[0].textContent = specialtyStatuses[0];
```

Keep the opening-status code inside the function too.

This new line takes the string at index `0` in the array and displays it in the span at index `0`.

Refresh the page.

**Check your work:** Rose Latte should show **Available**. The other specialties should still show **Loading...**.

### 🎓 You Do: Display the remaining statuses

Inside the same function, add two more assignments:

- Use index `1` to display the croissant’s status.
- Use index `2` to display the cheesecake’s status.

**Check your work:** All three specialties should display their starting statuses.

### Replace the repeated assignments with a loop

The three assignments perform the same operation at different indexes. A loop can repeat that operation.

Inside `renderCafe()`, replace those three assignments with:

```js
specialtyStatuses.forEach((status, index) => {
  specialtyStatusElements[index].textContent = status;
});
```

The callback receives:

- `status`: the current string from the array.
- `index`: its position in the array.

The index identifies the span that should display that status.

**Check your work:** Refresh the page. The displayed statuses should remain the same.

### 🎓 You Do: Restock the croissants

Make the **Restock Croissants** button work.

1. Select the button with the ID `restock-croissants-btn`.
2. Create a function named `handleRestockCroissants`.
3. Inside the function:
   - Change the array item at index `1` to `'Available'`.
   - Call `renderCafe()`.
4. Connect the function to the button’s click event.

**Check your work:** Clicking the button should change the croissant’s status from **Sold out** to **Available**. The other two statuses should remain correct.

> 🧠 Keep event listeners outside `renderCafe()`. Register each listener once.

### Observe the difference between data and display

Try this short experiment:

1. Temporarily comment out the `renderCafe()` call **inside `handleRestockCroissants`**.
2. Add `console.log(specialtyStatuses)` inside that handler, after the array update.
3. Save and refresh the page.
4. Click **Restock Croissants**.
5. Compare the array in the console with the status on the page.

The array should contain the updated value, while the page still displays **Sold out**.

Restore the `renderCafe()` call and click the button again.

The page should now display the updated status.

> 💡 Changing JavaScript data does not automatically update the page. Our function performs that update.

Refreshing the page runs the starting code again, so the croissant will return to **Sold out**.

## Part 7: Add a past menu item

The cafe previously served Rose Cake. Add it to the **Past Menu Items** list using JavaScript.

1. Select the list with the ID `past-menu-items`.
2. Create a new `<li>` element.
3. Give it the text **Rose Cake**.
4. Append it to the list.

**Check your work:** There should be five past menu items, with Rose Cake at the end.

> 🧠 Keep this element-creation code outside `renderCafe()`. It should run once when the page loads. Putting it inside the function would create another item whenever the function runs.

## Part 8: Publish a cafe update

Create a third blog post using JavaScript.

Use this content:

- **Title:** Karak Tea Tasting
- **Description:** Guests joined us to try our new karak blends and share their favourites.

Your new post should have this structure:

```html
<div class="blog-post">
  <h3>Karak Tea Tasting</h3>
  <p>
    Guests joined us to try our new karak blends
    and share their favourites.
  </p>
</div>
```

Build this structure using `createElement()`, `textContent`, `classList.add()`, and `appendChild()`.

1. Select the section with the ID `blogs`.
2. Create the `<div>`, `<h3>`, and `<p>` elements.
3. Give the `<div>` the class `blog-post`.
4. Set the heading and paragraph text.
5. Append the heading and paragraph to the new `<div>`.
6. Append the completed `<div>` to the blogs section.

Keep this code outside `renderCafe()`.

**Check your work:**

- Three blog posts should appear.
- The new post should appear last.
- It should use the same styling as the other posts.
- Clicking the cafe buttons should not create additional posts.

## 🚀 Level Up: Style sold-out items

The stylesheet already contains a `.sold-out` class.

Extend the loop inside `renderCafe()` so that:

- A status of `'Sold out'` gives the corresponding span the class `sold-out`.
- Any other status removes that class from the span.

Use an `if/else` statement with `classList.add()` and `classList.remove()`.

**Check your work:** The croissant’s starting status should appear red. After restocking, it should display **Available** without the sold-out styling.

## 🚀 Level Up: Update the opening buttons

Help cafe staff see which opening action is available.

Extend `renderCafe()` so that:

- When the cafe is open, **Open Cafe** is disabled and **Close Cafe** is enabled.
- When the cafe is closed, **Close Cafe** is disabled and **Open Cafe** is enabled.

Use `setAttribute()` and `removeAttribute()`.

> 💡 `disabled` is a boolean attribute. Its presence disables the button. Removing the attribute enables it.

**Check your work:** Switching between open and closed should also update which button can be clicked.

## Submit your work

Save your files, then run:

```bash
git add .
git commit -m "Complete Cozy Cafe lab"
git push
```

Submit your GitHub repository link using your class’s usual submission process.