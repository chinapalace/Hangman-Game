$(function() {


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

	};


	// letters left to be guessed
	var remainingLetters = word.length;
	
	// Player lives
	var lives = 3
	var guess;


// 	event listener for key press
	window.addEventListener('keydown', function(e) {
		 var guess=e.key;

			 // checking player guess against word 
		for (var x = 0; x < word.length; x++) {
			if(word[x] === guess) {
				answer[x] = guess
				remainingLetters--;

			}

		};
									$('<div>')
		.text(answer)
		.appendTo('.main')
		.addClass(".displayLetter")
		.replaceWith(answer)
		// checking for player wrong guess
		 if (word.includes(guess)=== false) {
		
			lives = lives-1;
			// push code to wrong guess array
			wrongGuess.push(guess);

		};
		console.log(lives);
		console.log(word);
		console.log(guess);
		console.log(wrongGuess);
		console.log(answer);
		console.log(remainingLetters)
	});
console.log(lives);
		console.log(word);
		console.log(guess);
		console.log(wrongGuess);
		console.log(answer);
		console.log(remainingLetters)

	window.onkeyup = function(event) {
		$(".displayLetter").text(answer)
	};

	});



