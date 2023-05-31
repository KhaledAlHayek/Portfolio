// register srvice workers
if("serviceWorker" in navigator){
  navigator.serviceWorker.register("sw.js")
    .then(reg => console.log(`Service Worker registered successfully ${reg.scope}`))
    .catch(err => console.log(err));
}

// slider
import Slider from "./slider.js";
const slider = new Slider(document.querySelector(".slider"));
slider.init();

const prev = document.querySelector(".slider__prev");
const next = document.querySelector(".slider__next");

prev.addEventListener("click", () => {
  slider.prevItem();
});
next.addEventListener("click", () => {
  slider.nextItem();
});


// image presentaion
const presentaion = document.querySelector(".presentaion");
const imgs = Array.from(document.querySelectorAll(".certificate__gallery-item"));
const presentImage = (src, alt) => {
  const imgParent = document.querySelector(".presentaion__img");
  const img = document.createElement("img");

  img.src = src;
  img.alt = alt;

  imgParent.innerHTML = "";
  imgParent.appendChild(img);
  presentaion.classList.add("start-presentaion");
};

imgs.forEach(img => {
  img.addEventListener("click", () => {
    const certificateImage = img.querySelector(".certificate__gallery-img");
    const src = certificateImage.getAttribute("src");
    const alt = certificateImage.getAttribute("alt");
    presentImage(src, alt);
  });
});

const closePresentaion = document.querySelector(".presentaion__close");
closePresentaion.addEventListener("click", () => {
  presentaion.classList.remove("start-presentaion");
});

// Switch Views
const links = document.querySelectorAll(".header__link");
const sections = document.querySelectorAll("section");
links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    links.forEach(link => link.classList.remove("header__link--active"));
    e.target.classList.add("header__link--active");
    sections.forEach(section => section.classList.remove("active"));
    
    const active = e.target.dataset.target;
    const activeElement = document.querySelector(`.${active}`);
    activeElement.classList.add("active");
  })
})

// Toggle Theme
const theme = document.querySelector(".header__theme");
theme.addEventListener("click", () => {
  theme.classList.toggle("header__theme--active");
  document.body.classList.toggle("dark");
});

// Open links in a new tab
const anchors = document.querySelectorAll("a");
anchors.forEach(link => link.setAttribute("target", "_blank"));


// show side bar
const overlay = document.querySelector(".portfolio");
const sidebar = document.querySelector(".sidebar");
const menu = document.querySelector(".header__menu");

menu.addEventListener("click", e => {
  e.stopPropagation();
  menu.classList.toggle("sidebar-options");
  if(menu.classList.contains("sidebar-options")){
    overlay.classList.add("sidebar-shown");
    sidebar.classList.add("show-sidebar");
  }
  else{
    overlay.classList.remove("sidebar-shown");
    sidebar.classList.remove("show-sidebar");
  }
});

sidebar.addEventListener("click", e => e.stopPropagation());
document.body.addEventListener("click", () => {
  if(overlay.classList.contains("sidebar-shown") || sidebar.classList.contains("show-sidebar" || menu.classList.contains("sidebar-options"))){
    menu.classList.remove("sidebar-options");
    overlay.classList.remove("sidebar-shown");
    sidebar.classList.remove("show-sidebar");
  }
});