console.log('hallo world');

var greetingObj = document.getElementById('greeting');
greetingObj.innerHTML = 'Hallo World';

var saymynameObj = document.getElementById('saymyname');

saymynameObj.onclick = function() {
	var mynameObj = document.getElementById('myname');
	var thedateObj = document.getElementById('thedate');
	
	thedateObj.innerHTML =    'Hallo ' + mynameObj.value
							+ '.Today is ' + getDayName()[0] + '.'
							+ 'Only ' + getDayName()[1] + ' days left '
							+ 'until the weekend';
	
	//
	// Replace the inner html of <p>How are you?</p> with 
	// hallo jan, whereas jan is the value of the textbox
	// first, give <p>How are you?</p> a proper id "thedate"
	//
	// 1. give the p an id "thedate"
	// 2. when clicking the button, 
	//    set the inner html "thedate" to "hallo " + value of the textbox
	// 

	function getDayName() {
		var days = [
			'Monday', 'Tuesday', 'Wednesday', 
			'Thursday', 'Friday', 'Saturday', 'Sunday' 
		];

		var date = new Date();
		var day = date.getDay();
		return [ days[day - 1], 5 - day];
	}	

	// 3 .use getDayName() to extend your hello text like this
	//   hallo jan, today is Tuesday, only 3 days until the weekend

}