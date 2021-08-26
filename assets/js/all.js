"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.5,
  grid: {
    rows: 1
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
}); // var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   grid: {
//     rows: 2,
//   },
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
//# sourceMappingURL=all.js.map
