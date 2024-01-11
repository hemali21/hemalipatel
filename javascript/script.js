/* navbar */
var hamburger = document.getElementById("hamburger");
var menu = document.getElementById("menu");
var overlay = document.getElementById("overlay");
var body = document.getElementById("body");

function toggleMenu() {
  menu.classList.toggle("on");
  overlay.classList.toggle("on");
  body.classList.toggle("hidden");
}
hamburger.addEventListener("click", toggleMenu);
menu.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);


function myFunction() {
  var elmnt = document.getElementById("grid");
  elmnt.scrollIntoView();
}
