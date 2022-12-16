 // Initialize and add the map
 function initMap() {
    const uluru = { lat: 24.8614079, lng: 46.7175068 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: uluru,
    });
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

window.initMap = initMap;