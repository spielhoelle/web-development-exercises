import { injectCoordinates, injectMap } from './geocode';

const formElement = document.getElementById('searchForm');
formElement.addEventListener('submit', (event) => {
  // prevent form's default behavior
  event.preventDefault();

  // get input value
  const address = document.getElementById('address').value;
  const mapboxKey = 'yourApiKey';
  // trigger request to Google Maps API
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${mapboxKey}`)
    .then(response => response.json())
    .then((data) => {
      const coordinates = {
        lng: data.features[0].geometry.coordinates[0],
        lat: data.features[0].geometry.coordinates[1]
      };
      injectCoordinates(coordinates);
      injectMap(coordinates);
    });
});
