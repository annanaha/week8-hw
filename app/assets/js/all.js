$(function() {
  console.log('Hello Bootstrap5');
});



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.5,
  grid: {
    rows: 1,
  },
  spaceBetween: 30,
  
});

//聽聽他們怎麼說
var customerswiper = new Swiper(".customerswiper", {
  slidesPerView: 3,
  slidesPerColumn: 2,
  //  slidesPerColumnFill: "row",
  slidesPerGroup: 6,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 

});

// 課程階級選擇
var courselevelswiper = new Swiper(".courselevelswiper", {
  slidesPerView: 3,
  grid: {
    rows: 1,
  },
  spaceBetween: 30,
 

});

//師資介紹
var teacherswiper = new Swiper(".teacherswiper", {
  slidesPerView: 3,
  grid: {
    rows: 1,
  },
  spaceBetween: 30,


});

//課程推薦
var recommendswiper = new Swiper(".recommendswiper", {
  slidesPerView: 3,
  slidesPerColumn: 1,
  spaceBetween: 20,


});