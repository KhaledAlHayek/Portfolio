(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,i(r.key),r)}}function i(t){var i=function(t,i){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(i)?i:String(i)}var n=function(){function e(t){var n,r,s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,s=void 0,(r=i(r="pagination"))in n?Object.defineProperty(n,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[r]=s,this.el=t,this.items=Array.from(t.querySelectorAll(".slider__item")),this.prev=t.querySelector(".slider__prev"),this.next=t.querySelector(".slider__next"),this.index=1,this.html=""}var n,r;return n=e,(r=[{key:"init",value:function(){this.items.forEach((function(e,t){e.classList.add("slider__item-".concat(t+1))})),this.createPagination(),this.pagination=Array.from(document.querySelectorAll(".slider__pagination-item")),this.present(),this.switchViewFromPagination()}},{key:"present",value:function(){this.highlightActiveElement(),this.highlightActiveCircle(),this.disableEnableButtons()}},{key:"switchViewFromPagination",value:function(){var e=this;this.pagination.forEach((function(t){t.addEventListener("click",(function(){var i=t.getAttribute("data-index");e.index=i,e.present()}))}))}},{key:"highlightActiveCircle",value:function(){this.pagination.forEach((function(e){return e.classList.remove("slider__pagination-item--active")})),this.pagination[this.index-1].classList.add("slider__pagination-item--active")}},{key:"highlightActiveElement",value:function(){this.items.forEach((function(e){return e.classList.remove("active")})),this.items[this.index-1].classList.add("active")}},{key:"disableEnableButtons",value:function(){var e=this.prev.querySelector("img"),t=this.next.querySelector("img");1==this.index?e.src="assets/icons/prev-disabled.webp":e.src="assets/icons/prev.webp",this.index==this.items.length?t.src="assets/icons/next-disabled.webp":t.src="assets/icons/next.webp"}},{key:"nextItem",value:function(){if(this.items.length==this.index)return!1;this.index++,this.present()}},{key:"prevItem",value:function(){if(1==this.index)return!1;this.index--,this.present()}},{key:"createPagination",value:function(){var e=this.items.length,t=document.createElement("ul");t.className="slider__pagination";for(var i=1;i<=e;i++){var n=document.createElement("li");n.className="slider__pagination-item",n.setAttribute("data-index",i),t.appendChild(n)}this.el.parentElement.appendChild(t)}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();"serviceWorker"in navigator&&navigator.serviceWorker.register("sw.js").then((function(e){return console.log("Service Worker registered successfully ".concat(e.scope))})).catch((function(e){return console.log(e)}));var r=new n(document.querySelector(".slider"));r.init();var s=document.querySelector(".slider__prev"),a=document.querySelector(".slider__next");s.addEventListener("click",(function(){r.prevItem()})),a.addEventListener("click",(function(){r.nextItem()}));var o=document.querySelector(".presentaion");Array.from(document.querySelectorAll(".certificate__gallery-item")).forEach((function(e){e.addEventListener("click",(function(){var t=e.querySelector(".certificate__gallery-img");!function(e,t){var i=document.querySelector(".presentaion__img"),n=document.createElement("img");n.src=e,n.alt=t,i.innerHTML="",i.appendChild(n),o.classList.add("start-presentaion")}(t.getAttribute("src"),t.getAttribute("alt"))}))})),document.querySelector(".presentaion__close").addEventListener("click",(function(){o.classList.remove("start-presentaion")}));var c=document.querySelectorAll(".header__link"),l=document.querySelectorAll("section");c.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),c.forEach((function(e){return e.classList.remove("header__link--active")})),e.target.classList.add("header__link--active"),l.forEach((function(e){return e.classList.remove("active")}));var t=e.target.dataset.target;document.querySelector(".".concat(t)).classList.add("active")}))}));var u=document.querySelector(".header__theme");u.addEventListener("click",(function(){u.classList.toggle("header__theme--active"),document.body.classList.toggle("dark")})),document.querySelectorAll("a").forEach((function(e){return e.setAttribute("target","_blank")}));var d=document.querySelector(".portfolio"),h=document.querySelector(".sidebar"),m=document.querySelector(".header__menu");m.addEventListener("click",(function(e){e.stopPropagation(),m.classList.toggle("sidebar-options"),m.classList.contains("sidebar-options")?(d.classList.add("sidebar-shown"),h.classList.add("show-sidebar")):(d.classList.remove("sidebar-shown"),h.classList.remove("show-sidebar"))})),h.addEventListener("click",(function(e){return e.stopPropagation()})),document.body.addEventListener("click",(function(){(d.classList.contains("sidebar-shown")||h.classList.contains("show-sidebar"))&&(m.classList.remove("sidebar-options"),d.classList.remove("sidebar-shown"),h.classList.remove("show-sidebar"))}))})();