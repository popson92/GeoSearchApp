let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});
//AIzaSyC_AgddD3PBSw1OunhnHCh5A9y438OZpB8
//degree to ℉ conversion
let f = document.getElementById("output℉");
function tempConverter(valNum) {
  valNum = parseFloat(valNum);
  f.innerHTML = (valNum * 1.8) + 32;
}