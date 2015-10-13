d3.json('SHA-July2015-sample-data.json', function(data) {
  nv.addGraph(function() {
    var chart = nv.models.multiBarHorizontalChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
        .margin({top: 30, right: 20, bottom: 50, left: 175})
        .showValues(true)    // show bar value next to each bar
        .tooltips(true)    // show tooltips on hover
        .duration(350)
        .showControls(true)   // allow user to switch between "Grouped" and "Stacked" mode
        // .showControls(false)
        .showLegend(true)   // allow user to toggle series 1 and 2 on/off 
        // .showLegend(false);
        // .stacked(true);    // default stacked        

    chart.yAxis
        .tickFormat(d3.format(',.2f'));

    d3.select('#barChart svg')
        .datum(data)
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
  });
});