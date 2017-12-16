var words = ["mike", "will", "lucas", "dustin", "eleven", "hopper", "joyce", "johnathan", "nancy", "steve", "demogorgon", "hawkins"];

// chooses word and exports it
exports.chooseWord = function() {
	var compChoice = Math.floor((Math.random() * words.length) + 1);
	return words[compChoice];
}