// Initialize and add the map
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 }, 
      zoom: 8,
    });
  
    // Add a click event listener to the map
    map.addListener("click", (event) => {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      console.log("Coordinates: ", lat, lng);
    });
}
  
  // Load the Google Maps script
function loadGoogleMapsScript() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyApdnBLqJeVW4c5tlZ32v8BzVBVyJnYlg&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);
}
  
  // Call the function to load the Google Maps script
loadGoogleMapsScript();