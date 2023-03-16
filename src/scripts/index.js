"use strict"

let corusel = document.querySelector(".corusel_list"),
   coruselitem = document.querySelectorAll(".corusel-item"),
   next = document.querySelector(".next"),
   prev = document.querySelector(".prev");

let index = 0;

function slider() {
   if (index > coruselitem.length - 1) {
      index = 0
   }

   if (index < 0) {
      index = coruselitem.length - 1
   }

   corusel.style.transform = `translateX(${-index * 463}px)`
}

let play = setInterval(() => {
   index++
   slider()
}, 4000);

next.addEventListener("click", () => {
   index++;
   slider()
   clearInterval(play)
})

prev.addEventListener("click", () => {
   index--;
   slider()
   clearInterval(play)
})


let slayd = document.querySelector(".slayd_list"),
   slayditem = document.querySelectorAll(".slayd-item"),
   on = document.querySelector(".on"),
   chap = document.querySelector(".chap");

let i = 0;

function slide() {
   if (i > slayditem.length - 1) {
      i = 0
   }

   if (i < 0) {
      i = slayditem.length - 1
   }

   slayd.style.transform = `translateX(${-i * 343}px)`
}

let go = setInterval(() => {
   i++
   slider()
}, 4000);

on.addEventListener("click", () => {
   i++;
   slide()
   clearInterval(go)
})

chap.addEventListener("click", () => {
   i--;
   slide()
   clearInterval(go)
})

