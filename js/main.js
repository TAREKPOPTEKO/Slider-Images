var sliderImage = Array.from(
  document.querySelectorAll(".slider-container img")
);

var slideCount = sliderImage.length;

var currentSlide = 1;

var slideNumber = document.getElementById("slide-number");

var nextButton = document.getElementById("next");

var prevButton = document.getElementById("prev");

nextButton.onclick = nextSlide;

prevButton.onclick = prevSlide;

var ul = document.createElement("ul");

ul.setAttribute("id", "ul");

for (var i = 1; i <= slideCount; i++) {
  var li = document.createElement("li");
  li.setAttribute("data-index", i);
  li.appendChild(document.createTextNode(i));
  ul.appendChild(li);
}
document.getElementById("indicators").appendChild(ul);

var ulNum = document.getElementById("ul");
var ulLi = Array.from(document.querySelectorAll("#ul li"));
for (var i = 0; i < ulLi.length; i++) {
  ulLi[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    checker();
  };
}
checker();
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    checker();
  }
}

function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    checker();
  }
}

function checker() {
  slideNumber.textContent = "slide # " + currentSlide + " of " + slideCount;
  removeAllActive();
  sliderImage[currentSlide - 1].classList.add("active");
  ulNum.children[currentSlide - 1].classList.add("active");
  if (currentSlide == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }
  if (currentSlide == slideCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

function removeAllActive() {
  sliderImage.forEach(function (img) {
    img.classList.remove("active");
  });
  ulLi.forEach(function (li) {
    li.classList.remove("active");
  });
}

function yourFunction(direction) {
  if (direction === "left") {
    prevSlide();
  } else if (direction === "right") {
    nextSlide();
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    yourFunction("left");
  } else if (event.key === "ArrowRight") {
    yourFunction("right");
  }
});
