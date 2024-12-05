mapboxgl.accessToken =
  "pk.eyJ1IjoicG50aHVjIiwiYSI6ImNtNDl5czhnbTAwNmgyaW9qZXlnMmI4dmQifQ.te2_WEQBWKIxbY_T-jC0oA"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([-2.24, 53.48])  
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15
  })

  // const nav = new mapboxgl.NavigationControl()
  // map.addControl(nav)

  // var directions = new MapboxDirections({
  //   accessToken: mapboxgl.accessToken
  // })

  // map.addControl(directions, "top-left")

  // map.on('click', function (e) {
  //   const longitude = e.lngLat.lng;
  //   const latitude = e.lngLat.lat;
  //   console.log(`Longitude: ${longitude}, Latitude: ${latitude}`);
  // });
  const marker = new mapboxgl.Marker()
    .setLngLat(center)
    .addTo(map);

  map.on('click', function (e) {
    const longitude = e.lngLat.lng;
    const latitude = e.lngLat.lat;
    console.log(`Longitude: ${longitude}, Latitude: ${latitude}`);

    // new mapboxgl.Marker()
    // .setLngLat([longitude, latitude])
    // .addTo(map);

    marker.remove();
    marker.setLngLat([longitude, latitude]).addTo(map);
  });
}