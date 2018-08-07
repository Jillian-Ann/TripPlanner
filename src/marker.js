const mapboxgl = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coordinates){
    let icon; 
    if(type === 'activity'){
        icon = iconURLs.activities;
    }
    else if(type === 'restaurant'){
        icon = iconURLs.restaurants
    }
    else {
        icon = iconURLs.hotels;
    }
    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
        markerDomEl.style.width = "32px";
        markerDomEl.style.height = "39px";
        markerDomEl.style.backgroundImage = `url(${icon})`;

    return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates)
}



module.exports = buildMarker