/*
    Script that initializes the information displayed for the Google Map.
*/
function initMap() {
    // restaurant locations
    var locations = [
        {lat: -25.344, lng: 131.036},
        {lat: -25.344, lng: 150}
    ];
    var focus = {lat: -25.344, lng: 131.036}; // center of the map
    var labels = ['A', 'B', 'C'];
    // the google map
    var map = new google.maps.Map(
        document.getElementById('map'),
        {zoom: 4, center: focus}
    );
    // drop markers of locations on the map
    for(var i = 0; i < locations.length; i++) {
        var marker = new google.maps.Marker({
            position: locations[i], 
            label: labels[i],
            map: map
        });
    }
}

initMap();