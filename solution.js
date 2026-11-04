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
const roseLatteEl = document.querySelector('#rose-latte')
const croissantEl = document.querySelector('#croissant')
const cheescakeEl = document.querySelector('#cheesecake')
// console.log(roseLatteEl, croissantEl, cheescakeEl)

roseLatteEl.textContent = 'Available'
croissantEl.textContent = 'Sold Out'
cheescakeEl.textContent = 'Available'

// CSS identifiers cannot begin with an unescaped number.
// const button = document.querySelector('[id="0"]')
const roseBtnEl = document.getElementById('0')
const croissantBtnEl = document.getElementById('1')
const cheescakeBtnEl = document.getElementById('2')
// console.log(roseBtnEl, croissantBtnEl, cheescakeBtnEl)

roseBtnEl.addEventListener('click', () => {
    roseLatteEl.textContent = 'Sold Out'
})
croissantBtnEl.addEventListener('click', () => {
    croissantEl.textContent = 'Sold Out'
})
cheescakeBtnEl.addEventListener('click', () => {
    cheescakeEl.textContent = 'Sold Out'
})


// // PART 5 LEVEL UP 
// const specialtyElements = document.querySelectorAll('.specialty-status')
// const soldOutBtnElements = document.querySelectorAll('.sold-out-btn')
// // console.log(soldOutBtnElements)

// const statuses = ['Available', 'Sold Out', 'Available']

// const render = () => {
//     //for each status, update its related html element's textContent
//     statuses.forEach((status, index) => {
//         specialtyElements[index].textContent = status
//     })
// }
// render()

// soldOutBtnElements.forEach((button, index) => {
//     button.addEventListener('click', () => {
//         statuses[index] = 'Sold Out'
//         render()
//     })
// })
