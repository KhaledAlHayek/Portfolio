export default class Slider{

  pagination;

  constructor(el) {
    this.el = el;
    this.items = Array.from(el.querySelectorAll(".slider__item"));
    this.prev = el.querySelector(".slider__prev");
    this.next = el.querySelector(".slider__next");
    this.index = 1;
    this.html = "";
  }

  init(){
    this.items.forEach((item, index) => {
      item.classList.add(`slider__item-${index + 1}`);
    });
    this.createPagination();
    this.pagination = Array.from(document.querySelectorAll(".slider__pagination-item"));
    this.present();
    this.switchViewFromPagination();
  }

  present(){
    this.highlightActiveElement();
    this.highlightActiveCircle();
    this.disableEnableButtons();
  }

  switchViewFromPagination() {
    this.pagination.forEach(item => {
      item.addEventListener("click", () => {
        const index = item.getAttribute("data-index");
        this.index = index;
        this.present();
      });
    });
  }

  highlightActiveCircle() {
    this.pagination.forEach(item => item.classList.remove("slider__pagination-item--active"));
    this.pagination[this.index - 1].classList.add("slider__pagination-item--active");
  }

  highlightActiveElement() {
    this.items.forEach(item => item.classList.remove("active"));
    this.items[this.index - 1].classList.add("active");
  }

  disableEnableButtons() {
    const prevIconDisabled = this.prev.querySelector("img");
    const nextIconDisabled = this.next.querySelector("img");
    if(this.index == 1){
      prevIconDisabled.src = "assets/icons/prev-disabled.webp";
    }
    else{
      prevIconDisabled.src = "assets/icons/prev.webp";
    }

    if(this.index == this.items.length){
      nextIconDisabled.src = "assets/icons/next-disabled.webp";
    }
    else{
      nextIconDisabled.src = "assets/icons/next.webp";
    }
  }

  nextItem(){
    if(this.items.length == this.index){
      return false;
    }
    this.index++;
    this.present();
  }

  prevItem(){
    if(this.index == 1){
      return false;
    }
    this.index--;
    this.present();
  } 

  createPagination(){
    const total = this.items.length;
    const ul = document.createElement("ul");
    ul.className = "slider__pagination";
    for(let i = 1; i <= total; i++){
      const li = document.createElement("li");
      li.className = "slider__pagination-item";
      li.setAttribute("data-index", i);
      ul.appendChild(li);
    }

    const ulParent = this.el.parentElement;
    ulParent.appendChild(ul);
  }

}