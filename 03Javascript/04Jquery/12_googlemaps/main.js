var map;

var initialLocations = [
	{ name: 'Berlin', position: {lat: 52.52000659999999, lng: 13.404953999999975 }},
	{ name: 'Potsdam', position: {lat: 52.3905689, lng: 13.064472900000055 }}
];

var markers = [];
// Berlin
var startPosition = { 
	lat: 52.52000659999999, 
	lng: 13.404953999999975 
};

function updateMarkers() {
	$('.locations').empty();
	markers.forEach( (marker) => {
		$('.locations').append(`
			<option value="${marker.id}">${marker.title}</option>
		`);
	});
}

function randomString(length) {
	let ret = '';
	let alphabet = 'abcdefghjklmnopqrstuvwxyz1234567890';
	for(var i=0; i<length; i++) {
		ret += alphabet[Math.floor( Math.random() * alphabet.length - 1) ];
	}

	return ret;
}

// will be called by google maps api
function initMap( lat, lng ) {
	if(lat && lng) {
		myLatLng = { 
			lat: lat, lng: lng 
		};
	}

	map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 11,
	  center: startPosition
	});

	console.log( map );
	for(var i=0; i<initialLocations.length; i++) {
		var newMarker = new google.maps.Marker({
			position: initialLocations[i].position,
			map: map,
			title: initialLocations[i].name,
			id: randomString(5)
		});		
		markers.push(newMarker);
	}
	updateMarkers();
}

$(document).ready( function() {
	console.log('Document is loaded.');
		
	$('.new-location').on('click', function(e) { 
		var geocoder =  new google.maps.Geocoder(); 
		var locationName = $('.location').val();
		geocoder.geocode({ 'address': locationName }, 
		function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				let lat = results[0].geometry.location.lat();
				let lng = results[0].geometry.location.lng();
				
				var newMarker = new google.maps.Marker({
					position: { lat: lat, lng: lng },
					id: randomString(5),
					map: map,
					title: locationName
				});	
				
				markers.push(newMarker);
				  updateMarkers();
				  map.setZoom(3);
				  map.setCenter({ lat: lat, lng: lng });
				  $('.location').val('');
				} 
				else {
					alert('This location is invalid');
				}
			});
		});
		
		$('.location').keypress(function(event) {	
			var keycode = (event.keyCode ? event.keyCode : event.which);
			if(keycode == '13') {
				$('.new-location').trigger('click');	
			}
		});

		$('.zoomout').on('click', function(e) {
			map.setZoom( 3 );
		});	

		$('.locations').on('change', function(e) {
			let markerId = $(this).val();

			for(let i=0; i<markers.length; i++) {
				if(markers[i].id === markerId) {
					map.setCenter(markers[i].position);
				}
			}
		});

		$('.remove-location').on('click', function(e) {
			let markerId = $('.locations').val();
			for(let i=0; i<markers.length; i++) {
				if(markers[i].id === markerId) {
					markers[i].setMap(null);
					markers.splice(i, 1);
					$('option[value="'+markerId+'"]').remove();
					return;
				}
			}
		});
});

