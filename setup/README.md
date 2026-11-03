<h1>
  <span class="headline">Cozy Cafe Lab</span>
  <span class="subhead">Setup</span>
</h1>

**Learning objective:** By the end of this setup, you will have a cafe webpage connected to a stylesheet and a JavaScript file.

You will use this page to practise DOM manipulation and events. Later, you will use JavaScript variables to store information and functions to display it.

## 1. Create your repository

Open **Git Bash** on Windows or **Terminal** on macOS.

Navigate to your labs directory:

```bash
mkdir -p ~/code/ga/labs
cd ~/code/ga/labs
```

On GitHub, create a repository named **`cozy-cafe-lab`**.

- Set the repository to **Public**.
- Leave the README, `.gitignore`, and licence options empty.

Copy your repository’s HTTPS URL. Use it to clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/cozy-cafe-lab.git
```

> 💡 Replace `YOUR-USERNAME` with your GitHub username.

Enter the project directory:

```bash
cd cozy-cafe-lab
```

## 2. Create the project files

Create your HTML, CSS, and JavaScript files:

```bash
touch index.html style.css app.js
```

Create a directory for your images:

```bash
mkdir assets
```

Open the project in VS Code:

```bash
code .
```

## 3. Add the images

Open each image link below. Right-click the image and select **Save image as**.

Save each image inside your project’s **`assets`** directory using the exact filename shown.

| Image | Save as |
|---|---|
| [Cafe counter](https://images.pexels.com/photos/8526416/pexels-photo-8526416.jpeg?auto=compress&cs=tinysrgb&w=600) | `cafe-counter.jpg` |
| [Coffee and cake](https://images.pexels.com/photos/8526484/pexels-photo-8526484.jpeg?auto=compress&cs=tinysrgb&w=600) | `coffee-and-cake.jpg` |
| [Cappuccino](https://images.pexels.com/photos/11160127/pexels-photo-11160127.jpeg?auto=compress&cs=tinysrgb&w=600) | `cappuccino.jpg` |
| [Berry cake](https://images.pexels.com/photos/8526401/pexels-photo-8526401.jpeg?auto=compress&cs=tinysrgb&w=600) | `berry-cake.jpg` |

The page will initially display three images. You will have a fourth image available for an exercise.

> 🧠 Check the filenames carefully. For example, `cappuccino.jpg` and `cappuccino.jpg.jpeg` are different filenames.

## 4. Add the HTML

Copy the following into **`index.html`**:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Cozy Cafe</title>
    <link rel="stylesheet" href="./style.css">
    <script defer src="./app.js"></script>
  </head>

  <body>
    <header>
      <h1 id="main-title">
        Welcome to the Cozy Cafe - Where Flavors and Comfort Meet
      </h1>

      <p>Your neighbourhood cafe in Manama.</p>

      <button id="bg-color-btn">Change Background Colour</button>
    </header>

    <main>
      <section>
        <h2>Cafe Opening Status</h2>

        <p id="cafe-status">Loading cafe information...</p>

        <button id="close-cafe-btn">Close Cafe</button>
        <button id="open-cafe-btn">Open Cafe</button>
      </section>

      <section>
        <h2>Cafe Specialties</h2>

        <ul id="cafe-specialties">
          <li>
            Rose Latte:
            <span class="specialty-status">Loading...</span>
          </li>

          <li>
            Pistachio Croissant:
            <span class="specialty-status">Loading...</span>
          </li>

          <li>
            Lotus Cheesecake:
            <span class="specialty-status">Loading...</span>
          </li>
        </ul>

        <button id="restock-croissants-btn">
          Restock Croissants
        </button>
      </section>

      <section>
        <h2>Our Cafe Moments</h2>

        <img
          id="main-photo"
          class="cafe-photo"
          src="./assets/cafe-counter.jpg"
          alt="Customers at a cafe counter"
        >

        <img
          class="cafe-photo"
          src="./assets/coffee-and-cake.jpg"
          alt="Coffee and cakes on a table"
        >

        <img
          class="cafe-photo"
          src="./assets/cappuccino.jpg"
          alt="A cappuccino beside a notebook"
        >
      </section>

      <section>
        <h2 class="highlight-title">Quote of the Day</h2>

        <p id="quote-of-the-day"></p>
      </section>

      <section id="blogs">
        <h2 class="highlight-title">Cafe Adventures</h2>

        <div class="blog-post">
          <h3>Weekend Brunch Special</h3>

          <p>
            Our new pistachio pancakes were a crowd favourite!
          </p>
        </div>

        <div class="blog-post">
          <h3>Local Artists Visit</h3>

          <p>
            Artists from across Bahrain joined us to share
            their sketchbooks over coffee.
          </p>
        </div>
      </section>

      <section>
        <h2>Past Menu Items</h2>

        <ul id="past-menu-items">
          <li>Vanilla Chai Muffin</li>
          <li id="fish-tacos">Fish Tacos</li>
          <li>Spiced Apple Juice</li>
          <li>Honey Almond Tart</li>
        </ul>
      </section>
    </main>

    <footer>
      <p>Cozy Cafe · Manama, Bahrain</p>
    </footer>
  </body>
</html>
```

