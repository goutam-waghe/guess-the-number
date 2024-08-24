const guess = document.querySelector("#guess");
const checkbtn = document.querySelector("#checkbtn");
const congratsMsg = document.querySelector("#congratsMsg");
const score = document.querySelector("#score");
const highScore = document.querySelector("#highScore");
const playAgain = document.querySelector("#agtin-btn");
let scoreval = 20;
let highScoreval = 0;
score.textContent = scoreval;
highScore.textContent = highScoreval;

const randomNum = function () {
  return Math.floor(Math.random() * 20) + 1;
};
let num = randomNum();
function checkNum() {
  scoreval--;
  score.textContent = scoreval;

  // check conditions
  if (!guess.value) {
    congratsMsg.textContent = "No Number❌";
  } else if (guess.value > num) {
    congratsMsg.textContent = "too high 💀";
  } else if (guess.value < num) {
    congratsMsg.textContent = "too low 🙃";
  } else if (num === Number(guess.value)) {
    congratsMsg.textContent = "🎉🎉Correct";
    checkbtn.removeEventListener("click", checkNum);
    scoreval++;
    score.textContent = scoreval;
    //implement highscore
    if (scoreval > highScoreval) {
      highScoreval = scoreval;
      highScore.textContent = highScoreval;
    }

    document.querySelector(".main").style.backgroundColor = "green";
    document.querySelector(".box").textContent = score.textContent;
    document.querySelector(".box").style.backgroundColor = "#f6ff00";
  }
}

function againPlay() {
  num = randomNum();

  scoreval = 20;
  score.textContent = scoreval;
  document.querySelector(".main").style.backgroundColor = "purple";
  document.querySelector(".box").style.backgroundColor = "purple";
  document.querySelector(".box").textContent = "";
  guess.value = "";
  checkbtn.addEventListener("click", checkNum);
}

checkbtn.addEventListener("click", checkNum);
playAgain.addEventListener("click", againPlay);
