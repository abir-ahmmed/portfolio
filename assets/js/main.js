/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic



/*==============SCROLL REVEAL ANIMATION=============*/


// 3D
$(window).on("load resize",function() {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];
  
    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }
  
    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, 4);
    }
  
    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }
  });

  // Slider Slick
    jQuery(document).ready(function($) {
      $('.testimonial-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [{
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
           breakpoint: 400,
           settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1
           }
        }]
    });
});

 
  // Skills Bar
  $(".skills-progress-bar").each(function(){
    $(this).find(".skills-progress-bar-inner").animate({
      width: $(this).attr("data-width")
    },2000)
  });

  $(".skills-2-progress-2-bar").each(function(){
    $(this).find(".skills-2-progress-2-bar-inner").animate({
      width: $(this).attr("data-width")
    },2000)
  });

  // theme-color change


// Code Vs Design
function myCode(){
document.getElementById("devs").style.display="block";
document.getElementById("devsIcon").style.color="#24E98C";
document.getElementById("designIcon").style.color="#D9832E";
document.getElementById("designer").style.display="none";
document.getElementById("devsArea").style.display="block";
document.getElementById("designerArea").style.display="none";
}
function myDesign(){
document.getElementById("designer").style.display="block";
document.getElementById("devsIcon").style.color="#D9832E";
document.getElementById("designIcon").style.color="#24E98C";
document.getElementById("devs").style.display="none";
document.getElementById("designerArea").style.display="block";
document.getElementById("devsArea").style.display="none";
}


// Scroll Active
if (document.addEventListener) {
  document.addEventListener("mousewheel", MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
  document.addEventListener("DOMMouseScroll", MouseWheelHandler, false); //Firefox
} else {
  document.attachEvent("onmousewheel", MouseWheelHandler); //IE 6/7/8
}

var i = 1;
var mouseWheel = true;
function MouseWheelHandler(e) {
  if (!mouseWheel) {
    return false;
  }
  mouseWheel = false;
  setTimeout(function() {
    mouseWheel = true;
  }, 3000); // Stop mouse wheel event for 3 seconds
  e = window.event || e;
  var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
  var h = window.innerHeight;
  var section = document.getElementsByClassName("scroll-section");
  console.log(i);
  if (i <= section.length && i >= 0) {
    //scrolling down?
    if (delta < 0) {
      window.scrollTo({
        top: h * i,
        behavior: "smooth"
      });
      i++;
    } else {
      //scrolling up?
      window.scrollTo({
        top: h * i,
        behavior: "smooth"
      });
      i--;
    }
  } else {
    i = 1;
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}
