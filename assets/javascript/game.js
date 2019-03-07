var letterChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var computerChoice = letterChoices[Math.floor(Math.random() * letterChoices.length)];;
console.log(computerChoice);

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = '';

var winsTxt = document.getElementById("wins-txt");
var lossesTxt = document.getElementById("losses-txt");
var guessesLeftTxt = document.getElementById("guesses-left-txt");
var guessesSoFarTxt = document.getElementById("guesses-so-far-txt");

document.addEventListener('keyup', userInput);
function userInput(event) {
    var userGuess = event.key.toLowerCase();
    var newGuess;

    if (userGuess === computerChoice) {
        wins++;
        winsTxt.textContent = "Wins: " + wins;
        resetGuesses();

	// did not implement check if userGuess already exists so same key will continue to count down
    } else if (userGuess != computerChoice && guessesLeft > 1) {
        guessesLeft--;
        guessesLeftTxt.textContent = "Guesses left: " + guessesLeft;
        newGuess = document.createElement("span");
        newGuess.textContent = userGuess + " ";
        guessesSoFarTxt.appendChild(newGuess);
    } else if (userGuess != computerChoice && guessesLeft === 1) {
        losses++;
        lossesTxt.textContent = "Losses: " + losses;
        resetGuesses();
    } 
}

function resetGuesses() {
    guessesLeft = 9;
    guessesLeftTxt.textContent = "Guesses left: " + guessesLeft;
    guessesSoFarTxt.textContent = "Your guesses so far: ";
    computerChoice = letterChoices[Math.floor(Math.random() * letterChoices.length)];
    console.log(computerChoice);
}