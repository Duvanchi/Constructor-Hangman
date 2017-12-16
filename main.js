var game = require('./game.js');
var inquirer = require('inquirer');
var word = require('./word.js');
var letter = require('./letter.js')
var choice;
exports.letter; 
exports.wordGuess;
exports.lives = 0; 
exports.chosenWord = game.chooseWord();

console.log("Stranger Things Hangman!")

// informs user of  
exports.requestInfo = function() {
	
	if(exports.lives >= 10){
		console.log("Tough luck friendo");
		exports.playAgain();
	}
	else{
		var questions = [
	{
		type: "list",
		name: "userPath",
		message: "Would you like to guess a letter, or the full word?\n You've used "+exports.lives+" out of 10 guesses.",
		choices:[
		"letter",
		"word"
		]
	}
	];
	inquirer.prompt(questions).then(function(answers) {
	// sets up single letter guess
		if(answers.userPath == "letter") {
			var lett = [
			{
				type: "input",
				name: "letter",
				message: "Previous guesses: "+word.letterArr+"\nCurrent Guess: "
			}
			];

			inquirer.prompt(lett).then(function(answers) {
				exports.letter = answers.letter;
				word.checker();
			})
		}
// sets up full word guess
		else if(answers.userPath == "word") {
			var wordQ = [
			{
				type: "input",
				name: "word",
				message: "Which word do you think it is?"
			}
			];
			inquirer.prompt(wordQ).then(function(answers) {
				exports.wordGuess = answers.word;
				word.wordCheck();
			})
		} else {
			console.log("Wrong answer. Try again.");
			exports.requestInfo();
		}
	})
	}
};

// reset function 
exports.playAgain = function() {
	var questions = [
	{
		type: "list",
		name: "playAgain",
		message: "Would you like to play again?",
		choices:[
		"yes",
		"no"
		]
	}
	];

	inquirer.prompt(questions).then(function(answer) {
		if(answer.playAgain == "yes") {
			exports.lives = 0; 
			exports.chosenWord = game.chooseWord();
			letter.guessArr = [];
			letter.wordArr = [];
			word.letterArr = [];
			letter.initDisplay();
			letter.displayWord();
			exports.requestInfo();
		} else {
			console.log("See ya round!");
		}
	});
}
  
letter.initDisplay();
letter.displayWord();
exports.requestInfo();