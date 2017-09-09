var moviesArray = ["The Godfather", "The Shawshank Redemption", "Schindler's List", "Raging Bull", "Casablanca", "Citizen Kane", "Gone with the Wind", 
				   "The Wizard of Oz", "One Flew Over the Cuckoo's Nest", "Lawrence of Arabia", "Vertigo", "Psycho", "The Godfather: Part II", "On the Waterfront", 
				   "Sunset Blvd", "Forrest Gump", "The Sound of Music", "Angry Men", "West Side Story", "Star Wars: A New Hope", "A Space Odyssey", 
				   "E.T. the Extra-Terrestrial", "The Silence of the Lambs", "Chinatown", "The Bridge on the River Kwai", "Singing in the Rain", 
				   "It is a Wonderful Life", "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb", "Some Like It Hot", "Ben-Hur", 
				   "Apocalypse Now", "Amadeus", "The Lord of the Rings: The Return of the King", "Gladiator", "Titanic", "From Here to Eternity", 
				   "Saving Private Ryan", "Unforgiven", "Raiders of the Lost Ark", "Rocky", "A Streetcar Named Desire", "The Philadelphia Story", 
				   "To Kill a Mockingbird", "An American in Paris", "The Best Years of Our Lives", "My Fair Lady", "A Clockwork Orange", 
				   "Doctor Zhivago", "The Searchers", "Jaws"]


var randomWord = moviesArray[Math.floor(Math.random() * moviesArray.length)];
var randomWordArray = [];
console.log(randomWord);

console.log(randomWord.length)

for (i=0; i < randomWord.length; i++) {

	var button = document.createElement("button");
    button.innerHTML = "";
    document.getElementById('blocks').appendChild(button);
}







