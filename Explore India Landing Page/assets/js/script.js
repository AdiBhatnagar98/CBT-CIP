function updateNavLinks() {
  let e = document.querySelectorAll(".nav-ul li a"),
    t = 0,
    o = null;
  e.forEach((e) => {
    let l = document.querySelector(e.getAttribute("href")),
      s = l.offsetTop,
      r = l.offsetHeight,
      i = window.scrollY,
      n = window.scrollY + window.innerHeight,
      a = Math.min(s + r, n) - Math.max(s, i);
    a > t && ((t = a), (o = e));
  }),
    e.forEach((e) => {
      e.classList.remove("active");
    }),
    o && o.classList.add("active");
}
document.addEventListener("DOMContentLoaded", updateNavLinks),
  window.addEventListener("scroll", updateNavLinks),
  document.querySelectorAll(".nav-ul li a").forEach((e) => {
    e.addEventListener("click", (t) => {
      t.preventDefault(),
        document
          .querySelector(e.getAttribute("href"))
          .scrollIntoView({ behavior: "smooth" });
    });
  });
const scrollToTopButton = document.getElementById("scroll-to-top");
document.addEventListener("DOMContentLoaded", () => {
  scrollToTopButton.classList.add("hidden"),
    window.addEventListener("scroll", () => {
      scrollToTopButton.classList.toggle("hidden", window.scrollY <= 300);
    });
}),
  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }),
  window.addEventListener("scroll", () => {
    document.querySelector(".header").style.borderColor =
      window.scrollY > 500 ? "#ddd" : "transparent";
  });
const burgerMenu = document.querySelector(".burger-menu"),
  navUl = document.querySelector(".nav-ul");
burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active"),
    document.querySelector(".nav-ul").classList.toggle("show");
}),
  document.addEventListener("click", (e) => {
    navUl.contains(e.target) ||
      burgerMenu.contains(e.target) ||
      (navUl.classList.remove("show"), burgerMenu.classList.remove("active"));
  }),
  window.addEventListener("resize", () => {
    navUl.classList.remove("show"), burgerMenu.classList.remove("active");
  }),
  window.addEventListener("scroll", () => {
    navUl.classList.contains("show") || burgerMenu.classList.remove("active");
  }),
  ScrollReveal().reveal(".home-data", { duration: 2e3 }),
  ScrollReveal().reveal(".sponser-div", { interval: 200 }),
  ScrollReveal().reveal(".column", { interval: 200 }),
  (window.onload = function () {
    window.scrollTo(0, 0);
  });
let aboutSectionAnimated = !1;
window.addEventListener("scroll", () => {
  let e = document.getElementById("about"),
    t = e.offsetTop + 200,
    o = window.scrollY;
  if (
    o > t - window.innerHeight &&
    o < t + e.offsetHeight &&
    !aboutSectionAnimated
  ) {
    let l = document.querySelector(".abt-txt"),
      s = document.querySelector(".abt-imgs");
    l.classList.add("slide-right"),
      s.classList.add("slide-left"),
      (aboutSectionAnimated = !0);
  }
});
let discoverSectionAnimated = !1;
window.addEventListener("scroll", () => {
  let e = document.getElementById("discover"),
    t = e.offsetTop + 200,
    o = window.scrollY;
  if (
    o > t - window.innerHeight &&
    o < t + e.offsetHeight &&
    !discoverSectionAnimated
  ) {
    let l = document.querySelector(".discover .title"),
      s = document.querySelector(".discover-imgs");
    l.classList.add("slide-down"),
      s.classList.add("zoom-in"),
      (discoverSectionAnimated = !0);
  }
});
let placeSectionAnimated = !1;
window.addEventListener("scroll", () => {
  let e = document.getElementById("places"),
    t = e.offsetTop + 200,
    o = window.scrollY;
  if (
    o > t - window.innerHeight &&
    o < t + e.offsetHeight &&
    !placeSectionAnimated
  ) {
    let l = document.querySelector(".places .title"),
      s = document.querySelectorAll(".places-row");
    l.classList.add("slide-down"),
      s.forEach((e) => {
        e.classList.add("zoom-in");
      }),
      (placeSectionAnimated = !0);
  }
});
let footerSectionAnimated = !1;
window.addEventListener("scroll", () => {
  let e = document.getElementById("footer"),
    t = e.offsetTop + 200,
    o = window.scrollY;
  if (
    o > t - window.innerHeight &&
    o < t + e.offsetHeight &&
    !footerSectionAnimated
  ) {
    let l = document.querySelector(".sub-box h2"),
      s = document.querySelector(".mail-div");
    l.classList.add("slide-down"),
      s.classList.add("zoom-in"),
      (footerSectionAnimated = !0);
  }
});
