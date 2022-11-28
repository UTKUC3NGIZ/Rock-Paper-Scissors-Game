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

const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const rock = document.getElementById("rock");
const background = document.getElementsByClassName("game__background")[0];
const pc = document.getElementById("pc");
const game__conclusion = document.getElementsByClassName("game__conclusion")[0];
const picked = document.getElementsByClassName("picked")[0];

function deneme(vote) {
  scissors.style.display = "none";
  rock.style.display = "none";
  paper.style.display = "none";
  background.style.display = "none";

  vote.style.position = "static";
  vote.style.display = "block";
  pc.style.display = "block";
  game__conclusion.style.display = "flex";
  picked.style.display = "flex";
}

paper.addEventListener("click", () => {
  deneme(paper);
});
scissors.addEventListener("click", () => {
  deneme(scissors);
});
rock.addEventListener("click", () => {
  deneme(rock);
});
