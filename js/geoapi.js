navigator.geolocation.getCurrentPosition(function(position) {
    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var myOptions = {
        zoom: 10,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        disableDefaultUI: true
    }

    var map = new google.maps.Map(document.querySelector("#map_canvas"), myOptions);
});