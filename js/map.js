
mapboxgl.accessToken = 'pk.eyJ1IjoibW1haW56ZXIiLCJhIjoiY2s2Y2pjNHRyMWN5cDNtcWVudmFhNDJ0diJ9.8b7KyCNL_Xv_fAEiLMQXdg';

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
  style: 'mapbox://styles/mmainzer/ckacpi9v74oh21in65nw0vxrt?fresh=true', // stylesheetmapbox://styles/mmainzer/ck5r0lcgr0eti1iqiiglddux6
  center: centerCoords,
  zoom: zoomLevel, // starting zoom,
  maxZoom:9,
  scrollZoom: false
});

const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'bottom-right')

// add necessary layers

map.on('load', function() {

	map.addSource('county-poly', {
		type: 'vector',
		url: 'mapbox://mmainzer.al0x4122?fresh=true'
	});

	map.addSource('county-points', {
		type: 'vector',
		url: 'mapbox://mmainzer.9gsjan8j?fresh=true'
	});

	map.addSource('msa', {
		type: 'vector',
		url: 'mapbox://mmainzer.5r9p7e10?fresh=true'
	});

	map.addSource('rc', {
		type: 'vector',
		url: 'mapbox://mmainzer.1jivkh0l?fresh=true'
	});

	map.addLayer({
        'id':'countyFill',
        'type':'fill',
        'source':'county-poly',
        'layout': {
          'visibility':'visible',
        },
        'paint': {
          "fill-color": ["interpolate",
          					["linear"],
          					["get", "PctFebLabor"],
				          	  10,"hsla(224, 83%, 28%, 0.8)",
							  20,"hsla(213, 66%, 40%, 0.8)",
							  30,"hsla(197, 74%, 43%, 0.8)",
							  40,"hsla(186, 53%, 51%, 0.8)",
							  50,"hsla(166, 44%, 65%, 0.8)",
							  60,"hsla(98, 55%, 81%, 0.8)",
							  80,"hsla(60, 100%, 90%, 0.8)"],
          "fill-outline-color": "#fff"
        },
        'source-layer': 'countyShapes'
      }, 'road-label')

	map.addLayer({
		'id':'countyLines',
		'type':'line',
		'source':'county-poly',
		'layout': {
			'visibility':'none'
		},
		'paint': {
			'line-color':'#fff',
			'line-width':5
		},
		'source-layer':'countyShapes'
	}, 'road-label')

	map.addLayer({
		'id':'msaLines',
		'type':'line',
		'source':'msa',
		'layout': {
			'visibility':'none'
		},
		'paint': {
			'line-color':'#fff',
			'line-width':5
		},
		'source-layer':'gamsa'
	}, 'road-label')

	map.addLayer({
		'id':'rcLines',
		'type':'line',
		'source':'rc',
		'layout': {
			'visibility':'none'
		},
		'paint': {
			'line-color':'#fff',
			'line-width':5
		},
		'source-layer':'regionalcommissions'
	}, 'road-label')


	map.addLayer({
		'id':'points',
		'type':'circle',
		'source':'county-points',
		'layout': {
			'visibility':'visible'
		},
		'paint': {
			'circle-color':"hsla(0, 0%, 15%, 0.25)",
			'circle-opacity':1,
			'circle-stroke-color':"#252525",
			'circle-stroke-width':1,
			'circle-radius':[
							  "interpolate",
							  ["linear"],
							  ["get", "CumClaims"],
								  60,5,
								  15077,9,
								  30093,13,
								  60126,17,
								  90159,21,
								  120192,25,
								  150225,29,
								  180258,33,
								  210291,37,
								  240324,41
								]
		},
		'source-layer':'countyPoints'
	}, 'road-label')


});