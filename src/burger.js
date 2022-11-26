const windowInnerWidth = window.innerWidth;
let burgerMenu = document.querySelector('.burger-menu');
let buttonMenu = document.querySelector('.menu');
let header = document.querySelector('.header');
let footer = document.querySelector('.footer');
let mainContainer = document.querySelector('.main__container');
let buttonMenuClose = document.querySelector('.menu-close');

if (windowInnerWidth < 361) {
    buttonMenu.addEventListener('click', (e) => {
        burgerMenu.style.display = 'block';
        header.style.display = 'none';
        footer.style.display = 'none';
        mainContainer.style.display = 'none';
    })

    buttonMenuClose.addEventListener('click', (e) => {
        burgerMenu.style.display = 'none';
        header.style.display = 'block';
        footer.style.display = 'block';
        mainContainer.style.display = 'block';
    })
} else {
    buttonMenu.addEventListener('click', (e) => {
        burgerMenu.style.display = 'block';
        header.style.opacity = '0.04';
        footer.style.opacity = '0.04';
        mainContainer.style.opacity = '0.04';
    })

    buttonMenuClose.addEventListener('click', (e) => {
        burgerMenu.style.display = 'none';
        header.style.opacity = '1';
        footer.style.opacity = '1';
        mainContainer.style.opacity = '1';
    })
}
