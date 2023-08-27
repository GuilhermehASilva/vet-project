const services = document.querySelector('#services')
const menu = document.querySelector('.services-menu')
const search = document.querySelector('#search')
const instagram = document.querySelector("#instagram")
const facebook = document.querySelector("#facebook")

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
    instagram.addEventListener("mouseover", () => {
        facebook.classList.toggle("opacity")
    })
    instagram.addEventListener("mouseout", () => {
        facebook.classList.remove("opacity")
    })
    facebook.addEventListener("mouseover", () => {
        instagram.classList.toggle("opacity")
    })
    facebook.addEventListener("mouseout", () => {
        instagram.classList.remove("opacity")
    })
}
Listeners()