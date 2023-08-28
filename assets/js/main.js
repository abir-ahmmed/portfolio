function navToggle() {
    document.getElementById("toggleMenu").style.display = "block";
  }
function navClose() {
    document.getElementById("toggleMenu").style.display = "none";
  }

  // Sticky header
  window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  })