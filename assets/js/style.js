// * burger menu on mobile-view

(function () {
  'use strict'

  document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })
})()


// * navbar shrink
window.addEventListener('DOMContentLoaded', event => {
  // Navbar shrink function
  var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector('#mainNav');
      if (!navbarCollapsible) {
          return;
      }
      if (window.scrollY === 0) {
          navbarCollapsible.classList.remove('navbar-shrink')
      } else {
          navbarCollapsible.classList.add('navbar-shrink')
      }

  };

  // Shrink the navbar 
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
          target: '#mainNav',
          offset: 74,
      });
  };


  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
          if (window.getComputedStyle(navbarToggler).display !== 'none') {
              navbarToggler.click();
          }
      });
  });


})

<<<<<<< HEAD
// countdown-timer
const countdown = () => {
    var countDate = new Date("Jun 30, 2022 23:59:59").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    const textDay = Math.floor(gap/day);
    const textHour = Math.floor((gap%day)/hour);
    const textMinute = Math.floor((gap%hour)/minute);
    const textSecond = Math.floor((gap%minute)/second);

    document.getElementById("days").innerText = textDay,
    document.getElementById("hours").innerText = textHour,
    document.getElementById("minutes").innerText = textMinute,
    document.getElementById("seconds").innerText = textSecond;
} 

setInterval(countdown,1000);
=======

// * Dropdown button
var dropdown = document.getElementsByClassName("dropbtn-side");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "none") {
      dropdownContent.style.display = "block";
    } else {
      dropdownContent.style.display = "none";
    }
  });
}


// * toggler icon change 

// price-range
btnIcon_priceRange = () => {
const dropbtnIcon = document.getElementById("icon-price-range")

if (dropbtnIcon.className == "bi bi-chevron-up m-2") {
  dropbtnIcon.className = "bi bi-chevron-down m-2";
} else {
  dropbtnIcon.className = "bi bi-chevron-up m-2";
}
}

// brand
btnIcon_brand = () => {
const dropbtnIcon = document.getElementById("icon-brand")

if (dropbtnIcon.className == "bi bi-chevron-up m-2") {
  dropbtnIcon.className = "bi bi-chevron-down m-2";
} else {
  dropbtnIcon.className = "bi bi-chevron-up m-2";
}
}

// rating
btnIcon_rating = () => {
  const dropbtnIcon = document.getElementById("icon-rating")
  
  if (dropbtnIcon.className == "bi bi-chevron-up m-2") {
    dropbtnIcon.className = "bi bi-chevron-down m-2";
  } else {
    dropbtnIcon.className = "bi bi-chevron-up m-2";
  }
  }
<<<<<<< HEAD
>>>>>>> 7cd9ad8abe4555633970f35ab94a7e7b6aa13c4c
=======

// * countdown-timer
const countdown = () => {
  var countDate = new Date("Jun 23, 2022 23:59:59").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  const textDay = Math.floor(gap/day);
  const textHour = Math.floor((gap%day)/hour);
  const textMinute = Math.floor((gap%hour)/minute);
  const textSecond = Math.floor((gap%minute)/second);

  document.getElementById("days").innerText = textDay,
  document.getElementById("hours").innerText = textHour,
  document.getElementById("minutes").innerText = textMinute,
  document.getElementById("seconds").innerText = textSecond;
} 

setInterval(countdown,1000);
>>>>>>> f6b10285c66dc1452d3ee1c8efeef1b3b2bfa0a4
