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

// change the callback from initMap to loadLocations
function loadLocations() {
	$.ajax({
		url: '/location',
		type: 'GET',
		dataType: 'json',
		success: function(response) { 
			let locations = response.locations;			
			map = new google.maps.Map(document.getElementById('map'), {
			  zoom: 11,
			  center: startPosition
			});
		
			for(var i=0; i<locations.length; i++) {
				var newMarker = new google.maps.Marker({
					position: {lat: parseFloat(locations[i].lat), lng: parseFloat(locations[i].lng)},
					map: map,
					title: locations[i].title,
					id: locations[i].id
				});		
				markers.push(newMarker);
			}
			updateMarkers();
		},
		complete: function(xhr, status) { 

		},
		error: function(xhr, status) { 

		}
	});   
}

function saveLocation(location, cb) {
	$.ajax({
		url: '/location',
		type: 'POST',
		dataType: 'json',
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(location),
		success: function(response) {
			if(response.error == 0) {
				return cb(null, response.newlocation);
			}
			else {
				return cb(response.error);
			}
		},
		error: function(xhr, status) { 
			return cb(xhr.responseText);
		}
	}); 
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
					
					let newLocation = {
						lat: lat,
						lng: lng,
						title: locationName
					};

					saveLocation(newLocation, function(err, response) {
						if(err) {
							alert('could not save marker on backend');
							return;
						}

						var newMarker = new google.maps.Marker({
							position: { lat: lat, lng: lng },
							id: response.id,
							map: map,
							title: locationName
						});	
						
						markers.push(newMarker);
						updateMarkers();
						map.setZoom(3);
						map.setCenter({ lat: lat, lng: lng });
						$('.location').val('');
					});
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
					break;
				}
			}

			$.ajax({
				url: '/location/' + markerId,
				type: 'DELETE',
				dataType: 'json',
				success: function(response) {
					if(response.error != 0) {
						alert('could not delete marker')
					}
					else {
						console.log('successfully deleted marker');
					}
				},
				error: function(xhr, status) { 
					alert(xhr.responseText);
				}
			}); 			
		});
});

