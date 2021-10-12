var x, y;

$(document).ready( function() {
	console.log('Document is loaded.');

	x = $('li#chaos').parent()
				 .closest('div')
				 .parent()
				 .attr('id');

	// x = a-level0
	console.log('x = ' + x);

	y = $('li#chaos').parent()
				 .closest('div')
				 .parent()
				 .next()
				 .find('p#p1')
				 .html('Hallo World1')
				 .end()
				 .find('p#p2')
				 .html('Hallo World2')
				 .end()
				 .find('p#p3')
				 .html('Hallo World3');

	// please perform in one chain:
	//
	// - find the TD that contains the string 'Dark Arts'
	// - go its parent
	// - find the td with index = 0 and add the class 
	//   highlight-name
	// - go back to the point of your last find()
	// - find the td with index = 1 and add the class
	//   'highlight-subject'

	$('td:contains("Dark Arts")')
		.parent()
		.find('td:eq(0)')
		.addClass('highlight-name')
		.end()
		.find('td:eq(1)')
		.addClass('highlight-subject');

});

