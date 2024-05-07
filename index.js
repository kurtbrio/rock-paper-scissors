const rpsButtons = document.querySelectorAll("#rpsButton");
const displayScores = document.querySelector("#scoresContainer");
const displayMoves = document.querySelector("#rpsMoves");
const displayResult = document.querySelector("#resultContainer");

let scoreCount = { playerScore: 0, computerScore: 0 };
let result = "";

function startGame() {
  let playerChoice = "";
  rpsButtons.forEach((button) => {
    button.addEventListener("click", () => {
      playerChoice = button.value;
      randomComputerMove();
      gameResult(playerChoice, computerChoice);
      displayGameResult(scoreCount, playerChoice, computerChoice);
      resetGame();
    });
  });
}

function randomComputerMove() {
  let rpsChoices = [];
  rpsButtons.forEach((button) => {
    rpsChoices.push(button.value);
  });

  computerChoice = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
}

function gameResult(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    result = "It's a Draw!";
  } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    scoreCount["playerScore"] += 1;
    result = "You Win!";
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    scoreCount["playerScore"] += 1;
    result = "You Win!";
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    scoreCount["playerScore"] += 1;
    result = "You Win!";
  } else {
    scoreCount["computerScore"] += 1;
    result = "You Lose!";
  }
}

function displayGameResult(scoreCount, playerChoice, computerChoice) {
  displayScores.innerText = `{ Player: ${scoreCount["playerScore"]} Computer: ${scoreCount["computerScore"]} }`;
  displayMoves.innerHTML = `
  <div>Player: ${playerChoice}</div> 
  <div>Computer: ${computerChoice}</div>
  `;
  displayResult.innerText = result;
}

function resetGame() {
  const resetGameBtn = document.querySelector("#resetGame");
  resetGameBtn.addEventListener("click", () => {
    scoreCount["playerScore"] = 0;
    scoreCount["computerScore"] = 0;

    displayScores.innerText = "";
    displayMoves.innerHTML = "";
    displayResult.innerText = "";
  });
}

startGame();
