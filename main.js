// BTN MENU
const menumobile = document.querySelector('.mobile');
const btnmenu = document.querySelector('#btn-menu');

btnmenu.addEventListener('click', () => {
    menumobile.classList.toggle('activemenu');
    btnmenu.classList.toggle('change');
})

// // SCOLL SUAVE
const menuItensDesktop = document.querySelectorAll('.menu a[href^="#"]');
const menuItensMobile = document.querySelectorAll('.mobile a[href^="#"]');

menuItensDesktop.forEach(item => {
    item.addEventListener('click', scrollSuave)
})
menuItensMobile.forEach(item => {
    item.addEventListener('click', scrollSuave)
})

function scrollSuave(event) {
    event.preventDefault()
    const elementid = event.target.hash;
    const to = document.querySelector(elementid).offsetTop - 100;


    window.scroll({
        top: to,
        behavior: "smooth"
    })
}