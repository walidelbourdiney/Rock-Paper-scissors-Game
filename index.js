"use strict";
function game() {
  const options = ["paper", "rock", "scissors"];

  let randomIndex = Math.floor(Math.random() * 3);

  let computerRole = options[randomIndex];

  return computerRole;
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

let pScore = 0;
let cScore = 0;

rock.addEventListener("click", () => {
  let computerr = game();
  console.log(computerr);
  switch (computerr) {
    case "rock":
      pScore = pScore;
      cScore = cScore;
      player.innerText = "PLAYER: rock";
      computer.innerText = "COMPUTER: rock";
      alert("Tie!");

      break;
    case "scissors":
      pScore++;
      cScore = cScore;
      player.innerText = "PLAYER: rock";
      computer.innerText = "COMPUTER: paper";
      playerScore.innerText = `Player Score: ${pScore}`;
      computerScore.innerText = `Computer Score: ${cScore}`;
      alert("You win!");
      break;
    case "paper":
      pScore = pScore;
      cScore++;
      player.innerText = "PLAYER: rock";
      computer.innerText = "COMPUTER: paper";
      playerScore.innerText = `Player Score: ${pScore}`;
      computerScore.innerText = `Computer Score: ${cScore}`;
      alert("You lose!");
      break;
  }
});

paper.addEventListener("click", () => {
  let computerr = game();
  console.log(computerr);
  switch (computerr) {
    case "paper":
      pScore = pScore;
      cScore = cScore;
      player.innerText = "PLAYER: rock";
      computer.innerText = "COMPUTER: rock";
      alert("Tie!");

      break;
    case "rock":
      pScore++;
      cScore = cScore;
      player.innerText = "PLAYER: rock";
      computer.innerText = "COMPUTER: paper";
      playerScore.innerText = `Player Score: ${pScore}`;
      computerScore.innerText = `Computer Score: ${cScore}`;
      alert("You win!");
      break;
    case "scissors":
      pScore = pScore;
      cScore++;
      player.innerText = "PLAYER: rock";
      computer.innerText = "COMPUTER: paper";
      playerScore.innerText = `Player Score: ${pScore}`;
      computerScore.innerText = `Computer Score: ${cScore}`;
      alert("You lose!");
      break;
  }
});

scissors.addEventListener("click", () => {
  let computerr = game();
  console.log(computerr);
  switch (computerr) {
    case "scissors":
      pScore = pScore;
      cScore = cScore;
      player.innerText = "PLAYER: rock";
      computer.innerText = "COMPUTER: rock";
      alert("Tie!");

      break;
    case "paper":
      pScore++;
      cScore = cScore;
      player.innerText = "PLAYER: rock";
      computer.innerText = "COMPUTER: paper";
      playerScore.innerText = `Player Score: ${pScore}`;
      computerScore.innerText = `Computer Score: ${cScore}`;
      alert("You win!");
      break;
    case "rock":
      pScore = pScore;
      cScore++;
      player.innerText = "PLAYER: rock";
      computer.innerText = "COMPUTER: paper";
      playerScore.innerText = `Player Score: ${pScore}`;
      computerScore.innerText = `Computer Score: ${cScore}`;
      alert("You lose!");
      break;
  }
});
