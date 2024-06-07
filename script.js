const colors = require("colors");

//Player 1 choice with process.argv input
let player1Choice = process.argv[2].toLowerCase();

//Computer choice with Math.random() method and switch statment
let randomNumber = Math.floor(Math.random() * 3) + 1;
let computerChoice;

switch (randomNumber) {
  case 1:
    computerChoice = "rock";
    break;
  case 2:
    computerChoice = "paper";
    break;
  case 3:
    computerChoice = "scissors";
    break;
}

//Function determines the winner based on the rules and print the result to the console
function getGameResult() {
  if (
    (player1Choice === "rock" && computerChoice === "scissors") ||
    (player1Choice === "scissors" && computerChoice === "paper") ||
    (player1Choice === "paper" && computerChoice === "rock")
  ) {
    return console.log(
      `      You chose ${player1Choice.bgCyan}.
      computer chose ${computerChoice.bgMagenta}.
      You ${"win!".green}`
    );
  } else if (
    (player1Choice === "scissors" && computerChoice === "rock") ||
    (player1Choice === "paper" && computerChoice === "scissors") ||
    (player1Choice === "rock" && computerChoice === "paper")
  ) {
    return console.log(
      `      You chose ${player1Choice.bgCyan}.
      computer chose ${computerChoice.bgMagenta}.
      You ${"lose!".red}`
    );
  } else {
    return console.log(
      `      You chose ${player1Choice.bgCyan}.
      computer chose ${computerChoice.bgMagenta}.
      It's a ${"draw!".yellow}`
    );
  }
}

//Validating Player 1's choice
if (
  player1Choice !== "rock" &&
  player1Choice !== "scissors" &&
  player1Choice !== "paper"
) {
  console.log(
    "Invalid option. Choose either rock, paper, or scissors.".bgRed.white
  );
} else {
  getGameResult();
}
