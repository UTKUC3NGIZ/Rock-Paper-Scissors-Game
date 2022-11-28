// Modal
const footer__button = document.getElementsByClassName("footer__button")[0];
const footer_modal = document.getElementsByClassName("footer-modal")[0];
const close = document.getElementById("close");
footer__button.addEventListener("click", () => {
  footer_modal.style.display = "block";
});

close.addEventListener("click", () => {
  footer_modal.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == footer_modal) {
    footer_modal.style.display = "none";
  }
};


// vote

const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const rock = document.getElementById("rock")

