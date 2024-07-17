"use strict";

const showModalbtn = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closebtn = document.querySelector(".close-modal");
console.log(showModalbtn);
const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
for (let i = 0; i < showModalbtn.length; i++)
  showModalbtn[i].addEventListener("click", showModal);

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
closebtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
  console.log(event);
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
