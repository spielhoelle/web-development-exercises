$(document).ready( function() {
	console.log('Document is loaded.');

	$('#clickButton').click( function(e) {
		alert('This is a click handler');
	});

	// 2nd event for #clickButton
	$('#clickButton').click( function(e) {
		alert('This is the second click handler');
	});

	$('#bindButton').bind('click', function(e) {
		alert('This is a bind handler');
	});

	$('#onButton').on('click', function(e) {
		alert('This is an on handler');
	});

	// task:
	//
	// create a click event for all li-items
	// that alerts the html inside of the 
	// li.
	// please make use of the "this" - keyword 

	$('li').click( function() {
	    
		// retrieve native DOM object
	    alert( $(this).get(0).innerHTML + ' = ' + this.innerHTML);
	});

	// task:
	//
	// make it possible that the user can only
	// open links that do not contain the string
	// "evil" in the URL

	/*
	$('a[href*="evil"]').click( function(e) {
		e.preventDefault();
	});
	*/

	$('a').click( function(e) {

		var link = $(this);
		console.log( link.attr('href') );

		// 1st way: 

		if( link.attr('href').indexOf('evil') != -1 )
			e.preventDefault();
		// 2nd way:
		//if( this.hostname.indexOf('evil') != -1) {
		//	e.preventDefault();
		//}
	});

	$('a').on('contextmenu', function(e) {
		e.preventDefault();
	});

	$('button#clickMe').on('click', function() {
		alert('I soon will be removed');
	});	

	$('button#removeClickMe').on('click', function() {
		$('button#clickMe').off('click');
	});



});


