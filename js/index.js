const bgHome = document.querySelector("#home");
console.log(bgHome);

const imgsArr = [
  "../assets/imgs/landing.jpg",
  "../assets/imgs/landing-2.jpg",
  "../assets/imgs/landing-3.jpg",
  "../assets/imgs/landing-4.jpg",
];

let i = 0;

function slideShow() {
  bgHome.style.backgroundImage = `url(${imgsArr[i]})`;
  if (i == imgsArr.length - 1) {
    i = 0;
  } else {
    i++;
  }
  setTimeout(slideShow, 3000);
}
const mainSection = document.querySelector("#home");
const topBar = document.querySelector(".top-bar");

window.addEventListener("scroll", () => {
  const mainSectionBottom = mainSection.getBoundingClientRect().bottom;
  const viewportHeight = window.innerHeight;

  if (mainSectionBottom <= viewportHeight) {
    topBar.classList.add("white-background");
  } else {
    topBar.classList.remove("white-background");
  }
});

slideShow();
