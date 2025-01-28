const swiper = new Swiper('.contenedor-imagenes', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    },
    on: {
        slideChange: function () {
            document.querySelector('.swiper-pagination').classList.add('active');
        }
    }
});
