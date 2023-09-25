const viewer = document.querySelector('.viewer img')
const navLeft = document.querySelector('.left')
const navRight = document.querySelector('.right')
const thumbnail = document.querySelectorAll('.thumbnail img')


thumbnail[0].style.opacity = '1'
thumbnail[0].style.filter = 'none'

// console.log(viewer.getAttribute('src'))

let counter = 0

function checkStyle() {
    thumbnail.forEach((elem, index) => {
        if ((index) == counter) {
            elem.style.transition = 'all .3s ease-in-out'
            elem.style.opacity = '1'
            elem.style.filter = 'none'
        } else {
            elem.style.opacity = '.3'
            elem.style.filter = 'grayscale(100%)'
        }
    })
}

counterIndex()

function counterIndex() {
    thumbnail.forEach((elem, index) => {
        // console.log(elem, index)
        if ((index) == counter) {
            viewer.setAttribute('src', `${elem.getAttribute('src')}`)
            checkStyle()
        } else {
            checkStyle()
        }
    })
}

navRight.addEventListener('click', next)
function next(e) {
    if (counter > thumbnail.length - 1) {
        return
    } else {
        counter++
        console.log(counter)
        counterIndex()
    }
    // console.log(thumbnail.length)
}

navLeft.addEventListener('click', prev)
function prev(e) {
    if (counter === 0) {
        return
    } else {
        counter--
        counterIndex()
        console.log(counter)
    }
    // console.log(thumbnail.length)
}

thumbnail.forEach((img, index) => {
    img.addEventListener('click', (e) => {
        counter = index
        if (index == counter) {
            viewer.setAttribute('src', `${img.getAttribute('src')}`)
            checkStyle()
            console.log(img, index)
        } else {
            checkStyle()
        }
    })
})