const services = document.querySelector('#services')
const menu = document.querySelector('.services-menu')
const search = document.querySelector('#search')

const Listeners = () => { // All mouse events on navbar menu
    menu.classList.toggle("hidden")
    services.addEventListener("mouseover", () => {
        menu.classList.remove("hidden")
        services.preventDefault()
    })
    services.addEventListener("mouseout", () => {
        menu.classList.toggle("hidden")
    })
    menu.addEventListener("mouseout", () => {
        menu.classList.toggle("hidden")
    })
    menu.addEventListener("mouseover", () => {
        menu.classList.remove("hidden")
    })
}
Listeners()