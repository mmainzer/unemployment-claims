// function to detect Internet Explorer

function isInternetExplorer() {
	return window.navigator.userAgent.match(/(MSIE|Trident)/);
}

function showBrowserAlert() {
	if(isInternetExplorer()){
       // Do not show initial form
       $("#form").hide();
       $("#browserAlert").show();
    } else {
    	console.log('All good');
    }
}

// Initialize the dropdowns as select2 dropdowns via jquery plugin
$(document).ready(function() {
    $('.single-select').select2();
    const startKpiVal = 'Georgia';
    $('#geo').text(startKpiVal);
    $('#kpiOne').text(kpiSelect[startKpiVal].FebLaborForce);
    $('#kpiTwo').text(kpiSelect[startKpiVal].CumClaims);
    $('#kpiThree').text(kpiSelect[startKpiVal].PctFebLabor);
});

$("#point-select").change(function() {
	var val = $(this).val();
	var size = selectObj.points[val].circles;
	var minSize = selectObj.points[val].min;
	var maxSize = selectObj.points[val].max;
	$('#minSize').text(minSize);
	$('#maxSize').text(maxSize);

	map.setPaintProperty('points','circle-radius',size);

});

// function to update chart on geography select
function update(selectedGeo) {
	// create new data with the selection
	let dataFilter = claimData.filter(function(d){return d.Area==selectedGeo});
	console.log(industryData);
	let industryFilter = industryData.filter(function(d){return d.Area==selectedGeo});
	console.log(dataFilter);
	console.log(industryFilter);

	// create new min and max for the y axis
	yClaims.domain([0, d3.max(dataFilter, function(d) { return d.Claims; }) + 5]);

	// create new min and max for the x axis on the industry claims chart
	xIndustry.domain([0, d3.max(industryFilter, function(d) { return d.Claims; }) + 5]);
	console.log(d3.max(industryFilter));

	// give new data to bars for update
	barsClaims
		.data(dataFilter)
		.transition()
		.duration(1000)
		.attr("y", function(d) { return yClaims(d.Claims); })
		.attr("height", function(d) { return height - yClaims(d.Claims); })

	// add an update to the y axis
	svgClaims.select(".y.axis")
		.transition()
		.duration(1000)
		.call(d3.axisLeft(yClaims).ticks(5).tickFormat(d3.format("~s")));

	// give new data to bars for update
	barsIndustry
		.data(industryFilter)
		.transition()
		.duration(1000)
		.attr("x", xIndustry(0) )
	    .attr("y", function(d) { return yIndustry(d.Ind); })
	    .attr("width", function(d) { return xIndustry(d.Claims); })
	    .attr("height", yIndustry.bandwidth() )

	// add an update to the y axis
	svgIndustry.select(".x.axis")
		.transition()
		.duration(1000)
		.call(d3.axisBottom(xIndustry).tickFormat(d3.format("~s")));

	$('#geo').text(selectedGeo);
	$('#kpiOne').text(kpiSelect[selectedGeo].FebLaborForce);
    $('#kpiTwo').text(kpiSelect[selectedGeo].CumClaims);
    $('#kpiThree').text(kpiSelect[selectedGeo].PctFebLabor);

}

// function for building a table from a dataset
function buildTable(dataset,selectedGeo) {
	// if Datatable currently exists, then clear and kill it
	if ( $.fn.dataTable.isDataTable('#claimsTable') ) {
		$('#claimsTable').DataTable().destroy();
	}

	dataset = dataset.filter(function(d){return d.Area==selectedGeo})
	// get list of headers
	let str = '<tr>';
	let headers = ['Area', 'Date', 'Claims'];
	headers.forEach(function(header) {
		str += '<th>' + header + '</th>';
	});

	str += '</tr>';
	$('#claimsTable thead').html(str);

	console.log(dataset);

	let arrAll = [];
	dataset.forEach(function(element) {
		// push dates for column headers
		let tempArray = [];
		let area = element.Area;
		let date = element.date;
		let claims = element.Claims.format();
		tempArray.push(area);
		tempArray.push(date);
		tempArray.push(claims);
		arrAll.push(tempArray)
	});

	// build row and send to html table
	arrAll.forEach(function(rowData) {
		let row = document.createElement('tr');
		rowData.forEach(function(cellData) {
			let cell = document.createElement('td');
			cell.appendChild(document.createTextNode(cellData));
			row.appendChild(cell);
		});
		$("#claimsTable tbody").append(row);
	});

	console.log(arrAll);

	// make as a datatable for search, pagination, sort and export
	$('#claimsTable').DataTable({
				"lengthChange" : false,
				"pageLength" : 5,
				"autoWidth" : true,
				"dom" : "Bfrtip",
				"pagingType" : "full",
				"buttons" : [
					{extend: 'csv', exportOptions:{columns:':visible'}}
				],
				"colReorder" : false
			});

}

