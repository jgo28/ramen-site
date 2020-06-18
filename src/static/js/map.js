function initMap() {
    // first restaurant location
    var restaurant_1 = {lat: -25.344, lng: 131.036};
    // the google map
    var map = new google.maps.Map(
        document.getElementById('map'),
        {zoom: 4, center: restaurant_1}
    );
    var marker = new google.maps.Marker(
        {position: restaurant_1, map: map}
    );
}

initMap();