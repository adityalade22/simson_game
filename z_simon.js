let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let color = ["red", "yellow", "purple", "green"];
let h3 = document.querySelector("h3");
let h6 = document.querySelector("h6");
let bestScore = 0;

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game Started");
    started = true;
    levelup();
  }
});

function levelup() {
  userSeq = [];
  level++;

  h6.innerText = `Highest Score:${bestScore}`;
  h3.innerText = `Level ${level}`;
  let randomColr = Math.floor(Math.random() * 4);
  let getColr = color[randomColr];
  let randomBtn = document.querySelector(`.${getColr}`);
  gameSeq.push(getColr);
  console.log(gameSeq);
  btnFlash(randomBtn);
}

function btnFlash(btn) {
  btn.classList.add("flash");
  setInterval(() => {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setInterval(() => {
    btn.classList.remove("userFlash");
  }, 250);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    if(level>bestScore){
      bestScore = level;
    }
    
    h3.innerHTML = `<b>Game Over!</b> <i>Your Score is ${level}</i> <br> Press any key to restart!`;
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  userColr = btn.getAttribute("id");
  console.log(userColr);
  userSeq.push(userColr);
  console.log(userSeq);
  checkAns(userSeq.length - 1);
}

let allBtn = document.querySelectorAll(".btn");
for (btn of allBtn) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  gameSeq = [];
  userSeq = [];
  started = false;
  level = 0;
}
