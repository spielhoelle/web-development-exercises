$(document).ready( function() {
	console.log('Document is loaded.');

	$('body').fadeIn('slow');

	$('a#nav-about-me').on('click', function() {
		showPage('about-me');
	});

    $('a#nav-fav-city').on('click', function() {
        showPage('my-favourite-city');
    });

    $('a#nav-fav-songs').on('click', function() {
        showPage('my-favourite-songs');
    });

    $('a#nav-fav-contact').on('click', function() {
        showPage('contact');
    });

	function showPage( page ) {
		var x = 'div#content > div:not(#' + page + ')';
		$(x).hide();
		$('#'+page).fadeIn('slow');
	}

	$('#send-contact').on('click', function() {

		/*
		$.ajax({
			url: 'http://35.156.88.18:3050/contacts',
			type: 'POST',
			dataType: 'json',
			data: { 
				studentaccount: 'jan.schulz@devugees.org',
				name: $('#contact-name').val(),
				email: $('#contact-email').val(),
				text: $('#contact-message').val()
			},
			success: function(response) {
				if(response.error === '0') {
					alert('Thank you for your contact request.')
				}
				else {
					alert('Something went wrong: ' + response.error);
				}
			},
			complete: function(xhr, status) {
				console.log('Request completed: ' + status);
			},
			error: function(xhr, status) {
				console.log('Error: ' + status);
			}
		});
		*/

		$.post('http://255.156.88.18:3050/contacts',
			{ 
				studentaccount: 'jan.schulz@devugees.org',
				name: $('#contact-name').val(),
				email: $('#contact-email').val(),
				text: $('#contact-message').val()
			},
			function(data, status, xhr) {
				console.log('hallo world');
			}
		);
	});

});

