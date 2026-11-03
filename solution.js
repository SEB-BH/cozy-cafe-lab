const mainTitleEl = document.querySelector('#main-title')
const highlightTitleEls = document.querySelectorAll('.highlight-title')
const quoteEl = document.querySelector('#quote-of-the-day')

mainTitleEl.textContent = 'Welcome to the Cozy Cafe'

highlightTitleEls.forEach((highlightTitle) => {
    console.log(highlightTitle.textContent)
    highlightTitle.style.fontStyle = 'italic'
})

quoteEl.textContent = "A little coffee, a little conversation."
quoteEl.classList.add('featured')
console.log(quoteEl)