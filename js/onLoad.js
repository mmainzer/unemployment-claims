// function to detect Internet Explorer

const isInternetExplorer = () => {
	return window.navigator.userAgent.match(/(MSIE|Trident)/);
}

const showBrowserAlert = () => {
	if(isInternetExplorer()){
       // Do not show initial form
       $("#browserAlert").show();
    } else {
    	console.log('All good');
    }
}

// get some global variables
let selectedLevel = [ "State" ];
let selectedArea = [ "Georgia" ];
let bbox = selectedArea.map(id => dataObj[selectedLevel].find(({ area }) => area === id).bbox);

// initiate global variables to use outside of d3 call
let claimData;
let yClaims;
let xAxis;
let barsClaims;

let industryData;
let xIndustry;
let yIndustry;
let barsIndustry;

// date parser
const parser = d3.timeParse("%m-%d-%Y");

// function for number formatting
Number.prototype.format = function(n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
}



// Initialize the dropdowns as select2 dropdowns via jquery plugin
$(document).ready(function() {
    $('.single-select').select2({
    	width:"95%"
    });

    showBrowserAlert();

    let totalClaims = selectedArea.map(id => dataObj[selectedLevel].find(({ area }) => area === id).totalClaims);
    
    $('#geo').text(selectedArea[0]);


    $('#totalClaims').text(totalClaims);

});

