### Rectangles
* A benefit of canvas is that it provides an x/y coordinate grid for positioning drawn elements.
  
![Canvas Grid](../imgs/Canvas_default_grid.png)
  
* `fillRect(x,y,width,height)` allows canvas to draw filled in rectangles:
  
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

		// draw a rectangle at x=25, y=25 that is 100px by 100px
		ctx.fillRect(25,25,100,100);
	}
</script>
```
  
* Additional functions involving rectangles are:
  * `strokeRect(x,y,width,height)`
    * draw a rectangular outline (empty rectangle)
  * `clearRect(x,y,width,height)`
    * create a clear rectanglur space that is fully transparent
  
  
#### Continue to [4 - Path](4_Path.md)
