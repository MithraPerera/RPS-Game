//Computers choice between rock paper and scissors
function computerPlay() {
     let compChoice = "";

     //choose a random number between 1 and 3
     let choicePercent = Math.floor((Math.random() * 3) + 1)
     console.log(choicePercent);
     if (choicePercent == 1) {
          compChoice = "Rock";
     } else if (choicePercent == 2) {
          compChoice = "Paper";
     } else {
          compChoice = "Scissors";
     }
     console.log(compChoice);
}

//Play 1 round of RPS and return a winning or loosing string
function playRound(playerSelection, computerSelection) {
     let tieGame = "Tie Game!";

     if (playerSelection == "ROCK") {
          if (computerSelection == "ROCK") {
               return tieGame;
          }
          else if (computerSelection == "PAPER") {
               return "You Lose! Paper beats Rock";
          } 
          else {
               return "You Win! Rock beats Paper";
          }
     }
     else if (playerSelection == "PAPER") {
          if (computerSelection == "ROCK") {
               return "You Win! Paper beats Rock";
          }
          else if (computerSelection == "PAPER") {
               return tieGame;
          } 
          else {
               return "You Lose! Scissors beats Paper";
          }
     }
     else if (playerSelection == "SCISSORS") {
          if (computerSelection == "ROCK") {
               return "You Lose! Rock beats Scissors";
          }
          else if (computerSelection == "PAPER") {
               return "You Win! Scissors beat Paper";
          } 
          else {
               return tieGame;
          }
     }

}

function checkWinner() {

}

//Start a full 5 round game of RPS
function game() {
     console.log("Welcome to Rock, Paper Scissors!");
     let playerSelection = prompt("Please type Rock, Paper or Scissors:").toUpperCase();
     console.log(playerSelection);
}

game();

