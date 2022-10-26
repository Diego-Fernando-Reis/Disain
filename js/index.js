const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function myFunction(){
  if (window.pageYOffset >= sticky + 300) {
  navbar.classList.add("sticky")
  } else {
  navbar.classList.remove("sticky");
  }
}