import './index.html';
import '../node_modules/swiper/swiper-bundle.min.css';
import './main.scss';
import '../node_modules/swiper/swiper-bundle';
import './burger';
import './side-bar';


const windowInnerWidth = window.innerWidth;
console.log(windowInnerWidth);
if (windowInnerWidth < 767) {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1.2,
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        }
    });
}

let buttonSlide = document.querySelector('.button__slide-all');
let slideMore = document.querySelector('.repair-brand__slider-desktop');
let buttonSlideTitle = document.querySelectorAll('.button--title');
let buttonImage = document.querySelectorAll('.button__title--arrow-down');
let slideSevenTablet = document.querySelector('.repair-brand__slide:nth-child(7)');
let slideEightTablet = document.querySelector('.repair-brand__slide:nth-child(8)');

let buttonListTechnics = document.querySelector('.technics__button-block');
let listTechnics = document.querySelector('.technics__slide:last-child');
let clickBool = true;

slideMore.style.display = 'none';


if (windowInnerWidth < 1119){
    slideSevenTablet.style.display = 'none';
    slideEightTablet.style.display = 'none';
    listTechnics.style.display = 'none';
}

buttonSlide.addEventListener('click', (e) => {
    if (slideMore.style.display === 'flex'){
        slideMore.style.display = 'none';
        buttonSlideTitle[0].innerHTML = 'Показать все';
        buttonImage[0].style.transform = 'rotate(0deg)';
        if (windowInnerWidth < 1119){
            slideSevenTablet.style.display = 'none';
            slideEightTablet.style.display = 'none';
        }
    } else {
        slideMore.style.display = 'flex';
        buttonSlideTitle[0].innerHTML = 'Скрыть';
        buttonImage[0].style.transform = 'rotate(180deg)';
        if (windowInnerWidth < 1119){
            slideSevenTablet.style.display = 'flex';
            slideEightTablet.style.display = 'flex';
        }
    }
})

if(windowInnerWidth < 1119){
    buttonListTechnics.addEventListener('click', (e) => {
        if (listTechnics.style.display === 'none'){
            listTechnics.style.display = 'flex';
            buttonSlideTitle[1].innerHTML = 'Cкрыть';
            buttonImage[1].style.transform = 'rotate(180deg)';
        } else {
            listTechnics.style.display = 'none';
            buttonSlideTitle[1].innerHTML = 'Показать все';
            buttonImage[1].style.transform = 'rotate(0deg)';
        }
    
    })
} else {
    buttonListTechnics.addEventListener('click', (e) => {
        if (!clickBool){
            buttonSlideTitle[1].innerHTML = 'Показать все';
            buttonImage[1].style.transform = 'rotate(0deg)';
            clickBool = true;
        } else {
            buttonSlideTitle[1].innerHTML = 'Скрыть';
            buttonImage[1].style.transform = 'rotate(180deg)';
            clickBool = false;
        }
    
    })
}
