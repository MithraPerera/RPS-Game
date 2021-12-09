//Computers choice between rock paper and scissors
function computerPlay() {
     let compChoice = "";

     //choose a random number between 1 and 3
     let choicePercent = Math.floor((Math.random() * 3) + 1);
     if (choicePercent == 1) {
          compChoice = "ROCK";
     } else if (choicePercent == 2) {
          compChoice = "PAPER";
     } else {
          compChoice = "SCISSORS";
     }
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

function checkWinner(roundResult) {
     playerResult = roundResult.slice(0, 8);
     console.log(playerResult);
     if (playerResult == "You Win!") {
          return 1;
     } else if (playerResult == "You Lose") {
          return 2;
     } else {
          return 3;
     }

}

//Start a full 5 round game of RPS
function game() {
     console.log("Welcome to Rock, Paper Scissors!");
     let playerWinCount = 0;
     let tieGameCount = 0;
     for(let i=0; i <= 5; i++) {
          //get selections
          let playerSelection = prompt("Please type Rock, Paper or Scissors:").toUpperCase();
          let computerSelection = computerPlay();
          //store player win or loose string 
          let roundResult = playRound(playerSelection, computerSelection);
          //check string and return an int to indicate win loose or tie
          let gameOption = checkWinner(roundResult);
          
     }
}

game();

