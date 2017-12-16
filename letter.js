var main = require('./main.js');
exports.guessArr = [];
var guessDisplay = "";
exports.wordArr = [];

// separates the wordChoice into an array for easier accessibility.
exports.initDisplay = function() {
	var wordChoice = main.chosenWord;
	for(var i = 0; i < wordChoice.length; i++) {
		exports.wordArr.push(wordChoice.charAt(i));
		if(wordChoice.charAt(i) == '\xa0'){
			exports.guessArr.push('\xa0');		
		} else {
		exports.guessArr.push('_');
		}
	};
}

// displays correctly guessed letters 
exports.displayWord = function() {
	guessDisplay = "";
	for(var i = 0; i <exports.guessArr.length; i++) {
		guessDisplay += exports.guessArr[i]+" ";
	}
	console.log(guessDisplay);
};

// edits the guess array upon correct guess 
exports.editArray = function(position, letter) {
	exports.guessArr[position] = letter; 
};