var moviesArray = ["The Godfather", "The Shawshank Redemption",  "Schindler's List", "Raging Bull", "Casablanca", "Citizen Kane", "Gone with the Wind",
	"The Wizard of Oz", "One Flew Over the Cuckoo's Nest", "Lawrence of Arabia", "Vertigo", "Psycho", "The Godfather Part II", "On the Waterfront",
	"Sunset Blvd", "Forrest Gump", "The Sound of Music", "Angry Men", "West Side Story", "Star Wars A New Hope", "A Space Odyssey",
	"E T the Extra Terrestrial", "The Silence of the Lambs", "Chinatown", "The Bridge on the River Kwai", "Singing in the Rain",
	"It is a Wonderful Life", "Dr Strangelove or How I Learned to Stop Worrying and Love the Bomb", "Some Like It Hot", "Ben Hur",
	"Apocalypse Now", "Amadeus", "The Lord of the Rings The Return of the King", "Gladiator", "Titanic", "From Here to Eternity",
	"Saving Private Ryan", "Unforgiven", "Raiders of the Lost Ark", "Rocky", "A Streetcar Named Desire", "The Philadelphia Story",
	"To Kill a Mockingbird", "An American in Paris", "The Best Years of Our Lives", "My Fair Lady", "A Clockwork Orange",
	"Doctor Zhivago", "The Searchers", "Jaws"
]


var wordInProgress = [];
var finalWord = [];
var remainingGuesses = 10;
var winsCounter = 0;
var lettersGuessed = 0;
var lettersGuessedArray = ["blank"];
var lettersIncorrectArray = [];
var randomWord = moviesArray[Math.floor(Math.random() * moviesArray.length)];
var randomWordArray = [];
randomWord = randomWord.toUpperCase();
var wrongBool = false;



// creates the number of button = to lenght of the word
// gets rid of all the spaces
function generate() {

	for (i = 0; i < randomWord.length; i++) {

		if (randomWord[i] === ' ') {

			wordInProgress[wordInProgress.length - 1].className = "gap";

		} else {

			console.log(randomWord[i], randomWord[i] !== ' ');
			var button = document.createElement("button");
			wordInProgress.push(button);
			document.getElementById('blocks').appendChild(button);
		}

	}

}

//starting button that hides after click
$("#startingButton").on("click", function () {

	$("#startingButton").remove();
	generate();

});

// accepts the key press and saves the guess into a value
document.onkeyup = function (event) {

	var guess = String.fromCharCode(event.keyCode).toUpperCase();

	console.log(guess);
	correctGuess(guess);

}



// checked if the pressed button is correct 
function correctGuess(letter) {

	var cur = 0;

	// Replace all letters that were guessed correctly with the correct letter
	for (var i = 0; i < randomWord.length; i++) {

		if (randomWord[i] === ' ') continue;
		if (randomWord[i] === letter) {

			wordInProgress[cur].innerHTML = letter;
			finalWord[cur] = letter;
			checkWin();



			// for loop that checks if letter is at index of lettersGuessedArray, if not 
			for (var j = 0; j < lettersGuessedArray.length; j++) {

				if (lettersGuessedArray.indexOf(letter) == -1) { // -1 from indexOf means "not found"

					lettersGuessed = lettersGuessed + 1;
					lettersGuessedArray.push(letter);
					$('#lettersGuessed').html(lettersGuessed);
					wrongBool = true;
				}
			}

			document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
		}

		cur++;
	}

	//for loop ends
	if (wrongBool === false) {

		remainingGuesses = remainingGuesses - 1;
		document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
	}
	
	wrongBool = false;

}
	
console.log("word in progress: ", wordInProgress.join(""));
console.log("random word: ", randomWord);
// Checks if the word is complete
function checkWin () {
	console.log(finalWord.join(''));
	console.log(randomWord.replace(" ", ""));
	if ( finalWord.join('') === randomWord.replace(" ", "") ) {
		alert("Congratulations! You won!");
		winsCounter++;
		console.log(winsCounter);
		//somehow have to restart the game or add a reset button 		
	}
}



// function(checkGuess) {
// 	if (/A-Z/.test(guess)) {
// 		if (wordObject.word.indexOf(guess) > -1 {
// 			correctGuess(guess);
// 		} else {
// 			wrongGuess(guess);
// 		}
// 	}
// }