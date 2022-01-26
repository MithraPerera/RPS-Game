"use strict";

//Computers choice between rock paper and scissors returned to game() function
function computerPlay() {
	let computersChoice = "";

	//choose a random number between 1 and 3
	let randomNumberChoice = Math.floor(Math.random() * 3 + 1);
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
	} else if (playerSelection == "PAPER") {
		if (computerSelection == "ROCK") {
			return "You Win! Paper beats Rock";
		} else if (computerSelection == "PAPER") {
			return tieGame;
		} else {
			return "You Lose! Scissors beats Paper";
		}
	} else if (playerSelection == "SCISSORS") {
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
	let playerResult = roundResult.slice(0, 8);
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
	console.log("-------END GAME RESULTS-----------");
	//check player win count to comp win count
	if (playerWinCount > 5 - tieGameCount - playerWinCount) {
		message.textContent = "Congrats! You won the best of 5!";
	} else if (playerWinCount < 5 - tieGameCount - playerWinCount) {
		message.textContent = "Sorry you loose! Try Again!";
	} else {
		message.textContent = "Wow its a best of 5 tie!";
	}
}

function showPlayerPicks(playerChoice) {
	const img = document.getElementById("player");
	img.style.width = "50%";
	img.style.height = "auto";
	if (playerChoice === "ROCK") {
		img.src = "/img/rock_button.png";
	} else if (playerChoice === "PAPER") {
		img.src = "/img/paper_button.png";
	} else if (playerChoice === "SCISSORS") {
		img.src = "/img/scissors_button.png";
	}
}

function showCompPicks(computerSelection) {
	const img = document.getElementById("comp");
	img.style.width = "50%";
	img.style.height = "auto";

	if (computerSelection === "ROCK") {
		img.src = "/img/rock_button.png";
	} else if (computerSelection === "PAPER") {
		img.src = "/img/paper_button.png";
	} else if (computerSelection === "SCISSORS") {
		img.src = "/img/scissors_button.png";
	}
}

//Start a full 5 round game of RPS

let message = document.querySelector(".message");
let playerWinCount = 0;
let tieGameCount = 0;
let compWinCount = 0;
let playerParent = document.querySelector(".playerpick");
let compParent = document.querySelector(".comppick");

document.querySelector("#rock-button").addEventListener("click", function () {
	game("ROCK");
});

document.querySelector("#paper-button").addEventListener("click", function () {
	game("PAPER");
});

document
	.querySelector("#scissors-button")
	.addEventListener("click", function () {
		game("SCISSORS");
	});

function game(playerChoice) {
	const playerScoreText = document.querySelector("#player-score");
	const compScoreText = document.querySelector("#comp-score");
	let computerSelection = computerPlay();
	showPlayerPicks(playerChoice);
	showCompPicks(computerSelection);
	//store player win, loose or tie as a string for 1 round of play
	let roundResult = playRound(playerChoice, computerSelection);
	console.log(roundResult);
	//check string and return an int to indicate win(1) loose(2) or tie(3)
	let gameOption = checkWinner(roundResult);
	console.log(gameOption);
	//Increment win or tie count
	if (gameOption == 1) {
		playerWinCount++;
		playerScoreText.textContent = `🤑 Player : ${playerWinCount}`;
		message.textContent = "Player Wins!";
	} else if (gameOption == 2) {
		compWinCount++;
		compScoreText.textContent = `🤖 Computer : ${compWinCount}`;
		message.textContent = "Computer Wins this time!";
	} else {
		tieGameCount++;
		message.textContent = "Tie game!";
	}
	//Check game number
	if (playerWinCount + compWinCount + tieGameCount === 5) {
		endGameResults(playerWinCount, tieGameCount);
		playerWinCount = 0;
		tieGameCount = 0;
		compWinCount = 0;
		playerScoreText.textContent = `🤑 Player : ${playerWinCount}`;
		compScoreText.textContent = `🤖 Computer : ${compWinCount}`;
		document.getElementById("player").src = "/img/question.png";
		document.getElementById("comp").src = "/img/question.png";
	}
}
