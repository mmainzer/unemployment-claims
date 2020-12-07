// function to update charts when new geographies are selected

// function to update chart on geography select
const update = (selectedGeo) => {
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

	totalClaims = [selectedGeo].map(id => dataObj[selectedLevel].find(({ area }) => area === id).totalClaims);
	console.log(totalClaims);
	$('#totalClaims').text(totalClaims);

}