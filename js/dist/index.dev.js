"use strict";

var bgHome = document.querySelector("#home");
console.log(bgHome);
var imgsArr = ["../assets/imgs/landing.jpg", "../assets/imgs/landing-2.jpg", "../assets/imgs/landing-3.jpg", "../assets/imgs/landing-4.jpg"];
var i = 0;

function slideShow() {
  bgHome.style.backgroundImage = "url(".concat(imgsArr[i], ")");

  if (i == imgsArr.length - 1) {
    i = 0;
  } else {
    i++;
  }

  setTimeout(slideShow, 3000);
}

var mainSection = document.querySelector("#home");
var topBar = document.querySelector(".top-bar");
window.addEventListener("scroll", function () {
  var mainSectionBottom = mainSection.getBoundingClientRect().bottom;
  var viewportHeight = window.innerHeight;

  if (mainSectionBottom <= viewportHeight) {
    topBar.classList.add("white-background");
  } else {
    topBar.classList.remove("white-background");
  }
});
slideShow();