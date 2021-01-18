

mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10', // stylesheet location
    center: camp.geometry.coordinates, // starting position [lng, lat]
    zoom: 8
    // starting zoom
});

const marker=new mapboxgl.Marker()
    .setLngLat(camp.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({offset:25})
        .setHTML(
            `<h3>${camp.title}</h3><p>${camp.location}</p>`
        )
    )
    .addTo(map)