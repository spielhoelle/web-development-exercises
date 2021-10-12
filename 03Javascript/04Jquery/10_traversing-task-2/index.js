$(document).ready(function () {

	$('input').first().prop('checked', true);

	$('legend:eq(1)').first().html('MC Hammer');

	$('em > span').html('Hallo World');	

	$('ul').children()
		   .first()
		   .children()
		   .first()
		   .children()
		   .find(':eq(3)')	
		   .html('thing');

});

