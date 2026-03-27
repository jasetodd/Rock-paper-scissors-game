//Get computers choice
function getComputerChoice(number) {
  number = Math.floor(Math.random() * 3);
  if (number == 0) {
    return "rock";
  } else if (number == 1) {
    return "paper";
  } else return "scissors";
}

// scores
let humanScore = 0;
let computerScore = 0;

let winOrLose = document.querySelector(".winOrLose");
let cScore = document.querySelector(".cScore");
let pScore = document.querySelector(".pScore");
let para = document.createElement("p");
//The game itself! Compares human choice and computers choice and updates scores accordingly.
function playRound(humanChoice, computerChoice) {
  computerChoice = getComputerChoice();
  if (
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "rock" && computerChoice == "scissors")
  ) {
    winOrLose.appendChild(para);
    para.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
    pScore.textContent = humanScore;
  } else if (
    (humanChoice == "scissors" && computerChoice == "rock") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "rock" && computerChoice == "paper")
  ) {
    winOrLose.appendChild(para);
    para.textContent = `You lose ${computerChoice} beats ${humanChoice}`;

    computerScore++;
    cScore.textContent = computerScore;
  } else {
    winOrLose.appendChild(para);
    para.textContent = `It's a tie! You both chose ${computerChoice}`;
  }
  if (humanScore === 5) {
    alert("You win!");
    humanScore = 0;
    computerScore = 0;
    pScore.textContent = 0;
    cScore.textContent = 0;
  } else if (computerScore === 5) {
    alert("Computer wins 😔");
    pScore.textContent = 0;
    cScore.textContent = 0;
    humanScore = 0;
    computerScore = 0;
  }
}

const ROCK = document.querySelector(".rock");
const PAPER = document.querySelector(".paper");
const SCISSORS = document.querySelector(".scissors");

ROCK.addEventListener("click", () => {
  playRound("rock");
});

PAPER.addEventListener("click", () => {
  playRound("paper");
});

SCISSORS.addEventListener("click", () => {
  playRound("scissors");
});
