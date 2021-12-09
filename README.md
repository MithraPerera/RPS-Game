# Rock Paper Scissors - Browser Console Version

## PROBLEM

Goal is to create a Rock, Paper, Scissors game that runs in the browser console and allows the user to face the computer in a best of 5 and displays the winner.

## PLAN

Starting with functions for the simplest problems:

_computerPlay()_

- randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’ as computers choice

_playRound()_

- plays a single round of Rock Paper Scissors
- takes the player selection and computer selection as inputs and then declares the winner in a string at the end
- return a string that declares the winner of the round like so: `"You Lose! Paper beats Rock"`
- playerSelection parameter case-insensitive (so users can input `rock`, `ROCK`, `RocK` or any other variation).

Now for the helper functions:

_checkWinner()_

- helper function to check winner

_endGameResults()_

- compare player win counts to comp win counts accounting for tie games
- display winner in console

Lastly, we connect it all together to run the game:

_game()_

- function calls the playRound() 5 times
- starts a 5 round game that keeps score
- calls endGameResults() to check and display 5 game winner

## Pseudo Code

```
Call game()

game():
	LOOP for gameCount <= 5
		Ask for user choice and store as all CAPS
		Call computerPlay() and store as all CAPS
		Call playRound() and store return string
		Call checkWinner() and store return int in gameOption
		Check gameOption and increment winner count
		increment gameCount
	END LOOP
	Call endGameResults()

playRound():
	Compare choices
	return string of player win or loose

checkWinner(winner):
	Compare winner and return number
		1 for player win
		2 for comp win
		3 for tie

computerPlay():
	Randomly generate number from 1 to 3
		1 is Rock
		2 is Paper
		3 is Scissors
	return string

endGameResults():
	Check if player won
	Check if comp won
	Or check if it is a tie
```

## PRODUCT

<p align="center">

![grab-landing-page](https://github.com/MithraPerera/RPS-Game/blob/main/READMEAssets/RPS-CLI-Demo.gif)

</p>
