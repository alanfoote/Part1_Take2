var map = L.map('map').setView([47.25, -122.44], 11);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    accessToken: 'pk.eyJ1IjoiYWZvb3RlIiwiYSI6ImNrdm85a2NvdjZnNXMyb3Fwa3Nyb3NieGEifQ.z9saZUXAMQZ-OZ7w2iGaSg',
}).addTo(map);

var control = L.Routing.control ({
        waypoints: [
            L.latLng(47.246587, -122.438830),
            L.latLng(47.258024, -122.444725),
            L.latLng(47.318017, -122.542970)

        ],
         routeWhileDragging: true,
         router: L.Routing.mapbox('pk.eyJ1IjoiYWZvb3RlIiwiYSI6ImNrdm85a2NvdjZnNXMyb3Fwa3Nyb3NieGEifQ.z9saZUXAMQZ-OZ7w2iGaSg'),
    }).addTo(map);
