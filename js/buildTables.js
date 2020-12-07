// function for building a table from a dataset
const buildTable = (dataset,selectedArea) => {
	// if Datatable currently exists, then clear and kill it
	if ( $.fn.dataTable.isDataTable('#claimsTable') ) {
		$('#claimsTable').DataTable().destroy();
	}

	$("#claimsTable tbody").empty();

	dataset = dataset.filter(function(d){return d.Area==selectedArea})
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
const buildIndustryTable = (dataset,selectedArea) => {
	// if Datatable currently exists, then kill and clear it
	if ( $.fn.dataTable.isDataTable('#industryTable') ) {
		$('#industryTable').DataTable().destroy();
	}

	$("#industryTable tbody").empty();
	console.log("table is emptied");

	// filter the dataset
	dataset = dataset.filter(function(d){return d.Area==selectedArea})
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