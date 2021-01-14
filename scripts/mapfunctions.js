			//SVG detection of multiple text elements within the same tile
			function detectMultipleLabels()
			{
				var allGs = document.getElementsByTagName('g');
				for (j = 0; j < allGs.length; j++) {
					if (allGs[j].childNodes.length > 2){
						console.log(allGs[j].childNodes[1].textContent + ' exists in the same tile as ' + allGs[j].childNodes[2].textContent);
					};
				}
			}
			
			function detectOrphanedLabels()
			{
				var allCs = document.getElementsByClassName('amcharts-map-image-container');
				for (j = 0; j < allCs.length; j++) {
				  if (allCs[j].childNodes.length > 1){
						console.log(allCs[j].childNodes[1].textContent + ' is orphaned');
					} else {
						console.log('no orphaned labels detected');
					}
				  };
				//for (j = 0; j < allCs.length; j++) {
				//  if (allCs[j].childNodes.length == 1){
				//	console.log(allCs[j].childNodes[1]);
				//  };
				//}
			}

			function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
			var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

			return {
				x: centerX + (radius * Math.cos(angleInRadians)),
				y: centerY + (radius * Math.sin(angleInRadians))
			};
			}

			function pathToArc(x, y, radius, startAngle, endAngle){

				var start = polarToCartesian(x, y, radius, endAngle);
				var end = polarToCartesian(x, y, radius, startAngle);

				var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

				var d = [
					"M", start.x, start.y, 
					"A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
				].join(" ");

				return d;
			}

			function changeToCircles()
			{
				var hexes = document.getElementsByTagName("path");
					//update the path parameters to be a circle, with a radious of 3
					for (var i = 0; i < hexes.length; i++) {
						//check if the path also has a class "amcharts-map-image"
						if (hexes.item(i).classList.contains("amcharts-map-image")) {
							hexes[i].setAttribute("d", pathToArc(0,0, 3, 0, 359));
						}
					}

					//update the existing text labels to better fit inside
					var el1 = document.querySelectorAll('text');
					for (var j = 0; j < el1.length; j++) {
						el1.item(j).setAttribute("transform", "matrix(1, 0, 0, 0.5, 0,1)");
					}
			}