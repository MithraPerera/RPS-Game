//Computers choice between rock paper and scissors returned to game() function
function computerPlay() {
     let computersChoice = "";

     //choose a random number between 1 and 3
     let randomNumberChoice = Math.floor((Math.random() * 3) + 1);
     if (randomNumberChoice == 1) {
          computersChoice = "ROCK";
     } else if (randomNumberChoice == 2) {
          computersChoice = "PAPER";
     } else {
          computersChoice = "SCISSORS";
     }
     return computersChoice;
}

//Play 1 round of RPS and return player wins, looses or tie string to game() function
function playRound(playerSelection, computerSelection) {
     let tieGame = "Tie Game!";

     if (playerSelection == "ROCK") {
          if (computerSelection == "ROCK") {
               return tieGame;
          } else if (computerSelection == "PAPER") {
               return "You Lose! Paper beats Rock";
          } else {
               return "You Win! Rock beats Paper";
          }
     }
     else if (playerSelection == "PAPER") {
          if (computerSelection == "ROCK") {
               return "You Win! Paper beats Rock";
          } else if (computerSelection == "PAPER") {
               return tieGame;
          } else {
               return "You Lose! Scissors beats Paper";
          }
     }
     else if (playerSelection == "SCISSORS") {
          if (computerSelection == "ROCK") {
               return "You Lose! Rock beats Scissors";
          } else if (computerSelection == "PAPER") {
               return "You Win! Scissors beat Paper";
          } else {
               return tieGame;
          }
     }
}

//check if player won, lost or tied using the first part of the string
//return int to game() function
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

//Helper function to check 5 game winner, display results to console and end program
function endGameResults(playerWinCount, tieGameCount) {
     //check player win count to comp win count
     if (playerWinCount > (5 - tieGameCount - playerWinCount)) {
          console.log("Congrats! You won the best of 5!");
     } else if (playerWinCount < (5 - tieGameCount - playerWinCount)) {
          console.log("Sorry! The computer wins the best of 5!");
     } else {
          console.log("Wow its a best of 5 tie!");
     }
}

//Start a full 5 round game of RPS
function game() {
     console.log("Welcome to Rock, Paper Scissors!");
     let playerWinCount = 0;
     let tieGameCount = 0;
     for(let i=0; i < 5; i++) {
          let playerSelection = prompt("Please type Rock, Paper or Scissors:").toUpperCase();
          console.log("Player chooses: " + playerSelection);
          let computerSelection = computerPlay();
          console.log("Computer chooses: " + computerSelection);
          //store player win, loose or tie string 
          let roundResult = playRound(playerSelection, computerSelection);
          //check string and return an int to indicate win(1) loose(2) or tie(3)
          let gameOption = checkWinner(roundResult);
          //Increment game tracking count
          if (gameOption == 1) {
               playerWinCount++;
          }
          else if (gameOption == 2) {
               
          } else {
               tieGameCount++;
          }
     }
     //Display 5 round results passing the player win count and tie count
     endGameResults(playerWinCount, tieGameCount);
     
}

//Call game function to start the program
game();

