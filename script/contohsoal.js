window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
    {
	  axisY: {	
	  tickPlacement: "inside",
	  tickLength: 200,
	  labelPlacement: "inside", 
	   
			interval: 2
		},
		axisX: {
			interval: 1,
			gridThickness: 1
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