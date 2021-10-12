function Greetr() {
	this.greeting = "Hallo World from greet4.js";
	this.greet = function() {
		console.log(this.greeting);
	}
}

module.exports = Greetr;