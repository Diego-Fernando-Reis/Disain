const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;
const navbar2 = document.getElementById('navbar2');
const sticky2 = navbar2.offsetTop;

function myFunction(){
  if (window.pageYOffset >= sticky + 300) {
  navbar.classList.add("sticky")
  } else {
  navbar.classList.remove("sticky");
  }

  
}

var swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  loop: true,
  slidesPerGroup: 1,
  
  spaceBetween: 40,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    400: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    800: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },
  keyboard: true,
});