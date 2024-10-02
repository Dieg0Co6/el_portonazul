let map;
async function initMap() {
  const position = { lat: -6.756916, lng: -79.8497419 };
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  map = new Map(document.getElementById("mapa"), {
    zoom: 4,
    center: position,
    mapId: "DEMOMAPA",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}


function ObtenerUbicacion(){
    navigator.geolocation.getCurrentPosition(function(position){
        const lat = -6.756916;
        const lng = -79.8497419;
        
        map.setCenter({lat, lng});
        map.setZoom(15);

        new google.maps.marker.AdvancedMarkerElement({
            map: map,
            position: {lat, lng},
            title: "Ubicación del Portón Azul"
        })
    }, function(error){
        console.error(`Error: ${error}`)
    });
}

ObtenerUbicacion();