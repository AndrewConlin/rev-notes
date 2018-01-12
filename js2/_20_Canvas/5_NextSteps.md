### Next Steps
* The [W3C Game Tutorial][w3c] does an excellent job illustrating how canvas can be used in a game context. If you wish to pursue a game that requires movement or collision detection, I strongly recommend this resources.
  
* Additionally, the [MDN Canvas Tutorial][mdntut] walks through additional functionality and deep dives into each property and method of canvas including Bezier Curves and some advanced styling.
  
#### Work with Objects
* To detect collision and track progression you will need to hold the state and position of objects, redrawing them on some interval.
  
* Below is an example of how to make a rectangle move accross a canvas:
  
```html
<!doctype html>
<html>
<head>
	
</head>
<body>
<style>
	canvas {
		border:1px solid black;
	}
</style>

<canvas id="draw" width="200" height="200"></canvas>

<script>
	addEventListener('load', function(e){
		// create an interval, call 'draw' every 100 ms
		setInterval(draw,100);

	});

	// create a new component
	var r = new Component(50,50,0,0);

	function draw() {
		var canvas = document.getElementById('draw');
		clear(canvas);
		var ctx = canvas.getContext('2d');

		// use the components current values to draw the rectangle
		ctx.fillRect(r.x,r.y,r.width,r.height);

		// update the rectangles positions
		r.newPos();
	}

	// create a Component constructor
	function Component(width,height,x,y) {
		this.width = width;
		this.height = height;
		this.x = x;
		this.y = y;

		this.speedX = 1;
		this.speedY = 1;

		this.newPos = function() {
			this.x += this.speedX;
			this.y += this.speedY;
		}

	}

	// create a function to clear the canvas (so that it can update)
	function clear(canvas) {
		// draw a transparent rectangle over the entire area of the canvas
		canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height);
	}
</script>
</body>
</html>
```
  
* Once you have an object moving, you need to detect if it collides with another object. Do this by using the dimensions of the objects and comparing their x,y positions to see if there is overlap:
  
```html
<!doctype html>
<html>
<head>
	
</head>
<body>
<style>
	canvas {
		border:1px solid black;
	}
</style>

<canvas id="draw" width="200" height="200"></canvas>

<script>
	var intervalID;

	addEventListener('load', function(e){
		// assign the interval to an id
		intervalID = setInterval(draw,100);

	});

	var r = new Component(50,50,0,0);
	// create a static object
	var staticObj = new Component(50,50,150,150);

	function draw() {
		var canvas = document.getElementById('draw');
		clear(canvas);
		var ctx = canvas.getContext('2d');

		// redraw the static object
		ctx.fillRect(staticObj.x,staticObj.y,staticObj.width,staticObj.height);

		ctx.fillRect(r.x,r.y,r.width,r.height);

		// check for collision
		if (r.collide(staticObj)) {
			// remove the interval (stop movement) if collision
			clearInterval(intervalID);
		}

		r.newPos();
	}


	function Component(width,height,x,y) {
		this.width = width;
		this.height = height;
		this.x = x;
		this.y = y;

		this.speedX = 1;
		this.speedY = 1;

		this.newPos = function() {
			this.x += this.speedX;
			this.y += this.speedY;
		}

		// create method that compares values to determine if collision has occured
		this.collide = function(obj) {
			var myLeft = this.x;
			var myRight = this.x + this.width;
			var myTop = this.y;
			var myBottom = this.y + this.height;

			var otherLeft = obj.x;
			var otherRight = obj.x + obj.width;
			var otherTop = obj.y;
			var otherBottom = obj.y + obj.height;

			var crash = true;

			if (
					(myBottom < otherTop) ||
					(myTop > otherBottom) ||
					(myRight < otherLeft) ||
					(myLeft > otherRight)
				) {
				crash = false;
			}
			return crash;
		}

	}

	function clear(canvas) {
		canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height);
	}
</script>
</body>
</html>
```
  

#### Continue to JS Game [6 - JS Game](6_JSGame.md)

[w3c]:http://www.w3schools.com/games/default.asp
[mdntut]:https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage
