// let button1 = document.body.querySelector(".btn1");
let button2 = document.body.querySelector(".btn2");
let button3 = document.body.querySelector(".btn3");

function changeBackground() {
  document.body.style.backgroundColor = "#BF00FF";
}
function changeBackgroundBlue() {
  document.body.style.backgroundColor = "#008CBA";
}
function changeBtnColor() {
  button2.style.backgroundColor = "#4CAF50";
}

button2.addEventListener("click", changeBtnColor);

button3.addEventListener("mouseenter", changeBackgroundBlue);
