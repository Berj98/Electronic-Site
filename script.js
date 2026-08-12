// variables
let body = document.querySelector('body');
let aside = document.querySelector('aside');
let moonIcon = document.querySelector('#icon');
let title = document.querySelector('#strong');
let homeContent = document.querySelector('.home-content');
let logo = document.querySelector('#logo');
let smartWatch = document.querySelector('.watch');
let smartPhone = document.querySelector('.phone');
let RightSectionIcons = document.querySelector('.right-section');
let heart = document.querySelector('#heart');
let cart = document.querySelector('#cart');
let home = document.getElementById('home');
let brand = document.querySelector('#brand');
let price = document.querySelector('#price');
let menuIcon = document.getElementById("menu-icon");
let navbar = document.querySelector(".navlinks");
// variables

// navbar active start
menuIcon.addEventListener("click", function(){
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("active");
});
// navbar active end




// dark mode
moonIcon.addEventListener("click", function(){
    const elements = [
        title, homeContent, logo, smartPhone, 
        smartWatch, heart, cart, icon, brand, price, moonIcon, home]
    elements.forEach(element => element.classList.toggle('dark-mode'))
    if(body.classList.toggle('dark-mode')){
        aside.style.backgroundColor = '#111';
        moonIcon.className = 'fa-regular fa-sun';
        moonIcon.style.color = '#fff';
        home.style.backgroundColor = '#010101cc';
        home.style.backgroundBlendMode = 'darken';
    }else{
        aside.style.backgroundColor = '#f7f7f7';
        icon.style.color = '#111';
        moonIcon.className = 'fa-regular fa-moon';
        moonIcon.style.color = '#222';
        home.style.backgroundColor = '#0101011a';
        home.style.backgroundBlendMode = 'lighten';
    }
})
// dark mode end
