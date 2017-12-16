var main = require('./main.js');
exports.guessArray = [];
var guessDisplay = "";
exports.wordArray = [];

// separates the wordChoice into an array for easier accessibility.
exports.initDisplay = function() {
	var wordChoice = main.chosenWord;
	for (var i = 0; i < wordChoice.length; i++) {
		exports.wordArray.push(wordChoice.charAt(i));
		if (wordChoice.charAt(i) == '\xa0') {
			exports.guessArray.push('\xa0');		
		} else {
		exports.guessArray.push('_');
		}
	};
}

// displays correctly guessed letters 
exports.displayWord = function() {
	guessDisplay = "";
	for(var i = 0; i <exports.guessArray.length; i++) {
		guessDisplay += exports.guessArray[i]+" ";
	}
	console.log(guessDisplay);
};

// edits the guess array upon correct guess 
exports.editArray = function(position, letter) {
	exports.guessArray[position] = letter; 
};