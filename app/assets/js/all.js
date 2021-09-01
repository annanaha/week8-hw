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
  slidesPerView: 1,
  grid:{ 
    rows: 3,    
    fill: 'row', 
  },
  spaceBetween: 30,
  breakpoints: {
  //  大於768
    768: {
      slidesPerView: 2.5,
      spaceBetween: 30,
      grid:{ 
        rows: 1,    
        fill: 'row', 
      },
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
      grid:{ 
        rows: 2,    
        fill: 'row', 
      },
    
    }
  }
 

});

// 課程階級選擇
var courselevelswiper = new Swiper(".courselevelswiper", {
  slidesPerView: 1,
  grid:{ 
    rows: 3,    
    fill: 'row', 
  },
  spaceBetween: 0,
  breakpoints: {
  //  大於768
    768: {
      slidesPerView: 2.5,
      spaceBetween: 30,
      grid:{ 
        rows: 1,    
        fill: 'row', 
      },
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
      grid:{ 
        rows: 1,    
        fill: 'row', 
      },
    
    }
  }
 

});

//師資介紹
var teacherswiper = new Swiper(".teacherswiper", {
  slidesPerView: 1,
  grid:{ 
    rows: 4,    
    fill: 'row', 
  },
  spaceBetween: 70,
  breakpoints: {
  //  大於768
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      grid:{ 
        rows: 1,    
        fill: 'row', 
      },
    },
    992: {
      slidesPerView: 2.5,
      spaceBetween: 30,
      grid:{ 
        rows: 1,    
        fill: 'row', 
      },   
    }
  }
 
});

//課程推薦
var recommendswiper = new Swiper(".recommendswiper", {
  slidesPerView: 1.5,
  grid:{ 
    rows: 1,    
    fill: 'row', 
  },
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
      spaceBetween: 40
    
    }
  }

});
