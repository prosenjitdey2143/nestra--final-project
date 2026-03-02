
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard easing
    direction: 'vertical', 
    gestureDirection: 'vertical',
    smoothHover: true,
    smoothTouch: false, // Set to true if you want smooth scroll on mobile too
    touchMultiplier: 2,
  });

  // 2. The Animation Loop (Required)
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

// Select cursor elements
const cursor = document.querySelector(".cursor");
const cursorBorder = document.querySelector(".cursor-border");

// Mouse position
let mouseX = 0;
let mouseY = 0;

// Current cursor position (for smooth effect)
let borderX = 0;
let borderY = 0;
let dotX = 0;
let dotY = 0;

// Track mouse movement
window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Animate cursor smoothly
function animateCursor() {
  // Small dot moves faster
  dotX += (mouseX - dotX) / 3;
  dotY += (mouseY - dotY) / 3;

  // Border moves slower (lag effect)
  borderX += (mouseX - borderX) / 8;
  borderY += (mouseY - borderY) / 8;

  // Apply position
  cursor.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
  cursorBorder.style.transform = `translate(${borderX}px, ${borderY}px) translate(-50%, -50%)`;

  requestAnimationFrame(animateCursor);
}

// Start animation
animateCursor();


// Hover effect on clickable elements
const hoverElements = document.querySelectorAll("a, button, .hover-target");

hoverElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("hover");
    cursorBorder.classList.add("hover");
  });

  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
    cursorBorder.classList.remove("hover");
  });
});

// Loader

 window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("preloader");
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
    cursor.style.display = "block";
    cursorBorder.style.display="block";
  }, 3000);
});

// Header Top Sliding Text

var headerSwiper = new Swiper(".header-swiper", {
  spaceBetween: 24,
  direction: "vertical",
  loop: true,
  speed: 800,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// Navbar Toggler

const navbarToggler = document.querySelector(".navbar-toggler");
navbarToggler.classList.remove("open");
navbarToggler.addEventListener("click", () => {
  navbarToggler.classList.toggle("open");
});

// Navbar Dropdown

const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownItem = document.querySelector(".dropdown");
const dropdownToggle = document.querySelector(".dropdown-toggle");
const observer = new MutationObserver(() => {
  dropdownItem.classList.toggle(
    "move-up",
    dropdownMenu.classList.contains("show")
  );
});
observer.observe(dropdownMenu, {
  attributes: true,
  attributeFilter: ["class"],
});
// Header Hinding Mechanism While Scroll

const headerSearch = document.querySelector(".header-search-wrapper");
let lastScrollY = window.scrollY;
window.addEventListener("scroll", (e) => {
  let currentScrollY = window.scrollY;
  if (lastScrollY > 100) {
    // scrolling up
    if (currentScrollY < lastScrollY) {
      headerSearch.classList.add("header-bottom-show");
      headerSearch.classList.remove("header-hide");
    }
    // scrolling down
    else {
      headerSearch.classList.add("header-hide");
      headerSearch.classList.remove("header-bottom-show");
      dropdownMenu.classList.remove("show");
      dropdownItem.classList.remove("move-up");
      dropdownToggle.classList.remove("show");
    }
  } else {
    // scrolling up
    if (currentScrollY < lastScrollY) {
      headerSearch.classList.remove("header-hide");
      headerSearch.classList.remove("header-bottom-show");
    }
    // scrolling down
    else {
      headerSearch.classList.add("header-hide");
      dropdownMenu.classList.remove("show");
      dropdownItem.classList.remove("move-up");
      dropdownToggle.classList.remove("show");
    }
  }

  lastScrollY = currentScrollY;
});

// Scroll disable while navbar toggler is open

let scrollPosition = 0;
const navBar = document.querySelector(".offcanvas");

navBar.addEventListener("shown.bs.offcanvas", () => {
  scrollPosition = window.scrollY;
  document.body.style.top = `-${scrollPosition}px`;
  document.body.classList.add("no-scroll");
});

navBar.addEventListener("hidden.bs.offcanvas", () => {
  document.body.classList.remove("no-scroll");
  document.body.style.top = "";
  window.scrollTo(0, scrollPosition);
});

// AOS

AOS.init({
  once: true,
});

// Our Clients Slider

var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 800,
});

// Shop By Category Slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 24,
  freeMode: true,
  slidesOffsetBefore: 30,
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    576: {
      slidesOffsetBefore: 50,
    },
  },
});
// Featured Section Slider

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  breakpoints: {
    976: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    576: {
      spaceBetween: 24,
      slidesPerView: 2,
    },
  },
});