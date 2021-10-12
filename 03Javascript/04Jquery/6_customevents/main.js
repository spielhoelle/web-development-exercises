$(document).ready( function() {
	console.log('Document is loaded.');

	$('div').on('halloworld', function() {
		alert('whats up?');
	});

	$('button#halloButton').on('click', function() {
		alert('i am clicked');
		$('div').trigger('whatsup');
	});

});

