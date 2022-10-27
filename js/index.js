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
  cssMode: true,
  loop: true,
  slidesPerGroup: 4,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,
});