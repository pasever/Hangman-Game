var moviesArray = ["The Godfather", "The Shawshank Redemption", "Schindler's List", "Raging Bull", "Casablanca", "Citizen Kane", "Gone with the Wind", 
				   "The Wizard of Oz", "One Flew Over the Cuckoo's Nest", "Lawrence of Arabia", "Vertigo", "Psycho", "The Godfather Part II", "On the Waterfront", 
				   "Sunset Blvd", "Forrest Gump", "The Sound of Music", "Angry Men", "West Side Story", "Star Wars A New Hope", "A Space Odyssey", 
				   "E T the Extra Terrestrial", "The Silence of the Lambs", "Chinatown", "The Bridge on the River Kwai", "Singing in the Rain", 
				   "It is a Wonderful Life", "Dr Strangelove or How I Learned to Stop Worrying and Love the Bomb", "Some Like It Hot", "Ben Hur", 
				   "Apocalypse Now", "Amadeus", "The Lord of the Rings The Return of the King", "Gladiator", "Titanic", "From Here to Eternity", 
				   "Saving Private Ryan", "Unforgiven", "Raiders of the Lost Ark", "Rocky", "A Streetcar Named Desire", "The Philadelphia Story", 
				   "To Kill a Mockingbird", "An American in Paris", "The Best Years of Our Lives", "My Fair Lady", "A Clockwork Orange", 
				   "Doctor Zhivago", "The Searchers", "Jaws"]


var wordInProgress = [];
var remainingGuesses = 10;
var winsCounter = 0;
var lettersGuessed = 0;
var randomWord = moviesArray[Math.floor(Math.random() * moviesArray.length)];
var randomWordArray = [];
randomWord = randomWord.toUpperCase();



// creates the number of button = to lenght of the word
// gets rid of all the spaces
function generate() {

	for (i=0; i < randomWord.length; i++) {
		
		if (randomWord[i] === ' ') {

			wordInProgress[wordInProgress.length - 1].className = "gap";

		} else {

			console.log(randomWord[i], randomWord[i] !== ' ');

			var button = document.createElement("button");

			wordInProgress.push(button);
		    
		    document.getElementById('blocks').appendChild(button);
		    // console.log(remainingGuesses);

		}
		
	}
	
}
   
//starting button that/hides after click
$("#startingButton").on("click", function() {
	
	$("#startingButton").remove();
	generate();

});

// accepts the key press and saves the guess into a value
document.onkeyup = function(event){

	var guess = String.fromCharCode(event.keyCode).toUpperCase();

	console.log(guess);
	correctGuess(guess);
	incorrectGuess(guess);
}


// checked if the pressed button is correct 
function correctGuess(letter) {

	var cur = 0;

	// Replace all letters that were guessed correctly with the correct letter
	for (var i = 0; i < randomWord.length; i++) {
		var repeatLetter =[];

		if (randomWord.charAt(i) === ' ') continue;

		if (randomWord.charAt(i) === letter) {
			wordInProgress[cur].innerHTML = letter;
			lettersGuessed = lettersGuessed + 1;
			console.log(lettersGuessed);
			//letter += letter.className("boldLetter");
			//document.getElementByClassName("boldLetter").innerHtml ;
			document.getElementById("lettersGuessed").innerHTML = lettersGuessed;

			

		}

		cur++;

	}
		
}			
	
//if the pressed button is incorrect 
function incorrectGuess(letter) {
	for (var i = 0; i < randomWord.lenght; i++) {

		if (randomWord.chartAt(i) !== letter) {
			remainingGuesses = remainingGuesses -1;
			document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
			console.log(remainingGuesses);

		}

	}




}		







// Checks if the word is complete
if (wordInProgress === randomWord) {
			alert("You won");
			winsCounter++;
			console.log(winsCounter);
	//somehow have to restart the game or add a reset button 		
		}








// function (incorrectGuess) {
// 		// Ignore if the guess has already been made
// 		if (lettersGuessed.indexOf(guess) == -1) {
// 			var letterSpan;

// 			// Add guess to lettersGuessed variable
// 			lettersGuessed += guess;

// 			// If lettersGuessed has 1 or more guesses, add trailing space
// 			// Else remove existing space
// 			if (lettersGuessed.length > 1){
// 				var spaceSpan = document.createElement("span");
// 				spaceSpan.innerHTML = "&nbsp;&nbsp;";
// 				document.getElementById("lettersGuessed").appendChild(spaceSpan);
// 			} else {
// 				document.getElementById("lettersGuessed").innerHTML = "";
// 			}

// 		}
		

// function(pushChanges) {
// 		// Update all text fields
// 		document.getElementById("winsCounter").innerHTML = winsCounter;
// 		document.getElementById("wordInProgress").innerHTML = wordInProgress;
// 		document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
// }






// // check if pressed key is a letter 
// /*
// document.onkeyup = function letterChecker () {
// 	if ()


// } */

// function(checkGuess) {
// 	if (/a-zA-Z/.test(guess)) {
// 		if (wordObject.word.indexOf(guess) > -1 {
// 			correctGuess(guess);
// 		} else {
// 			wrongGuess(guess);
// 		}
// 	}
// }




// */
