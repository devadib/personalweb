const menuMobile = document.querySelector('.nav__toggle-icon')
const menuOpen = document.querySelector('.menu')
const bgcOpen = document.querySelector('.bgc')
const menuSectionItem = document.querySelectorAll('.menusection__item')
const menuPortfolio = document.querySelectorAll('.portfolio-menu__item')
const btnScroll = document.querySelector('.scrolltop')
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


menuPortfolio.forEach( itemLi => {

    itemLi.addEventListener('click',event=>{
        document.querySelector('.portfolio-menu__item--active').classList.remove('portfolio-menu__item--active')
        event.target.classList.add('portfolio-menu__item--active')





      })




})
btnScroll.addEventListener('click',()=>{
    console.log('click')
    window.scrollTo(0,0)



})

