window.addEventListener('scroll', ()=>{onScroll()})
const main = document.getElementById('main')

function onScroll() {
    let scroll = window.scrollY
    console.log(scroll, window.scrollMaxY)
        if (scroll == window.scrollMaxY) {
            var elem = document.getElementById('1')
            let remove = elem.classList.contains('red') ? 'red' : 'blue'
            let add = elem.classList.contains('blue') ? 'red' : 'blue'
            elem.classList.remove(remove)
            elem.classList.add(add)

            var copy = document.createElement('div')
            copy.classList.add('container', 'red')
            main.appendChild(copy)
        }
    lastPos = scroll

}

const observ = new IntersectionObserver((entries) => {
    entries.forEach((elem) => {
        if (elem.isIntersecting) {
            elem.target.classList.add('show')
        }
        else 
            elem.target.classList.remove('show')
        
    })
})

const elements = document.querySelectorAll('.hidden')
elements.forEach(elem => observ.observe(elem))

