var map;

if ("geolocation" in navigator){
  navigator.geolocation.getCurrentPosition(onLocation, onError);
}

function onLocation(position){
  // We can't just directly feed the position into our google map
  // The objects are formatted differently, google maps is looking for
  // an object with "lat" and "lng" keys.
  var myPosition = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };

  createMap(myPosition);
  setupAutocomplete();
  showLocation();
}

function onError(err){
  console.log("What are you using, IE 7??", err);
}

function createMap(position){
  var mapOptions = {
    center: position,
    zoom: 17
  };
  map = new google.maps.Map($('#map')[0], mapOptions);
  createMarker(position);
}

function createMarker(position) {
  var marker = new google.maps.Marker({
   position: position,
   map: map
 });

  var infowindow = new google.maps.InfoWindow({
    content: JSON.stringify(position)
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}

function setupAutocomplete(){
  var input = $('#get-places')[0];
  var autocomplete = new google.maps.places.Autocomplete(input);

  autocomplete.addListener('place_changed', function(){
    var place = autocomplete.getPlace();
    console.log(place);
    if (place.geometry.location) {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
      createMarker(place.geometry.location);
      saveLocation(place.geometry.location);
    } else {
      alert("The place has no location...?")
    }
  });
}

function saveLocation(loc){
  var place = localStorage.getItem('user-markers');
  place = (place === null) ? [] : JSON.parse(place);
  place.push(loc);

  localStorage.setItem('user-markers', JSON.stringify(place));
}

function showLocation(){
  var locations = localStorage.getItem('user-markers');
  $.each(JSON.parse(locations), function(key, value){
    createMarker(value);
  })
}

