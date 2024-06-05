let player1Choice = process.argv[2].toLowerCase();

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
