### `getContext()`
* canvas is initially blank, in order to display something, a script first needs to access the rendering context to draw on it.
  
* The method `getContext()` is used to obtain the rendering context and its drawing functions.
  
* `getContext(d)` takes one parameter, the type of context. For 2D graphics, specify '2d'. This will return a `CanvasRenderingContext2D`
  
```html
<canvas id="draw" width="200" height="200"></canvas>

<script>
	var canvas = document.getElementById('draw');
	var ctx = canvas.getContext('2d');
</script>
```
  
* A Canvas can be styled to have a border:
  
```html
<style>
	canvas {
		border:1px solid black;
	}
</style>

<canvas id="draw" width="200" height="200"></canvas>

<script>
	var canvas = document.getElementById('draw');
	var ctx = canvas.getContext('2d');
</script>
```
  
#### Continue to [3 - Rectangle](3_Rect.md)