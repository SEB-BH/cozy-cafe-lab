const mainTitleEl = document.querySelector('#main-title')
const highlightTitleEls = document.querySelectorAll('.highlight-title')
const quoteEl = document.querySelector('#quote-of-the-day')

mainTitleEl.textContent = 'Welcome to the Cozy Cafe'

highlightTitleEls.forEach((highlightTitle) => {
    // console.log(highlightTitle.textContent)
    highlightTitle.style.fontStyle = 'italic'
})

quoteEl.textContent = "A little coffee, a little conversation."
quoteEl.classList.add('featured')

// PART 3
const mainPhotoEl = document.querySelector('#main-photo')
// console.log(mainPhotoEl.getAttribute('src'))
mainPhotoEl.setAttribute('src', 'https://images.pexels.com/photos/8526401/pexels-photo-8526401.jpeg?auto=compress&cs=tinysrgb&w=600')
mainPhotoEl.setAttribute('alt', 'A berry cake served at the cafe')


// PART 4
const bgColorBtnEl = document.querySelector('#bg-color-btn')
const bodyEl = document.querySelector('body')
// console.log(bodyEl)
const handleBackgroundChange = () => {
    bodyEl.style.backgroundColor = 'lightsteelblue'
}

// handleBackgroundChange()

// ---- start eventListener lesson ----------

bgColorBtnEl.addEventListener('click', handleBackgroundChange)



// PART 5
