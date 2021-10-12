$(document).ready( function() {
	console.log('Document is loaded.');

    // html() and text()
	// task: when the user clicks on Update HTML,
	//       the div with the class "text" will be
	//       updated with the html() function
	//
	//       when the user clicks on Update Text,
	//       it will be updated with text() function
	//
	//       What is a good way to test your code?

	$('.updatehtml').click(function() {
		var htmlMarkup = $('#htmlmarkup').val();
		$('#text-1').html(htmlMarkup);
	});

	$('.updatetext').click(function() {
		var htmlMarkup = $('#htmlmarkup').val();
		$('#text-1').text(htmlMarkup);
	});

    // attr() and removeAttr()
    //
	// task: a) when the user clicks on the Add-button,
	// 	     the id of the textbox "text-2" will be
	//       changed to "text-2b".
	//
	//       b) when the user clicks on remove, the
	//          style of "text-2b" will be removed entirely

	$('.add').click( function() {
		$('#text-2').attr('id', 'text-2b');
	});

	$('.remove').click( function() {
		$('#text-2b').removeAttr('style');
	});

	// Adding DOM-Elements
	//
	// task: a) when the user clicks on "Insert at end",
	//          a new fruit is added at the end of the
	//			list
	//       b) when the user clicks on "Insert at start",
	//			a new fruit is added at the beginning of the list
	//       c) when the user clicks on "first becomes last" 
	//          the first element will be added to the end of the list

	$('.after').click( function() {
		var value = $('#userinput').val();
		$('#fruit-list > li').last().after('<li>' + value + '</li>');
	});

	$('.before').click( function() {
		var value = $('#userinput').val();
		$('#fruit-list > li').first().before('<li>' + value + '</li>');		
	});

	$('.append').click( function() {
		var value = $('#userinput').val();
		$('#fruit-list').append($('#fruit-list > li').first());
	});

	// Removing and Detaching Elements
	//
	// task: a) when the user clicks on the button remove,
	//		    the div with class box will be removed
	//       b) when the user clicks on the button detach,
	//			the div with class box will be detached
    //       c) when the user clicks on the button empty,
    //			the div with class box will be emptied
    //       d) when the user clicks on the button add back,
    //			the div with class box will be reattached

    var el = $('div.box');

	$('.remove').click( function() {
		el.remove();
	});  

	$('.detach').click( function() {
		el.detach();
	});

	$('.empty').click( function() {
		el.empty();
	});

	$('div.add').click( function() {
		$('#container').append(el);
	});

});

