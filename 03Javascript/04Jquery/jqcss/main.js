$(document).ready( function() {
	console.log('Document is loaded.');

	var fontSize = 
		$('.fontbox').css('font-size', '30px');

	// task
	//
	// when the user clicks on the bigger
	// button, the font-size of the
	// font inside the .fontbox shall be 
	// increased by by 1 pixel
	// 
	// respectively, when the user clicks on 
	// "smaller" button, the font-size shall
	// be decreased by 1 pixel
	//

	$('#smaller').on('click', function(e) {
		var fontSize = $('.fontbox').css('font-size');
		var fontSizeNumber = parseInt(fontSize);

		fontSizeNumber--;
		$('.fontbox').css( 'font-size', 
			fontSizeNumber);
	});

	$('#bigger').on('click', function(e) {
		var fontSize = $('.fontbox').css('font-size');
		var fontSizeNumber = parseInt(fontSize);

		fontSizeNumber++;
		$('.fontbox').css( 'font-size', 
			fontSizeNumber);
	});

	$('.propertiesbox').css({
		'color':'blue',
		'background-color': 'grey',
		'font-family': 'Verdana'
	});

});