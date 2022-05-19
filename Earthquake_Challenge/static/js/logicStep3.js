// Add console.log to check to see if our code is working.
console.log("working");


// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);


// Grabbing our GeoJSON data.
//Using pointToLayer
// L.geoJSON(sanFranAirport, {
//     // Turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//         console.log(feature);
//         return L.marker(latlng)
//         .bindPopup("<h2> "+ feature.properties.name +" </h2> <hr> <h3> "+ feature.properties.city + ", " + feature.properties.country +" </h3>");
//     } 
// }).addTo(map);

// Using onEach Function
// L.geoJSON(sanFranAirport, {
//     // Turn each feature into a marker on the map.
//     onEachFeature: function(feature, layer) {
//         console.log(feature);
//         layer.bindPopup("<h2> " + "Airport code: " + feature.properties.faa +" </h2> <hr> <h3> " + " Airport name: " + feature.properties.name + " </h3>");
//     } 
// }).addTo(map);

// // Coordinates for each point to be used in the line.
// let line = [
//     [37.6213, -122.3790],
//     [30.1975, -97.6664],
//     [43.6777, -79.6248],
//     [40.6413, -73.7781]
//   ];

// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "blue",
//     weight: 4,
//     opacity: .5,
//     dashArray: "5,5"
// }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/satellite-streets-v11',
    maxZoom: 18,
    accessToken: API_KEY
});

// // Then we add our tile layer to the map.
// streets.addTo(map);


// Create a base layer that holds both maps.
let baseMaps = {
    "Streets" : streets,
    "Satellite": satelliteStreets
};


// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
});


// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// // Accessing the Toronto Neighborhoods GeoJSON URL
// let torontoHoods = "https://raw.githubusercontent.com/agomoll/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// // Accessing the Toronto airline routes GeoJSON URL.
// let totontoData = "https://raw.githubusercontent.com/agomoll/Mapping_Earthquakes/main/torontoRoutes.json";


// // Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/agomoll/Mapping_Earthquakes/main/majorAirports.json";


// // Grabbing the GeoJSON Data 1
// d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
//     console.log(data);
//     // Create geoJSON layer with the retrieved data.
//     L.geoJSON(data).addTo(map)
// });

// // Grabbing the GeoJSON Data 2
// d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
//     console.log(data);
//     // Create geoJSON layer with the retrieved data.
//     L.geoJSON(data, {
//         // Turn each feature into a circleMarker
//         pointToLayer: function(feature, latlng) {
//             console.log(data);
//             return L.circleMarker(latlng);
//         },
//         style: styleInfo
//     }).addTo(map);
// });


// Grabbing our GeoJSON data 3.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJSON(data, {
        // Turn each feature into a circleMarker
        pointToLayer: function(feature, latlng) {
            console.log(data);
            return L.circleMarker(latlng);
        },
        style: styleInfo,        
        //Create a popup for each circleMarker to display magnitude and location.
        onEachFeature: function(feature, layer) {
            layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
    }}).addTo(map);
});


// // Grabbing our GeoJSON data 4.
// d3.json(torontoHoods).then(function(data) {
//     console.log(data);
//     // Creating a GeoJSON layer with the retrieved data.
//     L.geoJSON(data, {
//         // Add color and weight
//         color: "blue",
//         fillColor: "#ffffa1",
//         weight: 1,
//         // Turn each feature into a marker on the map.
//         onEachFeature: function(feature, layer) {
//             console.log(feature);
//             layer.bindPopup("<h2> " + "Neighborhood: " + feature.properties.AREA_NAME +" </h2>");
//         }}).addTo(map);
// });



// Add a marker to the map for Los Angeles, California
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

// L.circleMarker(cities, {
//     radius: 300,
//     color: "black",
//     fillColor: '#ffffa1'
// }).addTo(map);

//L.circleMarker([34.0522, -118.2437]).addTo(map);


//Get data from cities.js
// let cityData = cities;


// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/100000,
//         color: "orange"
//     })
//     .bindPopup("<h2>" + city.city + "," + city.state + "</h2> <hr> <h3> Population: " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });


// Function for returning style data for each of the earthquakes 
// Passing earthquake magnitude to calculate the radius
function styleInfo(feature) {
    return {
        opacity: 1,
        fillOpacity: 1,
        fillColor: getColor(feature.properties.mag),
        color: "#000000",
        radius: getRadius(feature.properties.mag),
        stroke: true,
        weight: 0.5
    };
};

// Function to determine the color of the marker based on the earthquake magnitude.
function getColor(magnitude){
    if (magnitude > 5) {
        return "#ea2c2c";
      }
      if (magnitude > 4) {
        return "#ea822c";
      }
      if (magnitude > 3) {
        return "#ee9c00";
      }
      if (magnitude > 2) {
        return "#eecc00";
      }
      if (magnitude > 1) {
        return "#d4ee00";
      }
      return "#98ee00";
};



// Function to determine the radius of the marker based on the earthquake magnitude.
// Earthquake with magnitude of 0 will be plottted with a radius of 1. 
function getRadius(magnitude) {
    if (magnitude === 0) {
        return 1;
    } 
    return magnitude * 4;
};




