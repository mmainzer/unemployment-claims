// set the dimensions and margins for the chart
let margin = {top: 10, right: 30, bottom: 30, left: 60};
let height = $(window).height() * .33;
let indMargin = {top: 10, right: 20, bottom: 50, left: 125};
let indHeight = $(window).height() * .5;

width = width - margin.left - margin.right,
height = height - margin.top - margin.bottom;

indWidth = indWidth - indMargin.left - indMargin.right,
indHeight = indHeight - indMargin.top - indMargin.bottom;

// append the svg object for cases chart
const svgClaims = d3.select("#claimsBar")
					  .append("svg")
					    .attr("width", width + margin.left + margin.right)
					    .attr("height", height + margin.top + margin.bottom)
					  .append("g")
					    .attr("transform",
					          "translate(" + margin.left + "," + margin.top + ")");

// append the svg object for cases chart
const svgIndustry = d3.select("#industryBar")
						  .append("svg")
						    .attr("width", indWidth + indMargin.left + indMargin.right)
						    .attr("height", indHeight + indMargin.top + indMargin.bottom)
						  .append("g")
						    .attr("transform",
						          "translate(" + indMargin.left + "," + indMargin.top + ")");


// get data and build first bar chart
d3.csv('https://raw.githubusercontent.com/mmainzer/unemployment-claims/main/data/uiClaims.csv', d3.autoType)
	.then(function(data) {
		
		claimData = data;
		// list of areas to filter by
		const areas = d3.map(data, function(d){return(d.Area)}).keys()

		buildTable(claimData,claimData[0].Area);

		// add x axis --> it is a date format
		let x = d3.scaleBand()
					.range([ 0, width ])
					.domain(data.map(function(d) { return d.date; }))
					.padding(0.2);

		// let xAxis = d3.axisBottom(x).tickValues(x.domain());
		xAxis = d3.axisBottom(x).tickValues(x.domain().filter((d,i)=>{return!(i%5)}));

		svgClaims.append("g")
					.attr( "transform", "translate(0," + height + ")" )
					.call(xAxis);

		// add y axis for claims
		yClaims = d3.scaleLinear().range([height, 0]);
		yClaims.domain([0, d3.max(data, function(d) { return d.Claims; }) + 5]);


		svgClaims.append("g")
					.attr("class","y axis")
					.call(d3.axisLeft(yClaims).ticks(5).tickFormat(d3.format("~s")));


		// create the bar charts
		barsClaims = svgClaims.selectAll("barClaims")
							.data(data.filter(function(d){return d.Area==areas[0]}))
							.enter()
							.append("rect")
								.attr("value", (d) => d.Claims)
								.attr("class", (d) => d.Area)
								.attr("period", (d) => d.date)
								.attr("x", function(d) { return x(d.date); })
							    .attr("y", function(d) { return yClaims(d.Claims); })
							    .attr("width", x.bandwidth())
							    .attr("height", function(d) { return height - yClaims(d.Claims); })
							    .attr("fill", "#003a5d")
							    .attr("border-color", "#003a5d")


});

// for industry bar chart
d3.csv('https://raw.githubusercontent.com/mmainzer/unemployment-claims/main/data/industryClaims.csv', d3.autoType)
	.then(function(data) {
		industryData = data;
		// list of areas to filter by
		const areas = d3.map(industryData, function(d){return(d.Area)}).keys()

		console.log(industryData);
		buildIndustryTable(industryData,industryData[0].Area);

		// add x axis for claims
		xIndustry = d3.scaleLinear()
							.domain([0, d3.max(data, function(d) { return d.Claims; }) + 5])
							.range([0,indWidth]);
		
		svgIndustry.append("g")
					.attr("transform", "translate(0," + indHeight + ")")
					.attr("class","x axis")
					.call(d3.axisBottom(xIndustry).tickFormat(d3.format("~s")))
					.selectAll(".tick text")
						.attr("transform", "translate(-10,0)rotate(-45)")
	      				.style("text-anchor", "end");
				

		// add y axis for industry labels
		yIndustry = d3.scaleBand()
						    .range([ 0, indHeight ])
						    .domain(industryData.map(function(d) { return d.Ind; }))
						    .padding(.1);
		
		svgIndustry.append("g")
		    		.call(d3.axisLeft(yIndustry))


		// create the bar charts
		barsIndustry = svgIndustry.selectAll("barsIndustries")
							.data(industryData.filter(function(d){return d.Area==areas[0]}))
							.enter()
							.append("rect")
								.attr("class", "bar claims")
								.attr("x", xIndustry(0) )
							    .attr("y", function(d) { return yIndustry(d.Ind); })
							    .attr("width", function(d) { return xIndustry(d.Claims); })
							    .attr("height", yIndustry.bandwidth() )
							    .attr("fill", "#003a5d")
							    .attr("border-color", "#003a5d")

});

d3.csv('https://raw.githubusercontent.com/mmainzer/covid-recovery/master/data/app-data/warns.csv', d3.autoType)
	.then(function(data){
		
		warnData = data;

		// get appropriate headers and build in table
		let str = '<tr>';
		let headers = ['Date','Company','City','County','Employees Impacted'];
		headers.forEach(function(header) {
			str += '<th>' + header + '</th>';
		});
		str += '</tr>';
		$('#warnsTable thead').html(str);

		// restructure data
		let arrAll = [];
		warnData.forEach(function(element) {
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

});

// function for number formatting
Number.prototype.format = function(n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
}
