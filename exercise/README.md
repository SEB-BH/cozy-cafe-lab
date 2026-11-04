<h1>
  <span class="headline">Cozy Cafe Lab</span>
  <span class="subhead">Exercise</span>
</h1>

**Learning objective:** By the end of this lab, you will be able to use DOM methods, events, and functions to display and update information on a webpage.

[DOM Manipulation Cheat Sheet](../cheatsheet/README.md)

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

```bash
git add .
git commit -m "Completes part 1"
git push
```

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

## Part 5: Rendering Cafe Specialties

First, replace the existing specialties `<ul>` with this version. Keep the existing **Restock Croissants** button underneath it.

```html
        <ul id="cafe-specialties">
          <li>
            Rose Latte:
            <span id="rose-latte" class="specialty-status">Loading...</span>
            <button class="sold-out-btn" id="0">Mark Sold Out</button>
          </li>

          <li>
            Pistachio Croissant:
            <span id="croissant" class="specialty-status">Loading...</span>
            <button class="sold-out-btn" id="1">Mark Sold Out</button>
          </li>

          <li>
            Lotus Cheesecake:
            <span id="cheesecake" class="specialty-status">Loading...</span>
            <button class="sold-out-btn" id="2">Mark Sold Out</button>
          </li>
        </ul>
```

Each button’s `id` matches its specialty’s position in the array:

| Specialty | Status | Array index | Button ID |
|---|---|---|---|
| Rose Latte | 'Available' | `0` | `"0"` |
| Pistachio Croissant | 'Sold Out' | `1` | `"1"` |
| Lotus Cheesecake | 'Available' | `2` | `"2"` |


### Tasks:
- Use javaScript to replace "Loading..." with the starting statuses using the table above (Rose Latte: Available, etc.)
- Each 'Mark Sold Out' button should change the availabilty of the item next to it to 'Sold Out'

### LEVEL UP:
- Use arrays to cache your elements
- Use an array to store each items availability
- Use a render function to display availability
- Reduce repetition in the event listeners
- Share one sold-out handler (should edit the array, not textContent directly)

<!-- ## Part 5: Highlight the cafe photos

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

**Check your work:** Move your pointer over each photo, then away. Only the photo you are hovering over should have a dark border. -->
<!-- 
## Part 6: Show whether the cafe is open

**Goal:** Make the **Close Cafe** and **Open Cafe** buttons update the message under **Cafe Opening Status**.

### 6a: Make Close Cafe respond to a click

First, check that JavaScript can detect a click on the button.

1. Select the button with the ID `close-cafe-btn`.
2. Store it in a variable called `closeCafeButtonElement`.
3. Log that variable to check your selection.
4. Add a `'click'` event listener to the button.
5. Inside the listener’s function, log `'Close Cafe was clicked'`.

**Check:** Save and refresh. Click **Close Cafe** a few times. The message should appear in the console each time.

### 6b: Write a function that displays the opening status

Before the button can close the cafe, we need somewhere to remember whether it is open.

#### Store the data

Above your Close Cafe event listener:

1. Create a variable called `isCafeOpen` using `let`.
2. Set its starting value to `true`.

This variable remembers the cafe’s current status:

- `true`: the cafe is open.
- `false`: the cafe is closed.

> 💡 Data that remembers the application’s current situation is called **state**.

#### Select the paragraph

Find this element in your HTML:

```html
<p id="cafe-status">Loading cafe information...</p>
```

In your JavaScript, select it and store it in a variable called `cafeStatusElement`.

Place this variable above the event listener too.

#### Write the function

Below those variables, but **above the event listener**, create a function called `renderCafe`.

Inside the function, use an `if/else` statement to update the paragraph:

| If… | Set `cafeStatusElement.textContent` to… |
|---|---|
| `isCafeOpen` is `true` | `'We are open. Welcome!'` |
| Otherwise | `'We are closed. See you tomorrow!'` |

> 💡 We named the function `renderCafe` because it displays the cafe’s current data. **Render** means to display.

Immediately below the function definition, call it:

```js
renderCafe();
```

**Check:** Save and refresh. **Loading cafe information...** should be replaced with **We are open. Welcome!**

### 6c: Make Close Cafe update the page

Find the Close Cafe event listener you wrote in Part 6a.

Replace its `console.log()` line with:

```js
isCafeOpen = false;
renderCafe();
```

Read these two lines in order:

1. Remember that the cafe is closed.
2. Update the page to match.

**Check:** Save, refresh, and click **Close Cafe**. The paragraph should change to **We are closed. See you tomorrow!**

Clicking the button again should leave the closed message displayed.

### 6d: Make Open Cafe work

Use the Close Cafe code as your example.

1. Select the button with the ID `open-cafe-btn`.
2. Store it in a variable called `openCafeButtonElement`.
3. Add a `'click'` event listener.
4. Inside the listener’s function:
   - Set `isCafeOpen` to `true`.
   - Call `renderCafe()`.

