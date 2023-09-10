// Esse script serve para a versão mobile. Ao clicar no botao hambuerguer, o menu que ficava escondido passa a ficar visivel.
const e=document.querySelector(".header__hamburguer");document.querySelector(".header__hamburguer img");const o=document.querySelector(".header__nav"),t=document.querySelector(".section-hero"),r=document.querySelector("main"),c=document.querySelector("footer");e.addEventListener("click",function(l){e.classList.toggle("header__hamburguer--inativo"),o.classList.toggle("header__nav--modal"),t.classList.toggle("section-hero--modal"),r.classList.toggle("display-none"),c.classList.toggle("display-none"),// Get the current page scroll position
// scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
//   //     // if any scroll is attempted, set this to the previous value
//   (window.onscroll = function () {
//     window.scrollTo(scrollLeft, scrollTop);
//   });
window.scrollTo(0,0)});// heroSection.addEventListener("touchstart", function (e) {
//   console.log("ok");
//   e.preventDefault();
//   e.stopPropagation();
// });
//# sourceMappingURL=index.8db66fc4.js.map

//# sourceMappingURL=index.8db66fc4.js.map
