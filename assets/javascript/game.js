// computer guesses

var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var	guessLeft = 9;
var guessesSoFar = [];
var userGuess = null;
document.querySelector('#guessesLeft').innerHTML = guessLeft;

	// computer makes a guess and it stores it to computerGuess
	var computerGuess = options[Math.floor(Math.random()*options.length)];
	console.log(computerGuess);

//function to reset GuessesSoFar and guessLeft
function gameStart (){
	guessLeft = 9;
	guessesSoFar = [];
	computerGuess = computerGuess = options[Math.floor(Math.random()*options.length)];
	console.log(computerGuess);
	document.querySelector('#guessSoFar').innerHTML = guessesSoFar;
	document.querySelector('#guessesLeft').innerHTML = guessLeft;
}

//when user presses a alphapet key, it records it to UserGuess
document.onkeyup = function(event){
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess)

	if (guessesSoFar.indexOf(userGuess) < 0 && options.indexOf(userGuess) >= 0) {
		guessesSoFar[guessesSoFar.length]=userGuess;
		// if it is a new letter then decrease remaining guesses by 1
		guessesLeft--;
		
		// tried to come up with code to not allow characters other than alphabet letters to be counted towards a guesses left and not add it to guesses so far
		//if (event.keyCode < 65 && event.keyCode > 90) {
		//alert("Guess a letter of the alphapet");
		
		document.querySelector('#guessSoFar').innerHTML = guessesSoFar;
	}

	if (userGuess === computerGuess) {
		wins++;
		document.querySelector('#wins').innerHTML = wins;
	//console.log(wins)
	setTimeout(gameStart, 2000);
	//console.log(guessLeft, guessesSoFar, computerGuess)
	}

	else if (userGuess !== computerGuess && guessLeft > 0){
	guessLeft--;
		if (guessLeft == 0) {
			setTimeout(gameStart, 2000);
		}
		document.querySelector('#guessesLeft').innerHTML = guessLeft;
		//console.log(guessLeft)
	}

	if (userGuess !== computerGuess && guessLeft === 0) {
		losses++;
		document.querySelector('#losses').innerHTML = losses;
		console.log(losses)
		setTimeout(gameStart, 2000);
		if (losses === 3) {
			alert("You're not very good at this, are you? Try again")
			setTimeout(gameStart, 2000);
		}
	}
}