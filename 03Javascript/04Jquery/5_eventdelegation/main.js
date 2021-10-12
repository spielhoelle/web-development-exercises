$(document).ready( function() {
	console.log('Document is loaded.');

	/*
	$('button.btns').on('click', function(e) {
		alert('Hallo from button ' 
			+ $(this).text());
	});
	*/

	$('div').on('click', 'button.btns', function(e) {

		alert('Hallo from button ' + $(this).text());
	});
	

	var index = 4;
	$('#addButton').on('click', function(e) {	
		var buttonText = 'Button ' + index;
		index++;

		$('div').append('<button class="btns">'
			+ buttonText + '</button><br>');

		console.log('Added button' + buttonText );

	});

	function addUser(id) {
		$('table#users').append(
			 '<tr id="usr-'+id+'">'
			+'<td>' + id + '</td>'
			+'<td>User ' + id + '</td>'
			+'<td><button class="removeButton">remove me</button></td>'
			+'</tr>');
	}

	var userIndex = 1;
	$('button#addUserButton').on('click',
		function(e) {
			userIndex++;
			addUser(userIndex);
		});

	// task: 
	//
	// when the user clicks "remove me",
	// the row in which button is clicked
	// will be removed.
	//
	// 

	$('table#users').on('click', 'button.removeButton', function(e) {

		$(this).parent().parent().remove();
		/*var userId = $(this).parent().prev().prev().html();
		alert('user id = ' + userId);
		$('tr#usr-' + userId).remove();
		*/
	});

});

