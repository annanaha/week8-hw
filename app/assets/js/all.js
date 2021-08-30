$(function() {
  console.log('Hello Bootstrap5');
});



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.5,
  grid: {
    rows: 1,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
});

//聽聽他們怎麼說
var customerswiper = new Swiper(".customerswiper", {
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,

});

// 課程階級選擇
var courselevelswiper = new Swiper(".courselevelswiper", {
  slidesPerView: 1,
  slidesPerColumn: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2.1,
    },
    992: {
      slidesPerView: 3,
     
    }
  }

});