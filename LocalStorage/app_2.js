const btn = document.getElementsByTagName("button")[0];
const body = document.body;

btn.addEventListener("click", function () {
  currentColor = localStorage.getItem("bgcolor");
  currentColor == "red" ? changeBg("white") : changeBg("red");
});

function changeBg(color) {
  body.style.backgroundColor = color;
  localStorage.setItem("bgcolor", color);
}

(function () {
  body.style.backgroundColor = localStorage.getItem("bgcolor");
})();