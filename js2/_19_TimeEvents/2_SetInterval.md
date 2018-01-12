### `setInterval(func,delay,param1,...)`
* Repeatedly calls a function or executes a code snippet, with a fixed time delay between each call. Returns an intervalID.
  
```javascript
var intervalID;

intervalID = setInterval(function(){
	console.log('Hello world!');
},500);
```
  
* `setInterval()` returns a numerical ID:
  
```javascript
var intervalID = setInterval(function(){
	console.log('Hello World');
}, 2000);

console.log(intervalID); // => 38
```
  
* `setInterval(func,delay,params,...)` takes the following arguments:
  * `func`: is the function to execute every interval
  * `delay`: is the number of milliseconds to wait between executions of the function (defaults to 0).
  * `params`: are optional parameters that will be passed as arguments to the function specified by `func`

```javascript
var intervalID = setInterval(function(product, price){
	console.log('Buy an amazing ' + product + ' for just ' + price);
}, 2000, "Tiny Dragon", "$2,499.99");

// Buy an amazing Tiny Dragon for just $2,499.99
```
  
#### Continue to [3 - Clear Intervals and Timeouts](3_Clear.md)