$(function () {

    $('.main__slider').slick({
        dots: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                }
            }
        ],
        adaptiveHeight: true
    })

})

const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('burger-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active');
}


