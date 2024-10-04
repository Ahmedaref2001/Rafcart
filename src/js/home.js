
//swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    centerSlide:true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        500:{
            slidesPerView: 2,
        },
        900:{
            slidesPerView: 3,
        },
        1100:{
            slidesPerView: 4,
        }
    }
  });


