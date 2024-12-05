mapboxgl.accessToken =
  "pk.eyJ1IjoicG50aHVjIiwiYSI6ImNtNDl5czhnbTAwNmgyaW9qZXlnMmI4dmQifQ.te2_WEQBWKIxbY_T-jC0oA"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  // setupMap([121.5654, 25.0330]) 
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([121.5654, 25.0330])  
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15
  })

  const marker = new mapboxgl.Marker()
    .setLngLat(center)
    .addTo(map);

  map.on('click', function (e) {
    const longitude = e.lngLat.lng;
    const latitude = e.lngLat.lat;
    document.getElementById('value5').value = longitude.toFixed(5);
    document.getElementById('value6').value = latitude.toFixed(5);
    const mrtStations = [
      { name: "Taipei Main Station", coordinates: [121.515, 25.0478] },
      { name: "Banqiao Station", coordinates: [121.4637, 25.0143] },
      { name: "Ximen Station", coordinates: [121.5104, 25.0422] },
      { name: "Zhongxiao Fuxing Station", coordinates: [121.5439, 25.0418] },
      { name: "Taipei 101/World Trade Center Station", coordinates: [121.5637, 25.0336] },
      { name: "Shilin Station", coordinates: [121.5242, 25.0925] },
      { name: "Beitou Station", coordinates: [121.4988, 25.1322] },
      { name: "Tamsui Station", coordinates: [121.4631, 25.1676] },
      { name: "Songshan Station", coordinates: [121.5788, 25.0505] },
      { name: "Nangang Station", coordinates: [121.6075, 25.0522] }
    ];

    function calculateDistance(coord1, coord2) {
      const R = 6371; 
      const dLat = (coord2[1] - coord1[1]) * Math.PI / 180;
      const dLon = (coord2[0] - coord1[0]) * Math.PI / 180;
      const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(coord1[1] * Math.PI / 180) * Math.cos(coord2[1] * Math.PI / 180) * 
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c; 
    }

    let nearestStation = null;
    let minDistance = Infinity;

    mrtStations.forEach(station => {
      const distance = calculateDistance([longitude, latitude], station.coordinates);
      if (distance < minDistance) {
        minDistance = distance;
        nearestStation = station;
      }
    });
    const currentTime = new Date();
    
    const year = currentTime.getFullYear();
    const yearSeconds = 31536000;
    const startOfYear = new Date(year, 0, 1);
    const nowSeconds = Math.floor((currentTime - startOfYear) / 1000);
    const ratio = nowSeconds / yearSeconds;
    const time = year + ratio;
    document.getElementById('value1').value = time.toFixed(3);
    document.getElementById('value3').value = minDistance.toFixed(2);
    console.log(`Nearest MRT Station: ${nearestStation.name}, Distance: ${minDistance.toFixed(2)} km`);
    console.log(`Longitude: ${longitude}, Latitude: ${latitude}`);
    
    marker.remove();
    marker.setLngLat([longitude, latitude]).addTo(map);
  });
}
