let map;
let service;
let infowindow;

function initMap() {
    navigator.geolocation.getCurrentPosition(function(position) {
        const userLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map = new google.maps.Map(document.getElementById('map'), {
          center: userLocation,
          zoom: 15,
        });
        // Continue setting up your map and other functionalities
      }, function(error) {
        console.error("Error getting location: " + error.message);
        // Handle error or set a default location
      });
    
    infowindow = new google.maps.InfoWindow();

    document.getElementById('therapists').addEventListener('click', () => {
        performSearch('therapists');
    });

    document.getElementById('psychologists').addEventListener('click', () => {
        performSearch('psychologists');
    });

    document.getElementById('gyms').addEventListener('click', () => {
        performSearch('gyms');
    });

    document.getElementById('yoga').addEventListener('click', () => {
        performSearch('yoga');
    });
}

function performSearch(type) {
    const request = {
        location: map.getCenter(),
        radius: '5000',
        query: `${type} near me`
    };

    service = new google.maps.places.PlacesService(map);
    service.textSearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
            map.setCenter(results[0].geometry.location);
        }
    });
}

function createMarker(place) {
    if (!place.geometry || !place.geometry.location) return;

    const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
    });

    google.maps.event.addListener(marker, 'click', () => {
        infowindow.setContent(place.name);
        infowindow.open(map, marker);
    });
}
