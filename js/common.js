document.addEventListener('DOMContentLoaded', function(){ 
    //Preloader
    var preloader = document.querySelector('.preloader'),
        preloader__content = document.querySelector('.preloader__content');

    setTimeout(function () {
        preloader.style.display = 'none';
        preloader__content.style.display = 'none';
    }, 1000)


    //Burger
    var burger = document.querySelector('.burger'),
        body = document.querySelector('body');
    burger.addEventListener('click', function () {
        if (body.classList.contains('mmenu_active')) {
            body.classList.remove('mmenu_active');
        } else {
            body.classList.add('mmenu_active');
        }
    });


    // Slider
    var slideIndex = 1,
        slides = document.getElementsByClassName('slider__item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next');

    showSlide(slideIndex);

    function showSlide(n) {
        if (n > slides.length) {
            slideIndex = 1;
        };
        if (n < 1) {
            slideIndex = slides.length;
        };
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        };
        slides[slideIndex - 1].style.display = 'block';
    };

    function plusSlides(n) {
        showSlide(slideIndex += n);
    };

    function currentSlide(n) {
        showSlide(slideIndex = n);
    };

    prev.addEventListener('click', function () {
        plusSlides(-1);
    });

    next.addEventListener('click', function () {
        plusSlides(1);
    });


    //animation
    var wow = new WOW();
    wow.init();
});









