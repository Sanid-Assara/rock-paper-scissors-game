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

//if statment determine the winner based on the rules and print the result to the console
if (
  (player1Choice === "rock" && computerChoice === "scissors") ||
  (player1Choice === "scissors" && computerChoice === "paper") ||
  (player1Choice === "paper" && computerChoice === "rock")
) {
  console.log(
    `You chose ${player1Choice} and the computer chose ${computerChoice}. You win!`
  );
} else if (
  (player1Choice === "scissors" && computerChoice === "rock") ||
  (player1Choice === "paper" && computerChoice === "scissors") ||
  (player1Choice === "rock" && computerChoice === "paper")
) {
  console.log(
    `You chose ${player1Choice} and the computer chose ${computerChoice}. You lose!`
  );
} else {
  console.log(
    `You chose ${player1Choice} and the computer chose ${computerChoice}. It's a draw!`
  );
}
