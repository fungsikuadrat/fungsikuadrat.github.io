window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
    {
	  axisY: {	
	  tickPlacement: "inside",
    tickLength: 75,
    labelFontWeight: "bold",
    labelFontSize: 15,
	  labelPlacement: "inside", 
			interval: 2
		},
		axisX: {
      tickPlacement: "inside",
	  tickLength: 15,
    labelPlacement: "inside", 
    labelFontWeight: "bold",
    labelFontSize: 15,
			interval: 1,
      gridThickness: 1,
		},
      data: [
      {
        markerType: "circle",  //"circle", "square", "cross", "none"
        type: "spline",
        dataPoints: [

       { x: -2, y: 12 },
        { x: -1, y: 4},
        { x: 0, y: 0 },
		{ x: 0.5, y: -0.5 },
        { x: 1, y: 0 },
        { x: 2, y: 4 },
        { x: 3, y: 12 }
        ]
      }
      ]
    });

    chart.render();
  }