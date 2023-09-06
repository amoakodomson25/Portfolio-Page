const hamburger = document.querySelector(".ham");

hamburger.addEventListener("click", function () {
  this.classList.toggle("active");
});
