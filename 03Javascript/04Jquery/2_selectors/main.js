$(document).ready( function() {	
	console.log('Document is loaded.');
				
	$('h3').addClass('red-color');

	// task:
	//
	// elements with the id firstpara blue
	// and
	// elements with the class para-class green

	$('#firstpara').addClass('blue-color');
	// also works: $(firstpara).addClass('blue-color');
	$('.para-class').addClass('green-color');

	// tasks:
	// 	
	// 1. make all list items with the name "theking" red	

	// also works: $('[name=theking]').addClass('red-color');
	$('li[name=theking]').addClass('red-color');
	// 2. make all list items of class company and of class ceo underline
	$('.company,.ceo').addClass('underline');
	// 3. give all li items that are direct children of the element with id
	//    "companies" a border
	$('#companies > *').addClass('border');
	// 4. highlight all list items of class "company", if they have an index 
	//    greater than 0
	$('li.company:gt(0)').addClass('highlight');
	// 5. make all list items which are children of uls of class flagship 
	//    blue
	$('ul.flagship').addClass('blue-color');
	

	// https://github.com/foobaroo/devugees/
	// download jsadvanced_2.pdf
	
	// Tasks:
	// (1) Make all rows with an even index aliceblue
	$('tr:even').addClass('even-row');
	// (2) Make the rest yellow
	$('tr:odd').addClass('odd-row');
	// (3) Make the TDs inside the TRs with an even index aliceblue
	$('tr td:nth-child(even)').addClass('even-row');
	// (4) Make the TDs inside the TRs with an odd index yellow
	$('tr td:nth-child(odd)').addClass('odd-row');	
	// (5) Highlight all TDs that contain 'Hagrid' (highlight-2)
	$("td:contains('Hagrid')").addClass('highlight-2');
	// (6) Highlight all non-humans with index = 1
	$('.non-human:eq(1)').addClass('highlight-2');
	// (7) Highlight all non-humans with index > 1
	$('.non-human:gt(1)').addClass('highlight-2');	
	// (8) Highlight all non-humans with index < 1
	$('.non-human:lt(1)').addClass('highlight-2');

	// Tasks DOM-Traversal:
	//
	// (1) Make the parent of the father red.
	// (2) Make all parents of the son blue
	// (3) Make all parents of the son red, until the great-grandfather
	// (4) Make the closest div to the daughter green.
	// (5) Make the closest div to the mother green.
	// (6) Make all children of the father green.
	// (7) Make the next sibling of the great-grandfather red.
	// (8) Make the great-grandfather blue, from the perspective of
	//     the great-grandmother
	// (9) Make all the siblings next to the great-grandfather red
	// (10) Make the first sibling next to the great-grandfather red
	// (11) Make the last sibling next to the great-grandfather blue 
	// (12) Make all siblings left of the great-grandaunt blue
	// (13) Make the first sibling left of the great-grandaunt blue
	// (14) Make the last sibling left of the great-grandaunt red
	// (15) Make all daughters green

});

