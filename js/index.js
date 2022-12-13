var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper_h = new Swiper(".mySwiperHorizontal", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    slidesPerGroup: 1,
    grapCursor: true,
    loopPreventsSlide: true,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        prevEl: ".btn-prev",
        nextEl: ".btn-next",
    },
});

var swiper_offers = new Swiper(".mySwiperOffers", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    slidesPerGroup: 1,
    observeParents: true,
    preventClicksPropagation: true,
    loopPreventsSlide: true,
    grapCursor: true,
    loop: true,
    keyboard: {
        enabled: true,
    },
    allowTouchMove: false,
    centeredSlides: false,
    loopFillGroupWithBlank: true,
    speed: 500,
    navigation: {
        nextEl: ".btn-prev",
        prevEl: ".btn-next",
    },
});