
var inquirer = require("inquirer");

console.log("Welcome to Scary Movies Hangman!");
console.log ("Guess a letter of the name of a scary movie");
console.log("Good Luck!");
console.log("-----------------------------------");
prompt.start();


game = {
	wordBank: ["Carrie","Ring","Dracula","Insidious","Jigsaw","It","Halloween","Conjuring","Mama","Annabelle","Chucky","Scream","Omen","Saw","Candyman"],
	wins:0,
	guessesRemaining:10,
	currentWord: null,

	startGame: function(wrd) {
		this.resetGuesses();
		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
		this.currentWrd.getLet();
		this.promptUser();
	}
	resetGuesses: function(){
		this.guessesRemaining = 10;
	};
	promptUser: function(){

			var self = this;
			prompt.get(['guessLet'], function(err, result){
				console.log("You guessed:" + result.guessLet);
				var manyGuessed = self.currentWrd.checkLetter(result.guessLet);
				if (manyGuessed==0){
					console.log("Wrong, Try Again!");
					self.guessessRemaining--;
			 }  else { 
			 	console.log("Correct, Good Job!");
			 			if (self.currentWrd.findWord()){
			 				console.log("Congrats! You Won!");
			 				console.log("-------------------------");
			 				break;
			 			}
			 }

			 console.log("Guesses remaining: " + self.guessRemaining);
			 console.log("--------------------");
			 if((self.guessesRemaining > 0) && (self.currentWrd.found == false)) {
			 		self promptUser();
			 }
			 else if(self.guessesRemaining ==0) {
			 	console.log("Game Over, Correct Word", self.currentWrd.target);
			 } else {
		 	console.log(self.currentWrd.wordRender());
		   }
		});
	}
};

game.startGame();