
const counter = document.querySelector("#counter");
const buttonbox = document.querySelector(".button-box");

eventListeners();
let count = 0;

function eventListeners() {
  buttonbox.addEventListener("click", countfunction);
  buttonbox.addEventListener("long-press",countfunction);
}

function countfunction(e) {
  
  let classList = e.target.className;

  if (classList == "btn btn-danger") {
    count--;
  } else if (classList == "btn btn-success") {
    count++;
  } else if (classList == "btn btn-secondary") {
    count = 0;
  }

  counter.textContent = count;
}
