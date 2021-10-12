$(document).ready( function() {
	console.log('Document is loaded.');

	var uppercase = false;

	$(document).keyup( function(event) {
		var ch = String.fromCharCode( event.which );

		// console.log('key: ' + ch + ', keyCode: ' + event.keyCode);

		/* task:
		 1. if the key is a letter or a digit,  then append it to the div
		 2. test event.keyCode and find out about the proper codes for return, left shift key and the delete key.
		 3. if the user presses return, he will continue writing on a new line
		 4. if the user presses the left shift key, he will switch to the uppercase mode. so all letters he will type from now on will be in uppercase. if he preses the left shift key again, the mode switches to lowercase.
		 5. if he presses delete, all text will disappear and the div will be emptied.
		*/

		//$('div').append( ch );

		if( event.keyCode < 49 || event.keyCode > 90 )
			return;

		if(event.keyCode === 13) { // return
			$('div').append('<br>');
		}
		else if(event.keyCode === 46 ) { // delete
			$('div').empty();
		}
		else if(event.keyCode === 16) { // left shift
			if( uppercase === true ) 
				uppercase = false;
			else
				uppercase = true;
		}
		else {
			if( uppercase === true ) {
				$('div').append( ch.toUpperCase() );
			}
			else {
				$('div').append( ch.toLowerCase() );
			}
		}
	});
});

