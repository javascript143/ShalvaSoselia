// hamburger menu

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-100%';
}

// slider

let slideIndex = 0;
autoSlider();
function autoSlider() {
    let i;
    let slides = document.getElementsByClassName("image");
    let dots = document.getElementsByClassName("dot");


    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex = slideIndex + 1;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    };

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

    setTimeout(autoSlider, 6000);
}