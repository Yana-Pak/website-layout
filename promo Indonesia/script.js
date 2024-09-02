// каруселька

const image_options = [
    "/img/image2.jpg",
    "/img/bg3.jpg",
    "/img/bg4.jpg",
    "/img/bg5.jpg"
];

let i = 0;

const currentOptionImage = document.querySelector(".background");
const carousel = document.querySelector(".carousel-wrapper-block");
const optionPrevious = document.querySelector(".previous-option");
const optionNext = document.querySelector(".next-option");


currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";

optionNext.onclick = function () {
    if (i === image_options.length - 1) {
        i = 0;
    }
    i = i + 1;

    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";

    // setTimeout(() => {
    //     currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    // }, 50);

};

optionPrevious.onclick = function () {
    if (i === 0) {
        i = image_options.length;
    }
    i = i - 1;

    setTimeout(() => {
        currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 150);


};


// -----------------скролл--------------------------

let elementScroll = document.querySelector('.scroll');
elementScroll.addEventListener('click', scrollBy(0, 1100, "smooth"));

// ------------менюшка бургер--------------

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const topMainBlock = document.querySelector('.top-block__main');

function burgerShow() {
    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
}
burgerShow();
burgerNone()
function burgerNone() {
    topMainBlock.addEventListener('click', () => {
        menu.style.transform = "translateY(-100%)";
    });
}
