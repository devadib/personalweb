const menuMobile = document.querySelector('.nav__toggle-icon')
const menuOpen = document.querySelector('.menu')
const bgcOpen = document.querySelector('.bgc')
menuMobile.addEventListener('click',function(){
    menuMobile.classList.toggle("open")
    menuOpen.classList.toggle("open")
    bgcOpen.classList.toggle("cover")



})