/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector("#nav-menu"),
  navToggle = document.querySelector("#nav-toggle"),
  navClose = document.querySelector("#nav-close");

// MENU SHOW
if (navToggle) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.add("show-menu");
  });
}

// MENU HIDDEN
if (navClose) {
  navClose.addEventListener("click", function () {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((link) =>
  link.addEventListener("click", function () {
    navMenu.classList.remove("show-menu");
  })
);

/*=============== CHANGE BACKGROUND HEADER ===============*/
const headerEl = document.querySelector("#header");

const scrollHeader = () => {
  this.scrollY >= 50 ? headerEl.classList.add("bg-header") : headerEl.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER POPULAR ===============*/
const popularSwiper = new Swiper(".popular__content", {
  // Optional parameters
  slidesPerView: "auto",
  centeredSlides: true,
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      centeredSlides: false,
    },

    1152: {
      loop: true,
    },
  },
});

/*=============== CHOOSE FAQ ===============*/
// 1. Select each item
const faqItems = document.querySelectorAll(".choose__faq-item");

faqItems.forEach((item) => {
  const faqHeader = item.querySelector(".choose__faq-header");

  // 2. Select each button click
  faqHeader.addEventListener("click", () => {
    // 7. Select the current faq-open class
    const openItem = document.querySelector(".faq-open");

    // 5. Call the toggleItem function
    toggleItem(item);

    // 8. Remove the faq-open class from other items
    if (openItem && openItem != item) {
      toggleItem(openItem);
    }
  });
});

// 3. Create function to display the content
const toggleItem = (item) => {
  // 3.1. Select each faq content
  const faqContent = item.querySelector(".choose__faq-content");

  // 6. If the same item contains the faq-open class, remove
  if (item.classList.contains("faq-open")) {
    faqContent.removeAttribute("style");
    item.classList.remove("faq-open");
  } else {
    // 4. Add max-height to the content and add the faq-open class
    faqContent.style.height = faqContent.scrollHeight + "px";
    item.classList.add("faq-open");
  }
};

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((currentSection) => {
    const sectionHeight = currentSection.offsetHeight,
      sectionTop = currentSection.offsetTop - 58,
      sectionId = currentSection.getAttribute("id"),
      sectionsClass = document.querySelector(".nav__menu a[href*=" + sectionId + "]");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
