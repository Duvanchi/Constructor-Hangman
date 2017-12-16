var main = require("./main.js");
var letter = require("./letter.js");
exports.letterArray = [];

// function for checking is single letter guess is correct
exports.checker = function() {
	var wordToCheck = main.chosenWord;
	exports.letterArray.push(main.letter);
	var detected = 0; 
	for (var i = 0; i < wordToCheck.length; i++) {
		if (wordToCheck.charAt(i) == main.letter) {
			letter.editArray(i, main.letter);
			detected++;
		}
	}
	letter.displayWord();
	if (detected == 0) {
		main.lives++; 
	}
	main.requestInfo();

}; 

// function for checking if full word guess is correct
exports.wordCheck = function() {
	var guess = main.wordGuess;
	var word = main.chosenWord;
	var isNotEqual; 
 
	for (var i = 0; i < word.length; i++) {
		if (guess[i] != word[i]) {
			isNotEqual = false; 
		}
		else {
			isNotEqual = true; 
		}
	}

	if (isNotEqual == true) {
		console.log("You guessed it!");
		main.playAgain();
	}
	else {
		console.log("Sorry, incorrect.");
		main.lives++;
		main.requestInfo();
	}
};