function Greetr() {
	this.greeting = "Hallo World from greet3.js";
	this.greet = function() {
		console.log(this.greeting);
	}
}

module.exports = new Greetr();