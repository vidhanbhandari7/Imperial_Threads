var slidesContainer = document.querySelector(".carousel-slides");
var slides = document.querySelectorAll(".carousel-slide");
var dotsContainer = document.querySelector(".carousel-dots");

for (let i = 0; i < slides.length; i++) {
  var dot = document.createElement("span");
  dot.classList.add("carousel-dot");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
}

var dots = document.querySelectorAll(".carousel-dot");

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    for (let j = 0; j < dots.length; j++) {
      dots[j].classList.remove("active");
    }

    dots[i].classList.add("active");
    slidesContainer.style.transform = "translateX(" + -i * 100 + "%)";
  });
}
