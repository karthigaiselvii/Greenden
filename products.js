var menuicons = document.getElementById("menuicons");
var sidenav = document.getElementById("sidenav");
var closenav = document.getElementById("closenav");

menuicons.addEventListener("click", function () {
  sidenav.style.right = 0;
});

closenav.addEventListener("click", function () {
  sidenav.style.right = "-50%";
});