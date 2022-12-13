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

  var swiper = new Swiper(".mySwiperTabs", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    slidesPerGroup: 1,
    grapCursor: true,
    loopPreventsSlide: true,
    loop: false,
    loopFillGroupWithBlank: true,
    navigation: {
      prevEl: ".btn-prev",
      nextEl: ".btn-next",
    },
  });

var swiper = new Swiper(".mySwiperHorizontal", {
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