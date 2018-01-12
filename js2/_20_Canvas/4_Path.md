### Path
* Path allows you to draw and fill shapes.
  
* Creating a path is a four step process:
  1. Create a path
  2. Use drawing commands to draw the path
  3. Close the path
  4. Stroke or fill to render the path
  
* Path functions include:
  
* `Context.beginPath()`: creates the path
  
* `Context.moveTo(x,y)`: position the cursor
  
* `Context.lineTo(x,y)`: draw from the position to next position
  
* `Context.arc(x,y,radius,startAngle,endAngle,anticlockwise)`: Draws an arc which is centered at (x, y) position with radius r starting at startAngle and ending at endAngle going in the given direction indicated by anticlockwise (defaulting to clockwise).
  
* `Context.arcTo(x1,y1,x2,y2,radius)`: Draws an arc with the given control points and radius, connected to the previous point by a straight line.
  
* `Context.stroke()`: Actually draw the lines
  
* `Context.fill()`: Fill in the shape
  
* Here is a basic example of how you can draw with these:
  
```html
<style>
	canvas {
		border:1px solid black;
	}
</style>

<canvas id="draw" width="200" height="200"></canvas>

<script>
	addEventListener('load', function(e){
		draw();
	});


	function draw() {
		var canvas = document.getElementById('draw');
		var ctx = canvas.getContext('2d');

		// Draw a triangle
		ctx.beginPath();
		ctx.moveTo(150,150);
		ctx.lineTo(150,75);
		ctx.lineTo(175,75);
		ctx.lineTo(150,150);
		ctx.stroke();
		ctx.closePath();

		// Draw a circle
		ctx.beginPath();
		ctx.arc(50,50,40,0,Math.PI*2,true);
		ctx.fill();
		ctx.closePath();
	}
</script>
```
  
#### Continue to [5 - Next Steps](5_NextSteps.md)