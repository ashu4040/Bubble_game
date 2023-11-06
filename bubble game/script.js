var timer = 60;
let hitrn = 0;
let scoreno = 0;
// let playgame = true;
// restart = document.querySelector(".play_againn").innerHTML;
function hit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hit-no").textContent = hitrn;
}

function score() {
  scoreno += 10;
  document.querySelector("#scoree").textContent = scoreno;
}

function contdown() {
  let b = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#time").textContent = timer;
    } else {
      b = clearInterval;

      document.querySelector(
        ".c_bottom"
      ).innerHTML = `Refresh the page to play again`;
    }
  }, 1000);
}

function bubble() {
  let variable = "";

  for (let i = 1; i <= 180; i++) {
    let num = Math.floor(Math.random() * 10);

    variable += ` <div class="bubble">${num}</div>`;
  }

  document.querySelector(".c_bottom").innerHTML = variable;
}

document.querySelector(".c_bottom").addEventListener("click", function (dets) {
  if (hitrn == dets.target.textContent) {
    score();
    hit();
    bubble();
  }
});

bubble();
contdown();
hit();
// clickme();
// endgame();
