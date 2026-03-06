//Get computers choice
function getComputerChoice(number) {
  number = Math.floor(Math.random() * 3);
  if (number == 0) {
    return "rock";
  } else if (number == 1) {
    return "paper";
  } else return "scissors";
}

// get Player choice of rock, paper or scissors
function getHumanChoice(rockPaperOrScissors) {
  rockPaperOrScissors = prompt("Rock, paper or scissors?");
  if (rockPaperOrScissors === "rock") {
    return "rock";
  } else if (rockPaperOrScissors === "scissors") {
    return "scissors";
  } else if (rockPaperOrScissors === "paper") {
    return "paper";
  } else alert("Rock paper or scissors only.");
}

// scores
let humanScore = 0;
let computerScore = 0;

//The game itself! Compares human choice and computers choice and updates scores accordingly.
function playRound(humanChoice, computerChoice) {
  humanChoice = getHumanChoice().toLowerCase();
  computerChoice = getComputerChoice();
  if (
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "rock" && computerChoice == "scissors")
  ) {
    alert(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else if (
    (humanChoice == "scissors" && computerChoice == "rock") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "rock" && computerChoice == "paper")
  ) {
    alert(`You lose ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  } else {
    alert(`It's a tie! You both chose ${computerChoice}`);
  }
}

//function to play game 5 times.
function playGame() {
  for (i = 0; i < 5; i++) {
    playRound();
    alert(`Your score is ${humanScore} \nComputer score is ${computerScore}`);
  }
}

playGame();
