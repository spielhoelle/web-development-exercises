$(document).ready(function () {
	
	$('body > div > div > div')
	.first().html('1');

	$('ul > li:eq(2)').html('overrided');
	$('ol > li:eq(1)').html('busted');

	$('section > header > strong')
	.html('stronger');

	$('section > div > em:eq(1)')
	.html('weeeeehh');

});
