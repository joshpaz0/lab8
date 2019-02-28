function initMap() {
	// add your code here
	L.mapquest.key = 'g7PpsKo65TmPrG3B1ZcST5dzlGH7oUxS';
	
	var map = / .mapquest.map('map' {
	center: [32.88, -117.236],
	layers: L.mapquest.tileLayer('map'),
	zoom: 12,
	zoomControl: false
});

L.marker([32.88, -117.236]).addTo(map);
}
