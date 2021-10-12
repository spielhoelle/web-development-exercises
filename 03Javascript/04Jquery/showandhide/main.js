$(document).ready( function() {
	console.log('Document is loaded.');

	$('.article').hide();

	$('.readmore').on('click', function() {
		$('.article').show();
	});

	$('.readless').on('click', function() {
		$('.article').hide();
	});

	$('.readmoreslow').on('click', function() {
		$('.article').show('slow');
	});

	$('.readlessslow').on('click', function() {
		$('.article').hide('slow');
	});

	$('.readmorefast').on('click', function() {
		$('.article').show('fast');
	});

	$('.readlessfast').on('click', function() {
		$('.article').hide('fast');
	});

	$('.readmorecustom').on('click', function() {
		$('.article').show(2000);
	});

	$('.readlesscustom').on('click', function() {
		$('.article').hide(2000);
	});


});

