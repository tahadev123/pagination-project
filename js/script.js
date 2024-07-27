const progress = document.querySelector(".progress");
const circles = document.querySelectorAll(".circle");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let circleActive = localStorage.getItem("circleActive") || 1;

const nextHandler = () => {
  circleActive++;
  if (circleActive > circles.length) {
    circleActive = circles.length;
  }
  update();
  saveToLocalStorage();
};

const prevHandler = () => {
  circleActive--;
  if (circleActive < 1) {
    circleActive = 1;
  }
  update();
  saveToLocalStorage();
};

const update = () => {
  circles.forEach((circle, index) => {
    if (index < circleActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (circleActive === 1) {
    prev.disabled = true;
  } else if (circleActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};

const saveToLocalStorage = () => {
  localStorage.setItem("circleActive", circleActive);
};

window.addEventListener("load", () => {
    next.addEventListener("click", nextHandler);
    prev.addEventListener("click", prevHandler);
    update()
})