Notice these connections in the `<head>`:

```html
<link rel="stylesheet" href="./style.css">
<script defer src="./app.js"></script>
```

- The `<link>` connects the stylesheet.
- The `<script>` connects the JavaScript file.
- `defer` allows the HTML to finish loading before the JavaScript runs.

## 5. Add the CSS

Copy the following into **`style.css`**:

```css
body {
  background-color: #f7f0e6;
  color: #382c25;
  font-family: Arial, sans-serif;
  margin: 0px;
}

header {
  background-color: #eadbc8;
  border-bottom: 4px solid #76523c;
  padding: 24px;
  margin: 0px;
  text-align: center;
}

main {
  margin: 24px;
}

h1 {
  font-family: Georgia, serif;
  font-size: 32px;
}

h2 {
  color: #76523c;
  font-size: 24px;
}

h3 {
  font-size: 20px;
}

section {
  background-color: white;
  border: 1px solid #d8c7b5;
  padding: 20px;
  margin-bottom: 24px;
}

li {
  margin-bottom: 12px;
}

.cafe-photo {
  width: 160px;
  border: 3px solid #eadbc8;
  margin: 6px;
}

.blog-post {
  background-color: #f7f0e6;
  border-left: 4px solid #76523c;
  padding: 16px;
  margin-bottom: 16px;
}

.specialty-status {
  font-weight: bold;
}

button {
  background-color: #76523c;
  color: white;
  font-size: 16px;
  border: 1px solid #76523c;
  padding: 10px 18px;
  margin: 6px;
}

button:hover {
  background-color: #503626;
}

.sold-out {
  color: #963f36;
  font-weight: bold;
}

footer {
  color: #76523c;
  padding: 12px;
  text-align: center;
}
```

The `.sold-out` rule is ready for a later exercise. An element will receive that styling when it has the class `sold-out`.

## 6. Connect your JavaScript

Add this line to **`app.js`**:

```js
console.log('Cozy Cafe JavaScript is connected!');
```

Save all three files.

Open **`index.html`** in your browser. Then open the browser’s developer tools and select the **Console** tab.

Confirm that you see:

```text
Cozy Cafe JavaScript is connected!
```

> 🧠 Your JavaScript uses the browser’s DOM. Run this project by opening the HTML page in a browser.

## 7. Check your starting page

Before beginning the exercise, confirm that:

- The page has a cream background and white sections.
- The console shows your connection message without errors.

The buttons will gain their click behaviour during the exercise.

If an image is missing, check its filename and location. If the page has no styling, check the stylesheet link in `index.html`.

## 8. Save your starting point

In your terminal, run:

```bash
git add .
git commit -m "Add Cozy Cafe starter files"
git push
```

Your project is ready for the lab.