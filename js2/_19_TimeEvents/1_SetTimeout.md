### `setTimeout(func,delay,params,...)`
* Calls a function or executes a code snippet after a specified delay.
  
```javascript
setTimeout(function(){
	console.log('Hello World');
}, 2000)
```
  
* `setTimeout()` returns a numerical ID:
  
```javascript
var timeoutID = setTimeout(function(){
	console.log('Hello World');
}, 2000);

console.log(timeoutID); // => 38
```
  
* `setTimeout(func,delay,params,...)` takes the following arguments:
  * `func`: is the function to execute after the delay
  * `delay`: is the number of milliseconds to delay before executing the function (defaults to 0).
  * `params`: are optional parameters that will be passed as arguments to the function specified by `func`
  
```javascript
var timeoutID;

timeoutID = setTimeout(function(fname,lname){
	alert(fname + ' ' + lname + ', you could meet singles in your area...');
},1000,'Bob', 'Dobbs');
```
  
#### Continue to [2 - `setInterval()`](2_SetInterval.md)