function LocationsMap() {
  this.locations = {};
}


function Destination(location, landmarks, dateVisited) {
  this.location = location;
  this.landmarks = landmarks;
  this.dateVisited = dateVisited;
}


LocationsMap.prototype.addLocation = function(where) {
  this.locations[where.location] = where;
}



$(document).ready(function(){
  $("#new-location").submit(function(event){
  event.preventDefault();  
  let locationsMap = new LocationsMap();
  let locationInput = $("#location").val();
  let landmarkInput = $("#landmarks").val();
  let dateVisitedInput = $("#date-visited").val();
  let newLocation = new Destination(locationInput, landmarkInput, dateVisitedInput);
  locationsMap.addLocation(newLocation);
  
  // $("#locations-list").before(("<ul>") + (newLocation.location) + ("</ul>"));
  // $("#locations-list").append(("<li>") + (newLocation.landmarks) + ("</ll>"));
  

});





});

