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

// * Creatives Animations

// animted header
const element = document.querySelector('.creatives-bg-effect');

element.classList.add('animate__animated', 'animate__fadeIn');

element.addEventListener('animationend', () => {
  element.classList.remove('animate__fadeIn');
  element.classList.add('animate__animated', 'animate__flash', 'animate__delay-2s', 'animate__repeat-3', 'animate__slower');
});

// product selector
updatePrdimg = () => {

  var image = document.getElementById('prdImgContainer');
      if (image.src.match("/assets/img/creatives/pc1.png")) {
          image.src = "/assets/img/creatives/pc.png";
      }
      else {
          image.src = "/assets/img/creatives/pc1.png";
      }
}

//  toggler icon change for selector creatives page

//  Dropdown button
var drpdwnSlctor = document.getElementsByClassName("dropbtn-slctor");
var i;

for (i = 0; i < drpdwnSlctor.length; i++) {
  drpdwnSlctor[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var drpdwncntnt = this.nextElementSibling;
    if (drpdwncntnt.style.display === "block") {
      drpdwncntnt.style.display = "none";
    } else {
      drpdwncntnt.style.display = "block";
    }
  });
}

// selector pre-build
btn_slctor_1 = () => {
  const slctor = document.getElementById("slctorid1")
  
  if (slctor.className == "bi bi-chevron-down m-2") {
    slctor.className = "bi bi-chevron-up m-2";
  } else {
    slctor.className = "bi bi-chevron-down m-2";
  }
  }

// selector graphic cards
btn_slctor_2 = () => {
  const slctor = document.getElementById("slctor_id-2")
  
  if (slctor.className == "bi bi-chevron-down m-2") {
    slctor.className = "bi bi-chevron-up m-2";
  } else {
    slctor.className = "bi bi-chevron-down m-2";
  }
  }

// selector processor
btn_slctor_3 = () => {
  const slctor = document.getElementById("slctor_id-3")
  
  if (slctor.className == "bi bi-chevron-down m-2") {
    slctor.className = "bi bi-chevron-up m-2";
  } else {
    slctor.className = "bi bi-chevron-down m-2";
  }
  }

// selector motherboard
btn_slctor_4 = () => {
  const slctor = document.getElementById("slctor_id-4")
  
  if (slctor.className == "bi bi-chevron-down m-2") {
    slctor.className = "bi bi-chevron-up m-2";
  } else {
    slctor.className = "bi bi-chevron-down m-2";
  }
  }
// selector monitor
btn_slctor_5 = () => {
  const slctor = document.getElementById("slctor_id-5")
  
  if (slctor.className == "bi bi-chevron-down m-2") {
    slctor.className = "bi bi-chevron-up m-2";
  } else {
    slctor.className = "bi bi-chevron-down m-2";
  }
  }

// selector storage
btn_slctor_6 = () => {
  const slctor = document.getElementById("slctor_id-6")
  
  if (slctor.className == "bi bi-chevron-down m-2") {
    slctor.className = "bi bi-chevron-up m-2";
  } else {
    slctor.className = "bi bi-chevron-down m-2";
  }
  }

// selector peripherals
btn_slctor_7 = () => {
  const slctor = document.getElementById("slctor_id-7")
  
  if (slctor.className == "bi bi-chevron-down m-2") {
    slctor.className = "bi bi-chevron-up m-2";
  } else {
    slctor.className = "bi bi-chevron-down m-2";
  }
  }

// selector laptops & mobile
btn_slctor_8 = () => {
  const slctor = document.getElementById("slctor_id-8")
  
  if (slctor.className == "bi bi-chevron-down m-2") {
    slctor.className = "bi bi-chevron-up m-2";
  } else {
    slctor.className = "bi bi-chevron-down m-2";
  }
  }
