// window.addEventListener('keydown',function(event){
// 	console.log(event)
// });


// // object constructor for Songs 
// function Song(title,guesses,chars,song) {
// 	this.title = title;
// 	this.guesses = guesses;
// 	this.chars = chars;
// 	this.song = song;


// }

// // word check function
// function wordCheck() {
// 	let textEntered =
// }

// // game play function 
// 	function game() {

// 	}
// // array for all Song objects
// var songs = [
// 	new Song("Loose", 3,5, "assets/songs/Loose.mp3"),
// 	new Song("Dirt", 2, 4, "assets/songs/Dirt.mp3"),
// 	new Song("1970", 2, 4, "assets/songs/1970.mp3")
// ];

// console.log(songs[0]);

// // event listeners for keyboard input
// document.addEventListener('keypress', game, false);

var userText=document.getElementById("user-text");
    




		// array of word choices
	var words = ["iggy", "raw power","loose","dirt","detroit"];

	// function to pick a random word
	var word = words[Math.floor(Math.random()*words.length)];

	// variable player input from keyboard
	// var guess = addEventListener('keypress')

	var wrongGuess = [];

	// array of empty spaces for leters in the word
	var answer = []

	for (var i = 0; i < word.length; i++) {
		answer[i] = "_";
	}

	var lives = 3;

	// letters left to be guessed
	var remainingLetters = word.length;


  document.onkeyup = function(event) {

// game loop
// while (lives > 0) {

     var guess=event.key;
     // var guess=String.fromCharCode(event.key)

	// checking player guess against word 
	for (var x = 0; x < word.length; x++) {
		if(word[x] === guess) {
			answer[x] = guess;
			// remainingLetters--;
		}
		}
	if (word[x] === guess) {
		remainingLetters--;
	}
	if (guess !=== word[x]) {
		wrongGuess.push(guess);
	}


		// else {
		// 	remainingLetters --;
		// }

		// else {

		// 	wrongGuess.push(guess);
		// 	lives -1;
		// }
		// }
		console.log(lives);
		console.log(word);
		console.log(guess);
		console.log(wrongGuess);
		console.log(answer);
		console.log(remainingLetters)

		// return;
	// };
		

}








