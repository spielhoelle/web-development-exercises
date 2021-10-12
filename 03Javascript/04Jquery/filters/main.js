var i;
var warriors;
var x;
var teachers;

$(document).ready( function() {
	console.log('Document is loaded.');

	i = 0;
	x = $('ul#fantasy-names > li').filter( function() {
		var li = $(this);

		if( li.attr('data-id') === '2' ) 
			return true;
	});

	// Task 1:
	//
	// select all the TRs and filter them by the even ones.
	// if they are even, change their background color to
	// yellow
	//

	$('tr').filter(':even').addClass('even-row');

	// Task 2:
	//
	// create an array of three teachers 
	// 'Remus Lupin'
	// 'Rubeus Hagrid'
	// 'Firenze'
	//
	// and then only select the TDs that have a teacher from
	// the array

	var favTeachers = ['Remus Lupin', 
					   'Rubeus Hagrid',
					   'Firenze'];

	teachers = $('td').filter( function() {
		// this     - native DOM Object
		// $(this)  - native DOM Object wrapped in JQuery

		/*
		var td = $(this);
		if(favTeachers.indexOf(td.text().slice(1, -1)) != -1)
			return true;
		*/

		if( favTeachers.indexOf(this.innerText) != -1) {
			return true;
		}


		for(var j=0; j<favTeachers.length;j++) {
			if( favTeachers[j] === this.innerText )
				return;
		}


	}).addClass('highlight');



});

