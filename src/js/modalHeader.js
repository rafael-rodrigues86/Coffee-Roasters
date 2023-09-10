// Esse script serve para a versão mobile. Ao clicar no botao hambuerguer, o menu que ficava escondido passa a ficar visivel.

const hamburguerDiv = document.querySelector(".header__hamburguer");
const hamburguerImage = document.querySelector(".header__hamburguer img");
const navEl = document.querySelector(".header__nav");
const heroSection = document.querySelector(".section-hero");
const mainEl = document.querySelector("main");
const footerEl = document.querySelector("footer");

hamburguerDiv.addEventListener("click", function (e) {
  hamburguerDiv.classList.toggle("header__hamburguer--inativo");
  navEl.classList.toggle("header__nav--modal");
  heroSection.classList.toggle("section-hero--modal");
  mainEl.classList.toggle("display-none");
  footerEl.classList.toggle("display-none");

  // Get the current page scroll position
  // scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  // (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
  //   //     // if any scroll is attempted, set this to the previous value
  //   (window.onscroll = function () {
  //     window.scrollTo(scrollLeft, scrollTop);
  //   });
  window.scrollTo(0, 0);
});

// heroSection.addEventListener("touchstart", function (e) {
//   console.log("ok");
//   e.preventDefault();
//   e.stopPropagation();
// });
