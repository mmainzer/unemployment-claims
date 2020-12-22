

$("#styleSelect").change(function() {
	let layer = $(this).val()
	console.log(layer);

	if (layer === "countyFill") {
		map.setLayoutProperty("countyPoints","visibility","none");
		map.setLayoutProperty("countyFill","visibility","visible");
	} else {
		map.setLayoutProperty("countyFill","visibility","none");
		map.setLayoutProperty("countyPoints","visibility","visible");
	}

});

// // function for building the industry table
// function buildIndustryTable(dataset,selectedGeo) {
// 	// if Datatable currently exists, then clear and kill it
// 	if ( $.fn.dataTable.isDataTable('#industryTable') ) {
// 		$('#industryTable').DataTable().destroy();
// 	}

// 	// filter the dataset
// 	dataset = dataset.filter(function(d){return d.Area==selectedGeo})
// 	// get appropriate headers and build in table
// 	let str = '<tr>';
// 	let headers = ['Area','Industry','Claims'];
// 	headers.forEach(function(header) {
// 		str += '<th>' + header + '</th>';
// 	});
// 	str += '</tr>';
// 	$('#industryTable thead').html(str);

// 	// restructure data
// 	let arrAll = [];
// 	dataset.forEach(function(element) {
// 		let tempArray = [];
// 		let area = element.Area;
// 		let ind = element.Industry;
// 		let claims = element.Claims.format();
// 		tempArray.push(area);
// 		tempArray.push(ind);
// 		tempArray.push(claims);
// 		arrAll.push(tempArray);
// 	});

// 	console.log(dataset);
// 	console.log(arrAll);

// 	// build row and send to html table
// 	arrAll.forEach(function(rowData) {
// 		let row = document.createElement('tr');
// 		rowData.forEach(function(cellData) {
// 			let cell = document.createElement('td');
// 			cell.appendChild(document.createTextNode(cellData));
// 			row.appendChild(cell);
// 		});
// 		$("#industryTable tbody").append(row);
// 	});

// 	// make as a datatable for search, pagination, sort and export
// 	$('#industryTable').DataTable({
// 		"lengthChange" : false,
// 		"pageLength" : 5,
// 		"autoWidth" : true,
// 		"dom" : "Bfrtip",
// 		"pagingType" : "full",
// 		"buttons" : [
// 			{extend: 'csv', exportOptions:{columns:':visible'}}
// 		],
// 		"colReorder" : false
// 	});


// }

//populate the geography dropdown based on the level that's been chosen in the level dropdown
$("#levelSelect").change(function() {
	//remove any existing option from the geography select
	$("#geoSelect option").remove();
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
		$('#geoSelect').append(op);
	}

	// get the correct selected geography for changing charts, labels, kpis
	selectedLevel = [ $('#levelSelect option:selected').text() ];
	selectedArea = [ $("#geoSelect option").first().text() ];
	console.log(selectedLevel);
	console.log(selectedArea);

	//get the new bounding box
	bbox = selectedArea.map(id => dataObj[selectedLevel].find(({ area }) => area === id).bbox);
	bbox = bbox[0];

	update(selectedArea[0]);
	buildTable(claimData,selectedArea[0]);
	buildIndustryTable(industryData,selectedArea[0]);
	flyToBounds(bbox);

});

// when the drop down select is changed, run the update chart function
$("#geoSelect").change(function() {
	// recover selected option
	selectedLevel = [ $('#levelSelect option:selected').text() ];
	selectedArea = [ $("#geoSelect option:selected").text() ];
	console.log(selectedLevel);
	console.log(selectedArea);

	bbox = selectedArea.map(id => dataObj[selectedLevel].find(({ area }) => area === id).bbox);
	bbox = bbox[0];
	
	update(selectedArea[0]);
	buildTable(claimData,selectedArea[0]);
	buildIndustryTable(industryData,selectedArea[0]);
	flyToBounds(bbox);

});

$("#downloadAll").click( function(e) {
	console.log("Download it!");
	// data = "https://raw.githubusercontent.com/mmainzer/unemployment-claims/main/data/countyMonthlyClaims.csv";
	e.preventDefault();
	window.location.href = "https://raw.githubusercontent.com/mmainzer/unemployment-claims/main/data/countyMonthlyClaims.csv";
});