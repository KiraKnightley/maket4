
let burgerMenu = document.querySelector('.burger-menu');
let mainContainer = document.querySelector('.main__container');
let header = document.querySelector('.header');
let footer = document.querySelector('.footer');

let buttonConnectAside = document.querySelector('.burger-menu__message');
let sideBarConnect = document.querySelector('.side-bar__connect');
let buttonCallAside = document.querySelector('.burger-menu__phone');
let sideBarCall = document.querySelector('.side-bar__call');
let buttonConnectHeader = document.querySelector('.header__message');
let buttonCallHeader = document.querySelector('.header__phone');

let sideBarClose = document.querySelectorAll('.side-bar__close');


buttonConnectHeader.addEventListener('click', (e) => {
    burgerMenu.style.opacity = '0.04';
    mainContainer.style.opacity = '0.04';
    header.style.opacity = '0.04';
    footer.style.opacity = '0.04';
    sideBarConnect.style.display = 'block';
})

buttonCallHeader.addEventListener('click', (e) => {
    burgerMenu.style.opacity = '0.04';
    mainContainer.style.opacity = '0.04';
    header.style.opacity = '0.04';
    footer.style.opacity = '0.04';
    sideBarCall.style.display = 'block';
})

buttonConnectAside.addEventListener('click', (e) => {
    burgerMenu.style.opacity = '0.04';
    mainContainer.style.opacity = '0.04';
    header.style.opacity = '0.04';
    footer.style.opacity = '0.04';
    sideBarConnect.style.display = 'block';
})

buttonCallAside.addEventListener('click', (e) => {
    burgerMenu.style.opacity = '0.04';
    mainContainer.style.opacity = '0.04';
    header.style.opacity = '0.04';
    footer.style.opacity = '0.04';
    sideBarCall.style.display = 'block';
})

for (let i= 0; i<= sideBarClose.length; i++){
    sideBarClose[i].addEventListener('click', (e) => {
        sideBarConnect.style.display = 'none';
        sideBarCall.style.display = 'none';
        burgerMenu.style.opacity = '1';
        mainContainer.style.opacity = '1';
        header.style.opacity = '1';
        footer.style.opacity = '1';
    })
}
