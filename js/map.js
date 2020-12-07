
mapboxgl.accessToken = 'pk.eyJ1IjoiZ3BjZWNvbmRldiIsImEiOiJja2llbW1lbXcwZHJ3MnBxd2JoaTg5ajFnIn0.kaY1Tg-CL7BOwVm-q6mBeQ';

// check for screen width to set zoom and center

let zoomLevel;
let centerCoords;
let width;
let indWidth;
const windowSize = $( window ).width();

console.log(windowSize);
if (windowSize >= 1450) {
	zoomLevel = 6.56;
	centerCoords = [-86.153,33.002];
	width = $(window).width() * .44;
	indWidth = $(window).width() * .44;
} else if (windowSize >= 1040) {
	zoomLevel = 6;
	centerCoords = [-86.153,33.202];
	width = $(window).width() * .44;
	indWidth = $(window).width() * .44;
} else if (windowSize >= 880) {
	zoomLevel = 5.75;
	centerCoords = [-86.153,33.202];
	width = $(window).width() * .44;
	indWidth = $(window).width() * .44;
} else {
	zoomLevel = 5.75;
	centerCoords = [-86.153,33.202];
	width = $(window).width() * .86;
	indWidth = $(window).width() * .86;
}

const map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/gpcecondev/ckiemo0q33dft19p9kf2g28gt?fresh=true',
  center: centerCoords,
  zoom: zoomLevel, // starting zoom,
  maxZoom:9,
  scrollZoom: true
});

// add zoom and rotation controls to the map
const nav = new mapboxgl.NavigationControl({showCompass:false});
map.addControl(nav, 'top-right');

// add another control at the bottom with a zoom to extent button
const resetIcon = "<button class='mapboxgl-ctrl-reset' type='button' title='Reset Map' aria-label='Reset Map'><span class='reset-map-icon' aria-hidden='true'><img class='reset-icon' src='./assets/images/map-regular.svg'></span></button>"
$(".mapboxgl-ctrl.mapboxgl-ctrl-group").append(resetIcon);

// Create a popup, but don't add it to the map yet.
const fillPopup = new mapboxgl.Popup({
	closeButton: false,
	closeOnClick: false
});

const pointPopup = new mapboxgl.Popup({
	closeButton: false,
	closeOnClick: false
});

// add necessary layers

map.on('load', function() {

	map.addSource('points', {
		type: 'vector',
		url: 'mapbox://gpcecondev.duztgmd2?fresh=true'
	});

	map.addSource('fill', {
		type: 'vector',
		url: 'mapbox://gpcecondev.ac721y40?fresh=true'
	});

	map.addLayer({
        'id':'countyFill',
        'type':'fill',
        'source':'fill',
        'layout': {
          'visibility':'none',
        },
        'paint': {
          "fill-color": ["interpolate",["linear"],["get", "Claims"],
							  378,"hsla(246, 100%, 94%, 0.8)",
							  2240,"hsla(245, 39%, 81%, 0.8)",
							  4803,"hsla(244, 28%, 68%, 0.8)",
							  9235,"hsla(242, 22%, 56%, 0.8)",
							  29521,"hsla(240, 24%, 45%, 0.8)",
							  75937,"hsla(236, 37%, 33%, 0.8)",
							  555240,"hsla(224, 83%, 19%, 0.8)"
						],
          "fill-outline-color": "hsla(0, 0%, 0%, 0)"
        },
        'source-layer': 'countyClaimsFill'
      }, 'admin-1-boundary-bg')

	map.addLayer({
        'id':'countyLine',
        'type':'line',
        'source':'fill',
        'layout': {
          'visibility':'visible',
        },
        'paint': {
          "line-color": "#fff",
          "line-width": 0.5
        },
        'source-layer': 'countyClaimsFill'
      }, 'admin-1-boundary-bg')

	map.addLayer({
		'id':'countyPoints',
		'type':'circle',
		'source':'points',
		'layout': {
			'visibility':'visible'
		},
		'paint': {
			'circle-color':"hsla(242, 22%, 56%, 0.8)",
			'circle-opacity':1,
			'circle-stroke-color':"#252525",
			'circle-stroke-width':1,
			'circle-radius':[
							  "interpolate",
							  ["linear"],
							  ["get", "Claims"],
								  378,5,
								  2240,7,
								  4803,9,
								  9235,11,
								  29521,13,
								  75937,25,
								  555240,50
							]
		},
		'source-layer':'countyClaimsPoint'
	}, 'road-label')


});