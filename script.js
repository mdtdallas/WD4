let home = document.getElementById('home')
let products = document.getElementById('products')
let aboutUs = document.getElementById('aboutUs')
let contactUs = document.getElementById('contactUs')

let homeLnk = document.getElementById('homeLnk')
let productsLnk = document.getElementById('productsLnk')
let aboutLnk = document.getElementById('aboutLnk')
let contactLnk = document.getElementById('contactLnk')

homeLnk.onclick = function() {
    home.style.display = "block"
    products.style.display = "none"
    aboutUs.style.display = "none"
    contactUs.style.display = "none"
    homeLnk.style.color = 'white'
    productsLnk.style.color = "grey"
    aboutLnk.style.color = "grey"
    contactLnk.style.color = "grey"
}

productsLnk.onclick = function() {
    home.style.display = "none"
    products.style.display = "block"
    aboutUs.style.display = "none"
    contactUs.style.display = "none"
    homeLnk.style.color = 'grey'
    productsLnk.style.color = "white"
    aboutLnk.style.color = "grey"
    contactLnk.style.color = "grey"
}

aboutLnk.onclick = function() {
    home.style.display = "none"
    products.style.display = "none"
    aboutUs.style.display = "block"
    contactUs.style.display = "none"
    homeLnk.style.color = 'grey'
    productsLnk.style.color = "grey"
    aboutLnk.style.color = "white"
    contactLnk.style.color = "grey"
}

contactLnk.onclick = function() {
    home.style.display = "none"
    products.style.display = "none"
    aboutUs.style.display = "none"
    contactUs.style.display = "block"
    homeLnk.style.color = 'grey'
    productsLnk.style.color = "grey"
    aboutLnk.style.color = "grey"
    contactLnk.style.color = "white"
}