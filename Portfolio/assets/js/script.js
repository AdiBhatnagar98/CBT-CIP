// Get all nav links
const navLinks = document.querySelectorAll(".nav-link");

// Add event listener to each nav link
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({ behavior: "smooth" });
  });
});

// Initialize Typed.js
const typed = new Typed("#element", {
  strings: ["Web Developer", "Web Designer", "Frontend Developer"],
  typeSpeed: 75,
  loop: true,
});
let skillsSectionAnimated = false;
let aboutSectionAnimated = false;
let contactSectionAnimated = false;
let footerSectionAnimated = false;

// Add event listener to window scroll event
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + window.innerHeight;

  // Animate about section
  const aboutSection = document.getElementById("about");
  const abtElement = document.querySelector(".abt");
  const abtImgElement = document.querySelector(".abt-img");
  const aboutSectionTop = aboutSection.offsetTop;
  if (scrollPosition > aboutSectionTop && !aboutSectionAnimated) {
    abtElement.classList.add("animate-from-right");
    abtImgElement.classList.add("animate-from-left");
    aboutSectionAnimated = true;
  }

  // Animate skills section
  const skillsSection = document.getElementById("skills");
  const skillstopElement = document.querySelector(".skills-top");
  const skillsbottomElement = document.querySelector(".skills-bottom");
  const skillsSectionTop = skillsSection.offsetTop;
  if (scrollPosition > skillsSectionTop && !skillsSectionAnimated) {
    skillstopElement.classList.add("animate-from-left");
    skillsbottomElement.classList.add("animate-from-right");
    skillsSectionAnimated = true;
  }

  // Animate contact section
  const contactSection = document.getElementById("contact");
  const contInfoElement = document.querySelector(".cont-info");
  const contformSection = document.querySelector(".cont-form");
  const contactSectionTop = contactSection.offsetTop;
  if (scrollPosition > contactSectionTop && !contactSectionAnimated) {
    contInfoElement.classList.add("animate-from-right");
    contformSection.classList.add("animate-from-left");
    contactSectionAnimated = true;
  }

  // Animate footer section
  const footerSection = document.getElementById("footer");
  const ftrPElement = document.querySelector(".ftr-p");

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        ftrPElement.classList.add("animate-from-top");
      }
    },
    {
      threshold: 0.1,
    }
  );

  observer.observe(footerSection);

  // Update active nav link
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    const section = document.querySelector(href);
    const sectionTop = section.offsetTop;
    const sectionBottom = section.offsetTop + section.offsetHeight;
    const sectionHeight = section.offsetHeight;
    const viewportTop = window.scrollY;
    const viewportBottom = window.scrollY + window.innerHeight;

    const visibleHeight =
      Math.min(sectionBottom, viewportBottom) -
      Math.max(sectionTop, viewportTop);

    if (visibleHeight / sectionHeight > 0.5) {
      navLinks.forEach((navLink) => navLink.classList.remove("active"));
      link.classList.add("active");
    }
  });

  // Show/hide "Scroll to Top" button
  const scrollToTopButton = document.getElementById("scroll-to-top");
  const homeSection = document.getElementById("home");
  const homeHeight = homeSection.offsetHeight;
  const homeOffset = homeSection.offsetTop;
  const homeScrolled = window.scrollY - homeOffset;

  if (window.scrollY === 0 || homeScrolled < homeHeight * 0.9) {
    scrollToTopButton.classList.add("hidden", "animate-fade-out");
    scrollToTopButton.classList.remove("animate-fade-in");
  } else {
    scrollToTopButton.classList.remove("hidden", "animate-fade-out");
    scrollToTopButton.classList.add("animate-fade-in");
  }
});

// Add event listener to "Scroll to Top" button
const scrollToTopButton = document.getElementById("scroll-to-top");
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Scroll to the top of the page when the page is loaded
window.addEventListener("load", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Update active nav link on page load
  const homeSection = document.getElementById("home");
  const homeTop = homeSection.offsetTop;
  const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;

  if (window.scrollY + 50 >= homeTop && window.scrollY + 50 < homeBottom) {
    navLinks.forEach((navLink) => navLink.classList.remove("active"));
    const homeLink = document.querySelector("[href='#home']");
    homeLink.classList.add("active");
  }
});

// Remove animation class on page load
document.addEventListener("DOMContentLoaded", () => {
  const abtElement = document.querySelector(".abt");
  abtElement.classList.remove("animate-from-right");

  const contInfoElement = document.querySelector(".cont-info");
  contInfoElement.classList.remove("animate-from-right");

  const ftrPElement = document.querySelector(".ftr-p");
  ftrPElement.classList.remove("animate-from-top");

  const contformSection = document.querySelector(".cont-form");
  contformSection.classList.remove("animate-from-left");

  const scrollToTopButton = document.getElementById("scroll-to-top");
  scrollToTopButton.classList.add("hidden", "animate-fade-out");

  const abtImgElement = document.querySelector(".abt-img");
  abtImgElement.classList.remove("animate-from-left");

  const skillstopElement = document.querySelector(".skills-top");
  skillstopElement.classList.remove("animate-from-left");

  const skillsbottomElement = document.querySelector(".skills-bottom");
  skillsbottomElement.classList.remove("animate-from-right");
});