Keep this event listener outside `renderCafe()`, alongside your Close Cafe listener.

**Check:** Save and refresh. Close the cafe, then reopen it. Both buttons should update the same paragraph.

**Explain:** Why does each listener need to change `isCafeOpen` **and** call `renderCafe()`?

## Part 7: Show which specialties are available

**Goal:** Display the availability of all three specialties, then make **Restock Croissants** update the croissant’s status.

We will use the same pattern:

**Change the data → call `renderCafe()` → see the updated page.**

### 7a: Display three statuses from an array

#### Add the data and select the spans

Add this code **above your `renderCafe()` function definition**:

```js
const specialtyStatuses = ['Available', 'Sold out', 'Available'];

const specialtyStatusElements =
  document.querySelectorAll('.specialty-status');
```

The array contains the statuses. The selected spans are where we will display them.

Their indexes match:

| Index | Specialty | Starting status |
|---|---|---|
| `0` | Rose Latte | `'Available'` |
| `1` | Pistachio Croissant | `'Sold out'` |
| `2` | Lotus Cheesecake | `'Available'` |

Log both variables to the console.

**Check:** Save and refresh. You should have three strings in the array and three selected spans.

#### Display the first status

Inside `renderCafe()`, add this line **after the complete `if/else` statement**:

```js
specialtyStatusElements[0].textContent = specialtyStatuses[0];
```

This displays the first array item in the first span.

**Check:** Save and refresh. Rose Latte should show **Available**. The other two specialties should still show **Loading...**.

#### Display the other two statuses

Under that new line, add two more assignments:

1. Display `specialtyStatuses[1]` in `specialtyStatusElements[1]`.
2. Display `specialtyStatuses[2]` in `specialtyStatusElements[2]`.

Use `.textContent` in both assignments.

**Check:** Save and refresh. You should see:

- Rose Latte: **Available**
- Pistachio Croissant: **Sold out**
- Lotus Cheesecake: **Available**

Your `renderCafe()` function should now update the opening message **and** all three specialty statuses.

### 7b: Restock the croissants

Make **Restock Croissants** change the croissant’s status to **Available**.

Use your opening-button listeners as examples.

1. Select the button with the ID `restock-croissants-btn`.
2. Store it in a variable called `restockCroissantsButtonElement`.
3. Add a `'click'` event listener.
4. Inside the listener’s function:
   - Change the item at index `1` in `specialtyStatuses` to `'Available'`.
   - Call `renderCafe()`.

Write this listener outside `renderCafe()`, alongside your other listeners.

> 💡 Update the array item first. Then call the function that displays the array.

**Check:** Save, refresh, and click **Restock Croissants**.

The croissant should change from **Sold out** to **Available**. The other two statuses should stay the same.

#### Predict, then test

What would happen if the listener changed the array but did **not** call `renderCafe()`?

Test your prediction:

1. Temporarily comment out the `renderCafe()` call inside the restock listener.
2. After the array update, add:

   ```js
   console.log(specialtyStatuses);
   ```

3. Save, refresh, and click **Restock Croissants**.
4. Compare the croissant’s status in the array with its status on the page.

**Explain:** Why does the array show `'Available'` while the page still shows **Sold out**?

Restore the `renderCafe()` call. Save, refresh, and check that restocking works again.

### 7c: Replace the repeated assignments with a loop

Your restock button now works. Next, we will simplify the code that displays the statuses.

Find these three assignments inside `renderCafe()`:

```js
specialtyStatusElements[0].textContent = specialtyStatuses[0];
specialtyStatusElements[1].textContent = specialtyStatuses[1];
specialtyStatusElements[2].textContent = specialtyStatuses[2];
```

Notice that each line does the same job using a different index.

Replace those three lines with:

```js
specialtyStatuses.forEach((status, index) => {
  specialtyStatusElements[index].textContent = status;
});
```

Each time the callback runs:

- `status` holds the current array item.
- `index` holds its position.
- `specialtyStatusElements[index]` selects the matching span.

**Check:** Save and refresh.

1. Confirm that all three starting statuses appear correctly.
2. Click **Restock Croissants**.
3. Confirm that the croissant changes to **Available**.
4. Check that **Close Cafe** and **Open Cafe** still work.

The page should behave exactly as it did before replacing the assignments.

> 💡 Refreshing runs the starting code again. The cafe starts open, and the croissant starts sold out. -->

<!-- ## Part 8: Add a past menu item

The cafe previously served Rose Cake. Add it to the **Past Menu Items** list using JavaScript.

1. Select the list with the ID `past-menu-items`.
2. Create a new `<li>` element.
3. Give it the text **Rose Cake**.
4. Append it to the list.

**Check your work:** There should be five past menu items, with Rose Cake at the end.

> 🧠 Keep this element-creation code outside `renderCafe()`. It should run once when the page loads. Putting it inside the function would create another item whenever the function runs.

## Part 9: Publish a cafe update

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

Submit your GitHub repository link using your class’s usual submission process. -->