// function for building the industry table
function buildIndustryTable(dataset,selectedGeo) {
	// if Datatable currently exists, then clear and kill it
	if ( $.fn.dataTable.isDataTable('#industryTable') ) {
		$('#industryTable').DataTable().destroy();
	}

	// filter the dataset
	dataset = dataset.filter(function(d){return d.Area==selectedGeo})
	// get appropriate headers and build in table
	let str = '<tr>';
	let headers = ['Area','Industry','Claims'];
	headers.forEach(function(header) {
		str += '<th>' + header + '</th>';
	});
	str += '</tr>';
	$('#industryTable thead').html(str);

	// restructure data
	let arrAll = [];
	dataset.forEach(function(element) {
		let tempArray = [];
		let area = element.Area;
		let ind = element.Industry;
		let claims = element.Claims.format();
		tempArray.push(area);
		tempArray.push(ind);
		tempArray.push(claims);
		arrAll.push(tempArray);
	});

	console.log(dataset);
	console.log(arrAll);

	// build row and send to html table
	arrAll.forEach(function(rowData) {
		let row = document.createElement('tr');
		rowData.forEach(function(cellData) {
			let cell = document.createElement('td');
			cell.appendChild(document.createTextNode(cellData));
			row.appendChild(cell);
		});
		$("#industryTable tbody").append(row);
	});

	// make as a datatable for search, pagination, sort and export
	$('#industryTable').DataTable({
		"lengthChange" : false,
		"pageLength" : 5,
		"autoWidth" : true,
		"dom" : "Bfrtip",
		"pagingType" : "full",
		"buttons" : [
			{extend: 'csv', exportOptions:{columns:':visible'}}
		],
		"colReorder" : false
	});


}

// function to update the warnsTable
function warnsTable(selectedLevel, selectedGeo) {
	// first kill the existing table if it exists
	if ( $.fn.dataTable.isDataTable('#warnsTable') ) {
		$('#warnsTable').DataTable().destroy();
	}

	$('#warnsTable tbody').empty();

	let data;
	// first filter the data in that global variable from the start, depending on geography selected
	if (selectedLevel == 'County') {
		data = warnData.filter(function(d){ return d.County==selectedGeo });
	} else if (selectedLevel == 'State') {
		data = warnData;
	} else if (selectedLevel == 'MSA') {
		data = warnData.filter(function(d){ return d.MSA==selectedGeo });
	} else if (selectedLevel == 'Regional Commission') {
		data = warnData.filter(function(d){ return d['Regional Commission']==selectedGeo });
	}

	// restructure data
	let arrAll = [];
	data.forEach(function(element) {
		let tempArray = [];
		let date = element.Date;
		let company = element.Company;
		let city = element.City;
		let county = element.County;
		let employees = element.Employees.format();
		tempArray.push(date);
		tempArray.push(company);
		tempArray.push(city);
		tempArray.push(county);
		tempArray.push(employees);
		arrAll.push(tempArray);
	});

	// build row and send to html table
	arrAll.forEach(function(rowData) {
		let row = document.createElement('tr');
		rowData.forEach(function(cellData) {
			let cell = document.createElement('td');
			cell.appendChild(document.createTextNode(cellData));
			row.appendChild(cell);
		});
		$("#warnsTable tbody").append(row);
	});

	// make as a datatable for search, pagination, sort and export
	$('#warnsTable').DataTable({
		"lengthChange" : false,
		"pageLength" : 5,
		"autoWidth" : true,
		"dom" : "Bfrtip",
		"pagingType" : "full",
		"buttons" : [
			{extend: 'csv', exportOptions:{columns:':visible'}}
		],
		"colReorder" : false
	});
}

function geoHighlight(level, option) {
	console.log(option);
	if (level == 'MSA') {
		// hide rc layer
		map.setLayoutProperty('rcLines','visibility','none');
		map.setLayoutProperty('countyLines','visibility','none');
		// filter msa layer
		map.setFilter('msaLines',["match",["get","NAME"],option,true,false]);
		// show msa layer
		map.setLayoutProperty('msaLines','visibility','visible');
	} else if (level == 'Regional Commission') {
		// hide msa layer
		map.setLayoutProperty('msaLines','visibility','none');
		map.setLayoutProperty('countyLines','visibility','none');
		// filter rc layer
		map.setFilter('rcLines',["match",["get","Regional Commission"],option,true,false]);
		// show rc layer
		map.setLayoutProperty('rcLines','visibility','visible');
	} else if (level == 'County') {
		map.setLayoutProperty('msaLines','visibility','none');
		map.setLayoutProperty('rcLines','visibility','none');
		map.setFilter('countyLines',["match",["get","County"],option,true,false]);
		map.setLayoutProperty('countyLines','visibility','visible');
	} else {
		// hide rc and msa layers
		map.setLayoutProperty('msaLines','visibility','none');
		map.setLayoutProperty('rcLines','visibility','none');
		map.setLayoutProperty('countyLines','visibility','none');
	}
}

//populate the geography dropdown based on the level that's been chosen in the level dropdown
$("#level-select").change(function() {
	//remove any existing option from the geography select
	$("#geo-select option").remove();
	// get the value of item selected in level-select
	var _val = this.options[this.selectedIndex].value;
	// go through the geographies object, find the matching value, and create an option for each
	for (var i in geographies[_val]) {
		// create option target
		var op = document.createElement('option');
		// set option value value
		op.value = geographies[_val][i];
		// set the display label
		op.text = geographies[_val][i];
		// append it to geography dropdown
		$('#geo-select').append(op);
	}

	// get the correct selected geography for changing charts, labels, kpis
	let selectedLevel = $('#level-select option:selected').text()
	let selectedOption = $("#geo-select option").first().text();

	update(selectedOption);
	buildTable(claimData,selectedOption);
	buildIndustryTable(industryData,selectedOption);
    geoHighlight(selectedLevel,selectedOption);
    warnsTable(selectedLevel,selectedOption);

});

// when the drop down select is changed, run the update chart function
$("#geo-select").change(function() {
	// recover selected option
	let selectedOption = d3.select(this).property("value")
	let selectedLevel = $('#level-select option:selected').text()
	
	update(selectedOption);
	buildTable(claimData,selectedOption);
	buildIndustryTable(industryData,selectedOption);
	geoHighlight(selectedLevel,selectedOption);
	warnsTable(selectedLevel,selectedOption);

});