const menuMobile = document.querySelector('.nav__toggle-icon')
const menuOpen = document.querySelector('.menu')
const bgcOpen = document.querySelector('.bgc')
const menuSectionItem = document.querySelectorAll('.menusection__item')

menuMobile.addEventListener('click',function(){
    menuMobile.classList.toggle("open")
    menuOpen.classList.toggle("open")
    bgcOpen.classList.toggle("cover")
})

menuSectionItem.forEach(item => {
    item.addEventListener('click',(event) => {
        document.querySelector('.menusection__item--active').classList.remove('menusection__item--active')
        item.classList.add('menusection__item--active')
        let itemData = item.getAttribute('data-content-id')
        document.querySelector('.resume__content--active').classList.remove('resume__content--active')
        document.querySelector(itemData).classList.add("resume__content--active")
        

    },)

})