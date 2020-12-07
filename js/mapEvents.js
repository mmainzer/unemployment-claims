// function to fly to a new feature after certain events are fired
const flyToBounds = (bbox) => {
		
	map.fitBounds(bbox, {
      padding : {top: 55, bottom:20, left: 950, right: 15}
    });
	if (selectedLevel[0] != "State") {
		map.setPaintProperty('countyLine','line-width',["match",["get",selectedLevel[0]],selectedArea,2.5,0.5]);
	    map.setFilter('countyFill',["all",["match",["get",selectedLevel[0]],selectedArea,true,false]]);
	    map.setFilter('countyPoints',["all",["match",["get",selectedLevel[0]],selectedArea,true,false]]);
	    map.setFilter('countyLine',["all",["match",["get",selectedLevel[0]],selectedArea,true,false]]);
	} else {
		map.setPaintProperty('countyLine','line-width',0.5);
	    map.setFilter('countyFill', undefined);
	    map.setFilter('countyPoints', undefined);
	    map.setFilter('countyLine', undefined);
	}
    
}

// when reset icon is clicked, fly to the original center of map
$(".reset-map-icon").click(function() {
	
	flyToBounds(bbox, 10, 10);

});

// When the user moves their mouse over the state-fill layer, we'll update the
// feature state for the feature under the mouse.

map.on('mousemove', 'countyFill', function(e) {
	// Change the cursor style as a UI indicator.
	map.getCanvas().style.cursor = 'pointer';

	let lngLat = e.lngLat;
	let county = e.features[0].properties.County;
	let claims = e.features[0].properties.Claims;

	county = '<h1 class="popup-header">'+county+'</h1>';
	claims = '<strong> '+claims.format()+' </strong>';
	let html = county+'<p class="popup-description">There have been '+claims+' weekly unemployment insurance claims filed since March 2020.</p>'
	fillPopup
		.setLngLat(lngLat)
		.setHTML(html)
		.addTo(map);

});

// When the mouse leaves the state-fill layer, update the feature state of the
// previously hovered feature. Also, remove popup and change cursor style

map.on('mouseleave', 'countyFill', function() {
	// Change the cursor style as a UI indicator.
	map.getCanvas().style.cursor = 'grab';
	fillPopup.remove();
});

// mouse events over points
map.on("mousemove","countyPoints", function(e) {
	// Change the cursor style as a UI indicator.
	map.getCanvas().style.cursor = 'pointer';

	fillPopup.remove();

	let lngLat = e.lngLat;
	let county = e.features[0].properties.County;
	let claims = e.features[0].properties.Claims;

	county = '<h1 class="popup-header">'+county+'</h1>';
	claims = '<strong> '+claims.format()+' </strong>';
	let html = county+'<p class="popup-description">There have been '+claims+' weekly unemployment insurance claims filed since March 2020.</p>'
	pointPopup
		.setLngLat(lngLat)
		.setHTML(html)
		.addTo(map);
});

map.on("mouseleave","countyPoints",function(e) {
	pointPopup.remove();
});